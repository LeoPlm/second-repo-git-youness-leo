import { Maison } from "./Maison.js";
import { Piece } from "./Piece.js";
import { Appareil } from "./Appareil.js";
import { CoffreFort } from "./Coffre-fort.js";

const maison = new Maison("12 rue des Lilas");

const salon = new Piece("Salon", 25);
const cuisine = new Piece("Cuisine", 15);

const television = new Appareil("Télévision", "Multimédia");
const frigo = new Appareil("Réfrigérateur", "Électroménager");

television.allumer();

salon.ajouterAppareil(television);
cuisine.ajouterAppareil(frigo);

maison.ajouterPiece(salon);
maison.ajouterPiece(cuisine);

const coffreFort = new CoffreFort(process.env.CODE_COFFRE_FORT);

console.log(coffreFort.deverrouiller(process.env.CODE_COFFRE_FORT));
console.log(maison.afficherMaison());
