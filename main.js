
alert(`Primera entrega .js Juan Medina`);

// //:::::::::::::::::::::::::FOR::::::::::::::::::::::::::::::::::::::::::::

let personaje1 = () => {
    for (let i = 3; i >= 1; i--) {
        console.log(`El número de vidas es ${i}`);
    }
    console.log(`Ya no tienes vidas`)
}
personaje1()



// //:::::::::::::::::::::::::if else 1 ::::::::::::::::::::::::::::::::::::::::::::


const clima =(temp) =>{
    if(temp >= 15){
        console.log("Podes salir con remera")
    }else if(temp <15 && temp >2){
        console.log("Abrigate, hace frío")
    }else{
        console.log("No es conveniente salír")
    }
}

clima(2);



// //:::::::::::::::::::::::::if else 2 ::::::::::::::::::::::::::::::::::::::::::::


let requisitos = (edad, nacionalidad, pasaporte)=>{
    if (edad >= 18) {
        console.log(`Tienes edad para viajar al exterior`)
        if (nacionalidad == "Argentino" ) {
            console.log(`Cumples con los requisitos de documentación para viajar`)
            if (pasaporte) {
                console.log(`Puedes pasar por puerta 1, buen viaje`);
            }else{
                console.log(`Sin pasaporte no puedes viajar al exterior`)
            }
        }else{
            console.log(`Debes presentar la documentación de tu país de Origen`)
        }
    }else{
        console.log(`No tienes edad para viajar`)
    }
}

requisitos(18, "Argentino", true );
