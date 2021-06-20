//Button Größe flexibel machen
export default class Button {
  constructor(x, y, message) {
    this.x = x;
    this.y = y;
    this.message = message;
  }
  displayButton() {
    fill(255);
    rect(this.x, this.y, 90, 30, 20);
    push();
    stroke(0);
    noFill();
    text(this.message, this.x + 30, this.y + 20);
    pop();
  }
  hitTest() {
    if (
      mouseX >= this.x &&
      mouseX <= this.x + 90 &&
      mouseY >= this.y &&
      mouseY <= this.y + 30
    ) {
      return true;
    } else {
      return false;
    }
  }
}

//button grau machen und andere Typo
