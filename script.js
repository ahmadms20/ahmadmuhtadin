//Class dan function
class wisata {
	constructor(){
	this.nama=document.getElementById("input").value;
	this.email=document.getElementById("input2").value;
	this.pesan=document.getElementById("input3").value;
}
    cetak(){
    	var arr = [];
    	arr [0]=this.nama;
    	arr [1]=this.email;
    	arr [2]=this.pesan;

    	alert(arr);
    }

}
    
function coba() {
     wisata = new wisata();
     wisata.cetak();
}

function abc() {
     confirm("Yakin anda ingin mengirim pesan?");
 }
	





