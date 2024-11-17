function tablas(){
    let resp="",tab="",ini="",fin="",r=0,msg=""
    tab = document.getElementById("tabla").value
    ini = document.getElementById("inicio").value
    fin = document.getElementById("final").value
    resp= document.getElementById("resp")
    tab=parseInt(tab)
    ini=parseInt(ini)
    fin=parseInt(fin)
    
    while (ini <= fin){
      r = ini*tab
  
      msg = msg + `${ini}*${tab}=${r}`+"\n"
      ini=ini+1
    }
    resp.value=msg
  }
  
  function suma(){
    let  num1=0, num2=0, sum
    num1= document.getElementById("num1").value
    num2= document.getElementById("num2").value
    num1= parseInt(num1)
    num2= parseInt(num2)
    sum=num1+num2
    document.getElementById("resp").innerHTML=sum
  }

  function resta(){
    let  num1=0, num2=0, res
    num1= document.getElementById("num1").value
    num2= document.getElementById("num2").value
    num1= parseInt(num1)
    num2= parseInt(num2)
    res=num1-num2
    document.getElementById("resp").innerHTML=res
  }

  function multiplicacion(){
    let  num1=0, num2=0, mul
    num1= document.getElementById("num1").value
    num2= document.getElementById("num2").value
    num1= parseInt(num1)
    num2= parseInt(num2)
    mul=num1*num2
    document.getElementById("resp").innerHTML=mul
  }

  function division(){
    let  num1=0, num2=0, div
    num1= document.getElementById("num1").value
    num2= document.getElementById("num2").value
    num1= parseInt(num1)
    num2= parseInt(num2)
    div=num1/num2
    document.getElementById("resp").innerHTML=div
  }

  function mod(){
    let  num1=0, num2=0, mod
    num1= document.getElementById("num1").value
    num2= document.getElementById("num2").value
    num1= parseInt(num1)
    num2= parseInt(num2)
    mod=num1%num2
    document.getElementById("resp").innerHTML=mod
  }
  function div(){

    let num1=0,num2=0,div
    num1=document.getElementById("num1").value
    num2=document.getElementById("num2").value
    num1= parseInt(num1)
    num2= parseInt(num2)
    div = Math.trunc (num1 / num2)
    document.getElementById("resp").innerHTML = div
    
    }
function limpiar(){
  document.getElementById("num1").value=""
  document.getElementById("num2").value=""
  document.getElementById("resp").value=""
  resp.innerHTML=""
} 

function sumaserie(){
  let vi=0, vf=0, acu=0
  vi= document.getElementById("num1").value
  vi= document.getElementById("num2").value
  vi=parseInt(vi)
  vf=parseInt(vf)
  while (vi<=vf){
    acu=acu+vi
    vi=vi+1

  }
  document.getElementById("resp").innerHTML= acu

}

function tablasumar() {
  let tabla=0,desde=0,hasta=0, resp = 0, resul = 0
  tabla=document.getElementById("tabla").value
  desde=document.getElementById("desde").value
  hasta=document.getElementById("hasta").value
  resp = document.getElementById("resp")
  tabla = parseInt(tabla)
  desde = parseInt(desde)
  hasta = parseInt(hasta)
  resp.innerHTML = ""
  while (desde <= hasta ) {
    resul = desde + tabla
   resp.innerHTML+= `${desde}+${tabla}=${resul}`+"\n"
    desde = desde + 1
  }
 
}

function tablamultiplicacion() {
  let tabla=0,desde=0,hasta=0, resp = 0, resul = 0
  tabla=document.getElementById("tabla").value
  desde=document.getElementById("desde").value
  hasta=document.getElementById("hasta").value
  resp = document.getElementById("resp")
  tabla = parseInt(tabla)
  desde = parseInt(desde)
  hasta = parseInt(hasta)
  resp.innerHTML = ""
  while (desde <= hasta ) {
    resul = desde * tabla
   resp.innerHTML+= `${desde}*${tabla}=${resul}`+"\n"
    desde = desde + 1
  }
 
}

function limpiars(){
  document.getElementById("tabla").value=""
  document.getElementById("desde").value=""
  document.getElementById("hasta").value=""
  document.getElementById("resp").value=""
  resp.innerHTML=""
} 

 
  
  function perfecto(){
    let  num1=0, num2=0, sum
    num1= document.getElementById("num1").value
    num2= document.getElementById("num2").value
    num1= parseInt(num1)
    num2= parseInt(num2)
    sum=num1+num2
    if (sum>50){
 document.getElementById("resp").innerHTML="Es perfecto"
    }else{
        document.getElementById("resp").innerHTML="No es perfecto"
    }
   
  }

 function opinion(){
    let nom="";
    let eda=0;
    let mensaje=""
    let carrera=""
    let obs = ""
    nom= document.getElementById("nombre").value
    obs= document.getElementById("obs")
    console.log(obs)
    eda= document.getElementById("edad").value
    eda = parseInt(eda)
    carrera= document.getElementById("carrera").value
    mensaje=`${nom} tienes ${eda} años, estudias ${carrera} \n Tus datos han sido guardados con exito ¡gracias!`
    obs.innerHTML=mensaje
 }
    
   
  