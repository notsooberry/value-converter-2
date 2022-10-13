function MetersToCentimeters(num){
    num = num * 100;
    return num;
}
alert("Метры в сантиметры: " + MetersToCentimeters(5));

function MetersToKilometers(num){
    num = num/1000;
    return num;
}
alert("Метры в километры: " + MetersToKilometers(500));

function GramsToLiters(num){
    num = num/1000;
    return num;
}
alert("Граммы в литры:  "+ GramsToLiters(50000));

function LitersToGallons(num){
    num = num * 0.219969;
    return num;
}
alert("Литры в галлоны:  "+ LitersToGallons(100));