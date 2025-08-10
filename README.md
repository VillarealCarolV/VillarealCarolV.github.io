# Canteen Ledger - Static Version

This is a static version of the Canteen Ledger application, designed to work on GitHub Pages. This version provides a frontend-only experience with sample data.

## Features

- **Admin Panel**
  - Dashboard with statistics
  - Client management (view only)
  - Order tracking (view only)
  - Debt monitoring (view only)
  - Basic reports (sample data)

- **Client Interface**
  - View menu (sample data)
  - Place orders (simulated)
  - View order history (sample data)
  - Check balances (sample data)

## Limitations

This is a static version with the following limitations:
- No real database - uses localStorage and sample data
- No server-side processing
- No real authentication (demo credentials only)
- Data is not persistent across page refreshes (except for login state)

## Getting Started

1. **Local Testing**
   - Simply open `index.html` in a web browser
   - Or use a local server like `python -m http.server`

2. **Deploy to GitHub Pages**
   - Push this folder to your GitHub repository
   - Enable GitHub Pages in repository settings
   - Set the source to the `main` branch and `/static-version` folder

## Demo Credentials

**Admin Panel**
- Username: `admin`
- Password: `password123`

## File Structure

```
static-version/
├── index.html          # Landing page
├── admin/              # Admin interface
│   ├── login.html      # Admin login
│   └── dashboard.html  # Admin dashboard
├── client/             # Client interface (to be implemented)
├── assets/             # Static assets
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript files
│   └── data/           # Sample data files
└── README.md           # This file
```

## Converting to GitHub Pages

1. Rename the `static-version` folder to `docs`
2. Push to your GitHub repository
3. Go to Repository Settings > Pages
4. Set Source to "Deploy from a branch"
5. Select `main` branch and `/docs` folder
6. Click Save

## Future Enhancements

- Add more interactive features using client-side JavaScript
- Implement local storage for data persistence
- Add more sample data and reports
- Improve UI/UX with animations and transitions
