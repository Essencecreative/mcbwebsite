// API Base URL - Change this when deploying to production
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://66.29.133.39:5000';

// Carousel API
export const getCarousels = async () => {
  try {
    const res = await fetch(`${API_BASE}/carousel?page=1&limit=10`);
    if (!res.ok) throw new Error("Failed to fetch carousel items");
    const data = await res.json();
    return data.carouselItems || [];
  } catch (error) {
    console.error("Error fetching carousels:", error);
    return [];
  }
};

// Products API
export const getProducts = async () => {
  try {
    const res = await fetch(`${API_BASE}/products?page=1&limit=10`);
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    return data.products || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// News and Updates API
export const getNewsAndUpdates = async (page = 1, limit = 10) => {
  try {
    const res = await fetch(`${API_BASE}/news-and-updates?page=${page}&limit=${limit}`);
    if (!res.ok) throw new Error("Failed to fetch news and updates");
    const data = await res.json();
    return {
      items: data.newsAndUpdates || [],
      totalCount: data.totalCount || 0,
      totalPages: data.totalPages || 1,
      currentPage: data.currentPage || page
    };
  } catch (error) {
    console.error("Error fetching news and updates:", error);
    return {
      items: [],
      totalCount: 0,
      totalPages: 1,
      currentPage: page
    };
  }
};

// Board of Directors API
export const getBoardMembers = async () => {
  try {
    const res = await fetch(`${API_BASE}/board-of-directors`);
    if (!res.ok) throw new Error("Failed to fetch board members");
    const data = await res.json();
    return data.members || [];
  } catch (error) {
    console.error("Error fetching board members:", error);
    return [];
  }
};

// Management API
export const getManagementMembers = async () => {
  try {
    const res = await fetch(`${API_BASE}/management`);
    if (!res.ok) throw new Error("Failed to fetch management members");
    const data = await res.json();
    return data.members || [];
  } catch (error) {
    console.error("Error fetching management members:", error);
    return [];
  }
};

// Investor News API
export const getInvestorNews = async (page = 1, limit = 10) => {
  try {
    const res = await fetch(`${API_BASE}/investor-news?page=${page}&limit=${limit}`);
    if (!res.ok) throw new Error("Failed to fetch investor news");
    const data = await res.json();
    return {
      items: data.investorNews || [],
      totalCount: data.totalCount || 0,
      totalPages: data.totalPages || 1,
      currentPage: data.currentPage || page
    };
  } catch (error) {
    console.error("Error fetching investor news:", error);
    return {
      items: [],
      totalCount: 0,
      totalPages: 1,
      currentPage: page
    };
  }
};

export const getInvestorNewsItem = async (id) => {
  try {
    const res = await fetch(`${API_BASE}/investor-news/${id}`);
    if (!res.ok) throw new Error("Failed to fetch investor news item");
    return await res.json();
  } catch (error) {
    console.error("Error fetching investor news item:", error);
    return null;
  }
};

// Single News and Updates API
export const getNewsAndUpdate = async (id) => {
  try {
    const res = await fetch(`${API_BASE}/news-and-updates/${id}`);
    if (!res.ok) throw new Error("Failed to fetch news item");
    return await res.json();
  } catch (error) {
    console.error("Error fetching news item:", error);
    return null;
  }
};

// Header Update API
export const getActiveHeaderUpdate = async () => {
  try {
    const res = await fetch(`${API_BASE}/header-update/active`);
    if (!res.ok) throw new Error("Failed to fetch active header update");
    const data = await res.json();
    return data.update; // Returns null if no active update
  } catch (error) {
    console.error("Error fetching active header update:", error);
    return null;
  }
};

// Investor Categories API
export const getInvestorCategories = async (category, page = 1, limit = 10) => {
  try {
    const res = await fetch(`${API_BASE}/investor-categories?category=${category}&page=${page}&limit=${limit}`);
    if (!res.ok) throw new Error("Failed to fetch investor categories");
    const data = await res.json();
    return {
      items: data.items || [],
      totalCount: data.totalCount || 0,
      totalPages: data.totalPages || 1,
      currentPage: data.currentPage || page
    };
  } catch (error) {
    console.error("Error fetching investor categories:", error);
    return {
      items: [],
      totalCount: 0,
      totalPages: 1,
      currentPage: page
    };
  }
};

// Menu Categories API
export const getMenuCategories = async () => {
  try {
    const res = await fetch(`${API_BASE}/menu-categories`);
    if (!res.ok) throw new Error("Failed to fetch menu categories");
    const data = await res.json();
    return data.categories || [];
  } catch (error) {
    console.error("Error fetching menu categories:", error);
    return [];
  }
};

// Menu Items API
export const getMenuItems = async (menuCategory, subcategory, route) => {
  try {
    let url = `${API_BASE}/menu-items?isActive=true`;
    if (menuCategory) url += `&menuCategory=${menuCategory}`;
    if (subcategory) url += `&subcategory=${encodeURIComponent(subcategory)}`;
    if (route) url += `&route=${encodeURIComponent(route)}`;
    
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch menu items");
    const data = await res.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching menu items:", error);
    return [];
  }
};

// Get menu items by route (for page rendering)
export const getMenuItemsByRoute = async (route, type) => {
  try {
    let url = `${API_BASE}/menu-items/route/${encodeURIComponent(route)}`;
    if (type) url += `?type=${encodeURIComponent(type)}`;
    
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch menu items by route");
    const data = await res.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching menu items by route:", error);
    return [];
  }
};

// Opportunities API
export const getOpportunities = async (category = 'job') => {
  try {
    const res = await fetch(`${API_BASE}/opportunities?category=${category}`);
    if (!res.ok) throw new Error("Failed to fetch opportunities");
    return await res.json();
  } catch (error) {
    console.error("Error fetching opportunities:", error);
    return [];
  }
};

// Foreign Exchange API
export const getForeignExchangeRates = async () => {
  try {
    const res = await fetch(`${API_BASE}/foreign-exchange`);
    if (!res.ok) throw new Error("Failed to fetch foreign exchange rates");
    const data = await res.json();
    return data.rates || [];
  } catch (error) {
    console.error("Error fetching foreign exchange rates:", error);
    return [];
  }
};

// Wakala API
export const getWakalas = async (region, district) => {
  try {
    let url = `${API_BASE}/wakala`;
    const params = new URLSearchParams();
    if (region) params.append('region', region);
    if (district) params.append('district', district);
    if (params.toString()) url += `?${params.toString()}`;
    
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch wakala locations");
    const data = await res.json();
    return data.wakalas || [];
  } catch (error) {
    console.error("Error fetching wakala locations:", error);
    return [];
  }
};

// FAQs API
export const getFAQs = async () => {
  try {
    const res = await fetch(`${API_BASE}/faqs`);
    if (!res.ok) throw new Error("Failed to fetch FAQs");
    const data = await res.json();
    return data.faqs || [];
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
};

// Contact Form API
export const submitContactForm = async (formData) => {
  try {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    const data = await res.json();
    
    if (!res.ok) {
      throw new Error(data.message || 'Failed to send message');
    }
    
    return data;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};

// Application Form API
export const submitApplicationForm = async (formData, formType) => {
  try {
    const res = await fetch(`${API_BASE}/application`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        formType: formType || 'Application'
      }),
    });
    
    const data = await res.json();
    
    if (!res.ok) {
      throw new Error(data.message || 'Failed to submit application');
    }
    
    return data;
  } catch (error) {
    console.error("Error submitting application form:", error);
    throw error;
  }
};

// Helper function to get full image URL
export const getImageUrl = (imagePath) => {
  if (!imagePath) return '';
  if (imagePath.startsWith('http')) return imagePath;
  return `${API_BASE}/${imagePath}`;
};

