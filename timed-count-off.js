
// it works because 'let' is a language's syntax word that has the property of being 'block scope'

for (let i = 1; i <= 5; i++) {
    var time = i * 1000;
    setTimeout(function() {
        console.log(i);
    }, time)
}