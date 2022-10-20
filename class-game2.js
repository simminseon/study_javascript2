var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

class Game {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(color) {
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
class Dino extends Game {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
}

class Cactus extends Game {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
}
const dino = new Dino(10, 200, 50, 50);

let timer = 0;
let cactusList = [];
let jumpSwitch = false;
let jumpTimer = 0;
let animation;
function 프레임마다실행할거() {
  animation = requestAnimationFrame(프레임마다실행할거);
  timer++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 60 === 0) {
    const cactus = new Cactus(500, 200, 50, 50);

    cactusList.push(cactus);
    // console.log(cactusList)
  }

  cactusList.forEach((v, i, a) => {
    if (v.x < 0) {
      a.splice(0, 1);
    }

    v.x--;
    v.draw("green");

    if (v.x - (dino.x + dino.width) < 0 && v.y - (dino.y + dino.height) < 0) {
      cancelAnimationFrame(animation);
      const test = document.createElement("button");
      test.innerText = "다시 시작!";
      document.querySelector("body").appendChild(test);
      test.addEventListener("click", function () {
        프레임마다실행할거();
      });
    }
  });

  if (jumpSwitch) {
    dino.y--;
    jumpTimer++;
  }

  if (!jumpSwitch) {
    if (dino.y < 200) {
      dino.y++;
    }
  }
  if (jumpTimer > 100) {
    jumpSwitch = false;
    jumpTimer = 0;
  }
  dino.draw("red");
  console.log(animation);
  // console.log(jumpTimer)
}

document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    jumpSwitch = true;
  }
});

프레임마다실행할거();
