// Bele bir task yazmaginizi isteyirem:
// Function  bir array qebul edir, arrayin her bir elementini 5e vurub bize qayatarir, ve ya 2 cixir bize qaytarir.
// Meselecun:
// [1,2,3,4] bi denede callback function gonderirem ki, arrayin indekslerin 2ye vurub mene geri qaytarsin  =>[2,4,6,8]
// yeniden men hemen arrayin indekslerinde 2 cixmaq isteyiremsede mene [-1,0,1,2] qaytarsin.
// Callback functiondan istifade etmeyinizi isteyirem...

// Task-1 Start
// function customMap(arr, func) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = func(arr[i]);
//   }
//   return result;
// }

// function getPlus(num) {
//   return num + 1;
// }
// function getMinus(num){
//     return num-5;
// }
// console.log(customMap([1, 2, 3, 4], getMinus));
// Task-1  End
          
// let arr = [10,15,20,25,30];
// // arr.forEach(n=>console.log(n*2));
// // arr.forEach((n,a)=>console.log(`${n}-indexin deyeri ${a}`));
// arr.map(num=> console.log(num*2));
// console.log(arr);
// console.log(arr.filter(n=>n>14));
// console.log(arr.reduce((t,n)=>t+n));
// arr.every(n=>console.log(n>16));
// arr.some(n=>console.log(n>20));
// console.log(arr.indexOf(41));
// console.log(arr.lastIndexOf(30));
// console.log(arr[arr.length-1]);
// console.log(arr.lastIndexOf(41));
// let students =["Nazile","Emil","Veli"];
// console.log(students.includes("Kamal"));

// let arr = [2,3,4,5];
// console.log(arr.find(n=>n==1));