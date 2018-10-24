// var btn1 = document.getElementById("btn-1");
// var btn2 = document.getElementById("btn-2");
// var btn3 = document.getElementById("btn-3");

// btn1.addEventListener('click', function(){ 
    
// 	alert("botao 1");

// }, false);

// btn2.addEventListener('click', function(){ 
    
// 	alert("botao 2");

// }, false);

// btn3.addEventListener('click', function(){ 
    
// 	alert("botao 3");

// }, false);

// 0var users = fetch('https://randomuser.me/api/');

var r, usuario, email, telefone;    

fetch('https://randomuser.me/api/')
.then( (resp) => resp.json() )
.then( function(data) {
    r = data.results[0];
    usuario = r.login.username;
    console.log(r, usuario);
});
