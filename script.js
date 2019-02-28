//decision making
var age=18;
if(age<13) {
    console.log("minor");
}else if(age>= 18){
    console.log("major");
}

//con?true:false
age>=18?console.log("major"):console.log("minor");


//fuction
/*
function sadiq(firstName,Lastname){
    console.log(firstName+"."+Lastname);
}
sadiq('Mithun','MIT');

//array
var names=['sadiq','mithun','srikanth']
console.log(names[2]);
console.log(names.length);

names.push("prasanna");
names.push("srikant");
names.pop();
console.log(names);
*/
//challenge
/*var tip;
var tip1,tip2,tip3;
var bill1=35,bill2=80,bill3=300;
if(bill1>200)
{
    tip1=bill1*0.10;
}
else if(bill2>=50 && bill2<=200)
{
    tip2=bill2*0.15;
}
else
{
    tip3=bill3*0.20;
}
var tb3=bill3+tip3;
var tb2=bill2+tip2;
var tb1=bill1+tip1;
console.log(tb1,tb2,tb3);
*/
//objects

var mydetails={
    lastName: 'babu',
    firstName: 'prasanna',
    doB: 1998,
    family: ['babu','prasanna'],
    calAge: function(birthyear){
        return 2019-birthyear;

    }

};

console.log(mydetails.firstName);
var z='doB';
console.log(mydetails[z]);

mydetails.doB=1998;
console.log(mydetails);

//new object
var shiva=new Object();
shiva.firstName='srikant';
console.log(shiva);

//
console.log('prasanna is' +mydetails.calAge(1998)+'years old');

