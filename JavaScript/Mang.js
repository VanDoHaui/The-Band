/*var languages =['Js','PHP','RJS']
console.log(languages.toString())//Chuyển kiểu sang string
console.log(languages.join("-"))//Thêm kí tự
console.log(languages.pop()) // xoá phần tử cuối mảng và trả về phần tử đã xoá
console.log(languages.push())//Thêm phần tử vào cuối mảng
console.log(languages.toString())
console.log(languages.shift())// xoá phần tử đầu mảng và trả về phần tử đã xoá
console.log(languages.unshift())//Thêm  phần tử đầu mảng và trả về độ dài mới của mảng
console.log(languages.splice(1,1))// chèn phần tử
console.log(languages.concat(//mảng//))// hợp nhất 2 mảng 
console.log(languages.slice(1,//vị trí ngừng cắt//))// cắt phần tử mảng
*/
var courses =[
  {
    id : 1,
    name : 'JS',
    coin : 250
  },
  {
    id : 2,
    name : 'PHP',
    coin : 300

  },
  {
    id : 3,
    name : '    Ruby',
    coin : 0
  }
]
//For Each // duyet qua tung phan tu cua mang
/*courses.forEach(function(course,index){
console.log(index,course)
})*/

//Every  Kiểm tra  tất cả phần tử của mảng thoả mãn điều kiện

/*var isFree =courses.every(function(course,index){
    return course.name === 'JS';
});
console.log(isFree)


*/
//Some  Kiểm tra  1 phần tử của mảng thoả mãn điều kiện và dừng lại khi gặp kết quả đúng

/*var isFree =courses.some(function(course,index){
    return course.coin === 0;
});
console.log(isFree) */
//Find Tìm kiếm phần tử 
/* var  course = courses.find(function(course,index){
    return course.name === 'JS';
})
console.log(course)

 * Filter đưa ra danh sách
var  course = courses.filter(function(course,index){
    return course.name === 'JS';
})
console.log(course) 

 * Phương thức Map()

function courseHandler(course,index)
{
  console.log(course)
return{
    id  : course.id,
    name : `Khoa hoc :${course.name}`,
    coin : course.coin,
    coinText : `Gia Tien :${course.coin}`,
    index : index,
}

};
var newCourses = courses.map(courseHandler);
console.log(newCourses)
*/

// Phương Thức  reduce()


/*ar totalCoin  =courses.reduce(function(total,course){
  return total +course.coin;

},0);
console.log(totalCoin)
*/
var depthArray  =[1,2[3,4],5,6,[7,8,,9]];









