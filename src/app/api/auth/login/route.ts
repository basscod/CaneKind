import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = "https://cane-crew-server-devops65.replit.app";

export async function POST(request: NextRequest) {
  try {
    // Get the request body
    const body = await request.json();
    
    // Log the request for debugging
    console.log('Login request:', body);
    
    // Forward the request to the actual API
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    // Get response data
    let responseData;
    try {
      responseData = await response.json();
    } catch (e) {
      responseData = await response.text();
    }
    
    // Log the response for debugging
    console.log('API response status:', response.status);
    
    // Return the response with the same status
    return NextResponse.json(
      responseData, 
      { status: response.status }
    );
  } catch (error) {
    console.error('Error in login API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 