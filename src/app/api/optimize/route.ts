import { NextRequest, NextResponse } from "next/server";

/**
 * Handles the GET request to optimize and sort an array of random numbers.
 *
 * This function generates an array of 100,000 random numbers, sorts the array using
 * the built-in sort method, and returns the execution time of the sorting operation
 * as a JSON response.
 *
 * @param {NextRequest} request - The incoming request object.
 * @returns {Promise<NextResponse>} - A promise that resolves to a JSON response containing
 * the execution time of the sorting operation in seconds, or an error message if the
 * operation fails.
 */
export async function GET(request: NextRequest) {
  try {
    const startTime = Date.now();

    // Generate an array of 100,000 random numbers
    const arr = Array.from({ length: 100000 }, () =>
      Math.floor(Math.random() * 100000)
    );

    // Use the built-in sort method for better performance
    arr.sort((a, b) => a - b);

    const endTime = Date.now();
    const executionTime = (endTime - startTime) / 1000; // Time in seconds

    // Return the execution time as a JSON response
    return NextResponse.json(executionTime);
  } catch (error) {
    console.error("Error during sorting operation:", error);
    return NextResponse.json({ error: "An error occurred during the sorting operation. Please try again later." }, { status: 500 });
  }
}
