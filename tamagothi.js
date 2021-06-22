window.draw = draw;
window.mouseClicked = mouseClicked;
/*Sie sprachen in Ihrer Mail davon, dass wir unsere
persönliche Handschrift verwenden dürfen.
Ich habe meine gefunden: Zu kompliziert gedachter Code, trifft 
auf ein knackiges Zeitmanagement und wird ummantelt von einer
schweren Schicht an Code Qualität. 
Dafür stehe ich mit meinem Namen!
No pair Programming, no copied Code, just random Code trying to be cute 
with a tiny bit of help from Leander */

//WAS ICH NOCH MACHEN MUSS:
//Mit den States klar kommen
//ich brauche wahrscheinlich für die Wasseranzeige einen ganz eigenen Modus
//der Wasserstand muss ja auch in jedem State den aktuellen Stand haben
//sollte ich den Wasserstand vielleicht in einer Variable oder so speichern?
//Der State "einDrittel" funktioniert nicht so
//mit dem habe ich versucht das Genießen (Waterbutton.hitTest()) dreimal durchzuführen
//Die Wasserleiste soll sich in drei Teilen füllen.
//bis jetzt geht nur,das zweimal gießen
//beim dritten Mal klicken springt man auf den Screen davor siehe Zeile 136
let spielfläche = loadImage("Alo_Game_screen.png");
// let wasserstandTimer3 = 0;
// let wasserstandTimer2 = 0;
let state = "start";
import Speechbubble from "./speechbubble.js";
import Button from "./button_Alo.js";
import Plant from "./plant.js";
import Thirsty from "./wasseranzeige.js";
let wasserAnzeige = new Thirsty(100, 200, 30, 200);
let aloPlant = new Plant(400, 320, 150, 200);
let firstButton = new Button(100, 100, 60, 30, "Start");
let waterButton = new Button(95, 450, 60, 30, "Water");
let compliments = new Button(580, 450, 90, 30, "Compliments");
let sprechblase = new Speechbubble(500, 250, 150, 30);

