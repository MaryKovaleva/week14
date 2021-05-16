//let Number1 = prompt('Первое число');
//let Number2 = prompt ('Второе число');//
//alert(+Number1 + +Number2);//

function Sum(a,b){
    return a+b;
}
let result=Sum(document.getElementsById('firstnumber').value,document.getElementById('secondnumber').value);
console.log(result);

function Sub(a,b){
    return a-b;
}
let result=Sub(document.getElementsById('1number').value,document.getElementById('2number').value);
console.log(result);

function Div(a,b){
    return a/b;
}
let result=Div(document.getElementsById('3number').value,document.getElementById('4number').value);
console.log(result);

function Multi(a,b){
    return a*b;
}
let result=Multi(document.getElementsById('Thirdnumber').value,document.getElementById('Fourthnumber').value);
console.log(result);