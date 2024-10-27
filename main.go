package main

import (
	"fmt"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"text/template"
)

var allowedRoutes = map[string]bool{
	"/":           true,
}

func main() {
	mux := http.NewServeMux()
	RegisterRoutes(mux)

	wrappedMux := RouteChecker(mux)

	server := &http.Server{
		Addr:    ":8080",
		Handler: wrappedMux,
	}

	fmt.Println("server running @http://localhost:8080\n=====================================")
	err := server.ListenAndServe()
	if err != nil {
		fmt.Println("Error running server: ", err)
	}
}

// RouteChecker is a middleware that checkes allowed routes
func RouteChecker(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if strings.HasPrefix(r.URL.Path, "/static/") {
			// Static(w,r)
			next.ServeHTTP(w, r)
			return
		}

		if _, ok := allowedRoutes[r.URL.Path]; !ok {
			http.Error(w, "Not found", http.StatusNotFound)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func RegisterRoutes(mux *http.ServeMux) {
	staticDir := GetProjectRoot("views", "static")
	fs := http.FileServer(http.Dir(staticDir))
	mux.Handle("/static/", http.StripPrefix("/static/", fs))

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		HomeHandler(w, r)
	})
}

func GetProjectRoot(first, second string) string {
	cwd, _ := os.Getwd()
	baseDir := cwd
	return filepath.Join(baseDir, first, second)
}

func HomeHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodGet {
		template, err := template.ParseFiles(GetProjectRoot("views", "index.html"))
		if err != nil {
            http.Error(w, err.Error(), http.StatusInternalServerError)
            return
        }
		err = template.Execute(w, nil)
		if err != nil {
            http.Error(w, err.Error(), http.StatusInternalServerError)
            return
        }
	} else {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	}
}
