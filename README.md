# BitGo Wallet Replica

A responsive BitGo wallet replica website built with React and Vite, featuring a complete withdrawal flow with tax assessment.

## Features

- **Wallet Dashboard**: View user information, wallet balance, and quick actions
- **Withdrawal Form**: Complete form with validation for bank account details and withdrawal amount
- **Tax Assessment**: Display tax and fee calculations with support contact information
- **Responsive Design**: Mobile-first responsive design that works on all devices
- **BitGo-inspired UI**: Clean, professional design inspired by BitGo's aesthetic

## Tech Stack

- **Frontend**: React 19 with Vite
- **Routing**: React Router DOM
- **Styling**: CSS-in-JS with custom design system
- **Build Tool**: Vite
- **Deployment**: Vercel with GitHub Actions CI/CD

## Project Structure

```
src/
├── components/          # Reusable components
├── pages/              # Page components
│   ├── WalletDashboard.jsx
│   ├── WithdrawalForm.jsx
│   └── TaxInfo.jsx
├── styles/             # Global styles
├── App.jsx             # Main app component with routing
├── App.css             # Main app styles
├── index.jsx           # Entry point
└── index.css           # Global styles
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bitgo-wallet
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

### GitHub & Vercel Setup

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Vercel Deployment**:
   - Connect your GitHub repository to Vercel
   - Vercel will automatically deploy from the `main` branch
   - The `vercel.json` configuration handles routing for SPA

3. **Environment Variables** (Optional):
   - Add any environment variables needed in Vercel dashboard
   - The project is configured to work without additional environment variables

### GitHub Actions

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
- Triggers on pushes to the `main` branch
- Installs dependencies
- Builds the project
- Deploys to Vercel

**Note**: You'll need to add the following secrets to your GitHub repository for the workflow to work:
- `VERCEL_TOKEN` - Your Vercel deployment token
- `VERCEL_ORG_ID` - Your Vercel organization ID
- `VERCEL_PROJECT_ID` - Your Vercel project ID

## Features Implementation

### 1. Wallet Dashboard
- User information display
- Balance overview with available and pending amounts
- Quick action buttons for deposit, withdraw, and transaction history
- Responsive card-based layout

### 2. Withdrawal Form
- Complete bank account information form
- Address information section
- Withdrawal amount with validation
- Email contact information
- Form validation with error messages
- Loading states during submission

### 3. Tax Assessment Page
- Transaction summary with breakdown
- Tax and fee calculations
- Next steps information
- Support contact with email link
- Professional status indicators

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Design

The application is built with a mobile-first approach and includes responsive breakpoints for:
- Mobile devices (< 480px)
- Tablets (480px - 768px)
- Desktop (768px+)

## Customization

### Colors
The color scheme is defined in CSS custom properties in `App.css`. You can easily modify the theme by updating these values:

```css
:root {
  --primary-blue: #2563eb;
  --primary-dark: #1e40af;
  --secondary-blue: #60a5fa;
  --accent-blue: #93c5fd;
  /* ... other colors */
}
```

### Typography
The project uses Google Fonts (Inter) for typography. You can modify fonts in the `index.html` file.

## License

This project is for educational purposes. Please respect BitGo's trademarks and intellectual property.

## Support

For questions about this replica project, please create an issue in the repository.

**Note**: This is not an official BitGo product. For official BitGo support, please visit [bitgo.com](https://www.bitgo.com).