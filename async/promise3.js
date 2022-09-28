var 프로미스 =  ajax해주는함수('https://codingapple1.github.io/hello.txt');
// $.ajax({
//     type : 'GET',
//     url : 'https://codingapple1.github.io/hello.txt'
//   }).done(function(결과) {
//     resolve(결과)
//   })
// });

// var 프로미스2 = new Promise((resolve,reject ) => {
//     $.ajax({
//         type : 'GET',
//         url : 'https://codingapple1.github.io/hello2.txt'
//       }).done(function(결과) {
//         resolve(결과)
//       })
    // });
    


  
//   $.get('URL 경로')
프로미스.then( (결과) => {
    console.log(결과)

    return ajax해주는함수('https://codingapple1.github.io/hello2.txt');
}).then((결과) => {
    console.log(결과)  
})

function ajax해주는함수(url) {
    return new Promise( (resolve, reject) => {
        $.ajax({
            type : 'GET',
            url : url
        }).done(function(결과) {
            resolve(결과)
        })
    })
}