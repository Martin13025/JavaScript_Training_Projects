let num = '1000';

(function () {
    let num = '100';
    console.log(num);
}) ();

let result = (function() {
    let num = 'Laurence';
    return num;
}) ();
console.log(result);
console.log(num);

(function (num) {
    console.log(`my name is ${num}`);
})('Laurence');
