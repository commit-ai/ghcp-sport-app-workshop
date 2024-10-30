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

  console.log(PressConferences);
  return (
    <div className="p-4 h-full">
      <h1 className="text-2xl font-bold">Press Conferences</h1>
      {/* display the press conferences, each one of them in a card with properties of title, date, time, location, transcription */}
      <div className="grid grid-cols-2 gap-4">
        {PressConferences.map((conference: any) => (
          <Card key={conference.id}>
            <CardHeader>
              <CardTitle>{conference.title}</CardTitle>
              <CardDescription>Date: {conference.date}</CardDescription>
              <CardDescription>Time: {conference.time}</CardDescription>
              <CardDescription>Location: {conference.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <CardTitle className="pb-3">Transcription</CardTitle>
              <CardDescription>{conference.transcription}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
