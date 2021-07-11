// let ten = 10;
// console.log(ten * ten);

// let mood = "light";
// console.log("mood", mood);

// mood = "dark";
// console.log("mood", mood);

// let luigisDebt = 140;
// luigisDebt = luigisDebt - 35;
// console.log("luigisDebt", luigisDebt);

// let one = 1,
//   two = 2;
// console.log("one+two", one + two);

// console.log("Math.max(2,4)", Math.max(2, 4));

// console.log("Math.min(2,4)+10", Math.min(2, 4) + 10);

// let theNumber = Number("pick a number");
// console.log("Your nunber is the square root of " + theNumber * theNumber);

// if (!Number.isNaN(theNumber)) {
//   console.log("Your name is the square root of " + theNumber * theNumber);
// }

// if (1 + 1 === 2) {
//   console.log("It is true");
// }

// let num = Number(prompt("pick a number"));
// if (num < 10) {
//   console.log("Small");
// } else if (num < 10) {
//   console.log("medium");
// } else {
//   console.log("large");
// }

// let number = 0;

// while (number <= 10) {
//   console.log("number", number);
//   number = number + 2;
// }

// let result = 1;
// let counter = 0;
// while (counter < 10) {
//   result = result * 2;
//   counter = counter + 1;
// }
// console.log("result", result);

// let yourName;
// do {
//   yourName = prompt("who are you");
// } while (!yourName);
// {
//   console.log("yourname", yourName);
// }

// let result = 1;
// for (let counter = 1; counter < 20; counter = counter + 1) {
//   result = result * 2;
//   console.log("result", result);
// }

// for (let current = 20; ; current = current + 1) {
//   if (current % 7 === 0) {
//     console.log("current", current);
//     break;
//   }
// }

// switch (prompt("what is the weather like?")) {
//   case "rainy":
//     console.log("remeber to bring an umbrella.");
//     break;
//   case "sunny":
//     console.log("dress directly");
//     break;
//   case "cloudy":
//     console.log("go outside");
//     break;
//   default:
//     console.log("unknown weather type");
//     break;
// }

// let str = "";
// for (let i = 1; i < 8; i++) {
//   str = str + "#";
//   console.log(i, str);
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i, "FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log(i, "Fizz");
//   } else if (i % 5 === 0) {
//     console.log(i, "Buzz");
//   }
// }

// let str = `
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// `;

// console.log("str", str);

function getTable(num) {
  let str = "";
  for (let i = 1; i < num + 1; i++) {
    if (i % 2 === 0) {
      str = `
      ${str + getEvenRows(num)}
      `;
    } else {
      str = `${str + getOddRows(num)}
      `;
    }
  }
  return str;
}

function getOddRows(num) {
  let str = " ";
  for (let i = 1; i < num + 1; i++) {
    if (i % 2 === 0) {
      str = str + "#";
    } else {
      str = str + " ";
    }
  }
  return str;
}

function getEvenRows(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    if (i % 2 === 0) {
      str = str + " ";
    } else {
      str = str + "#";
    }
  }
  return str;
}

console.log(getTable(8));
