const $tbody = document.querySelector("#table tbody");
const $result = document.querySelector("#result");
const row = 10;
const cell = 10;
const mine = 10;
const CODE = {
    NORMAL: -1,
    QUESTION: -2,
    FLAG: -3,
    QUESTION_MINE: -4,
    FLAG_MINE: -5,
    MINE: -6,
    OPENED: 0, // 0 이상이면 오두 열린 칸
};

function plantMine() {}
function drawTable() {
    for (let j = 0; j < row; j++) {
        const tr = document.createElement("tr");
        $tbody.append(tr);
        for (let i = 0; i < cell; i++) {
            const td = document.createElement("td");
            tr.appendChild(td);
        }
    }
}

drawTable();
const candidate = Array(cell * row)
    .fill()
    .map((data, i) => {
        return i;
    });
const shuffle = [];

while (candidate.length > row * cell - mine) {
    const choosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
    shuffle.push(choosen);
}

console.log("shuffle", shuffle);
const data = [];
for (let i = 0; i < row; i++) {
    const rowData = [];
    data.push(rowData);
    for (let j = 0; j < cell; j++) {
        // const cellData = [];
        rowData.push(CODE.NORMAL);
    }
}
data.map((data) => {
    data;
});

console.log(data);
