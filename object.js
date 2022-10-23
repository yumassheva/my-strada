/*Variant with object*/
const operations = {
    add: '+',
    minus: '-',
    multi: '*'
}
function calc(operator, a, b) {
    if (Number(a) && Number(b)) {
        switch (operator) {
            case operations.add: (c = a + b);
                break;
            case operations.minus: (c = a - b);
                break;
            case operations.multi: (c = a * b);
                break;
            default: (console.log("no way"));
        }
        return c;
    }
    else { console.log('error') };
}
console.log(calc(operations.add, 5, 5));