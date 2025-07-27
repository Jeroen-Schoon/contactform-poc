type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

function validateInput(data: any): data is ContactFormData {
  return (
    typeof data.firstName === 'string' &&
    typeof data.lastName === 'string' &&
    typeof data.email === 'string' &&
    typeof data.message === 'string'
  );
}

export const handler = async (event: any) => {
  console.log("Full event:", JSON.stringify(event, null, 2));

  // Handle CORS preflight
  if (event.requestContext?.http?.method === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST",
      },
      body: '',
    };
  }

  const isBase64 = event.isBase64Encoded;
  const rawBody = event.body;

  if (!rawBody) {
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ error: 'Missing request body' }),
    };
  }

  let parsedBody;
  try {
    const bodyString = isBase64
      ? Buffer.from(rawBody, 'base64').toString('utf-8')
      : rawBody;

    parsedBody = JSON.parse(bodyString);
  } catch (err) {
    console.error("Error parsing body:", err);
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ error: 'Invalid JSON body' }),
    };
  }

  const { firstName, lastName, email, message } = parsedBody || {};
  if (
    !firstName || !lastName || !email || !message ||
    typeof firstName !== 'string' ||
    typeof lastName !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string'
  ) {
    return {
      statusCode: 422,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ error: 'Invalid input' }),
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    body: JSON.stringify({ success: true, message: 'Thank you for contacting us!' }),
  };
};
