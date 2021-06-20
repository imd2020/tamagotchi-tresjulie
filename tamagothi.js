/*darf meine persönliche Handschrift aus ganz 
vielen Booleans und strings bestehen? ;) */

let state = "start";
import Speechbubble from "./speechbubble.js";
import Button from "./button_Alo.js";
import Plant from "./plant.js";
import Thirsty from "./wasseranzeige.js";
let wasserAnzeige = new Thirsty(100, 200, 30, 200);
let aloPlant = new Plant(100, 100, 400, 350);
let firstButton = new Button(100, 100, "Start");
let waterButton = new Button(300, 450, "Wasser");
let compliments = new Button(100, 450, "Compliments");
let sprechblase = new Speechbubble(350, 80, 150, 30);

function draw() {
  clear();
  if (state === "start") {
    firstButton.displayButton();
  }
  if (state === "gameScreen") {
    wasserAnzeige.displayThursty();
    aloPlant.displayPlant();
    wasserAnzeige.displayWater();
    waterButton.displayButton();
    compliments.displayButton();
  }
  if (state === "Wassermarsch") {
    aloPlant.displayPlant();
    wasserAnzeige.displayThursty();
    waterButton.displayButton();
    wasserAnzeige.waterRise();
    compliments.displayButton();
  }

  if (state === "Komplimente") {
    sprechblase.displaySpeech();
    sprechblase.count();
    aloPlant.displayPlant();
    wasserAnzeige.displayThursty();
    wasserAnzeige.displayWater();
    waterButton.displayButton();
    compliments.displayButton();
    if (sprechblase.timer == 0) {
      state = "gameScreen";
      //achtung hier mit der Wasseranzeige. Die muss den aktuellen Stand behalten
      //vielleicht sollte ich die einfach dann auf jedem Screen einfach einzeln anzeigen lassen
    }
  }
}

// console.log(new Date());
// new date.valueOf();

// andere state Lösung mit Variabeln
//Variabeln für Zustände

function mouseClicked() {
  if (firstButton.hitTest()) {
    state = "gameScreen";
  }

  if (waterButton.hitTest()) {
    state = "Wassermarsch";
    console.log("Wasser gedrückt");
  }
  if (waterButton.hitTest() && this.h === -40) {
    console.log("Button nochmal gedrückt");
    this.h = this.h - 20;
  }
  if (compliments.hitTest()) {
    state = "Komplimente";
    console.log("Kompliment gemacht");
  }

  // if (state === "Wassermarsch" && waterButton.hitTest()) {
  //   console.log("Wasser zweimal gedrückt");
  //   wasserAnzeige.waterRise();
  // }
}
