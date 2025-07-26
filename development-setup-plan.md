# Portfolio Development Server Setup Plan

## Current Issues Analysis

### 1. Path Configuration Mismatch
- **Current Gulpfile Paths**: Expects files in `public_html/` directory
- **Actual File Structure**: Files are in root directory (`/home/andy/AndyPortfolio/`)
- **Impact**: Gulp tasks fail because they can't find the source files

### 2. File Structure Comparison

**Expected by Gulpfile:**
```
public_html/
├── index.html
├── assets/
│   ├── css/
│   ├── js/
│   ├── scss/
│   ├── imgs/
│   └── vendors/
└── dist/ (generated)
```

**Current Structure:**
```
/home/andy/AndyPortfolio/
├── index.html
├── assets/
│   ├── css/
│   ├── js/
│   ├── scss/
│   ├── imgs/
│   └── vendors/
└── (no dist folder)
```

## Implementation Plan

### Phase 1: Update Gulp Configuration
1. **Update Path Variables** in `gulpfile.js`:
   - Change `root.www` from `'./public_html'` to `'.'`
   - Update all source paths to remove `public_html/` prefix
   - Update distribution paths to use `./dist/` instead of `public_html/dist/`

2. **Fix Browser-sync Configuration**:
   - Update `baseDir` to serve from current directory
   - Ensure proper file watching for live reload

### Phase 2: Dependencies and Build Process
1. **Install Node Dependencies**:
   ```bash
   npm install
   ```

2. **SCSS Compilation Setup**:
   - Ensure SCSS files compile to `assets/css/`
   - Verify import paths in `johndoe.scss` work correctly

3. **Create Development Scripts**:
   - Add `dev` script for development server
   - Add `build` script for production build
   - Update existing `start` script

### Phase 3: Testing and Documentation
1. **Test Development Server**:
   - Run `npm run dev` to start browser-sync
   - Verify live reload functionality
   - Test SCSS compilation

2. **Create Usage Documentation**:
   - Document how to start development server
   - Explain available npm scripts
   - Provide troubleshooting guide

## Updated Gulp Configuration

### New Path Structure:
```javascript
var paths = {
    root: { 
        www: '.'  // Changed from './public_html'
    },
    src: {
        root: 'assets',  // Changed from 'public_html/assets'
        html: '**/*.html',  // Changed from 'public_html/**/*.html'
        css: 'assets/css/*.css',  // Removed public_html prefix
        js: 'assets/js/*.js',
        vendors: 'assets/vendors/**/*.*',
        imgs: 'assets/imgs/**/*.+(png|jpg|gif|svg)',
        scss: 'assets/scss/**/*.scss'
    },
    dist: {
        root: 'dist',  // Changed from 'public_html/dist'
        css: 'dist/css',
        js: 'dist/js',
        imgs: 'dist/imgs',
        vendors: 'dist/vendors'
    }
}
```

### Updated Package.json Scripts:
```json
{
  "scripts": {
    "start": "gulp watch",
    "dev": "gulp watch",
    "build": "gulp build",
    "sass": "gulp sass"
  }
}
```

## Browser-sync Configuration
- **Server Base**: Current directory (`.`)
- **Watch Files**: 
  - `assets/scss/**/*.scss` (for SCSS changes)
  - `assets/js/*.js` (for JS changes)
  - `**/*.html` (for HTML changes)
- **Auto-reload**: Enabled for all watched files

## Expected Workflow
1. Developer runs `npm run dev`
2. Browser-sync starts local server (typically `http://localhost:3000`)
3. Browser opens automatically showing the portfolio
4. Any changes to SCSS, JS, or HTML trigger automatic browser refresh
5. SCSS files are automatically compiled to CSS

## Benefits of This Setup
- **Live Development**: Instant preview of changes
- **SCSS Compilation**: Automatic CSS generation from SCSS
- **Cross-device Testing**: Browser-sync provides external URL for mobile testing
- **Asset Optimization**: Build process for production-ready files
- **Hot Reload**: No manual browser refresh needed

## Next Steps
1. Switch to Code mode to implement these changes
2. Update gulpfile.js with corrected paths
3. Install dependencies and test the setup
4. Create comprehensive documentation for future use