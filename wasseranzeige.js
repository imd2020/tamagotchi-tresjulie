export default class Thirsty {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.h = 0;
  }
  displayThursty() {
    push();
    noFill();
    strokeWeight(5);
    stroke(255);
    rect(this.x, this.y, this.width, this.height, 20);
    pop();
  }
  displayWaterball(r, g, b) {
    push();
    translate(this.x + this.width / 2, this.y + this.height - 15);
    fill(r, g, b);
    noStroke();
    circle(0, 0, this.width / 2 + 10);
    pop();
  }
  displayWater() {
    //funktioniert irgendwie
    push();
    noStroke();
    fill(50, 180, 200);
    translate(this.x, this.y + this.height - 3);
    rect(2, 0, this.width - 4, this.h - 20, 20);
    pop();
  }
  waterRise() {
    //funktioniert
    push();
    noStroke();
    fill(50, 180, 200);
    translate(this.x, this.y + this.height - 3);
    rect(2, 0, this.width - 4, this.h - 20, 20);
    this.h = this.h - 2;
    pop();
    if (this.h < -40) {
      this.h = -40;
    }
  }
  waterStop() {
    if (this.h > this.y - 100) {
      this.h = this.h;
      console.log("stopp");
      return true;
    }
  }
}
// waterRise(r, g, b) {
//   for (let i = 0; i < 55; i = i + 5) {
//     push();
//     translate(this.x + this.width / 2, this.y + this.height - 15);
//     fill(r, g, b);
//     noStroke();
//     circle(0, 0 - i, this.width / 2 + 10);
//     pop();
//   }
// }

// waterRise(r, g, b) {
//   let y = 0;
//   let z = 0;
//   y = y - 50;
//   z = z + 20;
//   push();
//   translate(this.x + this.width / 2, this.y + this.height - 15);
//   fill(r, g, b);
//   noStroke();
//   circle(0, y, this.width / 2 + 10);
//   pop();
// }
