import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://possible-hagfish-33384.upstash.io',
  token: process.env.REDIS_KEY !,
})


