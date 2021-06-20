export default class Speechbubble {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.timer = 3;
    this.randomMessages = ["Beautiful", "Grow!", "Awesome job", "happy Plant"];
    this.message = random(this.randomMessages);
  }
  displaySpeech() {
    fill(255);
    rect(this.x, this.y, this.width, this.height, 30);
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
    text(this.message, this.x + 10, this.y + 10);
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
    this.compliments();
    this.count();
  }
}
//Speechbubble Zeitgesteuert anzeigen lassen
