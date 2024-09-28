let number = 15;
if (number > 0) {
    console.log('number is positive');
}
else if (number < 0) {
    console.log('number is negative');
}
else {
    console.log('number is 0')
}

var Day = '4';

switch (Day) {
    case '1':
        console.log('Sunday')
        break;
    case '2':
        console.log('Monday')
        break;
    case '3':
        console.log('Tuesday')
        break;
    case '4':
        console.log('Wednesday')
        break;
    case '5':
        console.log('Thursday')
        break;
    case '6':
        console.log('Friday')
        break;
    case '7':
        console.log('Saturday')
        break;
    default:
        console.log('Unknown day')
}

for (let i = 1; i<=5; i++){
    if (i==3)
    {break;}

    console.log (i);
}

let i=1;
while (i<5) {
    if (i==3){
    console.log ('skipping' + i)
    i++;
continue;}
    console.log( + i + ' is less than 5')
    i++;
    
}
console.log ('i is 5')

let j = 1;
do {
    console.log('speeding ticket number:' + j  ) 
    j++;
} while (j <=5 )

    scopeExample("I'm global!")

    function scopeExample(local) {
        
    console.log (local)
    }
   