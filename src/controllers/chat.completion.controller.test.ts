import { afterAll, afterEach, beforeAll, expect, describe } from 'vitest'
import { mockServer } from '../mocks/server'

describe('testing API  successful connection', async () => {
  beforeAll(() => mockServer.listen())

  afterEach(() => mockServer.resetHandlers())

  afterAll(() => mockServer.close())

  it('should be able to connect with success into AI API', async () => {
    const apiFetch = await fetch('http://localhost:3001/chatbot', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: "Ask made to AI API by the user"
    })

    const { status: responseStatus } = apiFetch
    expect(responseStatus).toBe(200)
  })

  it('should receive a response for the user ask from AI API with its correct role', async() => {
    const apiFetch = await fetch('http://localhost:3001/chatbot', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: "Ask made to AI API by the user"
    })

    const { role, content } = await apiFetch.json()

    expectTypeOf<string>(content).toEqualTypeOf<string>
    expect(role).toEqual('assistant')
  })
})
