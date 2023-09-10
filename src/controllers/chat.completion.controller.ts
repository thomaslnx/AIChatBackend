import { Request, Response } from 'express'
import { openai } from '../api.js'

export const createCompletion = async (req: Request, res: Response) => {
  try {
    const { message } = req.body
    const aiBot = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            'role': 'user',
            'content': message
          },
        ]
      })
      const response = {
        messageDate: aiBot.created,
        botAnswer: aiBot.choices[0].message
      }

      return res.json(response)
  } catch (error) {
    console.log('Error: ', error)
  }
}