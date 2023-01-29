/*var date  =2;
if(date =2)
{
    console.log("Hom nay la thu 2 ")
}
else if(date =3 )
{
    console.log("Hom nay la thu 3 ")

}
else 
console.log("Khong biet")
*/

/*function run(a) {
    if(a % 15 == 0) {
        return 3;
    } else if (a % 3 == 0) {
        return 1;
    } else if (a % 5 == 0) {
        return 2
    }
}
// Kỳ vọng
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3
*/
//Câu lệnh switch
/*var date = 5;
switch(date)
{
    case 2:
        console.log("Hom nay la thu 2");
        break;
    case 3:
        console.log("Hom nay la thu 3");
        break;
    case 4 :
        console.log("Hom nay la thu 4");
        break;
        default:
            console.log("Khong biet")
            break;
}*/
//Toán Tử 3 ngôi
var course ={
   name :'Javascript',
    coin :250
}
//if(course.coin>0)
//{
  //  console.log(`${course.coin}Coin`);
//}
var result =course.coin>0 ? `${course.coin}Coin ` :'Miễn Phí';
console.log(result)