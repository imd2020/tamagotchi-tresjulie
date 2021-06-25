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
import Thirsty from "./waterbar.js";
import Compliment from "./speechbubble.js";
let gameBackground = loadImage("Alo_GameScreen_neu.png");
let startScreen = loadImage("Alo_Start_Screen.png");
let waterStatus3 = 0;
let waterStatus2 = 0;
let waterStatus1 = 0;
let whenIstartedThisGame = Date.now();
let state = "start";
let waterbar = new Thirsty(100, 200, 30, 200);
let aloPlant = new Plant(0, 320, 150, 200);
let firstButton = new Button(90, 430, 110, 30, "start taking care");
let waterButton = new Button(95, 450, 55, 30, "Water");
let compliments = new Button(640, 450, 90, 30, "Compliments");
let speechbubble = new Compliment(500, 250, 150, 30);
let sparkles = new Compliment(370, 230, 260, 250);

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
    regularDisplay();
    waterStatus1 = 0;
    speechbubble.message = random(speechbubble.randomMessages);
    speechbubble.timer = 2;

    if (aloPlant.howOftenWatered < 5) {
      aloPlant.displayDryPlant();
    } else if (
      aloPlant.howOftenWatered >= 5 &&
      aloPlant.howOftenWatered <= 15
    ) {
      aloPlant.displayDryBigPlant();
    } else if (aloPlant.howOftenWatered >= 16) {
      aloPlant.displayDryVeryBigPlant();
    }
  }

  if (state === "WateredOnce") {
    regularDisplay();
    waterStatus1++;
    waterStatus2 = 0;
    waterbar.waterRise();
    speechbubble.timer = 2; //der Timer muss immer wieder auf 4 gesetzt werden, damit er neu herunter zählen kann
    speechbubble.message = random(speechbubble.randomMessages);

    if (aloPlant.howOftenWatered >= 1 && aloPlant.howOftenWatered < 5) {
      aloPlant.displayPlant();
    } else if (
      aloPlant.howOftenWatered >= 5 &&
      aloPlant.howOftenWatered <= 15
    ) {
      aloPlant.displayBigPlant();
    } else if (aloPlant.howOftenWatered >= 16) {
      aloPlant.displayVeryBigPlant();
    }

    if (waterbar.h < -55 && waterbar.h >= -119) {
      waterbar.h = -55;
    }

    if (waterbar.h < -175 && waterbar.h > -200) {
      waterbar.h = -175;
    }

    if (waterbar.h === -55 && waterStatus1 === 60) {
      waterbar.h = 0;
      state = "gameScreen";
    }
  }
  if (state === "WateredTwice") {
    regularDisplay();
    waterbar.waterRise();
    waterStatus1 = 0;
    waterStatus2++;
    waterStatus3 = 0;
    speechbubble.timer = 2; //der Timer muss immer wieder auf 4 gesetzt werden, damit er neu herunter zählen kann
    speechbubble.message = random(speechbubble.randomMessages);

    if (aloPlant.howOftenWatered < 5) {
      aloPlant.displayPlant();
    } else if (
      aloPlant.howOftenWatered >= 5 &&
      aloPlant.howOftenWatered <= 15
    ) {
      aloPlant.displayBigPlant();
    } else if (aloPlant.howOftenWatered >= 16) {
      aloPlant.displayVeryBigPlant();
    }

    if (waterbar.h < -110 && waterbar.h > -174) {
      waterbar.h = -110;
    }

    if (waterbar.h === -110 && waterStatus2 === 60) {
      waterbar.h = -55;
      state = "WateredOnce";
    }
  }

  if (state === "WateredTripple") {
    regularDisplay();
    waterStatus3++;
    waterStatus2 = 0;
    waterbar.waterRise();
    speechbubble.timer = 2; //der Timer muss immer wieder auf 4 gesetzt werden, damit er neu herunter zählen kann
    speechbubble.message = random(speechbubble.randomMessages);

    if (aloPlant.howOftenWatered < 5) {
      aloPlant.displayPlant();
    } else if (
      aloPlant.howOftenWatered >= 5 &&
      aloPlant.howOftenWatered <= 15
    ) {
      aloPlant.displayBigPlant();
    } else if (aloPlant.howOftenWatered >= 16) {
      aloPlant.displayVeryBigPlant();
    }

    if (waterbar.h < -175 && waterbar.h > -200) {
      waterbar.h = -175;
    }

    if (waterbar.h === -175 && waterStatus3 === 60) {
      waterbar.h = -110;
      state = "WateredTwice";
    }
  }

  if (state === "NiceWords") {
    regularDisplay();
    sparkles.displaySparkles();
    speechbubble.all();

    if (aloPlant.howOftenWatered < 5) {
      aloPlant.displayDryPlant();
    } else if (
      aloPlant.howOftenWatered >= 5 &&
      aloPlant.howOftenWatered <= 15
    ) {
      aloPlant.displayDryBigPlant();
    } else if (aloPlant.howOftenWatered >= 16) {
      aloPlant.displayDryVeryBigPlant();
    }

    if (speechbubble.timer === 0) {
      state = "gameScreen";
    }
  }

  if (state === "NiceWordsOnce") {
    regularDisplay();
    sparkles.displaySparkles();
    waterStatus1 = 0;
    speechbubble.all();

    if (aloPlant.howOftenWatered < 5) {
      aloPlant.displayPlant();
    } else if (
      aloPlant.howOftenWatered >= 5 &&
      aloPlant.howOftenWatered <= 15
    ) {
      aloPlant.displayBigPlant();
    } else if (aloPlant.howOftenWatered >= 16) {
      aloPlant.displayVeryBigPlant();
    }

    if (speechbubble.timer === 0) {
      state = "WateredOnce";
    }
  }
  if (state === "NiceWordsTwice") {
    regularDisplay();
    waterStatus2 = 0;
    speechbubble.all();
    sparkles.displaySparkles();

    if (aloPlant.howOftenWatered < 5) {
      aloPlant.displayPlant();
    } else if (
      aloPlant.howOftenWatered >= 5 &&
      aloPlant.howOftenWatered <= 15
    ) {
      aloPlant.displayBigPlant();
    } else if (aloPlant.howOftenWatered >= 16) {
      aloPlant.displayVeryBigPlant();
    }

    if (speechbubble.timer === 0) {
      state = "WateredTwice";
    }
  }

  if (state === "NiceWordsTripple") {
    regularDisplay();
    waterStatus3 = 0;
    speechbubble.all();
    sparkles.displaySparkles();

    if (aloPlant.howOftenWatered < 5) {
      aloPlant.displayPlant();
    } else if (
      aloPlant.howOftenWatered >= 5 &&
      aloPlant.howOftenWatered <= 15
    ) {
      aloPlant.displayBigPlant();
    } else if (aloPlant.howOftenWatered >= 16) {
      aloPlant.displayVeryBigPlant();
    }

    if (speechbubble.timer === 0) {
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

    gsap.to(sparkles, {
      y: 260,
      duration: 3,
      ease: "power4.out",
      onComplete: () => {
        sparkles.y = 230;
      },
    });
  }

  if (compliments.hitTest() && state === "WateredOnce") {
    state = "NiceWordsOnce";
    gsap.to(sparkles, {
      y: 260,
      duration: 3,
      ease: "power4.out",
      onComplete: () => {
        sparkles.y = 230;
      },
    });
  }

  if (compliments.hitTest() && state === "WateredTwice") {
    state = "NiceWordsTwice";

    gsap.to(sparkles, {
      y: 260,
      duration: 3,
      ease: "power4.out",
      onComplete: () => {
        sparkles.y = 230;
      },
    });
  }

  if (compliments.hitTest() && state === "WateredTripple") {
    state = "NiceWordsTripple";

    gsap.to(sparkles, {
      y: 260,
      duration: 3,
      ease: "power4.out",
      onComplete: () => {
        sparkles.y = 230;
      },
    });
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
  image(gameBackground, 0, 0, 800, 600);
  waterButton.displayButton();
  compliments.displayButton();
  waterbar.displayWater();
  waterbar.displayBar();
}
