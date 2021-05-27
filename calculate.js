

function Sum(a,b){
    return a+b;
}

function CalcSum() {
let result=Sum(document.getElementsById('firstnumber').value, document.getElementById('secondnumber').value);
document.getElementById("Sum").value = result;
}

function Sub(a,b){
    return a-b;
}

function CalcSub() {
    let result=Sub(document.getElementsById('1number').value,document.getElementById('2number').value);
document.getElementById("Sub").value = result;
}


function Div(a,b){
    return a/b;
}

function CalcDiv() {
let result=Div(document.getElementsById('3number').value,document.getElementById('4number').value);
document.getElementById("Div").value = result;}

function Multi(a,b){
    return a*b;
}

function ClacMulti() {
let result=Multi(document.getElementsById('5number').value,document.getElementById('6number').value);
document.getElementById("5number").value = result;}