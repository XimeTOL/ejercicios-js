const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];
let primo = val => {
  for(let i = 2; i < val; i++)
  {
    if(val % i == 0)
    return "no";
  }
  return "sí";
}
ejercicio1.forEach(val => {
  console.log(`El valor ${val} , ${primo(val)} es primo  `)
});

const amigo1 = {
    nombre: "Moisés",
    edad: 22,
    esFamiliar: false,
  };
const amigo2 = {
    nombre: "Sebas",
    edad: 15,
    esFamiliar: true,
  };
  const amigo3 =   {
    nombre: "Dan",
    edad: 18,
    esFamiliar: true,
  };
  const amigo4 =   {
    nombre: "Iñaki",
    edad: 19,
    esFamiliar: true,
  };
  const amigo5 =   {
    nombre: "Mike",
    edad: 18,
    esFamiliar: true,
  };
  const amigo6 =   {
    nombre: "Armando",
    edad: 30,
    esFamiliar: true,
  };
const Persona = [amigo1,amigo2,amigo3,amigo4,amigo5,amigo6];
const AdmitirPaso = (persona) => {
    if(persona.edad >= 18 && persona.esFamiliar == true ){
        console.log(`Puedes pasar ${persona.nombre} con ${persona.edad} años`);
    }
    else
    {
        console.log(`No puedes pasar ${persona.nombre} con ${persona.edad} años`);
    }
};
Persona.forEach((persona => AdmitirPaso(persona)));
