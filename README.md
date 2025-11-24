# FinBank Website

A modern, responsive banking website built with Next.js 14, featuring dynamic menu management, foreign exchange rates, news updates, and comprehensive banking information.

## 🚀 Features

- **Dynamic Menu System**: Automatically loads menu categories, subcategories, and items from backend API
- **Menu Caching**: 30-minute cache for improved performance and reduced API calls
- **Skeleton Loaders**: Beautiful loading states for menu items
- **Foreign Exchange**: Real-time currency exchange rates with auto-scrolling ticker
- **News & Updates**: Dynamic news and investor news sections
- **Product Showcase**: Banking products and services
- **Team Pages**: Board of directors and management team displays
- **Responsive Design**: Mobile-first, fully responsive layout
- **Dark Mode Support**: Theme switching capability
- **SEO Optimized**: Server-side rendering with Next.js

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Backend API running (see backend README)

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd finbank
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_API_URL=https://service.mwalimubank.co.tz
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
finbank/
├── app/                    # Next.js 14 App Router
│   ├── (pages)/           # Page routes
│   │   ├── [route]/       # Dynamic menu item pages
│   │   ├── team/          # Management team page
│   │   ├── foreign-exchange/
│   │   └── ...
│   ├── layout.js          # Root layout
│   └── page.js            # Home page
├── components/             # React components
│   ├── layout/            # Layout components (Header, Footer, Menu)
│   ├── sections/          # Page sections
│   ├── Foreign/           # Foreign exchange components
│   └── ...
├── utils/                  # Utility functions
│   ├── api.js             # API client with caching
│   └── cache.js           # LocalStorage cache utility
├── public/                 # Static assets
└── package.json
```

## 🎨 Key Components

### Menu System
- **Menu.js**: Desktop navigation menu with dynamic categories
- **MobileMenu.js**: Mobile-responsive navigation
- **MenuSkeleton.js**: Loading skeleton for menu items
- Features:
  - Dynamic category loading
  - Subcategory grouping
  - Megamenu support
  - Cached API calls

### Foreign Exchange
- **ForeignExchangeSlider.js**: Auto-scrolling exchange rate ticker
- **foreign-exchange/page.js**: Full exchange rates page
- Auto-refreshes every 5 minutes
- Displays buy/sell rates for multiple currencies

### Dynamic Pages
- **app/(pages)/[route]/page.js**: Dynamic page renderer
- Automatically loads content based on route
- Supports sidebar navigation for multiple items
- Uses subcategory banner images

## 🔌 API Integration

The website connects to the backend API for all dynamic content:

### Menu Data
- Menu categories and subcategories
- Menu items with page content
- Cached for 30 minutes to reduce API calls

### Other Data
- Foreign exchange rates
- News and updates
- Investor news
- Products
- Team members
- Board of directors

## 💾 Caching System

The website implements intelligent caching:

- **Location**: Browser localStorage
- **Duration**: 30 minutes
- **Scope**: Menu categories and menu items
- **Benefits**: 
  - Faster page loads
  - Reduced server load
  - Better user experience
  - Automatic cache expiration

## 🎯 Key Features

### Dynamic Menu Rendering
- Automatically fetches menu structure from API
- Supports categories with and without subcategories
- Megamenu for complex navigation
- Disabled navigation items (History, Mission & Vision)

### Subcategory Banner Images
- Banner images come from subcategories
- Fallback to menu item banner or default
- Automatic image URL resolution

### Management Team Layout
- First member centered at top
- Remaining members in rows of 4
- Responsive grid layout

### Skeleton Loaders
- 5 skeleton items while loading
- Smooth animations
- Maintains layout structure

## 🚀 Build & Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Environment Variables
- `NEXT_PUBLIC_API_URL`: Backend API base URL (required)

## 📱 Responsive Design

The website is fully responsive:
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Touch-friendly navigation
- Optimized images

## 🎨 Styling

- Custom CSS modules
- Bootstrap grid system
- Responsive utilities
- Dark mode support (via ThemeSwitch component)

## 🔄 Data Flow

1. **Initial Load**: Fetch menu categories and items
2. **Cache Check**: Check localStorage for cached data
3. **API Call**: Fetch from API if cache expired or missing
4. **Cache Update**: Store fresh data in cache
5. **Render**: Display content with skeleton loaders during fetch

## 📝 Pages

- **Home**: Landing page with carousel and featured content
- **About**: Company information (History, Mission, Vision disabled)
- **Personal/Business/Invest/Bancassurance**: Dynamic category pages
- **Foreign Exchange**: Currency rates page
- **News**: News and updates listing
- **Team**: Management team display
- **Board of Directors**: Board member profiles
- **Contact**: Contact form (navigation disabled)

## 🐛 Troubleshooting

### Menu not loading
- Check API URL in `.env.local`
- Verify backend is running
- Check browser console for errors
- Clear localStorage cache

### Images not displaying
- Verify `API_BASE_URL` in backend
- Check image paths in database
- Ensure uploads directory is accessible

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Commit with descriptive messages
5. Push and create pull request

## 📄 License

Private - All rights reserved

## 🔗 Related Repositories

- **Backend API**: [forlandservice](../README.md)
- **Dashboard**: [forlanddashboard](../forlanddashboard/README.md)
