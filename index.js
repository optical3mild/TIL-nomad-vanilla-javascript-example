// >> lec 2-1 ~
// 1. function
const nico = {
  name : "Nico",
  age : 33,
  gender : "Male",
  isCorrect : true,
};
console.log(nico.isCorrect);
// console - an object.
// log - console객체 안의 속성키. 이 경우에는 value가 function임.
// -->
console.log(nico, console); //nico와 console객체를 출력.

// --> 브라우저가 가지고 있는 자바스크립트는 object에 넣을 수 있음. ???
// built-in-function : console.log, alert,...
// function : 어떤것의 기능, 기능적인 것, 어떤 것을 수행하려는 한 부분으로 원하는 만큼 사용가능.

console.log('Greetings Nico');
console.log('Hello Ne');
console.log('Hello Co');
console.log('Hello Ic');
// - 위와 동일한 기능의 함수 생성
// - 선언 : function sayHello()
//  > 1. function
//  > 2. 이름 명명
//  > 3. ()
//  > 4. {} : 인스트럭션 입력
//  > 5. sayHello(); : 사용   
function sayHello() {
  console.log('Hello!');
}
sayHello();
console.log("Hi!"); // log() : console object안에 있는 함수.

// - argument : 인자. parameter. 함수안에서 사용할 변수의 이름
//  > function sayHello2(argument1,...)
function sayHello2(potato) {
  console.log('Hello!', potato);
}
sayHello2("Nico");
// --> 외부에 있는 데이터를 읽는 함수. 함수에게 외부에 있는 데이터를 주는 방법.
sayHello2("N",11); // 인자가 준비되어 있지 않은경우 사용되지 않음.
function sayHello3(potato, huh) {
  console.log('Hello!', potato," you have ", huh, " years of age.");
}
sayHello3("Nico", 15);
// **log()의 경우, 인자를 무한히 가질 수 있음.
// ** ''와 ""의 기능 동일.

// 2. ``, ${}, return SOMETHING and creating and using functions in Object
// - ','를 사용하지 않고 +로 대체. 
function sayHello4(potato, huh) {
  console.log('Hello! '+ potato + " you have " + huh + " years of age.");
}
sayHello4("Nico", 15);

// - 백틱(``)의 사용 : ''와 ""는 혼용불가. 
function sayHello5(name, age) {
  console.log(`Hello ${name} you are ${age} years old.`);
}
sayHello5("Nick", 150);
// --> 선언된 인자를 백틱 내의 ${}로 받아 처리

// - return
function sayHello6(name, age) {
  return `Hello ${name} you are ${age} years old.`;
}
const greetNick = sayHello6("Nick", 150);
console.log(greetNick);
// --> 선언된 변수값은 실행된 함수의 리턴값과 동일.

// - 객체에 포함된 함수 생성. (calculator.plus())
const calculator = {
  plus : function(a, b) {
    return a + b;
  },
  minus : function(a, b) {
    return a - b;
  },
  multiply : function(a, b) {
    return a * b;
  },
  divide : function(a, b) {
    return a / b;
  }
};
const plus = calculator.plus(5,5);
console.log(plus);
// --> console과 calculator는 각각 인자를 받는 함수 log()와 plus()를 가지는 객체.
const minus = calculator.minus(5,5);
const multiply = calculator.multiply(5,5);
const divide = calculator.divide(5,5);
console.log(minus);
console.log(multiply);
console.log(divide);

// 3. js DOM functions
// - 브라우저에서 제공하는 function : js로 html을 제어하는 방법...

//  > document : an Object.
console.log(document); // 전체 document에 접근가능. document를 대표하는 html을 console에 출력. (chrome도구)

//   - document는 많은 속성값(.이하의 function과 변수)을 가짐

//  > id사용
const title = document.getElementById("title");
console.log(title); //크롬도구에서 보면 해당 html tag를 가져온다.

// - DOM : Document Object Module
//  > js는 html에 있는 모든 요소(tag들)를 가져와 Object로 바꿈.
//  > error출력
console.error("an error"); // chrome도구에서 확인가능.
// **Object는 많은 키를 가지고 있음 : log, error, name...
title.innerHTML = "Hi from JS"; //해당 html태그의 출력내용을 바꿈.

// --> js의 모든 function은 찾게 될 모든 객체들을 DOM형태로 변경가능 = 페이지에서 js로 선택한 tag는 객체가 된다.
// == HTML을 DOM객체로 바꿀 수 있다.

