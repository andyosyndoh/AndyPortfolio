#!/usr/bin/env python3
"""
Simple HTTP server for serving the portfolio website
"""
import http.server
import socketserver
import webbrowser
import os
import sys
from pathlib import Path

# Configuration
PORT = 3000
HOST = 'localhost'

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def log_message(self, format, *args):
        # Custom log format
        print(f"[{self.log_date_time_string()}] {format % args}")

def find_available_port(start_port=3000):
    """Find an available port starting from start_port"""
    import socket
    for port in range(start_port, start_port + 100):
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.bind((HOST, port))
                return port
        except OSError:
            continue
    return None

def main():
    # Change to the directory containing this script
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    # Find available port
    port = find_available_port(PORT)
    if port is None:
        print(f"Error: Could not find an available port starting from {PORT}")
        sys.exit(1)
    
    # Create server
    with socketserver.TCPServer((HOST, port), CustomHTTPRequestHandler) as httpd:
        server_url = f"http://{HOST}:{port}"
        
        print("=" * 60)
        print("🚀 Portfolio Development Server")
        print("=" * 60)
        print(f"📂 Serving directory: {os.getcwd()}")
        print(f"🌐 Local server: {server_url}")
        print(f"📱 Network access: http://{get_local_ip()}:{port}")
        print("=" * 60)
        print("📝 Available pages:")
        print(f"   • Portfolio: {server_url}/")
        print(f"   • Components: {server_url}/components.html")
        print("=" * 60)
        print("Press Ctrl+C to stop the server")
        print("=" * 60)
        
        # Try to open browser
        try:
            webbrowser.open(server_url)
            print("🌐 Opening browser...")
        except Exception as e:
            print(f"⚠️  Could not open browser automatically: {e}")
            print(f"   Please open {server_url} manually")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n" + "=" * 60)
            print("🛑 Server stopped")
            print("=" * 60)

def get_local_ip():
    """Get the local IP address"""
    import socket
    try:
        # Connect to a remote address to determine local IP
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
            s.connect(("8.8.8.8", 80))
            return s.getsockname()[0]
    except Exception:
        return "localhost"

if __name__ == "__main__":
    main()