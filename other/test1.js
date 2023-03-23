class Screen {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get diagonal() {
    return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
  }

  set dimensions(definition) {
    var dimensions = definition.split('x');
    this.width = parseInt(dimensions[0]);
    this.height = parseInt(dimensions[1]);
  }
}

var screen = new Screen(0, 0);
screen.dimensions = '500x300';
screen.width = 400;
console.log(screen.diagonal); // Should print 500