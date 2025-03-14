import { NextResponse } from 'next/server';
import { playerInfo } from '@/lib/player-info';
import fs from 'fs/promises';
import path from 'path';

// Type definition for the player data
interface PlayerData {
  name: string;
  position: string;
  team: string;
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const data: PlayerData = await request.json();
    
    // Validate required fields
    if (!data.name || !data.position || !data.team) {
      return NextResponse.json({
        error: 'Missing required fields',
        details: 'Name, position, and team are required'
      }, { status: 400 });
    }

    // Create new player object with default values
    const newPlayer = {
      id: playerInfo.length + 1,
      name: data.name,
      team: data.team,
      position: data.position,
      height: "Not specified",
      weight: "Not specified",
      birthDate: "Not specified",
      stats: {
        pointsPerGame: 0,
        assistsPerGame: 0,
        reboundsPerGame: 0,
      },
    };

    // Add the new player to the array
    const updatedPlayers = [...playerInfo, newPlayer];

    // Convert the updated array to a string
    const fileContent = `export const playerInfo = ${JSON.stringify(updatedPlayers, null, 2)};`;

    // Get the absolute path to player-info.ts
    const filePath = path.join(process.cwd(), 'src', 'lib', 'player-info.ts');

    // Write the updated content back to the file
    await fs.writeFile(filePath, fileContent, 'utf-8');

    // Return success response
    return NextResponse.json({
      message: 'Player created successfully',
      player: newPlayer
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating player:', error);
    return NextResponse.json({
      error: 'Failed to create player',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// GET endpoint to retrieve all players
export async function GET() {
  try {
    return NextResponse.json({ players: playerInfo }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      error: 'Failed to fetch players',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}