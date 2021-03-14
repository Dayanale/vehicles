console.log('controllers.ts hola');
//import { Car } from "../models/car";

let car: Car;
let regex = /[0-9]{4}[a-z]{3}/gmi;

function createCar(plate: string, brand: string, color: string) {
  plate = (document.getElementById('plate') as HTMLInputElement).value;
  if (regex.test(plate)) {
    brand = (document.getElementById('brand') as HTMLInputElement).value;
    color = (document.getElementById('color') as HTMLInputElement).value;

    car = new Car(plate, color, brand);
    console.log(car);

    (document.getElementById('ruedas') as HTMLInputElement).style.display = 'block';
    (document.getElementById('crearCoche') as HTMLInputElement).style.display = 'none';
  }
  else {
    alert('La matrícula debe tener 4 números y 3 letras');
  }
}

function createWheels() {

  let diametro1 = parseFloat((document.getElementById('diametro1') as HTMLInputElement).value)
  let diametro2 = parseFloat((document.getElementById('diametro2') as HTMLInputElement).value)
  let diametro3 = parseFloat((document.getElementById('diametro3') as HTMLInputElement).value)
  let diametro4 = parseFloat((document.getElementById('diametro4') as HTMLInputElement).value)

  if(diametro1 + diametro2 + diametro3 + diametro4 <= 8 && diametro1 + diametro2 + diametro3 + diametro4 >= 1.6) {

  let rueda1 = new Wheel(
    diametro1,
    (document.getElementById('marca1') as HTMLInputElement).value
  );
  let rueda2 = new Wheel(
    diametro2,
    (document.getElementById('marca2') as HTMLInputElement).value
  );
  let rueda3 = new Wheel(
    diametro3,
    (document.getElementById('marca3') as HTMLInputElement).value
  );
  let rueda4 = new Wheel(
    diametro4,
    (document.getElementById('marca4') as HTMLInputElement).value
  );


  car.addWheel(rueda1);
  car.addWheel(rueda2);
  car.addWheel(rueda3);
  car.addWheel(rueda4);


  document.body.innerHTML = "CAR:" + "<br>" + "PLATE: " + car.plate
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
