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
      const response = await fetch('/api/player-info');
      const data = await response.json();
      setPlayers(data);
    };

    fetchPlayers();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {players.map((player) => (
        <Card key={player.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-bold">{player.name}</CardTitle>
            <CardDescription>{player.team}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm"><span className="font-semibold">Position:</span> {player.position}</p>
              <p className="text-sm"><span className="font-semibold">Height:</span> {player.height}</p>
              <p className="text-sm"><span className="font-semibold">Weight:</span> {player.weight}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PlayersInfo;
