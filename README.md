# Ai Chatbot Job Challenge

This project aims to demonstrate my skills as a full-stack developer in an AI-powered chatbot for an open role for a company that uses AI to create awesome solutions.

## Tech Stack
* [Technologies](#technologies)
* [In Action App](#in-action-app)
* [Unit Tests](#unit-tests)
* [Separation of Concerns](#separation-concerns)
* [How to Run the Project](#run-project)
* [Last Words](#last-words)

## Technologies
This project uses:
* NodeJS: v18.16.0
* TypeScript: 5.2.2 version
* Openai API: 4.5.0 version
* Express: 4.18.2 version
* Vitest: 0.34.4 version
* MSW: 1.3.0 version
* Readline Node module
* Unit Tests

## In Action App

Some context about this functionality: during my tests using the openAI API I had to have a way to test the communication between my application and the API and test its responses, so I decided to implement a simple CLI at the terminal to make this integration before connecting the front to the backend. To achieve this I use the native node readline to capture the input stream from the terminal and put the response from the AI API to the terminal output too.
<video src="./readme_assets/chatbot-cli.mp4" autostart loop title="cli-example" height="600" width="900" controls> </video>

**How to Use the CLI** <br>
Just uncomment the following lines:
*line 5 and 6* <br>
```
import readline from 'node:readline'
import { openai } from './api'
```

and *17 to 51* 

```
try {
/**
  * CLI that I used to test if the AI API was responding correctly
*/
  const cli = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
  })

  cli.prompt()

  cli.on('line', async (input) => {
    const aiBot = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          'role': 'user',
          'content': input
        },
      ]
    })
    console.log('>> Bot: ', aiBot.choices[0].message.content)
    cli.prompt()
  })


} catch (error: any) {
  if (error.response) {
    console.log(error.response.status)
    console.log(error.response.data)
  } else {
    console.log(error.message)
  }
}
```


from the aiServer.ts file

## Unit Tests
Following the good practices of development of software, in this project was applied unit test to test if some behavior is according with the intent and to ensure in future features adding not break anything already implemented. To achieve this as the unit test must no rely on nothing external to the application I used a mock concept to fake simulate a API requests, and for this I used the node Mock Service Worker-MSW module alongside with Vitest Unit Test Framework.<br>

I created too a file with all mock config needed by the testing framework.

**The Motivation** <br>
In my personal case I have a little bit more contact with Jest Test Framework, and based in what I have seen the vitest has gained notoriety on the scenario I decided to test it this time and with this I have contact with another tool commonly used at some big companies.

<video src="./readme_assets/unit-testing.mp4" autostart loop title="testing" height="600" width="900" controls></video>

## Separation of Concerns<br>

It's a good practice to separate the concerns between the application's components. Thinking about the I implemented all the AI API fetch logic in it's own controller, leaving the server this way just to run the application. In larger applications is a good practice too separate the application routes in it's own file too, but in this case how the application have just one route I leave it in the server file.<br>

It's worth mention that how to make the connection with the AI API I need provide my Open AI personal account credentials, I isolate them in a separated ```.env``` file and add a ```.env.example``` file to be send to the remote repo and replicated with appropriated user credentials

## How to Run the Project
To run the project after make the github clone, access the project folder and inside type:

```npm install``` or ```yarn``` to install all project's needed dependencies.

Next create on the root of the project a ```.env``` file, then copy and past to it the ```.env.example``` file content and fill up with the user correct OpenAI credentials to correct use. The credentials could be get on companies link: [OpenAI](https://platform.openai.com/)

then type<br>
```npm run dev:node```

## Last Words

I just wanna say tank you for the opportunity to show my skills to the company, for the interview process, one of the bests that I have participating lately very kind and attention people with my person. <br>

I hope you like this project, because I put much effort on it. Was pretty challenge and fun make something using AI and other techs.
