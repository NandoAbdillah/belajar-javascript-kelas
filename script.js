console.log("2+3");

let a= 2;
let b=3;
let c= a+b;

console.log(c);

// 3+2*4/2/2*3*3+2-5;

let x = 2;
let y= 3;
let z = 4;
let ab = 5;
// let hasilKali1 = (x*z);
// let hasilBagi = (hasilKali1/x/x);
// let hasilKali2 =(hasilBagi*y*y);
// let hasilAkhir =(y + hasilKali2 + x - ab);

let result = y+ (x*z/x/x*y*y) + x - ab;
console.log (result);

let xi = 6;
let yi =5;

if(xi>yi) {
    console.log("Benar");
}

else {
    console.log("Salah");
}

let nilai =90;
let kkm = 80;

if (nilai>kkm) {
    console.log ("LULUS");
}
else {
    console.log ("TIDAK LULUS");
}

let bulan = 10;
let tanggal = 20;
let zodiac = "belum dibuat";
if(bulan==1) {
    if(tanggal>0 && tanggal<20) {
        zodiac = "Aquarius";
    }
    else {
        zodiac = "Taurus";
    }
}

else if (bulan==2) {
    if(tanggal>0 && tanggal<25) {
        zodiac ="Libra";
    }
    else {
        zodiac ="Gemini"
    }
}

else if (bulan==3) {
    if(tanggal>0 && tanggal<10) {
        zodiac="Gemini";
    }
    else {
        zodiac="Scorpio";
    }
}
else if (bulan==4) {
    if(tanggal>0 && tanggal<8) {
        zodiac="Scorpio";
    }
    else {
        zodiac="Virgo";
    }
}
else if (bulan==5) {
    if(tanggal>0 && tanggal<5) {
        zodiac="Virgo";
    }
    else {
        zodiac="Cancer";
    }
}

else if (bulan==6) {
    if(tanggal>0 && tanggal<2) {
        zodiac= "Cancer";
    }
    else {
        zodiac= "Sagitarius";
    }
}

else if (bulan==7) {
    if(tanggal>0 && tanggal<25) {
        zodiac ="Leo";
    }
    else {
        zodiac = "Capicorn"
    }
}

else if (bulan==8) {
    if(tanggal>0 && tanggal<15) {
        zodiac = "Capicorn";
    }
    else {
        zodiac = "Aries";
    }
}

else if (bulan==9) {
    if(tanggal>0 && tanggal<11) {
        zodiac="Aries";
    }
    else {
        zodiac="Pisces"
    } 
}

else if (bulan==10) {
    if(tanggal>0 && tanggal<8) {
        zodiac = "Pisces";
    }

    else {
        zodiac ="Kliwon";
    }
}
else if (bulan==11) {
    if(tanggal>0 && tanggal<5) {
        zodiac = "Kliwon";
    }

    else {
        zodiac ="Wageh";
    }
}
else if (bulan==12) {
    if(tanggal>0 && tanggal<3) {
        zodiac = "Wageh";
    }

    else {
        zodiac ="Legi";
    }
}
console.log("Zodiac anda adalah : " + zodiac);