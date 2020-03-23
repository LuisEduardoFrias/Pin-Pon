$(function()
 { 

 alert("Nota: Presentacion de Prueba, el juego aun contiene errores!");
 
var bodi,
header,
sect,
boton,
AnchoBT,
AltoBT, 
estado,
bucle,
PRONTER,
MOVEBOLA,
MOVERAQUETA,
TIMER,
titulo; 

var sectAncho, 
sectAlto, 
iz, 
Y = 0, 
X = 0, 
dy = 4, 
dx = 4, 
raquetamove = true;
 
var Timer, 
Timer2, 
Contador=0, 
Contador2 = 0, 
AUMENTOPN = true, 
M = 0,
H = 0; 

PRONTER = $(".movimientos"); 
MOVEBOLA = $(".moveBola");
TIMER = $ (".TIMER"); 
MOVERAQUETA = $(".moveRaqueta");
bodi = $(".bodi");
header=$(".cabesera"); 
titulo=$(".titulo"); 
boton = $(".inicio");
sect=$(".caja"); 
estado = false;

 ActualizarBODY();
 
 onresize = ActualizarBODY 
        
function ActualizarBODY() 
{
         AnchoBT = (window.innerWidth-5); 
         AltoBT = (window.innerHeight-5); 
         Esqueleto(); 
}

Esqueleto();

function Esqueleto()
{ 
    sectAncho = (AnchoBT - (AnchoBT*0.20));
            
    sectAlto = ( (AltoBT - ( AltoBT*0.30))+90);
            
    bodi.css({
    height: AltoBT + "px", 
    width : AnchoBT + "px"});

    header.css({
    width : sectAncho + "px"
    }); 

    sect.css({
    height: sectAlto + "px",
    width : sectAncho + "px"
    })

    PRONTER.css({ width : sectAncho + "px"}); 
            
    iz = Math.ceil(((sectAncho-9)/2)-50); 
                
    MOVERAQUETA.text(" Raqueta X : " + iz ); 

}



sect.append($("<div class='pelota'></div>")); 
            
sect.append($("<div class='raqueta'></div>"));
            
///////////////////////////////////////////////////////////////////////////// 

/**BOTON _ INICIAR _ PARAR _ REANUDAR */

////////////////////////////////////////////////////////////////////////////
 
boton.css({
border: "3px double black", 
height: "30px", 
width : "70px", 
borderRadius : "20px", 
margin: "0px", 
padding : "0px", 
position : "absolute", 
top : "7px" , 
right : "10px", 
display : "inline-block"});

boton.text("Iniciar");
 
boton.on("click",iniciarParar);
  
///////////////////////////////////////////////////////////////////////////// 

/**PELOTA */

//////////////////////////////////////////////////////////////////////////// 
   
$(".pelota").css({
background:"red",
borderRadius:"50%",
height:"15px",
width:"15px",
position:"absolute",
top: Y +"px",
left: X +"px",
border:"1px solid black"});

MOVEBOLA.text(" BOLA X : " + X + " Y : " + Y ); 

function aumento(AUMENTOPN) { 

if(AUMENTOPN == true)
{ 
    dx++; dy++; 
}
else 
{ 
    dx--; dy--; 
}
} 

function dibujarpelota() 
{ 
    $(".pelota").css({
    top: Y + "px",
    left: X + "px"}); 
} 

function actualizarpelota()
{ 
    Y += dy; X += dx; 
    
    MOVEBOLA.text(" BOLA X : " + X + " Y : " + Y ); 
}
   
/////////////////////////////////////////////////////////////////////////////

/**RAQUETA */

////////////////////////////////////////////////////////////////////////////
    
$(".raqueta").css({
background:"blue",
borderRadius:"10%",
height:"20px",
width:"100px", 
position:"absolute",
bottom:"10px",
border:"1px solid black",
left:iz+"px"});
  
var body = document.querySelector("body");

function startup() 
{ 

body.addEventListener("touchstart", handleStart, false);

body.addEventListener("touchend", handleEnd, false);

body.addEventListener("touchmove", handleMove, false); 

}

function handleStart(evt) 
{ 
    
evt.preventDefault();

var ctx = body.getContext("2d"); 

var touches = evt.changedTouches;

ctx.lineWidth = 4; 

header.css({
background : "blue"
}); 

}


function handleMove(evt) 
{ 

evt.preventDefault();

var ctx = body.getContext("2d"); 

var touches = evt.changedTouches;

ctx.lineWidth = 4; 

header.css({
background : "grenn"
}); 

}

function handleEnd(evt) 
{ 

evt.preventDefault(); 

var ctx = el.getContext("2d"); 

var touches = evt.changedTouches;

ctx.lineWidth = 4; 

header.css({
background : "yellow"
}); 

}
  
/////////////////////


 window.addEventListener("keydown",
 function(event)
 {
 
     if(raquetamove == true)
     {
     
     MOVERAQUETA.text(" Raqueta X : " + iz ); 
     
     if(iz >= 0)
     {
     
     if(event.keyCode == 65)
     { 
     
     iz-=20; 
     
     $(".raqueta").css({
     left: iz + "px"}); } } 
     
     if(iz <= (AnchoBT - (AnchoBT*0.20))- 112) { 
     
     if(event.keyCode == 68) 
     { 
     
     iz+=20; $(".raqueta").css(
     {
         left: iz + "px"
     });
     
     } } } });
     
////////////////////////////////////////////////////////////////////////////

/** Coliciones */

////////////////////////////////////////////////////////////////////////////
      
function coliciones() 
{ 

    if( Y <= 0 ) 
    { 
    
    if(AUMENTOPN == true) 
    { 
    
    AUMENTOPN = false; 
    } 
    else
    { 
    
    AUMENTOPN = true; 
    } 
    
    dy = -dy; 
    } 
    
    if( X <= 0 || X >= sectAncho-15 ) { 
    
    if(AUMENTOPN == true) 
    { 
    
    AUMENTOPN = false; 
    } 
    else 
    { 
    
    AUMENTOPN = true; 
    } 
    
    dx = -dx; 
    } 
    
    if( Y >= sectAlto) 
    { 
    
        Y = 0;
        alert(" Perdiste! \n Al presionar 'Aceptar' el juego inicia automaticamente. \n 'Click Aceptar' ")
        
        H = 0;
        M = 0;
        Contador = 0;
        
        
        
    } 
    
if( Y >= (sectAlto-50) && X >= iz && X <= (iz+100) )
    {
    
    dy = -dy;
    } } 
    
///////////////////////////////////////////////////////////////////////////

/** MOTOR DE JUEGO */

//////////////////////////////////////////////////////////////////////////// 
       
function dibujar() 
{ 
    dibujarpelota(); 
} 

function actualizar() 
{
 actualizarpelota(); 
} 

function frame() 
{ 
    actualizar(); 
    coliciones(); 
    dibujar(); 
    
    bucle = requestAnimationFrame(frame); 
} 

function iniciarParar() 
{ 

    if(!estado) 
    { 
         startup();
    
        raquetamove = true; 
        estado = true; 
        frame(); 
        
        boton.text("Pausar"); 
        
        Timer2 = setInterval(() =>    
        { 
            Contador2++; 
            
        }, 1000); 
        
        Timer = setInterval(() => 
        { 
            Contador++; 
        
        if(Contador == 1000) 
        { 
            Contador = 0; M++; 
            
        if(M == 60)
        { 
        
            H++; 
        } 
        } 
        
TIMER.text(" TIMER : " + H + " : " + M + " : " + Contador ); 

if(Contador == (Contador2*100)) 
{ 
    aumento(AUMENTOPN); 
} 
}, 10); 
} 
else
{ 

    estado = false; 
    raquetamove = false;
    
clearInterval(Timer); 
clearInterval(Timer2);

cancelAnimationFrame(bucle);

boton.text("Reiniciar"); 

} 

} 

});



