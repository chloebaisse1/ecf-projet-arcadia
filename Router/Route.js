export default class Route {
  constructor(url, title, pathHtml, authorize, pathJS = "") {
    this.url = url
    this.title = title
    this.pathHtml = pathHtml
    this.pathJS = pathJS
    this.authorize = authorize
  }
}

/*****
[] -> tout le monde peux y acceder

  ["disconnected"] -> réserver aux utilisateurs déconnectés
  ["admin"] -> Reserver aux utilisateurs connectés en tant qu'admin
  ["veterinaire"] -> Reserver aux utilisateurs connectés en tant que veterinaire
  ["employe"] -> Reserver aux utilisateurs connectés en tant qu'employe
  ["admin", "employe"] -> Reserver aux utilisateurs connectés en tant qu'admin ou employe
 */

