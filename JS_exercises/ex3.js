

let pr = new Promise(function (resolve, reject) {
    let num = Math.round(Math.random() * 10);
    if (num % 2 === 0)
        setTimeout(function () { reject() }, 10);
    else
        setTimeout(function () { resolve() }, 10);
})

pr.then(console.log(pr))
    .then(console.log('Process'))
    .catch(err => { console.log('It is rejected' + err) });