export default class Plant {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.pic = loadImage("Projekt.png");
    this.width = width;
    this.height = height;
  }
  displayPlant() {
    image(this.pic, this.x, this.y, this.width, this.height);
  }
}
