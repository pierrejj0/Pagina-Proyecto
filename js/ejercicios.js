function primos() {
    debugger
    let resp = "", num = "", r = 0, divisor = 2, primo = 1
  
    // Obtiene el valor en "numero" y lo convierte a entero
    num = document.getElementById("numero").value
    resp = document.getElementById("resp")
    num = parseInt(num)
  
    // Bucle para verificar si num es divisible por algún número menor a sí mismo
    while (divisor < num && primo == 1) {
      r = num % divisor
      if (r == 0) {     // Si el residuo es 0, entonces no es primo
        primo = 0
      } else {
        divisor = divisor + 1
      }
    }
  
    // Muestra si el número es primo o no
    if (primo == 1) {
      resp.innerHTML = `${num} Es Primo`
    } else {
      resp.innerHTML = `${num} No Es Primo`
    }
  }
  function n1() {
    let a = 0, b = 0, msg = "";
    a = document.getElementById("num").value;
    resp = document.getElementById("res");
    a = parseInt(a); 
    while (b < a) {
        msg += "Hola Mundo\n";  
        b++;
    }
    resp.innerHTML = msg;
}

function n2() {
    let a = 0, b = 1, msg = "";
    a = document.getElementById("num1").value;
    a = parseInt(a);
    
    let resp = document.getElementById("res1");
    
    if (isNaN(a) || a <= 0) {
        resp.value = "Por favor, ingrese un número entero positivo.";
        return;
    }

    while (b <= a){
        if (b % 7 === 0){
            msg += "Múltiplo: " + b + "\n";
        }
        b++;
    }

    resp.value = msg || "No hay múltiplos de 7 en este rango.";
}

function n3() {
    let a = 0, b = 0, c = 1, msg = "", m = 0;
    a = document.getElementById("num2").value;
    b = document.getElementById("num3").value;
    resp = document.getElementById("res2");
    a = parseInt(a);
    b = parseInt(b);
    while (c <= b){
        m = a*c;
        msg += "Tabla: "+m+"\n";
        c++;
    }
    resp.innerHTML = msg;
}
function n4() {
  let a = 0, b = 1, msg = "";
  a = document.getElementById("num4").value;
  resp = document.getElementById("res3");
  a = parseInt(a);
  while (b <= a){
      msg += "Numero: "+b+"\n";
      b++
  }
  resp.innerHTML = msg;
}
function n5() {
  let a = 0, b = 1, msg = "";
  a = document.getElementById("num5").value;
  resp = document.getElementById("res4");
  a = parseInt(a);
  while ( b <= a){
      if (b % 2 == 0){
          msg += "Numero par: "+b+"\n";
      }
      b++
  }
  resp.innerHTML = msg;
}