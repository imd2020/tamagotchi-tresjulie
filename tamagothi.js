window.draw = draw;
window.mouseClicked = mouseClicked;
import gsap from "./gsap.min.js";
/*Sie sprachen in Ihrer Mail davon, dass wir unsere
persönliche Handschrift verwenden dürfen.
Ich habe meine gefunden: Zu kompliziert gedachter Code, trifft 
auf ein knackiges Zeitmanagement und wird ummantelt von einer
schweren Schicht an Code Qualität. 
Dafür stehe ich mit meinem Namen!
No pair Programming, no copied Code, just random Code trying to be cute 
with a tiny bit of help from Leander */

// console.log(new Date());
// new date.valueOf();

//WAS ICH NOCH MACHEN MUSS:
//Mit den States klar kommen
//ich brauche wahrscheinlich für die Wasseranzeige einen ganz eigenen Modus
//der Wasserstand muss ja auch in jedem State den aktuellen Stand haben
//sollte ich den Wasserstand vielleicht in einer Variable oder so speichern?
//Die Wasserleiste soll sich in drei Teilen füllen.

let spielfläche = loadImage("Alo_GameScreen_neu.png");
let startScreen = loadImage("Alo_Start_Screen.png");
let wasserstandTimer3 = 0;
let wasserstandTimer2 = 0;
let wasserstandTimer1 = 0;
let whenIstartedThisGame = Date.now();
let state = "start";
import Speechbubble from "./speechbubble.js";
import Button from "./button_Alo.js";
import Plant from "./plant.js";
import Thirsty from "./wasseranzeige.js";
let wasserAnzeige = new Thirsty(100, 200, 30, 200);
let aloPlant = new Plant(0, 320, 150, 200);
let firstButton = new Button(100, 100, 60, 30, "Start");
let waterButton = new Button(95, 450, 60, 30, "Water");
let compliments = new Button(580, 450, 90, 30, "Compliments");
let sprechblase = new Speechbubble(500, 250, 150, 30);

