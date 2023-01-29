/* 
Vòng Lặp -Loop
1.For - Lặp với điều kiện đúng
2.for/in -Lặp qua key của đối tượng
3.for/ of- lặp qua value của đối tượng
4.While- Lặp khi điều kiện đúng
5.do/while - Lặp ít nhất 1 lần ,sau đó lặp khi điều kiện đúng

*/
//1.Vòng Lặp For

/*for (var i = 0;i<=100;i++)
{
 console.log('Giá trị của i là ' ,i);
}
*/
//2.Vòng Lặp For-in
/*var myInfo ={
    name : 'Do',
    Age :18
}
for (var key in myInfo){
    console.log(myInfo[key]);
}*/
/*var languages =
[
    'JS',
    'PHP',
    'Ruby'
];
for (var key in languages){
    console.log(languages[key]);
}
//3 Vòng lặp for of
var languages =[
    'JS',
    'PHP',
    'Ruby'
]
for(var value of languages){
    console.log(value)
}

//4 Vòng Lặp While 
var i =0;
while (i<1000){
    i++;
    console.log(i)
}*/
//5 Vòng lặp do while
var i=0;
do{
    i++
    console.log(i);
}
while(i<10);


