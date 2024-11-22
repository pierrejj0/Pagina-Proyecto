document.getElementById('calculate').addEventListener('click', function() {
    // Obtener los valores de los arreglos
    const array1 = document.getElementById('array1').value.split(',').map(Number);
    const array2 = document.getElementById('array2').value.split(',').map(Number);
  
    // Verificar que ambos arreglos tengan la misma longitud
    if (array1.length !== array2.length) {
      document.getElementById('result').textContent = "Los arreglos deben tener la misma longitud.";
      return;
    }
  
    // Crear el arreglo resultado con la suma de elementos
    const resultArray = array1.map((num, index) => num + array2[index]);
  
    // Mostrar el resultado
    document.getElementById('result').textContent = `Resultado: [${resultArray.join(', ')}]`;
  });
  document.getElementById('submit').addEventListener('click', function() {
    // Redirigir a la URL definida en el atributo action del formulario
    const formAction = document.querySelector('form').getAttribute('action');
    window.location.href = formAction;
  });