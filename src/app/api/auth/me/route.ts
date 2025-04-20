import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = "https://cane-crew-server-devops65.replit.app";

export async function GET(request: NextRequest) {
  try {
    // Get the authorization header from the incoming request
    const authHeader = request.headers.get('Authorization');
    
    if (!authHeader) {
      return NextResponse.json(
        { error: 'Authorization header missing' }, 
        { status: 401 }
      );
    }
    
    // Log the request for debugging
    console.log('Me request with auth:', authHeader.substring(0, 15) + '...');
    
    // Forward the request to the actual API
    const response = await fetch(`${API_BASE_URL}/me`, {
      method: 'GET',
      headers: {
        'Authorization': authHeader
      }
    });
    
    // Get response data
    let responseData;
    try {
      responseData = await response.json();
    } catch (e) {
      responseData = await response.text();
    }
    
    // Log the response for debugging
    console.log('Me API response status:', response.status);
    
    // Return the response with the same status
    return NextResponse.json(
      responseData, 
      { status: response.status }
    );
  } catch (error) {
    console.error('Error in me API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 