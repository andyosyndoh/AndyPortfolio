#!/bin/bash

# Portfolio Development Server Startup Script
# This script provides multiple ways to run the development server

echo "🚀 Portfolio Development Server"
echo "================================"

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "✅ Python 3 found"
    echo "🌐 Starting Python HTTP server..."
    python3 serve.py
elif command -v python &> /dev/null; then
    echo "✅ Python found"
    echo "🌐 Starting Python HTTP server..."
    python serve.py
else
    echo "❌ Python not found. Trying alternative methods..."
    
    # Try Node.js if available
    if command -v node &> /dev/null; then
        echo "✅ Node.js found"
        echo "🌐 Starting Node.js HTTP server..."
        npx http-server . -p 3000 -o
    elif command -v php &> /dev/null; then
        echo "✅ PHP found"
        echo "🌐 Starting PHP development server..."
        php -S localhost:3000
    else
        echo "❌ No suitable server found."
        echo "📝 Manual options:"
        echo "   1. Install Python: sudo apt install python3"
        echo "   2. Install Node.js: sudo apt install nodejs npm"
        echo "   3. Open index.html directly in your browser"
        echo "   4. Use VS Code Live Server extension"
        exit 1
    fi
fi