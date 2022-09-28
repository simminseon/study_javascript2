var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var dino = {
    x: 10,
    y: 200,
    width: 50,
    height: 50,
    draw() {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
};

class Cactus {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

let timer = 0;
let cactus여러개 = [];
let jumpSwitch = false;
let 점프timer = 0;
let animation;
function 프레임마다실행할거() {
    animation = requestAnimationFrame(프레임마다실행할거); // 1초에 60번 코드를 실행하는 함수
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (timer % 200 === 0) {
        // 120 프레임마다 장애물 소환
        var cactus = new Cactus();
        cactus여러개.push(cactus);
    }

    cactus여러개.forEach((v, i, a) => {
        if (v.x < 0) {
            a.splice(i, 1);
        }
        v.x--;

        충돌확인코드(dino, v);
        v.draw();
    });
    if (jumpSwitch) {
        dino.y--;
        점프timer++;
    }
    if (!jumpSwitch) {
        if (dino.y < 200) {
            dino.y++;
        }
    }
    if (점프timer > 100) {
        jumpSwitch = false;
        점프timer = 0;
    }

    dino.draw();
}

프레임마다실행할거();

function 충돌확인코드(dino, cactus) {
    let x축차이 = cactus.x - (dino.x + dino.width);
    let y축차이 = cactus.y - (dino.y + dino.height);

    if (x축차이 < 0 && y축차이 < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animation);
    }
}

document.addEventListener("keydown", function (e) {
    if (e.code === "Space") {
        jumpSwitch = true;
    }
});
