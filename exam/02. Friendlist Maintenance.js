function solve(arr){
    var names=arr[0].split(', ')
    var commands=arr.slice(1)
    var blackListed=[]
    var losted=[]
    var blackListCount=0
    var lostCount=0
    var newArr=names.slice(0)
    for(var i=0;i<commands.length; i++){
           [command, variable1, variable2]=commands[i].split(' ')
           switch(command){
               case 'Blacklist':
                   var indexOfName=names.indexOf(variable1)
                   if(names.includes(variable1)){
                       blackListed.push(variable1)
                       console.log(`${variable1} was blacklisted.`)
                        blackListCount++
                         newArr[indexOfName]='Blacklisted'
                   }
                   else{
                    if(!names[i].includes(variable1))
                    console.log(`${variable1} was not found.`)
                   }
                   break
                case 'Error':
                    for(j=0;j<names.length; j++){
                        if(!(blackListed.includes(names[variable1]) || losted.includes(names[variable1]))){
                            losted.push(names[variable1])
                            console.log(`${names[variable1]} was lost due to an error.`)
                            lostCount++
                            newArr[variable1]='Lost'
                            break
                        }
                    }
                    break
                case 'Change':
                    newArr[variable1]=variable2
                    console.log(`${names[variable1*1]} changed his username to ${variable2}.`)
                    break
                case 'Report':
                    console.log(`Blacklisted names: ${blackListCount}`)
                    console.log(`Lost names: ${lostCount}`)
                    console.log(newArr.join(' '))
                    break
           }
    }
    }