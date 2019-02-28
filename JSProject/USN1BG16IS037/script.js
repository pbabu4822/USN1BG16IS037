var tip1;
var tip2;
var tip3;

var bill1=25;
var bill2=75;
var bill3=250;



if(bill3>200){
    tip1=bill3*0.10;
}
if(bill2>50 && bill2<=200)
{
    tip2=bill2*0.15;
}
if(bill1<50)
{
    tip3=bill1*0.20;
}

var tb1=bill3+tip1;
var tb2=bill2+tip2;
var tb3=bill1+tip3;


var tips=[tip1,tip2,tip3];
console.log(tips);
var finalamounts=[tb1,tb2,tb3];
console.log(finalamounts);