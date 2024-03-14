// function teg(n1){
//   if(n1==n1) return 0
//   else if(n1!=n1) return 1
// }
// console.log(teg(1));


//task2
// function get(n1,n2){
//     return -n2/n1
// }
// console.log(get(3,6));

//task4
// function number2(num1) {
//     if(num1%2==0) return 'true'
//     else return 'false'

// }
// console.log(number2(16));

//task5
// function number2(n1){
//   let first =n1%10
//   let last = Math.floor(n1/10)
//   return (first+""+last)<n1
// }
// console.log(number2(72));


                             //HOME WORK 15

//task1
 function get(a){
    let cnt=0
    for(let i=a; i>1; i--){

        if(a%i==0) cnt++
    }
    if(cnt>0) return false

    let pal=""
    for(let i=a; i>0; i=Math.floor(i/10)){

         pal+=i%10
    }
    console.log(pal);
    
    return pal==a

}
console.log(get(121));




