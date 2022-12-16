// 1.Write a simple JavaScript program to join all elements of the following array into a string.
const array = ["Apple","Banana","Orange","Mango"]
let text = array.toString();//Apple,Banana,Orange,Mango
console.log(text);

//2.Write a simple JavaScript program to reverse an array without using array.reverse() method 

const data =[1,2,3,4,5,6]
function reverse(data){
    var output=[];
    for (var i=data.length-1;i>-1;i--)
    {
        output.push(data[i]);
    }
    return output;
}
console.log(reverse(data));//[ 6, 5, 4, 3, 2, 1 ]
//3. Write a method that returns a unique array
const data1 = [1, 2, 1, 2, 3];
const unique=data1.filter(myFunction);
function myFunction(value,index,self){
    return self.indexOf(value)==index;
}
console.log(unique);
//4. Write a method that returns array of age
const data2=[
{name:"Jack",age:"22"},
{name:"David",age:"18"},
{name:"Rohit",age:"4"}
]
const agee=data2.map(myFunction2);
function myFunction2(agee){
 
    return agee.age;
}
console.log(agee)//[ '22', '18', '4' ]
// 5. Write a method to find minumum and maximum values
const data4=[10,100,3,200,5,6];
const max=data4.filter(myFunction3);
const min=data4.filter(myFunction4);

function myFunction3(max){
    return max>=200;
   
}
console.log("max > = ",max);//max > =  [ 200 ]
function myFunction4(min){
    return min<=3;
   
}
console.log("min = ",min);//min =  [ 3 ]

// 6. Write a method to sort array without using sort method
let data5= [4, 50, 1, 5, 8];
for(let i=0;i<data5.length;i++){
 for(let j=i+1;j<data5.length;j++){
 
    if(data5[i]>data5[j]){
        temp=data5[i];
        data5[i]=data5[j];
        data5[j]=temp;
    }
 }
}
console.log("sorted arrays=>",data5);//sorted arrays=> [ 1, 4, 5, 8, 50 ]
// 7.
const peoples = [
    {
        name: 'Luke Skywalker',
        height: '172',
        weight: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        weight: '136',
        eye_color: 'black',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        weight: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        weight: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
// a. write a method to get array of peoples with weight greater than 100
const weigh=peoples.filter(myFunction5);
function myFunction5(weigh){
return weigh.weight >100;
}
console.log("people with weight greater than 100",weigh);
// b. write a method to get array of peoples with height less than 200
const heigh=peoples.filter(myFunction5);
function myFunction5(heigh){
return heigh.height <200;
}
console.log("people with weight greater than 100",heigh);
// c. write a method to get all male characters
const gen=peoples.filter(myFunction5);
function myFunction5(gen){
return gen.gender==="male";
}
console.log(gen);
//d. write a method to get all female characters
const gen1=peoples.filter(myFunction5);
function myFunction5(gen1){
return gen1.gender==="female";
}
console.log(gen1);

//e. write a method to get array of objects with just name and height properties
const nameAndHeigh = peoples.map(function (obj) {
    return { name: `${obj.name}`, height: `${obj.height}` };
});
console.log("Name and Height Array:", nameAndHeigh);
