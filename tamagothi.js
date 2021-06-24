window.draw = draw;
window.mouseClicked = mouseClicked;
// import gsap from "./gsap.min.js";
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

//ich brauche wahrscheinlich für die Wasseranzeige einen ganz eigenen Modus
//der Wasserstand muss ja auch in jedem State den aktuellen Stand haben
//sollte ich den Wasserstand vielleicht in einer Variable oder so speichern?
//Die Wasserleiste soll sich in drei Teilen füllen.
import Speechbubble from "./speechbubble.js";
import Button from "./button_Alo.js";
import Plant from "./plant.js";
import Thirsty from "./wasseranzeige.js";
let spielfläche = loadImage("Alo_GameScreen_neu.png");
let startScreen = loadImage("Alo_Start_Screen.png");
let wasserstandTimer3 = 0;
let wasserstandTimer2 = 0;
let wasserstandTimer1 = 0;
let whenIstartedThisGame = Date.now();
let state = "start";
let waterbar = new Thirsty(100, 200, 30, 200);
let aloPlant = new Plant(0, 320, 150, 200);
let firstButton = new Button(90, 430, 110, 30, "start taking care");
let waterButton = new Button(95, 450, 55, 30, "Water");
let compliments = new Button(640, 450, 90, 30, "Compliments");
let sprechblase = new Speechbubble(500, 250, 150, 30);
let sparkles = new Speechbubble(380, 260, 250, 250);

//seconds passend funktioniert noch nicht so
function draw() {
  clear();
  console.log(state);
  // let secondsPassed = (Date.now() - whenIstartedThisGame) / 1000;

  if (state === "start") {
    image(startScreen, 0, 0, 800, 600);
    firstButton.displayButton();
  }
  if (state === "gameScreen") {
    wasserstandTimer1 = 0;
    regularDisplay();
    sprechblase.message = random(sprechblase.randomMessages);
    sprechblase.timer = 2; //der Timer muss immer wieder auf 4 gesetzt werden, damit er neu herunter zählen kann

    if (aloPlant.howOftenWatered < 5) {
      aloPlant.displayDryPlant();
    } else if (aloPlant.howOftenWatered >= 5) {
      aloPlant.displayDryBigPlant();
    }
  }

  if (state === "WateredOnce") {
    regularDisplay();
    wasserstandTimer1++;
    wasserstandTimer2 = 0;
    waterbar.waterRise();
    sprechblase.timer = 2; //der Timer muss immer wieder auf 4 gesetzt werden, damit er neu herunter zählen kann
    sprechblase.message = random(sprechblase.randomMessages);

    if (aloPlant.howOftenWatered >= 1 && aloPlant.howOftenWatered < 5) {
      aloPlant.displayPlant();
    } else if (aloPlant.howOftenWatered >= 5) {
      aloPlant.displayBigPlant();
    }

    if (waterbar.h < -55 && waterbar.h >= -119) {
      waterbar.h = -55;
    }
    if (waterbar.h < -175 && waterbar.h > -200) {
      waterbar.h = -175;
    }
    if (waterbar.h === -55 && wasserstandTimer1 === 60) {
      waterbar.h = 0;
      state = "gameScreen";
    }
  }
  if (state === "WateredTwice") {
    regularDisplay();
    waterbar.waterRise();
    wasserstandTimer1 = 0;
    wasserstandTimer2++;
    wasserstandTimer3 = 0;
    sprechblase.timer = 2; //der Timer muss immer wieder auf 4 gesetzt werden, damit er neu herunter zählen kann
    sprechblase.message = random(sprechblase.randomMessages);

    if (aloPlant.howOftenWatered < 5) {
      aloPlant.displayPlant();
    } else if (aloPlant.howOftenWatered >= 5) {
      aloPlant.displayBigPlant();
    }

    if (waterbar.h < -110 && waterbar.h > -174) {
      waterbar.h = -110;
    }
    if (waterbar.h === -110 && wasserstandTimer2 === 60) {
      waterbar.h = -55;
      state = "WateredOnce";
    }
  }

  if (state === "WateredTripple") {
    regularDisplay();
    wasserstandTimer3++;
    wasserstandTimer2 = 0;
    waterbar.waterRise();
    sprechblase.timer = 2; //der Timer muss immer wieder auf 4 gesetzt werden, damit er neu herunter zählen kann
    sprechblase.message = random(sprechblase.randomMessages);

    if (aloPlant.howOftenWatered < 5) {
      aloPlant.displayPlant();
    } else if (aloPlant.howOftenWatered >= 5) {
      aloPlant.displayBigPlant();
    }

    if (waterbar.h < -175 && waterbar.h > -200) {
      waterbar.h = -175;
    }
    if (waterbar.h === -175 && wasserstandTimer3 === 60) {
      waterbar.h = -110;
      state = "WateredTwice";
    }
  }

  if (state === "NiceWords") {
    //der funktioniert schon ganz gut :)
    regularDisplay();
    sparkles.displaySparkles();
    sprechblase.all();
    if (aloPlant.howOftenWatered < 5) {
      aloPlant.displayDryPlant();
    } else if (aloPlant.howOftenWatered >= 5) {
      aloPlant.displayDryBigPlant();
    }
    if (sprechblase.timer === 0) {
      state = "gameScreen";
    }
  }

  if (state === "NiceWordsOnce") {
    regularDisplay();
    sparkles.displaySparkles();
    wasserstandTimer1 = 0;
    sprechblase.all();

    if (aloPlant.howOftenWatered < 5) {
      aloPlant.displayPlant();
    } else if (aloPlant.howOftenWatered >= 5) {
      aloPlant.displayBigPlant();
    }

    if (sprechblase.timer === 0) {
      state = "WateredOnce";
    }
  }
  if (state === "NiceWordsTwice") {
    regularDisplay();
    wasserstandTimer2 = 0;
    sprechblase.all();
    sparkles.displaySparkles();

    if (aloPlant.howOftenWatered < 5) {
      aloPlant.displayPlant();
    } else if (aloPlant.howOftenWatered >= 5) {
      aloPlant.displayBigPlant();
    }
    if (sprechblase.timer === 0) {
      state = "WateredTwice";
    }
  }

  if (state === "NiceWordsTripple") {
    regularDisplay();
    wasserstandTimer3 = 0;
    sprechblase.all();
    sparkles.displaySparkles();

    if (aloPlant.howOftenWatered < 5) {
      aloPlant.displayPlant();
    } else if (aloPlant.howOftenWatered >= 5) {
      aloPlant.displayBigPlant();
    }
    if (sprechblase.timer === 0) {
      state = "WateredTripple";
    }
  }
}

