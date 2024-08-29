const API_ORIGIN: string =
  // 'https://085c-49-207-207-58.ngrok-free.app';
  'https://fvjh18yaye.execute-api.us-east-1.amazonaws.com/dev';

const fetcher = async <TResponse>(
  path: RequestInfo,
  config?: RequestInit,
  apiOrigin?: string
) => {
  const baseUrl = API_ORIGIN;
  const apiPath = `${apiOrigin ?? baseUrl}${path}`;
  const response = await fetch(apiPath, config);
  const parsedResponse = await response.json();

  if (response.status === 401 || response.status === 404) {
    throw new Error('Unauthorized');
  }

  if (!response.ok) {
    console.log('failed api', parsedResponse);
    throw new Error(JSON.stringify(parsedResponse));
  }

  return parsedResponse as TResponse;
};

export default fetcher;
