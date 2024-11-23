import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Replace with your external API URL
    const externalApiUrl = 'https://jsonplaceholder.typicode.com/posts';
    
    const response = await fetch(externalApiUrl);
    
    if (!response.ok) {
      throw new Error('Failed to fetch data from the external API.');
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data.' }, { status: 500 });
  }
}