// 4. Modifying the DOM with JS : JS로 선택하여 DOM형태로 변경된 객체의 내부구성
// - id로 선택된 DOM으로 할 수 있는 것들 (chrome도구로 결과 확인))
console.dir(title);
console.dir(document);
//title.style.color = "red"; //title의 색상변경
document.title = 'I own you now'; // **'브라우저 tab의 title'변경
//  > getElements~ 종류 확인할 것.
// - querySelector : 노드의 첫번째 자식을 반환.
const title2 = document.querySelector("#title"); // css셀렉터와 유사. "#~"=id로 검색, ".~"=class로 검색.
// ** node ==========================
//  - HTML DOM은 노드(node)라고 불리는 계층적 단위에 정보를 저장.
//  - HTML 문서의 정보는 노드 트리(node tree)라고 불리는 계층적 구조에 저장. 이러한 노드 트리는 노드들의 집합이며, 노드 간의 관계를 보여줌.
//  - 노드 트리는 최상위 레벨인 루트 노드(root node)로부터 시작, 가장 낮은 레벨인 텍스트 노드까지 뻗어 내려감.
//  - HTML 문서의 모든 것은 노드.
// ===================================


// 5. Event and event handlers
// - event
//  > js는 이벤트에 반응하기 위해 만들어짐
//  > event : 웹 사이트에서 발생하는 것들 - click, resize, submit, input change, load, print,...
//  > event는 중간에 가로챌 수 있다.
//  > window. : 조금 다른 이벤트를 가지고 있음...???
// - 이벤트 리스너
//window.addEventListener("resize", 함수명 ); //이벤트를 받기를 기다림(listen to event))
//  > 이벤트가 어떤 것인지 명확히 명칭을 입력하고, 이벤트가 다룰 함수명을 입력.

function handleResize(event){
  console.log(event);
  console.log("I have been resized");
}

window.addEventListener("resize",handleResize); // 필요한 시점(=이벤트 발생 시점)에 함수 호출
//window.addEventListener("resize",handleResize()); // 지금당장 함수 호출 = 이벤트 발생하지 않아도 실행.

// - 매개변수로 전달된 event : 이벤트가 발생 할때 마다 event객체가 호출....

const title3 = document.querySelector("#title");

function handleClick() {
  title.style.color = "green";
}

//title3.addEventListener("click", handleClick);
// --> title3는 click이벤트를 기다림. 


// 6. 조건문 if, else, and, or
// - if-else
/*
if(condition : 조건. 결과가 참 이기만 하면 무엇이든 가능.) {
  block : 자바스크립트 표현. console.log(), alert(),...
} else {
  block
}
*/

if(10 > 5) {
  console.log("hi");
} else {
  console.log("ho");
}

if(10 === 5) {
  console.log("hi");
} else {
  console.log("ho");
}
// === : 10이 완전히 5하고 같은지 체크. ( 타입까지 비교 )
// == : 타입과 상관없이 비교.
// --> "185.3" == 185.3 -> true
// --> "185.3" === 185.3 -> false
// --> undefined == null => true
// --> undefined === null => false
// --> "11" == "11" -> true.
// --> "11" === "11" -> true. 
// **java와 다르게 String을 객체로 인식, 주소값을 비교하지 않는다.

if("10" === 10) {
  console.log("hi");
} else if("10" === "10") {
  console.log("lalala");
} else {
  console.log("ho");
}

// - 피연산자 : 다른 조건들을 합치게 하는 것
if(20 > 5 && "nico" === "nico") {
  console.log("yes");
} else {
  console.log("no");
}
if(20 > 5 || "nifco" === "nico") {
  console.log("yes");
} else {
  console.log("no");
}
//  > &&(and) : 양쪽의 조건 모두가 참이어야 참이 됨.
//  > ||(or) : 둘중 한 조건이 참인 경우 참

// - prompt() : 유저에게 메세지를 입력폼과 함께 보여줌. 오래되었으며 잘 사용하지 않음. html의 form으로 대체(스타일 수정, 입력내용과 종류의 다양화 등등...의 요인으로 인해?)
//prompt("Ask something");

//const age = prompt("How old are you?");
//console.log(age); // 입력된 값이 콘솔로 출력.
// --> 팝업의 확인버튼을 누르기 전까지 prompt코드에서 정지, 이후코드가 실행되지 않고 대기상태로 유지됨.
/*
if(age >= 18 && age <= 21) {
  console.log("you can drink");
} else if(age > 21){
  console.log("go ahead");
} else {
  console.log("you can't");
}
*/

// 7. DOM If else Function practice
// - 이벤트에 반응하는 방법
const title4 = document.querySelector("#title"); 
const BASE_COLOR = "rgb(52, 73, 94)"; // 색 체크. 대문자로 명명.
const OTHER_COLOR = "#7f8c8d";

function handleClickChCo() {
  const currentColor = title4.style.color;
  //console.log(currentColor);
  if(currentColor === BASE_COLOR) {
    title4.style.color = OTHER_COLOR;
    console.log("실행")
  } else {
    title4.style.color = BASE_COLOR;
  }
}

//초기화. init();으로 자동실행.
function init(){
  title4.style.color = BASE_COLOR;
  title4.addEventListener("mouseenter", handleClickChCo);
}
init();

// **이벤트 목록 : html javascript dom event MDN으로 검색 - MDN에 검색하여  EVENT의 정보를 찾을 것.

// > offline : 네트워크와의 연결 감지.
function handleOffline(){
  console.log("lalalalala");
}
window.addEventListener("offline", handleOffline);