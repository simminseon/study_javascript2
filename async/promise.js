"use strict";

// producer vs consumer

// 1. producer
const promise = new Promise((resolve, reject) => {
    // 새로운 promise가 만들어지면 콜백함수가 바로 실행됨
    console.log("doing somthing");
    setTimeout(() => {
        resolve("성공!");
        // reject(new Error("에러!"));
    }, [1000]);
});

// 2. consumers : then, catch, finally
promise
    .then((value) => {
        // promise가 정상적으로 수행된다면 실행(resolve에서 파라미터로 받은 값 실행)
        console.log(value);
    })
    .catch((error) => {
        // promise가 정상적으로 수행되지 않았을 경우 실행(reject에서 파라미터로 받은 값 실행)
        console.log(error);
    })
    .finally(() => {
        // promise가 실행되던 안되던 마지막에 무조건 수행되는 함수
        console.log("finally");
    });

// 3. promise chaining
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve("🐔"), 1000);
        // reject("에러");
    });

const getEgg = (hen) =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)));
    });

const cook = (egg) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`));
    });

getHen() //
    .then((hen) => getEgg(hen))
    .catch((error) => "🍗")
    .then((egg) => cook(egg))
    .then((meal) => console.log(meal))
    .catch((error) => console.log(error));


let 프로미스 = new Promise(function(성공, 실패){
    let 어려운연산 = 1+1;
    // 성공(어려운연산)
    실패()
})

프로미스.then((결과) => {
    console.log(결과)
}).catch(() => {
    console.log("실패했어요 ㅜ")
})



// promise 는 그냥 콜백함수 디자인의 대체품일 뿐이다.