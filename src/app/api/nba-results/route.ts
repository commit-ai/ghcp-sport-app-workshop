import { NextRequest, NextResponse } from "next/server";

/**
 * Fetches NBA game results from the AllSportsAPI.
 * 
 * @param request - The incoming Next.js API request
 * @returns A Promise that resolves to a Next.js Response object containing:
 *          - On success: JSON response with NBA games data
 *          - On failure: JSON response with error message and 500 status code
 * 
 * @remarks
 * This endpoint makes a GET request to AllSportsAPI with the following parameters:
 * - met: "Fixtures" (type of data to fetch)
 * - APIkey: API key from environment variables
 * - from: Start date for fixtures (2024-10-01)
 * - to: End date for fixtures (2024-10-29)
 * - leagueId: 766 (NBA league identifier)
 * 
 * @example
 * GET /api/nba-results
 */
export async function GET(request: NextRequest) {
  // Base URL for the AllSportsAPI basketball endpoint
  const url = new URL("https://apiv2.allsportsapi.com/basketball/");

  // Define query parameters for the API request
  // TODO: Consider making dates configurable via request parameters
  // WARNING: Ensure NEXT_PUBLIC_NBA_API_KEY is properly set in environment variables
  const params = {
    met: "Fixtures",  // Specifies we want to fetch fixture data
    APIkey: process.env.NEXT_PUBLIC_NBA_API_KEY,  // API authentication key
    from: "2024-10-01",  // Start date for fixture range
    to: "2024-10-29",    // End date for fixture range
    leagueId: 766,       // NBA league identifier in AllSportsAPI
  };

  // Construct the full URL with query parameters
  // Note: 'as any' casting is used due to URLSearchParams expecting string values
  const urlWithParams = `${url}?${new URLSearchParams(
    params as any
  ).toString()}`;

  const response = await fetch(urlWithParams);
  const games = await response.json();

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }

  return NextResponse.json(games);
}
