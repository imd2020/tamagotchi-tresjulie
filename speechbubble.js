export default class Speechbubble {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.timer = 2;
    this.randomMessages = [
      "Beautiful plant <3",
      "Grow, grow! You got this",
      "You look awesome!",
      "happy plant, happy me",
      "Please don't die...",
      "I think...I like you",
      "I'm sitting here..",
      "You're beautiful",
    ];
    this.message = random(this.randomMessages);
  }
  displaySpeech() {
    push();
    fill(255);
    noStroke();
    rect(this.x, this.y, this.width, this.height, 30);
    pop();
    push();
    fill(255);
    noStroke();
    translate(this.x + this.width / 5, this.y + this.height - 2);
    triangle(0, 0, 10, 0, 0, 20);
    pop();
  }
  displayCompliments() {
    push();
    fill(0);
    textSize(12);
    text(this.message, this.x + 10, this.y + 20);
    pop();
  }
  count() {
    //framecount wird erst beim klicken ausgelöst bzw. ist dann direkt gleich 0
    // der frameCount ist in der draw funktion 30, 30 durch 30 macht 0, quasi eine Sekunde
    //frame Count durch 60 würde es doppelt solange brauchen weil der code immer
    //wieder nach oben springt und durch liest und der framecount immer wieder neu gezählt wird
    if (frameCount % 30 === 0 && this.timer > 0) {
      this.timer = this.timer - 1;
    }
  }
  all() {
    this.displaySpeech();
    this.displayCompliments();
    this.count();
  }
}
//Speechbubble Zeitgesteuert anzeigen lassen
