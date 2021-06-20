export default class Speechbubble {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  displaySpeech() {
    fill(255);
    rect(this.x, this.y, this.width, this.height, 30);
  }
}
//Speechbubble Zeitgesteuert anzeigen lassen
