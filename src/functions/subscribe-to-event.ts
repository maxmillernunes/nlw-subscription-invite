import { eq } from 'drizzle-orm'
import { db } from '../drizzle/cleint'
import { subscriptions } from '../drizzle/schema/subscriptions'
import { redis } from '../redis/client'

interface SubscribeToEventParams {
  name: string
  email: string
  referrerId?: string | null
}

export async function subscribeToEvent({
  name,
  email,
  referrerId,
}: SubscribeToEventParams) {
  const [subscriber] = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.email, email))

  if (subscriber) {
    return { subscriberId: subscriber.id }
  }

  const [subscription] = await db
    .insert(subscriptions)
    .values({
      name,
      email,
    })
    .returning()

  if (referrerId) {
    await redis.zincrby('referral:ranking', 1, referrerId)
  }

  return { subscriberId: subscription.id }
}
