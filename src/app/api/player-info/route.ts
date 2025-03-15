import { NextRequest, NextResponse } from "next/server";
import { playerInfo } from "@/lib/player-info";

export async function GET(request: NextRequest) {
  const filteredPlayers = playerInfo.map(({ id, name, team, weight, height, position }) => ({
    id,
    name,
    team,
    weight,
    height,
    position,
  }));

  return NextResponse.json(filteredPlayers);
}
