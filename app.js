let arr = [20, 30,25]

// 1 way
// for(let i = 0; i<arr.length; i++ ){
//     console.log(arr[i])
// }

// // 2way
// for(let n of arr){
//     console.log(n)
// }

// 3way
arr.forEach((k)=>{
    console.log(k)
})


arr.push("end")//arrayni oxiriga data qo'shadi
arr.unshift("start")//arrayni boshiga data qo'shadi


arr.shift()//arrayni boshidan data oladi
arr.pop()//arrayni oxiridan data oladi

// console.log(arr);


let salary = [500, 150, 200, ]
let newSalary = []


salary.forEach((s)=>{
    newSalary.push(s + s*0.4)
})
// console.log(newSalary);

let names = ["Abror", "Ibrohimjon", "Ismoil"]
let mr = []

names.forEach((f)=>{
    if(f.includes("jon") ){
        mr.push(f)
    }
    else{
        mr.push(f + "jon")
    }
})


// console.log(mr);


let sonlar = [15, -6, 8, -3, 10 ]
let musbat = []

sonlar.forEach((a)=>{
    if(a > 0){
        musbat.push(a)
    }
    
})

console.log(musbat);


