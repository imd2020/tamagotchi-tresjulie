import gsap from "./gsap.min.js";
import Button from "./button_Alo.js";
//how far can you kick the ball?
let kick = new Button(30, 80, 60, 30, "Kick");
let ball = {
  x: 50,
  y: 200,
  r: 200,
  g: 200,
  b: 200,
};
function draw() {
  clear();
  console.log(ball.x);
  rect(470, 20, 30, 200);
  fill(ball.r, ball.g, ball.b);
  push();
  noStroke();
  circle(ball.x, ball.y, 30);
  pop();
  kick.displayButton();
}

function mouseClicked() {
  if (kick.hitTest) {
    kickTheBall();
  }
}
function kickTheBall() {
  gsap.to(ball, {
    // ease: "strong.inOut",
    duration: 2,
    // repeat: -1,
    // yoyo: true,
    x: 460,
    r: 200,
    g: 200,
    b: 200,
    onComplete: () => {
      ball.r = 200;
      ball.g = 40;
      ball.b = 80;
      gsap.to(ball, {
        delay: 2,
        duration: 1,
        x: 50,
        r: 200,
        g: 200,
        b: 200,
        // onComplete: () => {
        //   kickTheBall();
        // },
      });
    },
  });
}
