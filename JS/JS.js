/**
 * Created by Roberto on 04/01/2019.
 */
var imagenes= ["../IMG/00.jpg", "../IMG/01.jpg", "../IMG/02.jpg", "../IMG/03.jpg", "../IMG/04.jpg", "../IMG/05.jpg","../IMG/06.jpg", "../IMG/07.jpg", "../IMG/08.jpg", "../IMG/09.jpg", "../IMG/10.jpg", "../IMG/11.jpg", "../IMG/12.jpg", "../IMG/13.jpg", "../IMG/14.jpg", "../IMG/15.jpg"];
var miArray=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var salva=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var inicio="../IMG/inicio.jpg";
var igual="../IMG/Feliz.jpg";
var tempo;
var conteo_click=0;
var conteo_ganados=0;
var conteo_fin=0;
var flag;
var flag_iniciado;
var foto_1;
var foto_2;
var id_foto1;
var id_foto2;
var salva_foto;
var pos;
var resto;
var img_temp;
var img_sola;
var img_completa;
var r;
var t=0;
var v;
var a;
var p;
var j;
var i;
var x;
var y;
var z;
/**funcion para conocer cual fue el cuadro que provoco el evento onclik**/
function imagen(e) {
    a=e;
    t++;
    conteo_click++;
    document.getElementById('demo').innerHTML=conteo_click;
    if (flag_iniciado === 1) {
        if (t === 2) {               /** t contador de clik, si es igual a 1, se muestra la foto a la que se le dio clik y se guarda, **/
            id_foto2 = e;            /**si es igual a 2 se muestra la segunda imagen y se hace una foto de la ella, para luego compararla con la primera**/
            foto_2=salva[id_foto2];
            document.getElementById('i'+id_foto2).src=foto_2;
            setTimeout(comparar,1000);
        }
        else{
            id_foto1 = e;
            foto_1=salva[id_foto1];
            document.getElementById('i'+id_foto1).src=foto_1;
        }
    }
}

function organizado(){
    conteo_ganados=0;
    conteo_click=0;
    document.getElementById('pepo').innerHTML=conteo_ganados;
    document.getElementById('demo').innerHTML=conteo_click;
    flag_iniciado=1;  /**Bandera que permite que se pueda dar click solo despues de comenzar el juego**/
    while(y<=7){      /**instrucciones para solo mostrar 8 fotos al azar de 16 en total**/
        desorden();
        y++;
    }
    y=0;
    mostrar();
}

function desorden() {   /**Funcion para desorganizar los arreglos de fotos y posiciones de los cuadros**/
    for ( x = 0; x < miArray.length; x++)
    {
        z = Math.floor(Math.random() * imagenes.length);
        tempo = miArray[x];
        miArray[x] = miArray[z];
        miArray[z] = tempo;
    }
    for(i=0;i<16;i++)
    {
        j= Math.floor(Math.random() * imagenes.length);
        flag=imagenes[i];
        imagenes[i]=imagenes[j];
        imagenes[j]=flag;
    }
}

function mostrar(){ /**Funcion para mostrar las fotos en los recuadros y luego guardarlos en un arreglo**/
    for(pos=0;pos<=15;pos++){
        resto=pos%2;
        if(resto===0){
            img_temp=imagenes[pos+1];
            img_sola=img_temp.slice(2,14);
            img_completa="http://localhost:63342/Rompe_Cabeza"+img_sola;
            document.getElementById('i'+miArray[pos]).src=img_completa;
        }
        else{
            img_temp=imagenes[pos];
            img_sola=img_temp.slice(2,14);
            img_completa="http://localhost:63342/Rompe_Cabeza"+img_sola;
            document.getElementById('i'+miArray[pos]).src=img_completa;
        }
    }

    for(r=0;r<=15;r++){
        v=document.getElementById('i'+r).src;
        salva_foto=v.slice(35,46);
        salva[r]='..'+salva_foto;
    }
    setTimeout(mostrar_inicio,3000);
}

function mostrar_inicio() {
    for(p=0;p<=15;p++){
        document.getElementById('i'+p).src=inicio;
    }
}

function comparar() {
    if(foto_1===foto_2){
        conteo_ganados++;
        conteo_fin++;
        document.getElementById('pepo').innerHTML=conteo_ganados;
        document.getElementById('i'+id_foto1).src=igual;
        document.getElementById('i'+id_foto2).src=igual;
        t=0;
        if(conteo_fin===8){
            window.alert("Ha ganado!!!"+'\n'+ "Su puntuación es de "+conteo_ganados);
            conteo_fin=0;
        }
    }
    if(foto_1!=foto_2) {
        conteo_ganados--;
        document.getElementById('pepo').innerHTML=conteo_ganados;
        document.getElementById('i' + id_foto2).src = inicio;
        document.getElementById('i' + id_foto1).src = inicio;
        t = 0;
    }
}






