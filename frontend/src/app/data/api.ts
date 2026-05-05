//const BASE_URL = 'http://localhost:3000';
const BASE_URL = 'https://api.drop.com.sg';
export interface App {
  id: string;
  name: string;
  icon: string;
  description: string;
  category: string;
  featured?: boolean | string;
  trending?: boolean | string;
  fullDescription?: string;
  link?: string;
}

export const categories = ["All", "Social Media", "Gaming", "Lifestyle", "Shopping"];

// We keep categories, but remove mockApps. 
// We can also add a fetch function here to keep data fetching centralized.

export const fetchApps = async (): Promise<App[]> => {
  try {
    const response = await fetch(`${BASE_URL}/app`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    // csvtojson parses booleans as strings ("true"/"false"), so we format them
    return data.map((app: any) => ({
      ...app,
      featured: app.featured.toLowerCase() === 'true' || app.featured === true,
      trending: app.trending.toLowerCase() === 'true' || app.trending === true,
      link: app.link || '',
    }));
  } catch (error) {
    console.error("Failed to fetch apps:", error);
    return [];
  }
};

export const chat = async (message: string): Promise<{ message: string, suggestedApps: App[] }> => {
  try {
    const response = await fetch(`${BASE_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    // csvtojson parses booleans as strings ("true"/"false"), so we format them
    return {
      message: data.message,
      suggestedApps: data.suggestedApps
    }
  } catch (error) {
    console.error("Failed to fetch apps:", error);
    return { message: '', suggestedApps: [] };
  }
};

export const approvePayment = async (paymentId: string) => {
  const response = await fetch(`${BASE_URL}/payment/approve`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ paymentId })
  });
  if (!response.ok) {
    throw new Error('Failed to approve payment');
  }
  return response.json();
};

export const completePayment = async (paymentId: string, txid: string) => {
  const response = await fetch(`${BASE_URL}/payment/complete`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ paymentId, txid })
  });
  if (!response.ok) {
    throw new Error('Failed to complete payment');
  }
  return response.json();
};
