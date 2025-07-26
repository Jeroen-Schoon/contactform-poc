import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

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

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing request body' }),
    };
  }

  let data: any;
  try {
    data = JSON.parse(event.body);
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON' }),
    };
  }

  if (!validateInput(data)) {
    return {
      statusCode: 422,
      body: JSON.stringify({ error: 'Invalid input format' }),
    };
  }

  // Simuleer verzenden (bv. via e-mailservice)
  console.log('Contactform received:', data);

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, message: 'Thank you for contacting us!' }),
  };
};