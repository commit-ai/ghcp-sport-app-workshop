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

1. Imagine you are a new developer that hired to developer team, you need to explore the project and understand the main components

   - Open a GitHub platform and access your repository
   - Press on GitHub Copilot icon to open a chat
   - Explore the app by asking a questions like:
      - Can you tell me about this repository? 
      - What framework the repository using? 
      - Where the api routes handled out ?  
      - Which API routes the repository includes ?

2. Lets Create a Player info feature, Under lib folder there is a a file called player-info.ts with nba player stats, you need to build an api route and react component based on player stats using file attach option in the chat, the route already exists under /src/app/api/player-info/route.ts
   - In github copilot chat press the attach file and attach the player-info.ts - prompt: `Using the player-info, create a GET request to retrieve the player's id, name, team, weigh, height and position`, insert the content to /src/app/api/player-info/route.ts
   - You can test your api route with GET request: http://localhost:3000/api/player-info
   - Open /app/(dashboard)/player-info/page.tsx
   - Open the chat and prompt: `Using the player-info route (#file:route.ts ), retrieve and display a list of players along with their stats. Use Tailwind CSS classes and ShadCN components to present each player in a separate card, display only the name, team, weight, height and position.`
   - Open the http://localhost:3000/players-info and see the results, refactor the code if needed. 
  
  3. Add A unit test to player info feature, 