//seconds passend funktioniert noch nicht so
function draw() {
  clear();
  let secondsPassed = (Date.now() - whenIstartedThisGame) / 1000;
  console.log("Hitter=" + aloPlant.howOftenWatered);
  console.log("Seconds=" + secondsPassed);

  // console.log("state=" + state);
  // console.log("Wasser= " + wasserAnzeige.h);
  // aloPlant.grow();
  // if (aloPlant.growTimer === 0) {
  //   aloPlant.displayBigPlant();
  // }
  // console.log("ALoTimer=" + aloPlant.growTimer);

  if (state === "start") {
    image(startScreen, 0, 0, 800, 600);
    firstButton.displayButton();
    // aloPlant.displayPlant();
  }
  if (state === "gameScreen") {
    image(spielfläche, 0, 0, 800, 600);
    wasserstandTimer1 = 0;
    console.log(aloPlant.x);

    if (aloPlant.howOftenWatered < 5) {
      aloPlant.displayPlant();
    } else if (aloPlant.howOftenWatered > 5 && aloPlant.howOftenWatered < 10) {
      aloPlant.displayBigPlant();
    }
    sprechblase.timer = 4; //der Timer muss immer wieder auf 4 gesetzt werden, damit er neu herunter zählen kann
    sprechblase.message = random(sprechblase.randomMessages);
    wasserAnzeige.displayBar();
    waterButton.displayButton();
    compliments.displayButton();
    wasserAnzeige.displayWater();
  }

  if (state === "Wassermarsch1") {
    image(spielfläche, 0, 0, 800, 600);
    sprechblase.message = random(sprechblase.randomMessages);
    compliments.displayButton();
    wasserstandTimer1++;
    console.log("Timer1=" + wasserstandTimer1);
    wasserstandTimer2 = 0;
    sprechblase.timer = 4; //der Timer muss immer wieder auf 4 gesetzt werden, damit er neu herunter zählen kann
    sprechblase.message = random(sprechblase.randomMessages);
    // aloPlant.grow();
    wasserAnzeige.displayBar();
    waterButton.displayButton();
    wasserAnzeige.waterRise();

    if (aloPlant.howOftenWatered < 5) {
      aloPlant.displayPlant();
    } else if (aloPlant.howOftenWatered >= 5 && aloPlant.howOftenWatered < 10) {
      aloPlant.displayBigPlant();
    }

    if (wasserAnzeige.h < -55 && wasserAnzeige.h >= -119) {
      wasserAnzeige.h = -55;
    }
    if (wasserAnzeige.h < -175 && wasserAnzeige.h > -200) {
      wasserAnzeige.h = -175;
    }
    if (wasserAnzeige.h === -55 && wasserstandTimer1 === 60) {
      wasserAnzeige.h = 0;
      state = "gameScreen";
    }
  }
  if (state === "Wassermarsch2") {
    image(spielfläche, 0, 0, 800, 600);
    sprechblase.message = random(sprechblase.randomMessages);
    console.log("Timer2= " + wasserstandTimer2);
    wasserstandTimer1 = 0;
    wasserstandTimer2++;
    sprechblase.timer = 4; //der Timer muss immer wieder auf 4 gesetzt werden, damit er neu herunter zählen kann
    sprechblase.message = random(sprechblase.randomMessages);
    wasserstandTimer3 = 0;
    compliments.displayButton();
    // aloPlant.displayPlant();
    // aloPlant.grow();
    if (aloPlant.howOftenWatered < 5) {
      aloPlant.displayPlant();
    } else if (aloPlant.howOftenWatered > 5 && aloPlant.howOftenWatered < 10) {
      aloPlant.displayBigPlant();
    }
    wasserAnzeige.displayBar();
    waterButton.displayButton();
    wasserAnzeige.waterRise();
    if (wasserAnzeige.h < -110 && wasserAnzeige.h > -174) {
      wasserAnzeige.h = -110;
    }
    if (wasserAnzeige.h === -110 && wasserstandTimer2 === 60) {
      wasserAnzeige.h = -55;
      state = "Wassermarsch1";
    }
  }

  if (state === "Wassermarsch3") {
    image(spielfläche, 0, 0, 800, 600);
    sprechblase.message = random(sprechblase.randomMessages);
    wasserstandTimer3++;
    wasserstandTimer2 = 0;
    console.log("Timer3= " + wasserstandTimer3);
    compliments.displayButton();

    // aloPlant.displayPlant();
    // aloPlant.grow();
    if (aloPlant.howOftenWatered < 5) {
      aloPlant.displayPlant();
    } else if (aloPlant.howOftenWatered > 5 && aloPlant.howOftenWatered < 10) {
      aloPlant.displayBigPlant();
    }
    wasserAnzeige.displayBar();
    waterButton.displayButton();
    wasserAnzeige.waterRise();
    if (wasserAnzeige.h < -175 && wasserAnzeige.h > -200) {
      wasserAnzeige.h = -175;
    }
    if (wasserAnzeige.h === -175 && wasserstandTimer3 === 60) {
      wasserAnzeige.h = -110;
      state = "Wassermarsch2";
    }
  }

  if (state === "Komplimente") {
    //der funktioniert schon ganz gut :)
    image(spielfläche, 0, 0, 800, 600);

    sprechblase.displaySpeech();
    sprechblase.count();
    sprechblase.displayCompliments();
    if (aloPlant.howOftenWatered < 5) {
      aloPlant.displayPlant();
    } else if (aloPlant.howOftenWatered >= 5 && aloPlant.howOftenWatered < 10) {
      aloPlant.displayBigPlant();
    }
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

    wasserstandTimer1 = 0;
    sprechblase.displaySpeech();
    sprechblase.count();
    sprechblase.displayCompliments();
    if (aloPlant.howOftenWatered < 5) {
      aloPlant.displayPlant();
    } else if (aloPlant.howOftenWatered > 5 && aloPlant.howOftenWatered < 10) {
      aloPlant.displayBigPlant();
    }
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

    wasserstandTimer2 = 0;
    sprechblase.displaySpeech();
    sprechblase.count();
    sprechblase.displayCompliments();
    if (aloPlant.howOftenWatered < 5) {
      aloPlant.displayPlant();
    } else if (aloPlant.howOftenWatered > 5 && aloPlant.howOftenWatered < 10) {
      aloPlant.displayBigPlant();
    }
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

    wasserstandTimer3 = 0;
    sprechblase.displaySpeech();
    sprechblase.count();
    sprechblase.displayCompliments();
    if (aloPlant.howOftenWatered < 5) {
      aloPlant.displayPlant();
    } else if (aloPlant.howOftenWatered > 5 && aloPlant.howOftenWatered < 10) {
      aloPlant.displayBigPlant();
    }
    wasserAnzeige.displayBar();
    wasserAnzeige.displayWater();
    waterButton.displayButton();
    compliments.displayButton();
    if (sprechblase.timer === 0) {
      state = "Wassermarsch3";
    }
  }
}

function mouseClicked() {
  if (firstButton.hitTest()) {
    state = "gameScreen";
    gsap.to(aloPlant, { x: 430, duration: 2.5, ease: "bounce.in" });
  }

  if (waterButton.hitTest() && state === "gameScreen") {
    state = "Wassermarsch1";
    aloPlant.howOftenWatered++;
  }
  if (
    state === "Wassermarsch1" &&
    wasserAnzeige.h === -55 &&
    waterButton.hitTest()
  ) {
    state = "Wassermarsch2";
    wasserAnzeige.waterRise();
    console.log("Wasser zwei mal gedrückt");
    aloPlant.howOftenWatered++;
  }
  if (
    state === "Wassermarsch2" &&
    wasserAnzeige.h === -110 &&
    waterButton.hitTest()
  ) {
    state = "Wassermarsch3";
    wasserAnzeige.waterRise();
    console.log("Wasser zum dritten Mal gedrückt");
    aloPlant.howOftenWatered++;
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
}
