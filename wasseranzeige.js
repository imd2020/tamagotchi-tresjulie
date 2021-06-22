export default class Thirsty {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.h = 0;
    this.timer = 5;
  }
  displayBar() {
    push();
    noFill();
    strokeWeight(5);
    stroke(255);
    rect(this.x, this.y, this.width, this.height, 20);
    pop();
  }

  displayWater() {
    //funktioniert irgendwie
    push();
    noStroke();
    fill(50, 180, 200);
    translate(this.x, this.y + this.height - 3);
    rotate(PI);
    rect(-this.width + 2, 0, this.width - 4, Math.abs(this.h - 20), 20);
    pop();
  }
  waterRise() {
    //funktioniert
    push();
    noStroke();
    fill(50, 180, 200);
    translate(this.x, this.y + this.height - 3);
    rotate(PI);
    rect(-this.width + 2, 0, this.width - 4, Math.abs(this.h - 20), 20);
    this.h = this.h - 2;
    pop();
    if (frameCount % 30 === 0 && this.timer > 0) {
      this.timer--;
    }
  }
}