function mouseClicked() {
  if (firstButton.hitTest()) {
    state = "gameScreen";
    gsap.to(aloPlant, { x: 430, duration: 2.5, ease: "bounce.out" });
  }

  if (waterButton.hitTest() && state === "gameScreen") {
    state = "WateredOnce";
    aloPlant.howOftenWatered++;
  }

  if (state === "WateredOnce" && waterbar.h === -55 && waterButton.hitTest()) {
    state = "WateredTwice";
    waterbar.waterRise();
    aloPlant.howOftenWatered++;
  }
  if (
    state === "WateredTwice" &&
    waterbar.h === -110 &&
    waterButton.hitTest()
  ) {
    state = "WateredTripple";
    waterbar.waterRise();
    aloPlant.howOftenWatered++;
  }

  if (compliments.hitTest() && state === "gameScreen") {
    state = "NiceWords";
    gsap.to(sparkles.displaySparkles(), {
      x: 430,
      duration: 2.5,
      ease: "bounce.out",
    });
  }

  if (compliments.hitTest() && state === "WateredOnce") {
    state = "NiceWordsOnce";
  }
  if (compliments.hitTest() && state === "WateredTwice") {
    state = "NiceWordsTwice";
  }
  if (compliments.hitTest() && state === "WateredTripple") {
    state = "NiceWordsTripple";
  }

  /*Hier habe ich versucht die ganzen ClickEvents schöner und
  übersichtlicher darzustellen,aber das hat leider nicht geklappt*/

  // if (compliments.hitTest()) {
  //   if (state === "gameScreen") {
  //     state === "Komplimente";
  //   }

  //   if (state === "Wassermarsch1") {
  //     state = "Komplimente1";
  //   }

  //   if (state === "Wassermarsch2") {
  //     state = "Komplimente2";
  //   }
  //   if (state === "Wassermarsch3") {
  //     state = "Komplimente3";
  //   }
  // }
}

function regularDisplay() {
  image(spielfläche, 0, 0, 800, 600);
  waterButton.displayButton();
  compliments.displayButton();
  waterbar.displayWater();
  waterbar.displayBar();
}
