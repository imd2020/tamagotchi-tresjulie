export default class Plant {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.pic = loadImage("Alo_klein_neuer_Topf.png");
    this.pic2 = loadImage("Alo_mittel_neuer_Topf.png");
    this.width = width;
    this.height = height;
    this.oftenWatered = 0;
  }
  displayPlant() {
    image(this.pic, this.x, this.y, this.width, this.height);
  }
  displayBigPlant() {
    image(this.pic2, this.x, this.y, this.width, this.height);
  }
  grow() {
    if (this.oftenWatered === 21) {
      this.displayBigPlant();
    }
  }
}
