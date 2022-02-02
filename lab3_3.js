let randomNum = Math.floor(Math.random() * 101);
console.log('Random number is : ' + randomNum);
let min = 1;
let max = 100;
let win = 0;
let num = Number(prompt('Guess the number between ' + min + ' and ' + max + ' inclusive or input other numbers to see the secret number?'));
// prompt is string.
while( num !== randomNum )
{
    if(num > max || num < min)
    {
        win = 1;
        break;
    }
    else if (randomNum <= num)
        max = num ;
    else 
        min = num ;
        
    console.log('You guess the number ' + num + ' between ' + min + ' and ' + max );
    num = prompt('Guess the number between ' + min + ' and ' + max + ' inclusive or input other numbers to see the secret number?');

}

if(win === 0) // win is int. 
{   
    console.log('You win.\nYou guess the number ' + num + ' matched random number ' + randomNum );
    alert('Matched! You win.\nThe secret number is ' + randomNum );
}
else 
{
    console.log('You loss.\nYou can\'t guess the number matched random number is ' + randomNum);
    alert('The secret number is ' + randomNum );
}