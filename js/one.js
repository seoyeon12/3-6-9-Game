var computer = 1;
var user ;
var creatDiv = document.createElement( 'div' );

//새로고침
function Reload(){
    location.reload();
}
//시작함수.....시작알람 , 
function Start(){
    alert("3, 6, 9 게임 시자아아악!");
    ComputerAns();
    //CheckClab();
}
//컴퓨터의 답 
function ComputerAns(){
    console.log("컴퓨터의 답")
    if(Checknum(computer)){
        console.log("computer true : " + computer);
        document.getElementById("comnum").innerHTML = "짝";
    }
    else{
        console.log("computer false : " + computer);
        document.getElementById("comnum").innerHTML = computer;
    }  
    computer += 2;
}
//유저의 답
function UserAns(i){
    //console.log("Pass1");
    if(i == 2){
        //console.log("Pass2");
        user = parseInt(document.getElementById("text").value);
        creatDiv.appendChild(document.createTextNode(user + "\u00A0\u00A0"));
        document.body.appendChild( creatDiv );
    }
    else if(i == 3){
        //console.log("Pass3");
        creatDiv.appendChild(document.createTextNode("짝!!\u00A0\u00A0"));
        document.body.appendChild( creatDiv );
    }else{
        console.log("error");
    }
}
//"제출"을 눌렀을 때
function ClickSumi(){
    UserAns(2);
    if(!CheckClab()){
        console.log("박수를 쳐야되요!!");
        alert("틀렸습니다!!!");
        Reload();
    }
    if(CompareNum())
    {
        console.log("숫자가 잘못 입력됐어요!!");
        alert("틀렸습니다!!!");
        Reload();
    }
    ComputerAns();
    removeIn();
}
//"박수 짝!!"을 눌렀을 때
function ClickClab(){
    UserAns(3);
    if(CheckClab()){
        console.log("박수를 치면 안되요!!");
        alert("틀렸습니다!!!");
        Reload();
    }
    ComputerAns();
}
//3,6,9 숫자체크관리
function Checknum(num){
    var Imnum;
    while(num > 10){
        Imnum = num % 10;
        if(Imnum == 3 || Imnum == 6 || Imnum == 9){
            return true;
        }
        num = Math.floor(num / 10);
    }
    console.log("While num : " + num);
        if(num == 3 || num == 6 || num == 9){
            return true;
        }
    return false;
}
//박수 검사
function CheckClab()
{
    console.log("Compare " + (computer-1));
    if(Checknum(computer-1))
    {
        return false;
    }
    else{
        return true;
    }
}
//Text상자 비우기
function removeIn()
{
    document.getElementById("text").value = null;
}
//Text숫자 검사
function CompareNum()
{
    console.log("user 값 : " + user);
    if((computer - 1) == user){
        return false
    }else{
        return true
    }
}

/*.....3.6.9 도전 1
var ans = document.createElement( 'div' );
var ansT;
var com = 1;
var val;

function reload(){
    location.reload();
}

function start(){
    alert("3,6,9 게임 시작!!!!");
    setNum(com);
}

function writeA(){
    val = parseInt(document.getElementById("text").value);
    ansT = document.createTextNode(val);
    ans.appendChild(ansT);
    document.body.appendChild( ans );
    if(com > val || checknum(val)){ stop(); }
    relnum();
}
function setNum(com){
    if(checknum(com))
    {
        console.log(com);
        document.getElementById("comnum").innerHTML = "짝";
    }
    else
    {
        console.log(com);
        document.getElementById("comnum").innerHTML = com;
    }
    console.log(com);
    removeIn(); 
}
function relnum(){
    console.log("com = " + com);
    if(correctAnswer())
    {
        console.log("val = " + val);
        stop();
    }
    else if(com < (val))
    {
        console.log("val = " + val);
        com = val + 1;
    } 
    setNum(com);
}
function clab(){
    ansT = document.createTextNode("짝");
    ans.appendChild(ansT);
    document.body.appendChild( ans );
    com++;
    if(checknum(com+1)){
        stop();
    }
    com++;
    relnum();
}
function checknum(num){
    while(num != 0){
        if((num %= 10) == 3 || (num %= 10) == 6 || (num %= 10) == 9)
        {
            return true;
        }
        num /= 10;
    }

    return false;
}
function correctAnswer()
{
    if(val>0)
    {
        console.log("com : " + com + "val" + val);
        if()
        {
            console.log("com : " + com + "val" + val);
            return true;
        }
    }else if(checknum(com + 1)){
        return true;
    }
    return false;
}
function stop()
{
    document.getElementsByClassName('btn').disabled = false;
    alert("틀렸습니다!!");
    reload();
}
function removeIn()
{
    document.getElementById("text").value = null;
}
*/


/*Lesson 11_업&다운 게임 
var num = Math.ceil(Math.random() * 100) ;
var answer = 0;
do{
    console.log(num);
    answer = prompt("1 ~ 100  수를 입력하세요.");
    if(answer == num){
        alert("정답");
    }else if(answer == null){
        break;
    }else if(answer > num){
        if(confirm(answer + "보다 작습니다.") != 0) break;
    }else if(num > answer){
        if(confirm(answer + "보다 큽니다.") != 0 ) break;
    }
}while(answer != num)
*/

