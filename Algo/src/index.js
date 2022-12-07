/**
 * Steps:
 * 1/ For boucle
 * 2/ Ternary operator
 *      - if num % 3 === 0 => falsy => print Fizz
 *      - if num % 5 === 0 => falsy => print Buzz
 *      - if num % 3 === 0 && num % 5 === 0 => falsy + falsy => print FizzBuzz
 *      - else print num ( "" => empty string => falsy || num)
 * @param num
 */

function playFizzBuzz(num) {
	const log = (msg) => console.log(msg); //function print

	for (let i = 1; i < num; i++) log((i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);
}
