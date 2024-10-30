import ConferenceCard from "@/components/conference-card";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function PressConferences() {
  const data = await fetch("http://localhost:3001/api/press-conferences");
  const PressConferences = await data.json();

  //   Create an on summarize function that will be called when the button is clicked and will get the transcription of the press conference and summarize it using an AI service
  //   const onSummarize = () => {
  //     console.log("Summarize");
  //   };

  //   console.log(PressConferences);
  return (
    <div className="p-4 h-full">
      <h1 className="text-2xl font-bold">Press Conferences</h1>
      {/* display the press conferences, each one of them in a card with properties of title, date, time, location, transcription */}
      <div className="grid grid-cols-2 gap-4">
        {PressConferences.map((conference: any) => (
          <ConferenceCard
            key={conference.id}
            title={conference.title}
            date={conference.date}
            time={conference.time}
            location={conference.location}
            transcription={conference.transcription}
          />
        ))}
      </div>
    </div>
  );
}
