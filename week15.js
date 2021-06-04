function check()
{let name = document.getElementById("exampleInputName");
let email = document.getElementById("exampleInputEmail1");
let surname = document.getElementById("exampleInputSurname");
let password = document.getElementById("exampleInputPassword1");
let password2 = document.getElementById("exampleInputPassword2");

document.getElementById('ErrorMessage')
.innerHTML = "";

if (name.value == "") {
document.getElementById('ErrorMessage')
.innerHTML+= "Ваше имя не заполненно<br>";}

if (email.value == "") {
document.getElementById('ErrorMessage')
.innerHTML+= "Ваша почта не заполненна<br>";}

if (surname.value == "") {
document.getElementById('ErrorMessage')
.innerHTML+= "Ваша фамилия не заполненна<br>";}

if (password.value == "") {
document.getElementById('ErrorMessage')
.innerHTML+= "Ваш пароль не заполнен<br>";}

if (password.value.length<=10 && password.value == "" ) {
document.getElementById('ErrorMessage')
.innerHTML+= "Ваш пароль слишком короткий<br>";}

if (password2.value == ""){
document.getElementById('ErrorMessage')
.innerHTML+= "Допущена ошибка в повторе пароля";
}

}