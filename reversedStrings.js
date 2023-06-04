//1
function solution(str) {
    return str.split("").reverse().join("");
}


//2
function solution(str) {
    const arr = str.split("");
    const reversed = arr.reverse();
    const finalAnswer = reversed.join("");

    return finalAnswer;

}