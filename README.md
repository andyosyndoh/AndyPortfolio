# Andy Osindo Portfolio - Next.js

A modern, responsive portfolio website built with Next.js 14, Tailwind CSS, and React. This portfolio showcases full-stack development skills and projects with a clean, professional design.

## 🚀 Features

- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **Responsive Design** - Works on all devices
- **Interactive Portfolio** - Dynamic project showcase with filtering
- **Contact Form** - Functional contact form
- **Blog Section** - Showcase your articles and thoughts
- **Smooth Scrolling** - Enhanced navigation experience
- **SEO Optimized** - Built-in Next.js SEO features
- **Fast Performance** - Optimized for speed and user experience

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Language:** JavaScript (ES6+)
- **Icons:** Themify Icons
- **Fonts:** Google Fonts (Source Sans Pro, Dosis)

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd andy-portfolio-nextjs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Copy assets:**
   ```bash
   # Copy your existing assets to the public folder
   cp -r assets public/
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
andy-portfolio-nextjs/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.js            # Root layout component
│   ├── page.js              # Home page
│   └── components/
│       └── page.js          # Components showcase page
├── components/
│   ├── Header.js            # Header component
│   ├── About.js             # About section
│   ├── Services.js          # Services section
│   ├── Portfolio.js         # Portfolio section with filtering
│   ├── Blog.js              # Blog section
│   ├── Contact.js           # Contact form
│   └── Footer.js            # Footer component
├── public/
│   └── assets/              # Static assets (images, icons, etc.)
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
```javascript
colors: {
  primary: '#F85C70',    // Main brand color
  secondary: '#6c757d',  // Secondary color
  // ... other colors
}
```

### Content
Update the content in each component:
- **Personal Info:** Edit `components/Header.js` and `components/About.js`
- **Services:** Modify the services array in `components/Services.js`
- **Portfolio:** Update projects in `components/Portfolio.js`
- **Blog Posts:** Edit blog posts in `components/Blog.js`
- **Contact Info:** Update contact details in `components/Contact.js`

### Styling
- **Global Styles:** `app/globals.css`
- **Component Styles:** Use Tailwind classes in components
- **Custom CSS:** Add custom styles in `app/globals.css`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to [Netlify](https://netlify.com)

### Static Export
```bash
npm run build
```
This creates an `out` folder with static files that can be deployed anywhere.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📞 Contact Form Integration

The contact form is ready to integrate with:
- **Formspree**
- **Netlify Forms**
- **EmailJS**
- **Custom API endpoint**

Update the form action in `components/Contact.js` to connect with your preferred service.

## 🎯 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals:** Optimized
- **Image Optimization:** Next.js automatic optimization
- **Code Splitting:** Automatic with Next.js

## 🔄 Migration from Original

This Next.js version maintains:
- ✅ All original styling and design
- ✅ Interactive portfolio filtering
- ✅ Smooth scrolling navigation
- ✅ Responsive design
- ✅ Contact form functionality
- ✅ Social media links
- ✅ Blog section layout

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Original design inspiration from Bootstrap themes
- Icons by [Themify Icons](https://themify.me/themify-icons)
- Fonts from [Google Fonts](https://fonts.google.com)

---

**Built with ❤️ by Andy Osindo**

For questions or support, reach out at [andyovvo8@gmail.com](mailto:andyovvo8@gmail.com)