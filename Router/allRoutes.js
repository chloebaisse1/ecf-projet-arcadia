import Route from "./Route.js"

export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html", []),
  new Route("/jungle", "Jungle", "/pages/jungle.html", []),
  new Route("/savane", "Savane", "/pages/savane.html", []),
  new Route("/marais", "Marais", "/pages/marais.html", []),
  new Route("/contact", "Contact", "/pages/contact.html", []),
  new Route(
    "/signup",
    "Inscription",
    "/pages/signup.html",
    ["disconnected"],
    "/js/auth/signup.js"
  ),
  new Route(
    "/signin",
    "Connexion",
    "/pages/signin.html",
    ["disconnected"],
    "/js/auth/signin.js"
  ),
]

export const websiteName = "Arcadia Zoo"
