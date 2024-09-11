import Route from "./Route.js"

export const allRoutes = [
  new Route("/", "Accueil", "/index.html"),
  new Route("/signin", "Connexion", "/signin.html"),
  new Route("/signup", "Inscription", "/signup.html"),
]

export const websiteName = "Arcadia Zoo"
