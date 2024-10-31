"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface Player {
  id: number;
  name: string;
  team: string;
  weight: string;
  height: string;
  position: string;
}

const PlayersInfo = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch("/api/player-info");
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };
    fetchPlayers();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {players.map((player) => (
        <Card key={player.id}>
          <CardHeader>
            <CardTitle>{player.name}</CardTitle>
            <CardDescription>{player.team}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              <span className="font-semibold">Position:</span> {player.position}
            </p>
            <p>
              <span className="font-semibold">Height:</span> {player.height}
            </p>
            <p>
              <span className="font-semibold">Weight:</span> {player.weight}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PlayersInfo;
