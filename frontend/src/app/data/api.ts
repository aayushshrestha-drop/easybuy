export interface App {
  id: string;
  name: string;
  icon: string;
  description: string;
  category: string;
  featured?: boolean | string;
  trending?: boolean | string;
  fullDescription?: string;
}

export const categories = ["All", "Social Media", "Gaming", "Lifestyle", "Shopping"];

// We keep categories, but remove mockApps. 
// We can also add a fetch function here to keep data fetching centralized.

export const fetchApps = async (): Promise<App[]> => {
  try {
    const response = await fetch('http://localhost:3000/app');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    // csvtojson parses booleans as strings ("true"/"false"), so we format them
    return data.map((app: any) => ({
      ...app,
      featured: app.featured === 'true' || app.featured === true,
      trending: app.trending === 'true' || app.trending === true,
    }));
  } catch (error) {
    console.error("Failed to fetch apps:", error);
    return [];
  }
};
