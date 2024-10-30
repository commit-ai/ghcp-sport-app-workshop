import { NextRequest, NextResponse } from "next/server";
import { AzureOpenAI } from "openai";

export async function POST(request: NextRequest) {
  const { transcription } = await request.json();

  const client = new AzureOpenAI({
    endpoint: process.env.NEXT_PUBLIC_AZURE_OPENAI_ENDPOINT,
    apiKey: process.env.NEXT_PUBLIC_AZURE_OPENAI_KEY,
    apiVersion: "2024-10-01-preview",
    deployment: "gpt-4o",
  });

  const response = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "You are a press conference summarization bot",
      },
      {
        role: "user",
        content: `Summarize the press conference transcription, ${transcription}`,
      },
    ],
  });

  console.log(response.choices[0].message.content);

  const ai_transcription = response.choices[0].message.content;

  //   console.log(response);

  return NextResponse.json({ ai_transcription });
}
