"use strict";
console.log('controllers.ts hola');
//import { Car } from "../models/car";
var car;
var regex = /[0-9]{4}[a-z]{3}$/gmi;
function createCar(plate, brand, color) {
    plate = document.getElementById('plate').value;
    if (regex.test(plate) == true) {
        brand = document.getElementById('brand').value;
        color = document.getElementById('color').value;
        car = new Car(plate, color, brand);
        console.log(car);
        document.getElementById('ruedas').style.display = 'block';
        document.getElementById('crearCoche').style.display = 'none';
    }
    else {
        alert('La matrícula debe tener 4 números y 3 letras');
    }
}
function createWheels() {
    var diametro1 = parseFloat(document.getElementById('diametro1').value);
    var diametro2 = parseFloat(document.getElementById('diametro2').value);
    var diametro3 = parseFloat(document.getElementById('diametro3').value);
    var diametro4 = parseFloat(document.getElementById('diametro4').value);
    var marca1 = document.getElementById('marca1').value;
    var marca2 = document.getElementById('marca2').value;
    var marca3 = document.getElementById('marca3').value;
    var marca4 = document.getElementById('marca4').value;
    if (marca1 !== "" && marca2 !== "" && marca3 !== "" && marca4 !== "") {
        if (diametro1 + diametro2 + diametro3 + diametro4 <= 8 && diametro1 + diametro2 + diametro3 + diametro4 >= 1.6) {
            var rueda1 = new Wheel(diametro1, marca1);
            var rueda2 = new Wheel(diametro2, marca2);
            var rueda3 = new Wheel(diametro3, marca3);
            var rueda4 = new Wheel(diametro4, marca4);
            car.addWheel(rueda1);
            car.addWheel(rueda2);
            car.addWheel(rueda3);
            car.addWheel(rueda4);
            document.getElementById('aside').innerHTML = "CAR:" + "<br>" + "PLATE: " + car.plate
                + "<br>" + " COLOR: " + car.color
                + "<br>" + " BRAND: " + car.brand
                + "<br>" + " WHEELS: "
                + "<br>" + "Wheel 1: " + "Brand: " + car.wheels[0].brand + " | Diameter: " + car.wheels[0].diameter
                + "<br>" + "Wheel 2: " + "Brand: " + car.wheels[1].brand + " | Diameter: " + car.wheels[1].diameter
                + "<br>" + "Wheel 3: " + "Brand: " + car.wheels[2].brand + " | Diameter: " + car.wheels[2].diameter
                + "<br>" + "Wheel 4: " + "Brand: " + car.wheels[3].brand + " | Diameter: " + car.wheels[3].diameter;
        }
        else {
            alert('el diametro de cada rueda debe ser entre 0.4 y 2');
        }
    }
    else {
        alert('el campo Marca no puede estar vacío');
    }
}
