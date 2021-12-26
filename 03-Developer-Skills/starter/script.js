// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function(temps) {
//     let max = temps[0];
//     let min = temps[0];
//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== "number") continue;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function(t1, t2) {
//     const temps = t1.concat(t2);
//     let max = temps[0];
//     let min = temps[0];
//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== "number") continue;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// };
// const amplitude = calcTempAmplitude([5, 12, 9], [7, 15, 9, 21, 3]);
// console.log(amplitude);

// const measureKelvin = function() {
//     const measurement = {
//         type: "temp",
//         unit: "celsius",
//         value: Number(prompt()),
//     };
//     console.log(measurement);
//     console.table(measurement);
//     // console.log(measurement.value);
//     // console.warn(measurement.value);
//     // console.error(measurement.value);
//     const kelvin = measurement.value + 273;
//     return kelvin;
// };
// console.log(measureKelvin());

// const calcTempAmplitude = function(t1, t2) {
//     const temps = t1.concat(t2);
//     let max = 0;
//     let min = 0;
//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== "number") continue;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// };
// const amplitude = calcTempAmplitude([5, 12, 9], [7, 15, 9, 21, 3]);
// console.log(amplitude);

// 1.Understanding The Problem
//-Array transform to string.separated by ...
//-What is the x day? Answer : index + 1

//2.Breaking up into sub-problem
//-Transform array into string
//-Transform each element to string with C
//-String need to contain day(index + 1)
//-Add ... between element and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// console.log(`...${data1[0]}C...${data1[1]}C...${data1[2]}C...`);
const printForecase = function(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}C in ${i + 1} days ...`;
    }
    console.log("... " + str);
};
printForecase(data1);