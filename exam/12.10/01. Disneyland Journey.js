function solve(input){
   let salary = Number(input.shift())
   let month = Number(input.shift())
   
for (let i = 1; i <= month; i++) {
    if(i % 2 == 1){
        let three = (salary*3)*0.25
        var allthree = three - ((salary*2) *0.04) 
        var finish = allthree
    }
    if(i % 2 == 0){
        var fourth = (allthree * 0.25) + (salary*0.25)
        var finish = allthree + fourth
    }
}
    if(finish > salary){
    let end = finish - salary
    console.log(`Bravo! You can go to Disneyland and you will have ${end.toFixed(2)}lv. for souvenirs.`)
    }else if(finish < salary){
    let end1 = salary - finish
    console.log(`Sorry. You need ${end1.toFixed(2)}lv. more.`)
    }
}


solve(['1000', '4'])