function draw() {
  clear();

  console.log("state=" + state);

  console.log("WasserTimer= " + wasserAnzeige.timer);

  // if (frameCount % 30 === 0 && sprechblase.timer > 0) {
  //   sprechblase.timer = sprechblase.timer - 1;
  // }

  if (state === "start") {
    image(spielfläche, 0, 0, 800, 600);
    firstButton.displayButton();
    aloPlant.displayPlant();
  }
  if (state === "gameScreen") {
    image(spielfläche, 0, 0, 800, 600);
    wasserAnzeige.timer = 5;
    aloPlant.displayPlant();
    sprechblase.timer = 4; //der Timer muss immer wieder auf 4 gesetzt werden, damit er neu herunter zählen kann
    sprechblase.message = random(sprechblase.randomMessages);
    wasserAnzeige.displayBar();
    waterButton.displayButton();
    compliments.displayButton();
    wasserAnzeige.displayWater();
  }

  if (state === "Wassermarsch1") {
    image(spielfläche, 0, 0, 800, 600);
    compliments.displayButton();

    sprechblase.timer = 4; //der Timer muss immer wieder auf 4 gesetzt werden, damit er neu herunter zählen kann
    sprechblase.message = random(sprechblase.randomMessages);
    aloPlant.displayPlant();
    wasserAnzeige.displayBar();
    waterButton.displayButton();
    wasserAnzeige.waterRise();
    // wasserAnzeige.timer = 5;

    if (wasserAnzeige.h < -40 && wasserAnzeige.h >= -119) {
      wasserAnzeige.h = -40;
    }
    if (wasserAnzeige.h < -175 && wasserAnzeige.h > -200) {
      wasserAnzeige.h = -175;
    }
    if (wasserAnzeige.h === -40 && wasserAnzeige.timer === 0) {
      wasserAnzeige.h = 0;
      state = "gameScreen";
    }
  }

  if (state === "Wassermarsch2") {
    image(spielfläche, 0, 0, 800, 600);
    wasserAnzeige.timer = 10;
    // console.log("Timer2= " + wasserstandTimer2);
    // wasserstandTimer2++;
    sprechblase.timer = 4; //der Timer muss immer wieder auf 4 gesetzt werden, damit er neu herunter zählen kann
    sprechblase.message = random(sprechblase.randomMessages);
    // wasserstandTimer3 = 0;
    compliments.displayButton();
    aloPlant.displayPlant();
    wasserAnzeige.displayBar();
    waterButton.displayButton();
    wasserAnzeige.waterRise();
    if (wasserAnzeige.h < -120 && wasserAnzeige.h > -174) {
      wasserAnzeige.h = -120;
    }
    if (wasserAnzeige.h === -120 && wasserAnzeige.timer === 0) {
      wasserAnzeige.h = -40;
      state = "Wassermarsch1";
    }
  }

  if (state === "Wassermarsch3") {
    image(spielfläche, 0, 0, 800, 600);
    wasserAnzeige.timer = 5;
    // wasserstandTimer3++;
    // wasserstandTimer2 = 0;
    // console.log("Timer3= " + wasserstandTimer3);
    compliments.displayButton();
    aloPlant.displayPlant();
    wasserAnzeige.displayBar();
    waterButton.displayButton();
    wasserAnzeige.waterRise();
    if (wasserAnzeige.h < -175 && wasserAnzeige.h > -200) {
      wasserAnzeige.h = -175;
    }
    if (wasserAnzeige.h === -175 && wasserAnzeige.timer === 0) {
      wasserAnzeige.h = -120;
      state = "Wassermarsch2";
    }
  }

  if (state === "Komplimente") {
    //der funktioniert schon ganz gut :)
    image(spielfläche, 0, 0, 800, 600);
    sprechblase.displaySpeech();
    sprechblase.count();
    sprechblase.displayCompliments();
    aloPlant.displayPlant();
    wasserAnzeige.displayBar();
    wasserAnzeige.displayWater();
    waterButton.displayButton();
    compliments.displayButton();
    if (sprechblase.timer === 0) {
      state = "gameScreen";
    }
  }

  if (state === "Komplimente1") {
    //der funktioniert schon ganz gut :)
    image(spielfläche, 0, 0, 800, 600);
    wasserAnzeige.timer = 0;
    sprechblase.displaySpeech();
    sprechblase.count();
    sprechblase.displayCompliments();
    aloPlant.displayPlant();
    wasserAnzeige.displayBar();
    wasserAnzeige.displayWater();
    waterButton.displayButton();
    compliments.displayButton();
    if (sprechblase.timer === 0) {
      state = "Wassermarsch1";
    }
    //achtung hier mit der Wasseranzeige. Die muss den aktuellen Stand behalten
    //vielleicht sollte ich die einfach dann auf jedem Screen einfach einzeln anzeigen lassen
  }
  if (state === "Komplimente2") {
    //der funktioniert schon ganz gut :)
    image(spielfläche, 0, 0, 800, 600);
    // wasserstandTimer2 = 0;
    sprechblase.displaySpeech();
    sprechblase.count();
    sprechblase.displayCompliments();
    aloPlant.displayPlant();
    wasserAnzeige.displayBar();
    wasserAnzeige.displayWater();
    waterButton.displayButton();
    compliments.displayButton();
    if (sprechblase.timer === 0) {
      state = "Wassermarsch2";
    }
  }

  if (state === "Komplimente3") {
    //der funktioniert schon ganz gut :)
    image(spielfläche, 0, 0, 800, 600);
    // wasserstandTimer3 = 0;
    sprechblase.displaySpeech();
    sprechblase.count();
    sprechblase.displayCompliments();
    aloPlant.displayPlant();
    wasserAnzeige.displayBar();
    wasserAnzeige.displayWater();
    waterButton.displayButton();
    compliments.displayButton();
    if (sprechblase.timer === 0) {
      state = "Wassermarsch3";
    }
  }
  if (state === "Komplimente") {
    //der funktioniert schon ganz gut :)
    image(spielfläche, 0, 0, 800, 600);
    // wasserstandTimer3 = 0;
    sprechblase.displaySpeech();
    sprechblase.count();
    sprechblase.displayCompliments();
    aloPlant.displayPlant();
    wasserAnzeige.displayBar();
    wasserAnzeige.displayWater();
    waterButton.displayButton();
    compliments.displayButton();
    if (sprechblase.timer === 0) {
      state = "gameScreen";
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
  if (waterButton.hitTest() && state === "gameScreen") {
    state = "Wassermarsch1";
    // console.log("Wasser gedrückt");
    console.log(wasserAnzeige.h);
  }

  if (compliments.hitTest() && state === "Wassermarsch1") {
    state = "Komplimente1";
    console.log("Kompliment gemacht");
  }

  if (compliments.hitTest() && state === "Wassermarsch2") {
    state = "Komplimente2";
    console.log("Kompliment 2 gemacht");
  }
  if (compliments.hitTest() && state === "Wassermarsch3") {
    state = "Komplimente3";
    console.log("Kompliment 3 gemacht");
  }

  if (compliments.hitTest() && state === "gameScreen") {
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
    console.log("Wasser zwei mal gedrückt");
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
  if (
    state === "Wassermarsch3" &&
    wasserAnzeige.h === -180 &&
    waterButton.hitTest()
  ) {
    wasserAnzeige.h = -180;
  }
}
