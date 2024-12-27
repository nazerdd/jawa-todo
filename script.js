console.log("Hello World !")
var x=2;
let y= 5;
const z =8;
console.log(x,y,z);

//console.log(hello);
//var hello = "hello"; //undefined ile ilgili mülakat sorusu
//x = 3;
//y = 6;
//console.log(x,y);
//var a = 4;
//console.log(a);

var num1 =6;
var num2 =3;
console.log(num1 === num2); //false cevabını alırız

var num =5;
var str ="5";

console.log( num == str); //normal karşılaştırma yapar true cevabını alırız
console.log( num === str); //üç eşittir tip karşılaştırması da yapar false cevabı alırız


var sonuc = num1 + num2;
console.log(sonuc);

var float1 = 7.2;
var float2 = 5;
console.log(typeof float1);
console.log(float1 + float2);

console.log(true ==1);

var firstName = "Naz"; //string ifadeler tırnak içinde tanımlanır parantez yoktur.
console.log(firstName);
var surname = "Erdem";
console.log(surname);

var fullname = firstName + surname;
console.log(fullname);

//var fullname2 = firstName + " " + surname;
//console.log(fullname2);

var fullname3 = `${firstName} ${surname} Pamukkale üniversitesi Öğrencisidir`;
console.log(fullname3);

let eskiString = "En sevdiğim yemekler : \nmantı\niskender";
console.log(eskiString);

let yeniString = `En sevdiğim yemekler :
mantı
iskender`;
console.log(yeniString);
 
var simpleArray = [1, 2, 3, 4, 5];
console.log(simpleArray);
console.log(simpleArray[2]);
console.log(simpleArray.length);
console.log(simpleArray[simpleArray.length - 1]);

var array = [1,"pau",2, [3,4,5]];
console.log(array[3]);
console.log(array[3][1]);
console.log(array.indexOf("pau"));

var not = 88;
if(not< 50) {
    console.log("Dersten kaldın !");
} else if (not >50 && not <60) {
    console.log("Koşullu geçtin !");
} else {
    console.log("Dersi geçtin !");
}

var havaDurumu = "yağmurlu";
havaDurumu === "yağmmurlu" ? console.log("Şemsiye al") : console.log("Şemsiye alma"); //if else gibi
havaDurumu === "yağmurlu" && console.log("şemsiye al ++");

var sayac = 1;
while (sayac <= 5) {
    console.log("Sayac:" + sayac);
    sayac ++;
}

var number = 10;
do {
    console.log("Number:" + number);
    number ++;
} while (number <= 5);

var colors = ["kırmızı", "pembe", "mavi"];
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]); 
}

var day = 3;
switch(day) {
    case 1:
        console.log("Pazartesi");
        break;

        case 2:
        console.log("Salı");
        break;

        case 3:
        console.log("Çarşamba");
        break;

        case 4:
        console.log("Perşembe");
        break;

        case 5:
        console.log("Cuma");
        break;

        case 6:
        console.log("Cumartesi");
        break;

        case 7:
        console.log("Pazar");
        break;


        default:
            console.log("error");
            

        

        
}
    

    



    


    