/*Lesson 10_컴퓨터의 가위바위보 맞추기
document.write("<h1>컴퓨터의 가위,바위,보 맞추기</h1>");

var game = prompt("가위, 바위, 보 중 선택하세요?","가위"); 
var gameNum;
switch(game){
    case "가위":
        gameNum = 1; break;
    case "바위":
        gameNum = 2; break;
    case "보":
        gameNum = 3; break;
    default :
        alert("다시 작성해 주세요!!!!");
        location.reload();
}

var com = Math.ceil(Math.random() * 3);
console.log(com);
if(gameNum == com){
    document.write("잘 맞췄습니다.!!!<br> 성공하셨네요.");
}else{
    document.write("틀렸습니다.!!!<br> 실패하셨네요.");
}

function reload(){
    location.reload();
}
*/

/*//Lesson 9 _ 날짜,날짜 비교하기,며칠 지났는지 구하기
var today = new Date();
var nowMonth = today.getMonth();
var nowDate = today.getDate();
var nowDay = today.getDay();

document.write("<h1> 오늘의 날짜 정보 </h1>");
document.write("오늘은 " + nowMonth + " 월 " 
                + nowDate + " 일 입니다.<br>");

// 두개의 날짜를 비교하여 차이를 알려준다.
function dateDiff(_date1, _date2) {
    var diffDate_1 = _date1 instanceof Date ? _date1 : new Date(_date1);
    var diffDate_2 = _date2 instanceof Date ? _date2 : new Date(_date2);
 
    diffDate_1 = new Date(diffDate_1.getFullYear(), diffDate_1.getMonth()+1, diffDate_1.getDate());
    diffDate_2 = new Date(diffDate_2.getFullYear(), diffDate_2.getMonth()+1, diffDate_2.getDate());
 
    var diff = Math.abs(diffDate_2.getTime() - diffDate_1.getTime());
    diff = Math.ceil(diff / (1000 * 3600 * 24));
 
    return diff;
}
var a = '2019-03-31';
document.write(' 현재 ' + (dateDiff(a, new Date()) + 1) + '일 째 입니다.');
*/


/*//Lesson 8_테이블 만들기
var num = 1;
var t = "<table border=1>";
for(var i = 1; i <= 5; i++){
    
    t += "<tr>";

    for(var k = 1; k <= 5; k++){
        t += "<td>";
        t += num++;
        t += "</td>";
    }

    t += "</tr>";
}
t += "</table>";
console.log(t);
document.write(t);
*/

/*//Lesson 7_ 5단 출력
var i = 1;
while(i <= 9){
    console.log( i );
    document.write("5 X " + i + " = " + 5*i , "<br/>");
    i++;
}
*/

/*//Lesson 6_ 5와 7의 배수에 빨강,파랑, 공배수에 보라색 숫자 띄우기
for(var i = 1 ; i <= 100 ; i++){
    console.log(i);
    if(i % 5 == 0 && i % 7 != 0){
        document.write("<p class = 'red'>" + i + "</p>");
    } else if(i % 5 != 0 && i % 7 == 0){
        document.write("<p class = 'blue'>" + i + "</p>");
    } else if(i % 5 == 0 && i % 7 == 0){
        document.write("<p class = 'blueviolet'>" + i + "</p>");
    } else {
        document.write("<p>" + i + "</p>");
    }
}
*/

/*//Lesson 5_아이디,비번 검사
var id = "lee";
var pw = "1234";

var user_id = prompt("당신의 아이디는? " , "");
var user_pw = prompt("당신의 비밀번호는? " , "");

if(id == user_id){

    if(pw == user_pw){
        document.write(user_id + "님 반갑습니다. 환영합니다.");
    }
    else{
        alert("비밀번호가 일치하지 않습니다.");
        location.reload();
    }
}
else{
    alert("아이디가 일치하지 않습니다.");
    location.reload();
}
*/

/*//Lesson 4_판매량 비교 삼항 조건 연산자
var sell4price = prompt("1분기 : 1,200  2분기 : 1,300  3분기 : 1,000 4분기?","0");
var selltotal = (1300 + 1200 + 1000) / 3

var result = sell4price > selltotal ? 
            "판매량이 평균 이상입니다." : "판매량이 평균 미달입니다.";
document.write(result + "   평균값   " + selltotal);
*/

/*Lesson 3
var price1 = 3000;
var price2 = 6000;
var price3 = 3000;

var total = 10000 - (price1 + price2 + price3)
var result = total > 0 ? total + "원 초과" : "돈 관리 잘 했어요!";
document.write(total + " 결과 : " + result);
*/

/*Lesson 2
 var name = prompt("당신의 이름은?","홍길동");
 var height = prompt("당신의 신장은?","0");
 var weight = prompt("당신의 몸무게는?","0");

 var nomalw = (height-100) * 0.9;
 var result = weight>= nomalw-5 && weight <= nomalw + 5;

 document.write(name + "님은" + result);
 */

/*Lesson 1
 var a = 2;
 var b = 3;

 var result = a > b ? "Oh a is big than b" : "Oh b is big than a";
 document.write(result);
 */