type HttpMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

if (!baseUrl) {
  throw new Error('⚠️ The variable of environment NEXT_PUBLIC_API_URL is required ⚠️');
}

export const fetchWithoutToken = async <T>(endpoint: string, data: any, method: HttpMethod = 'GET') => {
  const url = `${ baseUrl }/${ endpoint }`;
  let responseData;
  try {
    if (method === 'GET') {
      const resp = await fetch(url);
      responseData = await resp.json();
    } else {
      const resp = await fetch(url, {
        method,
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      responseData = await resp.json();
    }
    if (!responseData) {
      throw new Error('Error no data response');
    }

    return responseData as T;
  } catch (error) {
    console.log(error);
  }
};

export const fetchWithToken = async <T>(endpoint: string, data: any, method: HttpMethod = 'GET') => {
  const url = `${ baseUrl }/${ endpoint }`;
  const token = localStorage.getItem('token') || '';
  let responseData;
  try {
    if (method === 'GET') {
      const resp = await fetch(url, {
        headers: {
          'x-token': token
        }
      });
      responseData = await resp.json();
    } else {
      const resp = await fetch(url, {
        method,
        headers: {
          'Content-type': 'application/json',
          'x-token': token
        },
        body: JSON.stringify(data)
      });
      responseData = await resp.json();
    }
    if (!responseData) {
      throw new Error('Error no data response');
    }

    return responseData as T;
  } catch (error) {
    console.log(error);
  }
};
