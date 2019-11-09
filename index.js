// >> lec 1-1 ~ 1-10

//alert('it works!');
console.log('it works!');


// 1. let, const, var
// - 변수의 사용 : let
// 1> create
// 2> initialize
// 3> use it
// let : 변수를 초기화 할 때 사용.
let a = 221; //create+initialize
let b = a-5;
a = 4; // update variable a
console.log(b, a);

// - 상수(constant) : const
const c = 221;
//c = 4; //에러 발생, 스크립트 정지. 상수로 선언한 값을 변경할 수 없음.(Assignment to constant variable.)
console.log(c);

//var의 경우에도 let과 동일하게 동작.
// **변수를 선언할 때 기본으로 const로 선언. 필요한 경우가 생기면 let사용.


// 2. Data type on JS
// - String : 줄, 모든것을 붙인것. 끝이 있음... 보통 text string을 의미.
const what = "something";
// ""를 제거하는 경우, 키워드로 인식
// **이모티콘도 텍스트
console.log(what);

// - boolean : true or false
const wat = true; //true = 1 / false = 0
console.log(wat);

// - number
const num = 666;

// float : 숫자이면서 floating number(떠돌이 소수점?)을 가지고 있음.
const fl = 55.1; //floating number : 0.1

// 3. Organizing Data with Arrays
// - Array : 데이터를 리스트 처럼 저장.
//** 변수 명명방식 : camel case - 변수명을 소문자로 시작, 명칭에 띄워쓰기가 필요한 경우, 다음 단어를 대문자로 시작
//const daysOfWeek = ...
const mon = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";
console.log(mon, tue, wed, thu, fri);

// > 선언<1> : []
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true, 11, what];
console.log(daysOfWeek);
console.log(daysOfWeek[2]); //인덱스값은 0부터 시작..


//4. Organizing Data with Objects
// - Object : 각 value에 이름을 지정할 수 있다. 
//  > 리스트를 생성할 때 = Array사용.
const nicoInfoA = ["Nico", "55", true, "Seoul"];
console.log(nicoInfoA);
console.log(nicoInfoA[0]);

//  > 항목이 있는 정보를 저장 할 때 = Object사용.(개인정보 등..)
//    - 선언 : {}
//    - Object = 실제 객체를 만드는 것. label을 저장하고 싶은 data에 줄 수 있다.
const nicoInfoO = {
  name : "Nico",
  age : 33,
  gender : "Male",
  isCorrect : true,
  favMovies : ["Along the gods", "The silence of the lambs"],
  favFood : [
    {name :"Kimchi", fatty : false},
    {name : "Cheese burger", fatty : true}
  ]
};
console.log(nicoInfoO);
console.log(nicoInfoO.gender);

nicoInfoO.gender = "Female"; // update : 객체 내 변수 변경
console.log(nicoInfoO.gender);

//nicoInfoO = true; //오류 발생

// -> const로 선언된 객체 자체는 변경불가. 객체 내 변수값은 변경가능.
// -> Object내 Array 추가 가능(반대의 경우도 가능)
// --> 각 항목은 ',' 로 구별된다.

console.log(nicoInfoO.favFood[0].fatty);


// >> lec 2-1 ~