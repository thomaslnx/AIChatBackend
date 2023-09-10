import { rest } from 'msw'

export const handlers = [
  rest.post('http://localhost:3001/chatbot', (req, res, ctx) => {

    return res(
      ctx.status(200),
      ctx.json({
        role: 'assistant',
        content: 'answer from the AI API'
      })
    )
  })
]