// 1. Copy and paste your prototype in here and refactor into class syntax.
console.log("===== Classes =====");

function CuboisMaker(length, width, height) {
  this.length = length;
  this.width = width;
  this.height = height;
}

CuboisMaker.prototype.volume = function () {
  const formula = this.length * this.width * this.height;

  return formula;
};

CuboisMaker.prototype.surfaceArea = function () {
  const formula = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);

  return formula;
};

class CuboisMakerClass {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  volume() {
    const formula = this.length * this.width * this.height;

    return formula;
  }

  surfaceArea() {
    const formula = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);

    return formula;
  }
}

const cuboid2 = new CuboisMakerClass(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
