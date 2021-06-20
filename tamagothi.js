/*darf meine persönliche Handschrift aus ganz 
vielen Booleans und strings bestehen? ;) */
let wasserStand = "leer";
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
  console.log(wasserStand);
  if (state === "start") {
    firstButton.displayButton();
  }
  if (state === "gameScreen") {
    sprechblase.timer = 3;
    sprechblase.message = random(sprechblase.randomMessages);
    wasserAnzeige.displayBar();
    aloPlant.displayPlant();
    wasserAnzeige.displayWater();
    waterButton.displayButton();
    compliments.displayButton();
  }
  if (state === "Wassermarsch1") {
    compliments.displayButton();
    aloPlant.displayPlant();
    wasserAnzeige.displayBar();
    waterButton.displayButton();
    wasserAnzeige.waterRise();

    if (wasserAnzeige.h < -40) {
      wasserAnzeige.h = -40;
      wasserStand = "einDrittel";
    }
    if (wasserStand === "einDrittel") {
      wasserAnzeige.h = -40;
    }

    //nur raus gemacht weil nervig
    if (wasserAnzeige.h === -40 && wasserStand === "einDrittel") {
      wasserAnzeige.h = wasserAnzeige.h + 60;
    }
  }
  if (state === "Wassermarsch2") {
    wasserAnzeige.displayBar();
    waterButton.displayButton();
    wasserAnzeige.waterRise();
    if (wasserAnzeige.h < -120) {
      wasserAnzeige.h = -120;
    }

    if (state === "Wassermarsch3") {
      wasserAnzeige.displayBar();
      waterButton.displayButton();
      wasserAnzeige.waterRise();
      if (wasserAnzeige.h < -180) {
        wasserAnzeige.h = -180;
      }
    }
  }
  if (state === "Komplimente") {
    sprechblase.displaySpeech();
    sprechblase.count();
    sprechblase.displayCompliments();
    aloPlant.displayPlant();
    wasserAnzeige.displayBar();
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
    state = "Wassermarsch1";
    console.log("Wasser gedrückt");
  }
  if (compliments.hitTest()) {
    state = "Komplimente";
    console.log("Kompliment gemacht");
  }
  if (
    state === "Wassermarsch1" &&
    wasserAnzeige.h === -40 &&
    waterButton.hitTest()
  ) {
    state = "Wassermarsch2";
    wasserAnzeige.waterRise();
    console.log("Wasser nochmal gedrückt");
  }

  if (
    state === "Wassermarsch2" &&
    wasserAnzeige.h === -120 &&
    waterButton.hitTest()
  ) {
    state = "Wassermarsch3";
    wasserAnzeige.waterRise();
    console.log("Wasser zum dritten Mal gedrückt");
  }

  //ich überschreibe hier nicht die Wasseranzeige.h sondern legen
  //nur States über States und deswgen springe ich auch von
  //wassermarsch2 nicht auf Wassermarsch3 weil im Hintergrund
  //immer noch die Zeile 99 ausgeführt wird
  //das ist die Aktion wo "Wasser nochmal gedrückt" in
  //der console steht
}
