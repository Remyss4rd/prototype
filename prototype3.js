// Définition du prototype qui servira à la construction de l'objet
var chateau = {
  construire : function(){
    console.info("Ma construction est terminée");
  }
};

// Nouvel objet
var versailles = Object.create(chateau,
  {
    nom : {value:"Versailles", writable : false}
  }
);

versailles.construire();

// Test de changement de la propriété 'nom'
versailles.nom = "Vincennes";

console.info(versailles.nom); // toujours Versailles car la valeur n'est pas
// modifiable (writable:false)
