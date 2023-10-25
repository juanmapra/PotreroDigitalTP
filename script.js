function darkmode(){
    document.getElementById('main').style.backgroundColor = "#121212";
    document.getElementById('main').style.color = "#FFFFFF";

    document.getElementById('nav').style.backgroundImage = "url()";
    document.getElementById('nav').style.backgroundColor = "#121212";
    document.getElementById('nav').style.color = "#FFFFFF";

    document.getElementById('aside').style.backgroundColor = "#121212";

    document.getElementById('section0').style.backgroundColor = "#121212";
    document.getElementById('section1').style.backgroundColor = "#121212";

    document.getElementById('footer').style.backgroundColor = "#121212";

    document.getElementById('cardBody0').style.backgroundColor = "#121212"
    document.getElementById('cardBody0').style.color = "#FFFFFF"
    document.getElementById('cardBody1').style.backgroundColor = "#121212"
    document.getElementById('cardBody1').style.color = "#FFFFFF"
    document.getElementById('cardBody2').style.backgroundColor = "#121212"
    document.getElementById('cardBody2').style.color = "#FFFFFF"
    document.getElementById('cardBody3').style.backgroundColor = "#121212"
    document.getElementById('cardBody3').style.color = "#FFFFFF"

    document.getElementById('btncontactos').classList.add("btn-light")
    document.getElementById('btncontactos').classList.remove("btn-dark")

    document.getElementById('darkmodebtn').style.display = 'none';
    document.getElementById('lightmodebtn').style.display = 'inline-block';
}

function lightmode(){
    document.getElementById('main').style.backgroundColor = "#cccacc";
    document.getElementById('main').style.color = "#000000";

    document.getElementById('nav').style.backgroundImage = "linear-gradient(to bottom, rgba(23,18,18,1), rgba(204,202,204,1)";
    document.getElementById('nav').style.backgroundColor = "transparent";
    document.getElementById('nav').style.color = "#000000";

    document.getElementById('aside').style.backgroundColor = "#cccacc";

    document.getElementById('section0').style.backgroundColor = "#cccacc";
    document.getElementById('section1').style.backgroundColor = "#cccacc";

    document.getElementById('footer').style.backgroundColor = "#171212";

    document.getElementById('cardBody0').style.backgroundColor = "#FFFFFF"
    document.getElementById('cardBody0').style.color = "#000000"
    document.getElementById('cardBody1').style.backgroundColor = "#FFFFFF"
    document.getElementById('cardBody1').style.color = "#000000"
    document.getElementById('cardBody2').style.backgroundColor = "#FFFFFF"
    document.getElementById('cardBody2').style.color = "#000000"
    document.getElementById('cardBody3').style.backgroundColor = "#FFFFFF"
    document.getElementById('cardBody3').style.color = "#000000"

    document.getElementById('btncontactos').classList.add("btn-dark")
    document.getElementById('btncontactos').classList.remove("btn-light")

    document.getElementById('darkmodebtn').style.display = 'inline-block';
    document.getElementById('lightmodebtn').style.display = 'none';
}

function alertaInfo(){
    alert("Nombre: Juan Manuel Prado \nEmail: juanmapra@yahoo.com.ar \nWeb: jmpdev.com")
}