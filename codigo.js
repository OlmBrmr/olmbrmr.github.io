
/*let user = prompt("INICIE SESION");


if (user == "aqua") {
    alert("Bienvenido " + user)
}

else if (user == "NaiZuu"){
    alert ("Bienvenido " + user)
}

else{
    alert("NO ESTAS REGISTRADO")
}*/

function displayValue() {
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");
    var data1 = "UserName = " + user.value;
    var data2 = "PassWord = " + pass.value;
    alert("Contraseña incorrecta")
    console.log(data1 +" / "+ data2)
  }
