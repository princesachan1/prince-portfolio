# 🚀 Prince Sachan - Portfolio

A modern, responsive portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**. This portfolio showcases my journey as a Full-Stack Developer and AI Enthusiast, featuring interactive animations, and a premium UI design.

## ✨ Features

- **🎨 Modern UI/UX**: Premium dark-themed design with glassmorphism effects
- **🌓 Dark/Light Mode**: Seamless theme switching with smooth transitions
- **📱 Fully Responsive**: Mobile-first design that works on all devices
- **⚡ Performance Optimized**: Built with Next.js for blazing-fast load times
- **🎭 Smooth Animations**: Powered by Framer Motion for delightful interactions
- **📧 Contact Form**: Integrated with EmailJS for direct communication
- **🎯 SEO Friendly**: Optimized meta tags and semantic HTML
- **♿ Accessible**: WCAG compliant with keyboard navigation support

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

### Services
- **Email**: [EmailJS](https://www.emailjs.com/) for contact form functionality

### Development Tools
- **Linting**: ESLint with Next.js config
- **Type Checking**: TypeScript strict mode
- **Package Manager**: npm

## 📂 Project Structure

```
prince-portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles and CSS variables
├── components/            # React components
│   ├── sections/          # Page sections (Hero, About, Skills, etc.)
│   └── ui/                # Reusable UI components
├── contexts/              # React contexts (Theme, etc.)
├── data/                  # Portfolio data and content
│   └── portfolio.tsx      # Centralized portfolio data
├── public/                # Static assets
│   └── images/            # Images and media files
├── utils/                 # Utility functions
└── package.json           # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/princesachan1/prince-portfolio.git
   cd prince-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   cp .env.example .env.local
   ```
   
   Then update `.env.local` with your actual EmailJS credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```
   
   > **Note**: Get your EmailJS credentials by signing up at [emailjs.com](https://www.emailjs.com/)

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Build for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

## 📝 Customization

### Update Portfolio Content

All portfolio content is centralized in [`data/portfolio.tsx`](./data/portfolio.tsx). Update this file to customize:

- **Hero Section**: Name, title, description, and avatar
- **About Section**: Bio, education, and background
- **Skills**: Programming languages, frameworks, tools
- **Projects**: Project details, images, links
- **Contact**: Social media links and contact information

### Modify Theme Colors

Edit the CSS variables in [`app/globals.css`](./app/globals.css) to customize the color scheme:

```css
:root {
  --background: /* Your color */;
  --foreground: /* Your color */;
  /* ... more variables */
}
```

### Add New Sections

1. Create a new component in `components/sections/`
2. Import and add it to `app/page.tsx`
3. Update the navigation if needed

## 📧 Contact Form Setup

The contact form uses **EmailJS** for sending emails. Follow these steps:

1. **Sign up** at [EmailJS](https://www.emailjs.com/)
2. **Create an email service** (Gmail, Outlook, etc.)
3. **Create an email template** with the following variables:
   - `{{user_name}}` - Sender's name
   - `{{user_email}}` - Sender's email
   - `{{message}}` - Message content
4. **Get your credentials**:
   - Service ID
   - Template ID
   - Public Key
5. **Update your `.env.local` file** with these credentials (see installation step 3)
6. **Test the form** to ensure emails are being sent correctly

> **Security Note**: Your credentials are safely stored in `.env.local` which is excluded from Git via `.gitignore`

## 🎨 Key Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal background and educational journey
- **Skills**: Categorized technical skills with icons
- **Projects**: Showcase of featured projects with live demos
- **Contact**: Contact form and social media links



### Netlify

```bash
npm run build
# Deploy the .next folder
```

### Other Platforms

The portfolio is a standard Next.js application and can be deployed to any platform that supports Node.js.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect With Me

- **GitHub**: [@princesachan1](https://github.com/princesachan1)
- **LinkedIn**: [Prince Sachan](https://www.linkedin.com/in/princesachan/)
- **Portfolio**: [Live Demo](https://princeportfolio2.vercel.app/)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

**Built with ❤️ by Prince Sachan**

*If you found this portfolio helpful, consider giving it a ⭐ on GitHub!*
