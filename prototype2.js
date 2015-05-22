var Plante = function(){};

Plante.prototype.arroser = function(){
  console.info("Verser de l'eau me fait grandir");
}
Plante.prototype.fletrir = function(){
  console.info("C'est la fin de ma vie");
}

var Fleur = function(){};
Fleur.prototype = Plante.prototype;
Fleur.prototype.fleurir = function(){
  console.info("Ma corolle s'ouvre au soleil");
}

var tulipe = new Fleur();
tulipe.arroser();
tulipe.fleurir();
tulipe.fletrir();
