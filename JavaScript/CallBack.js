/*function myFunction(param){
param("hoc lap trinh");
}   

function myCallback(value){
console.log('value : ',value);
}
myFunction(myCallback)
*/
//CallBack
//1.Là Hàm
//2.Truyền qua đối số
//3.Được gọi lại (trong hàm nhận đối số)

 /* Array.prototype.map2    =function(callBack){
var arrayLength =this.length;
    for( var i=0;i<arrayLength;++i){
callBack(this[i],i);
    }

}

var courses =[
    'JS',
    'PHP',
    'Ruby'
];
courses.map2(function(course,index){
    console.log(index,course)

})
*/

//var htmls = courses.map2(function(course)
//{
   // return `<h2>${course}</h2>`;
//});
//console.log(htmls.join(''))

//MyForEach()
/*
var courses =[
    'JS',
    'PHP',
    'Ruby'
];
courses.length =10;
Array.prototype.forEach2=function(callBack){
    for(var index in this){
        console.log(index)
    }
}
courses.forEach2(function(course ,index, originArray){
console.log(course,index,originArray)

Array.prototype.filter2=function(callBack){
    var output =[];

for(var index in this){
    if(this.hasOwnProperty(index)){
        var result =callBack(this[index],index,this);
        if(result){
output.push(this[index]);
        }
    }
}
return output;
}
*MyFilter()
var courses =[
    {
        name : 'JS',
    coin : 710,
},
{
   name : 'PHP',
    coin :700
},
{
    name : 'Ruby',
    coin :900
}
];  
var filtercourse =courses.filter2(function(course,index,array){
    return course.coin>700;
})
console.log(filtercourse)

*MySome Method
Array.prototype.some2 = function(callBack){
    for(var index in this){
        if(this.hasOwnProperty(index)){
         if(  callBack(this[index],index,this)){
            return true;
         }
        }
    }return false;
}
var result = courses.some2(function(course,index,array){
    return course.isFinish==true;
});
console.log(result)
*/

//MyEvery Method()

Array.prototype.every2 =function(callBack){

    var output= true;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result =callBack(this[index],index,this);
                if(!result){
                    output =false;
                    break;
                }
            
        }
    }   
    return output;
}
var courses =[
    {
        name : 'JS',
    coin : 710,
    isFinish:true
},
{
   name : 'PHP',
    coin : 700,
    isFinish:false

},
{
    name : 'Ruby',
    coin : 900,
    isFinish:true

}
];
var result =courses.every2(function(course,index,array){
    return  course.isFinish;
});
console.log(result);