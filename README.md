# Andy Osindo Portfolio

A professional portfolio website showcasing full-stack development skills and projects.

## 🚀 Live Demo

The portfolio is deployed on Netlify and can be viewed at: [Your Netlify URL will appear here after deployment]

## 📦 Netlify Deployment

This portfolio is optimized for Netlify deployment:

### Quick Deploy
1. **Fork this repository** to your GitHub account
2. **Connect to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub and select your forked repository
   - Build settings are automatically configured via `netlify.toml`
   - Click "Deploy site"

### Manual Deploy
1. **Build the site locally** (optional):
   ```bash
   npm install
   npm run build
   ```
2. **Drag and drop** the entire project folder to Netlify's deploy area

### Configuration
- **Build Command:** Not required (static site)
- **Publish Directory:** `.` (root directory)
- **Node Version:** 18 (configured in netlify.toml)

## 🚀 Quick Start

### Method 1: Automatic Server (Recommended)
```bash
./start-server.sh
```

### Method 2: Python Server
```bash
python3 serve.py
```

### Method 3: Manual Python Server
```bash
python3 -m http.server 3000
```

### Method 4: Node.js (if npm dependencies are installed)
```bash
npm start
# or
npm run dev
```

## 📁 Project Structure

```
AndyPortfolio/
├── index.html              # Main portfolio page
├── components.html          # UI components showcase
├── serve.py                # Python development server
├── start-server.sh         # Auto-start script
├── gulpfile.js             # Gulp build configuration
├── package.json            # Node.js dependencies
├── assets/
│   ├── css/
│   │   └── johndoe.css     # Compiled CSS (ready to use)
│   ├── scss/               # SCSS source files
│   ├── js/
│   │   └── johndoe.js      # Main JavaScript
│   ├── imgs/               # Images and assets
│   └── vendors/            # Third-party libraries
└── development-setup-plan.md # Development setup documentation
```

## 🛠️ Development Server Options

### Option 1: Python Server (serve.py)
**Features:**
- ✅ No dependencies required
- ✅ Auto-opens browser
- ✅ Shows local and network URLs
- ✅ CORS headers for development
- ✅ Custom logging

**Usage:**
```bash
python3 serve.py
```

**Output:**
```
🚀 Portfolio Development Server
============================================================
📂 Serving directory: /home/andy/AndyPortfolio
🌐 Local server: http://localhost:3000
📱 Network access: http://192.168.1.100:3000
============================================================
📝 Available pages:
   • Portfolio: http://localhost:3000/
   • Components: http://localhost:3000/components.html
============================================================
Press Ctrl+C to stop the server
============================================================
```

### Option 2: Gulp + Browser-sync (Advanced)
**Features:**
- ✅ Live reload on file changes
- ✅ SCSS compilation
- ✅ CSS/JS minification
- ✅ Cross-device synchronization

**Setup:**
```bash
# Install dependencies (requires internet connection)
npm install

# Start development server
npm run dev
# or
gulp watch
```

**Available Scripts:**
- `npm start` - Start default gulp task
- `npm run dev` - Start development server with live reload
- `npm run build` - Build production assets
- `npm run sass` - Compile SCSS only

## 🎨 Styling

### CSS
The main stylesheet is already compiled and located at:
- `assets/css/johndoe.css` - Main compiled CSS (242KB)

### SCSS Development
Source SCSS files are in `assets/scss/`:
- `johndoe.scss` - Main SCSS entry point
- `abstracts/` - Variables and mixins
- `base/` - Typography and base styles
- `components/` - UI component styles
- `layout/` - Layout-specific styles
- `vendors/` - Third-party library styles (Bootstrap 4.3.1)

To compile SCSS:
```bash
# If gulp is set up
npm run sass

# Or use any SCSS compiler
sass assets/scss/johndoe.scss assets/css/johndoe.css
```

## 🌐 Accessing Your Portfolio

### Local Development
- **Main Portfolio:** http://localhost:3000/
- **Components Page:** http://localhost:3000/components.html

### Network Access
When using the Python server, you'll see a network URL like:
- **Network:** http://192.168.1.100:3000/

This allows you to:
- Test on mobile devices
- Share with others on the same network
- Test responsive design across devices

## 🔧 Troubleshooting

### Port Already in Use
The Python server automatically finds an available port starting from 3000.

### Network Issues with npm
If `npm install` fails due to network issues:
1. Use the Python server (no dependencies required)
2. Try: `npm install --registry https://registry.npmjs.org/`
3. Check your proxy settings
4. Use the manual Python server: `python3 -m http.server 3000`

### Python Not Found
Install Python:
```bash
# Ubuntu/Debian
sudo apt install python3

# macOS
brew install python3

# Windows
# Download from python.org
```

### File Permissions
Make scripts executable:
```bash
chmod +x serve.py
chmod +x start-server.sh
```

## 📱 Features

### Portfolio Highlights
- **Responsive Design** - Works on all devices
- **Interactive Portfolio** - Dynamic project showcase
- **Contact Form** - Integrated with FormSubmit
- **CV Download** - Direct PDF download
- **Social Links** - Twitter, LinkedIn, GitHub
- **Blog Integration** - Links to dev.to articles

### Technical Features
- **Bootstrap 4.3.1** - Responsive framework
- **jQuery 3.4.1** - JavaScript library
- **Isotope** - Portfolio filtering
- **Leaflet** - Map integration (if needed)
- **Local Storage** - Project management
- **Form Validation** - Contact form handling

## 🚀 Deployment

### For Production
1. **Build assets** (if using Gulp):
   ```bash
   npm run build
   ```

2. **Upload files** to your web server:
   - `index.html`
   - `components.html`
   - `assets/` folder
   - Any other static files

### Hosting Options
- **GitHub Pages** - Free static hosting
- **Netlify** - Free with CI/CD
- **Vercel** - Free with automatic deployments
- **Traditional Web Hosting** - Upload via FTP/SFTP

## 📞 Support

If you encounter any issues:
1. Check the console for error messages
2. Ensure all files are in the correct locations
3. Verify Python 3 is installed
4. Try the alternative server methods
5. Open `index.html` directly in your browser as a fallback

## 🎯 Next Steps

1. **Customize Content** - Update personal information in `index.html`
2. **Add Projects** - Use the portfolio management system
3. **Update Styling** - Modify SCSS files and recompile
4. **Deploy** - Choose a hosting platform and deploy your portfolio

---

**Happy coding! 🚀**