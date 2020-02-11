function solve(input){
   let salary = input.shift()
   let month = input.shift()
   
let sum = []
for (let i = 1; i <= month; i++) {
    sum.push(i)

}
    if(sum.includes(3)){
        let three = (salary*3)*0.25
        var allthree = three - ((salary*2) *0.04)
        
    }
    if(sum.includes(4)){
        var fourth = (allthree * 0.25) + (salary*0.25)
    }else{
        fourth = allthree -allthree
    }
    var finish = allthree + fourth

    if(finish > salary){
    let end = finish - salary
    console.log(`Bravo! You can go to Disneyland and you will have ${end.toFixed(2)}lv. for souvenirs.`)
    }else if(finish < salary){
    let end1 = salary - finish
    console.log(`Sorry. You need ${end1.toFixed(2)}lv. more.`)
}
}


solve(1000, 4)