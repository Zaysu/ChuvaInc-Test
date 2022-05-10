function leiaMais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnLeiaMais=document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Ver mais";
    }
    else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="Ver menos";
    }
}

function mostra(){
    document.getElementById('ma').style.display='none';
    document.getElementById('mb').style.display='block';
}
function esconde(){
    document.getElementById('mb').style.display='none';
    document.getElementById('mc').style.display='block';
    document.getElementById('mca').style.display='block';
}
function volta(){
    document.getElementById('mc').style.display='none';
    document.getElementById('mca').style.display='none';
    document.getElementById('ma').style.display='block';
}
