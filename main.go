package main

import (
	"net/http"
	"text/template"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		template, _ := template.ParseFiles("index.html")
		template.Execute(w, nil)
	})

	http.ListenAndServe(":8080", nil)
}
