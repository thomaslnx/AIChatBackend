import 'dotenv/config'
import OpenAI from 'openai'

export const openai = new OpenAI({
  organization: process.env.ORGANIZATION,
  apiKey: process.env.OPEN_API_KEY,
})
