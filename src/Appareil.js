export class Appareil {
  constructor(nom, type) {
    this.nom = nom;
    this.type = type;
    this.estAllume = false;
  }

  allumer() {
    this.estAllume = true;
  }

  eteindre() {
    this.estAllume = false;
  }
  
  afficherEtat() {
    return `${this.nom} (${this.type}) est ${this.estAllume ? "allumé" : "éteint"}`;
  }

un bug ici;
}