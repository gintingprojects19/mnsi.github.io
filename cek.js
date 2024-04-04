const info=document.getElementById('klik-info');

const tutup=document.getElementById('tutup');
tutup.style.backgroundColor='red';

const tampil=document.getElementById('tampil');




/*info.style.backgroundColor='darkblue';*/

function open(){
	tampil.style.visibility='visible';
	info.style.display='none';
	/*tampil.style.bottom='10px';*/
}
info.addEventListener("click", open);



function close(){
	tampil.style.visibility='hidden';
	info.style.display='block';
}


tutup.addEventListener("click", close);