let commandProcessor = (function() {
    let text = '';
    return {
        append: (t) => text = text + t,
        removeStart: (count) => text = text.slice(count),
        removeEnd: (count) => text.slice(0,text.length - count),
        print: function() {console.log(text)}
    };
}) ();

console.log(commandProcessor.append('Pesho'))
console.log(commandProcessor.append('gosho'))
console.log(commandProcessor.removeStart(2))