const fetch = require('node-fetch');

async function testWaitlist() {
  console.log('Sending request...');
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000); // 5 seconds

  try {
    const response = await fetch('http://localhost:3004/api/join-waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'test@example.com',
        phone: '+1234567890',
        company: 'Test Company',
        user_type: 'founder'
      }),
      signal: controller.signal
    });
    clearTimeout(timeout);
    const data = await response.json();
    console.log('API response:', data);
  } catch (err) {
    clearTimeout(timeout);
    console.error('Request failed:', err.message);
  }
}

testWaitlist(); 