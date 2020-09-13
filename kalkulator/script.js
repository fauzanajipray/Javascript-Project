var tombol = document.querySelector(".container-tombol");
var layar = document.querySelector("#layar");
var bolehHitung = false;
var resetLayar = false;
var tmp = "";
var operator = "";
layar.value = ""

tombol.addEventListener("click", function(e){
    
    var tombolClick = e.target;
    var nilaiTombol = tombolClick.innerText;

    if (nilaiTombol === "C"){
        layar.value = ""
        tmp = ""
        bolehHitung = false
        resetLayar = false
    }
    else if(nilaiTombol === "<"){
        layar.value = layar.value.slice(0, -1)
    }
    else if (nilaiTombol === "="){
        if( bolehHitung === true){
            layar.value = eval(tmp + operator + layar.value);
            bolehHitung = false;
        }
    }
    else if (tombolClick.classList.contains("operator")){
        if (bolehHitung == true) {
            layar.value = eval(tmp + operator + layar.value);
            bolehHitung = false;
        }
        tmp = layar.value;
        operator = nilaiTombol;
        resetLayar = true;
    }
    else if (nilaiTombol == ".") {
        /* Tambahkan else if dibawah ini agar ketika kamu menulis
           titik maka tidak langsung melakukan perhitungan */
        layar.value = layar.value + nilaiTombol;
    }
    else{
        if (resetLayar == true) {
            layar.value = nilaiTombol;
            resetLayar = false;
            bolehHitung = true;
        } else {
            layar.value = layar.value + nilaiTombol;
        }
    }

    console.log("Tmp" + tmp + ", Hitung" + bolehHitung + ", Reset" + resetLayar);
})

