export default class Button {
  constructor(x, y, width, height, message) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.message = message;
  }
  displayButton() {
    fill(255);
    rect(this.x, this.y, this.width, this.height, 20);
    push();
    stroke(0);
    textAlign(LEFT);
    textFont("MV Boli");
    // textStyle(ITALIC);
    noFill();
    text(this.message, this.x + 10, this.y + 20);
    pop();
  }
  hitTest() {
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.width &&
      mouseY >= this.y &&
      mouseY <= this.y + this.height
    ) {
      return true;
    } else {
      return false;
    }
  }
}
