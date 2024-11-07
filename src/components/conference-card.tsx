"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

// craete conference card props
export interface ConferenceCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  transcription: string;
}

const ConferenceCard = ({
  title,
  date,
  time,
  location,
  transcription,
}: ConferenceCardProps) => {
  const [summary, setSummary] = React.useState<string | null>(null);
  //   loading state
  const [loading, setLoading] = React.useState<boolean>(false);

  const onSummarize = async () => {
    setLoading(true);
    console.log("Summarize");
    const response = await fetch("http://localhost:3003/api/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ transcription }),
    });

    const data = await response.json();

    setSummary(data.ai_transcription);
    setLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Date: {date}</CardDescription>
        <CardDescription>Time: {time}</CardDescription>
        <CardDescription>Location: {location}</CardDescription>
      </CardHeader>
      <CardContent>
        <CardTitle className="pb-3">Transcription</CardTitle>
        <CardDescription>{transcription}</CardDescription>
      </CardContent>
      {
        //   if there is a summary,
        //   display the summary in the card content
        summary && (
          <CardContent>
            <CardTitle className="pb-3">Summary with Azure OpenAI</CardTitle>
            <CardDescription>{summary}</CardDescription>
          </CardContent>
        )
      }
      <CardFooter>
        {loading ? (
          <Button variant="default" onClick={onSummarize} disabled>
            Loading...
          </Button>
        ) : (
          <Button variant="default" onClick={onSummarize}>
            Summarize with AI
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ConferenceCard;
