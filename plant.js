export default class Plant {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.pic = loadImage("Alo_klein_neuer_Topf.png");
    this.pic2 = loadImage("Alo_mittel_neuer_Topf.png");
    this.pic1 = loadImage("Alo_klein_trocken.png");
    this.pic3 = loadImage("Alo_mittel_trocken.png");
    this.width = width;
    this.height = height;
    this.howOftenWatered = 0;
  }
  displayDryPlant() {
    image(this.pic1, this.x, this.y, this.width, this.height);
  }
  displayDryBigPlant() {
    image(this.pic3, this.x, this.y, this.width, this.height);
  }

  displayPlant() {
    image(this.pic, this.x, this.y, this.width, this.height);
  }
  displayBigPlant() {
    image(this.pic2, this.x, this.y, this.width, this.height);
  }
  // grow() {
  //   // this.whenIstartedThisGame = Date.now();
  //   // this.secondsPassed = (Date.now() - whenIstartedThisGame) / 1000;
  //   if (this.howOftenWatered < 5) {
  //     this.displayPlant();
  //   } else this.displayBigPlant();
  // }
}
