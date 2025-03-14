"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useState } from "react";

const ErrorPageFixing = () => {
  const [playerName, setPlayerName] = useState("");
  const [playerPosition, setPlayerPosition] = useState("");
  const [playerTeam, setPlayerTeam] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch("/api/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: playerName,
        position: playerPosition,
        team: playerTeam,
      }),
    });

    if (!response.ok) {
      console.error("Failed to create player");
    } else {
      console.log("Player created successfully");
    }
  };

  return (
    <Card className="max-w-md mx-auto shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-gray-800">
          Create New NBA Player
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="position"
                className="text-sm font-medium text-gray-700"
              >
                Position:
              </label>
              <input
                type="text"
                id="position"
                value={playerPosition}
                onChange={(e) => setPlayerPosition(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="team"
                className="text-sm font-medium text-gray-700"
              >
                Team:
              </label>
              <input
                type="text"
                id="team"
                value={playerTeam}
                onChange={(e) => setPlayerTeam(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
            <button 
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Create Player
            </button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="text-center text-sm text-gray-600">
        <p>Fill out the form to add a new NBA player.</p>
      </CardFooter>
    </Card>
  );
};

export default ErrorPageFixing;
