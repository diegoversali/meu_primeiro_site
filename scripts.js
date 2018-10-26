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

// telefone, email, nome, sobrenome, foto grande

var r, usuario, email, telefone, nome, sobrenome, fotoGrande;    

fetch('https://randomuser.me/api/')
.then( (resp) => resp.json() )
.then( function(data) {
    r = data.results[0];
    usuario = r.login.username;
    email = r.email;
    telefone = r.cell;
    nome = r.name.first;
    sobrenome = r.name.last;
    fotoGrande = r.picture.large;
    console.log(usuario, email, telefone, nome, sobrenome, fotoGrande,
     r);
	document.getElementById("um").innerHTML = usuario;
	document.getElementById("dois").innerHTML = nome;
	document.getElementById("tres").innerHTML = sobrenome;
	document.getElementById("quatro").innerHTML = telefone;
	document.getElementById("cinco").innerHTML = email;
	document.getElementById("seis").innerHTML = fotoGrande;

});

