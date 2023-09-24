
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function (e){
  e.preventDefault();

  const datosObj = {
    nombre: formulario.nombre.value,
    apellido: formulario.apellido.value,
    nacimiento: formulario.nacimiento.value,
  };

  const datosJSON = JSON.stringify(datosObj);

  fetch('https://jsonplaceholder.typicode.com/users', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: datosJSON
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
})
  