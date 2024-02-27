"use strict";

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(6516151354115164879132198054185165n);
console.log(BigInt(65161513));

// Operations
console.log(10000n + 10000n);
console.log(197465106081628516785418541078510851084n * 1451052105n);

const huge = 15167854156231045231n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == "20");

console.log(huge + " is REALLY big!!!");

// console.log(Math.sqrt(16n));

// Divisions
console.log(10n / 3n);
console.log(11n / 3n);
console.log(12n / 3n);
console.log(10 / 3);
