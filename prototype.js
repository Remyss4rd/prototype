var a = {
  x: 10,
  calculate: function (z) {
    return this.x + this.y + z
  }
};

var b = {
  y: 20,
  __proto__: a
};

var c = {
  y: 30,
  __proto__: a
};

// appel de la méthode héritée
console.info(b.calculate(30)); // 60
console.info(c.calculate(40)); // 80
console.info(b.x); // 10
