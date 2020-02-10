function solve(a,b){
   let salary = a
   let month = b

   let sum = []
 
   for (let i = 1; i <= month; i++) {
   sum.push(i)
    if(sum.includes(3)){
        let three = (salary * 2 * 0.25) * 0.16;
        let totalThree = (salary * 0.25)  -three;
        var finalThree = totalThree + (salary * 2 * 0.25)
    }else if(sum.includes(4)){
        var four = (finalThree * 0.25) + salary * 0.25
    }
    let finish = finalThree+four
    if(finish>salary){
        let end = finish - salary;
        console.log(`Bravo! You can go to Disneyland and you will have ${end}lv. for souvenirs.`)
    }else if(finish<salary){
        let end1 = salary - finish
        console.log(`Sorry. You need ${end1}lv. more.`)
    }
       
   }
}
solve(1000, 4)