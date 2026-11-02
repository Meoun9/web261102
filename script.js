/*
//document.write("외부 스크립트 방법"); // 보안 상 문제가 있어서 안 씀

console.log("여기 부분은 웹 페이지가 아니라 콘솔에 출력이 됩니다.");

let dan = 3;

console.log("=== '구구단 3단' ===");
for (let i = 1; i < 10; i++){
console.log(`${dan} * ${i} = ${dan*i}`) // ` `
};

// 같다는 ===

if (dan === '3'){
    console.log("3단이 맞다");
} else {
    console.log("3단이 아니다");
}

// JS는 C랑 비슷하다.

let arr = [80, 70, "gd", 90, 60];
console.log(arr);
console.log(arr[2]);

let stdScore = {
    korean : 80,
    english: 70, 
    math : 90, 
    science : 60
};
console.log(stdScore);
console.log(stdScore.math);

stdScore.name = "홍길동";
console.log(stdScore);
*/