const user=document.getElementById("usuario");
let password=document.getElementById("contrasena");
const login= document.getElementById("login");

login.addEventListener("click", (e) => {
    e.preventDefault();

    const usuarioInput= user.value;
    const passwordInput= password.value;

    const foundUser = usuarios.find((usuario) => usuario.user===usuarioInput && usuario.password === passwordInput);

    if(foundUser){
        alert("inicio de sesion exitosa");
    }
    else{
        alert("los datos son incorrectos por favor intente de nuevo");
        window.location="index.html"
    }
} )

const usuarios=[
    {
        id:1,
        name:"brayan",
        user:"brayan",
        password:"1234",
    },
    {
        id:1,
        name:"juan",
        user:"juan",
        password:"4321",
    },
]