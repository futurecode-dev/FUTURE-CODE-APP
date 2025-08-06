# FutureCode Agency Website

A modern, futuristic software development agency website built with React, TypeScript, and Tailwind CSS.

## Features

- 🚀 Modern, responsive design with futuristic aesthetics
- 📱 Mobile-first approach with smooth animations
- 📧 Contact form with email integration
- 🎨 Glassmorphism effects and gradient designs
- ⚡ Fast performance with Vite
- 🔒 Form validation and error handling

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Email Service Setup (Resend)

1. Sign up for a free account at [Resend](https://resend.com)
2. Get your API key from the Resend dashboard
3. Copy `.env.example` to `.env` and add your configuration:

```bash
cp .env.example .env
```

4. Update the `.env` file with your credentials:

```env
RESEND_API_KEY=your_resend_api_key_here
COMPANY_EMAIL=your-company@email.com
```

### 3. Supabase Setup (for Edge Functions)

1. Create a new project at [Supabase](https://supabase.com)
2. Install Supabase CLI (if not already installed):

```bash
npm install -g supabase
```

3. Initialize Supabase in your project:

```bash
supabase init
```

4. Link to your Supabase project:

```bash
supabase link --project-ref your-project-ref
```

5. Deploy the edge function:

```bash
supabase functions deploy contact-form
```

6. Set environment variables in Supabase:

```bash
supabase secrets set RESEND_API_KEY=your_resend_api_key_here
supabase secrets set COMPANY_EMAIL=your-company@email.com
```

### 4. Development

Start the development server:

```bash
npm run dev
```

### 5. Production Build

Build for production:

```bash
npm run build
```

## Contact Form Features

- ✅ Form validation (required fields, email format)
- ✅ Professional email templates
- ✅ Confirmation emails to users
- ✅ Error handling and user feedback
- ✅ Loading states and success messages
- ✅ Responsive design

## Email Templates

The contact form sends two emails:

1. **To Company**: Detailed submission with all form data
2. **To User**: Professional confirmation email with next steps

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Backend**: Supabase Edge Functions
- **Email Service**: Resend
- **Icons**: Lucide React
- **Styling**: Tailwind CSS with custom gradients

## Project Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── About.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── App.tsx
├── main.tsx
└── index.css

supabase/
└── functions/
    └── contact-form/
        └── index.ts
```

## Customization

### Colors
The website uses a futuristic color scheme with:
- Primary: Cyan (#00D4FF)
- Secondary: Purple (#8B5CF6)
- Accent: Green (#10B981)

### Content
Update the content in each component file to match your agency's information:
- Company name and branding
- Services and pricing
- Portfolio projects
- Team information
- Contact details

## Support

For questions or issues, please contact the development team or refer to the documentation of the individual technologies used.