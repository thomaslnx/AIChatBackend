import cors from 'cors'
import express from 'express'

import { createCompletion } from './controllers/chat.completion.controller'
// import readline from 'node:readline' // to use the chatbot cli uncomment this line
// import { openai } from './api'       // to use the chatbot cli uncomment this line


const server = express()
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())
const port = 3001

// ==> to use cli chatbot uncomment the lines below.

// try {
//   /**
//    * CLI that I used to test if the AI API was responding correctly
//    */
//   const cli = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     terminal: false,
//   })

//   cli.prompt()

//   cli.on('line', async (input) => {
//     const aiBot = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo',
//       messages: [
//         {
//           'role': 'user',
//           'content': input
//         },
//       ]
//     })
//     console.log('>> Bot: ', aiBot.choices[0].message.content)
//     cli.prompt()
//   })


// } catch (error: any) {
//   if (error.response) {
//     console.log(error.response.status)
//     console.log(error.response.data)
//   } else {
//     console.log(error.message)
//   }
// }

server.post('/chatbot', createCompletion)

server.listen(port, () => console.log(`Server up and running at port ${port}`))