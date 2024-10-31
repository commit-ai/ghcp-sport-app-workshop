This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# App Description

Introducing GitHub Copilot for WSC, your dedicated NBA companion! GC brings you live NBA results and a unique feature: concise summaries of press conferences and post-game insights. Stay updated with key takeaways, player quotes, and team strategies, all in one place.

With real-time updates and customizable notifications, GC is perfect for fans who want the latest NBA action and insider perspectives on each game’s impact and team dynamics.

# Instructions

1. **Imagine you are a new developer that hired to developer team, you need to explore the project and understand the main components**

   - Open a GitHub platform and access your repository
   - Press on GitHub Copilot icon to open a chat
   - Explore the app by asking a questions like:
      - Can you tell me about this repository? 
      - What framework the repository using? 
      - Where the api routes handled out ?  
      - Which API routes the repository includes ?
  
2.  **Clone the repository to your local environment**
    - Open the repository in VSCode IDE.
    - Open the terminal -> View -> Terminal.
    - Install the npm packages - in the root app folder run ```npm install``` in the terminal to install all necessary packages
    - Test the app by running ```npm run dev```
  
3. **Role Prompting:**
   GitHub Copilot Chat role prompting is a feature that allows developers to define a specific role for Copilot, guiding it to provide more relevant and context-aware assistance. By setting a role prompt, you outline your development goals, project context, and specific tasks, so Copilot tailors its suggestions, code snippets, and guidance to better match your needs. This makes Copilot’s responses more effective, particularly in complex projects or when working with specialized tools or frameworks.
   - Open GitHub Copilot Chat 
   - Prompt: 
   ```
   You are a developer working on a project using Next.js 14. You should be familiar with modern React practices, Next.js’s routing and app directory structure, API routes, and state management. Your tasks involve building efficient, scalable, and user-friendly applications with a focus on performance and responsiveness.
    Responsibilities:
    - UI Components: Build reusable, accessible, and responsive UI components using the latest Next.js conventions and best practices.
    - API Integration: Set up API routes, handle data fetching with SWR or other libraries, and optimize for performance.
    - Optimized Routing: Implement dynamic and nested routing, leveraging Next.js 14 features for route groups, layouts, and parallel routes.
    - Performance Optimization: Use Next.js optimizations, such as lazy loading and server-side rendering, to ensure fast loading and seamless user experiences.
    - Debugging & Testing: Use GitHub Copilot to generate code suggestions, debug issues, and write tests. Familiarity with testing libraries like Jest and React Testing Library is expected.
    
    Goals with GitHub Copilot Chat:

    - Code Assistance: Use Copilot to suggest improvements, refactor code, and speed up repetitive tasks.
    - Documentation: Generate documentation for components and API routes to ensure maintainability.
    - Error Resolution: Ask Copilot for troubleshooting advice or assistance with specific Next.js 14 features or configurations.
    - Optimization Suggestions: Seek suggestions for optimizing components, reducing bundle size, and improving server and client performance.
    ```

4. **Add Comments to Code:** 
   One of the common frustrations for developers is documenting their code properly, but don’t worry—Copilot is here to help!:
   - Open /src/api/nba-results/route.ts
   - Select the entire function, then press cmd+i on MacOS or ctrl+i on Windows. Next, type /doc.
    > GitHub Copilot will generate a documentation-style function declaration.
   - You can also use Copilot Chat to generate additional documentation. Open GitHub Copilot Chat and enter a prompt: ```Add comments to my code```
   - Add /docs and comments to other api routes

5. **Lets Create a Player info feature, Under lib folder there is a a file called player-info.ts with nba player stats, you need to build an api route and react component based on player stats using file attach option in the chat, the route already exists under /src/app/api/player-info/route.ts**
   - In github copilot chat press the attach file and attach the player-info.ts - prompt: `Using the player-info, create a GET request to retrieve the player's id, name, team, weigh, height and position`, insert the content to /src/app/api/player-info/route.ts
   - You can test your api route with GET request: http://localhost:3000/api/player-info
   - Open /app/(dashboard)/player-info/page.tsx
   - Open the chat and prompt: `Using the player-info route (#file:route.ts ), retrieve and display a list of players along with their stats. Use Tailwind CSS classes and ShadCN components to present each player in a separate card, display only the name, team, weight, height and position.`
   - Open the http://localhost:3000/players-info and see the results, refactor the code if needed. 
  
6. Add A unit test to player info feature, 

7. Add a Press conferences summarization feature using Azure OpenAI GPT-4o model, your goal is to summarize each of the press conferences that located in localhost:3000/press-conferences page.
   - Open /src/app/api/summarize/route.ts file 
   - You have a boilerplate for POST request
     - The request need to receives a transcription from the request
     - use openai sdk with Azure implementation to create a summarization 
     - use github copilot prompt engineering techniques like Input/Output Format -> Error Handling -> Control the Structure of the code in the file declaration - to help copilot to provide a better suggestion
     - in .env.local file we already configured an Azure OpenAI endpoint and the key - use the process.env.NEXT_PUBLIC_AZURE_OPENAI_ENDPOINT for the endpoint, process.env.NEXT_PUBLIC_AZURE_OPENAI_KEY for the KEY, use api version - 2024-10-01-preview, and deployment name: gpt-4o
   - Test the api route with POST request to http://localhost:3000/api/summarize - make sure to path the transcription into the request for test to work
   -  Open GitHub Copilot chat 
      -  prompt: ```#codebase Where is the implementation of the Press Conference Card located in my code?``` the #codebase Searches through the codebase and pulls out relevant information for the query.
      -  Once GitHub Copilot locates the file, click on the file name in the chat to be redirected to it.
      -  The "Summarize with AI" button is already in your code but isn’t functional yet. Your goal is to use Copilot to create a handler function that calls the API route, summarizes the transcript, and displays it at the bottom of the card. As a bonus, try implementing a loading state to disable the button and show a loading indicator while the summary is being generated.
      > You can implement the feature using either chat or inline code.
      - Test the ui feature. 





















