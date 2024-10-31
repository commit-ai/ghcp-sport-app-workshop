import { playerInfo } from "@/lib/player-info";
import { NextRequest, NextResponse } from "next/server";

// Using the player-info, create a GET request to retrieve the player's id, name, team, weigh, height and position.

export async function GET(request: NextRequest) {
  const players = playerInfo.map((player) => ({
    id: player.id,
    name: player.name,
    team: player.team,
    weight: player.weight,
    height: player.height,
    position: player.position,
  }));

  return NextResponse.json(players);
}
