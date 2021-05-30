

function Sum(a,b){
    return +a + +b;
}

function CalcSum() {
let result=Sum(document.getElementById('firstnumber').value, document.getElementById('secondnumber').value);
document.getElementById("Sum").value = result;
}

function Sub(a,b){
    return a-b;
}

function CalcSub() {
    let result=Sub(document.getElementById('1number').value,document.getElementById('2number').value);
document.getElementById("Sub").value = result;
}


function Div(a,b){
    return a/b;
}

function CalcDiv() {
    let firstnumber = document.getElementById("3number");
let result=Div(document.getElementById('3number').value,document.getElementById('4number').value);
document.getElementById("Div").value = result;

If (firstnumber.value == "0"); {
    document.getElementById('ErrorMessage')
    .innerHTML+= "На ноль делить нельзя!";}
}

function Multi(a,b){
    return a*b;
}

function CalcMulti() {
let result=Multi(document.getElementById('5number').value,document.getElementById('6number').value);
document.getElementById("Multi").value = result;
}