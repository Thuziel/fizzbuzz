//click function - DONE
//check if input empty, or if its float - DONE 
//loop through numbers - DONE
//check if fizzbuzz, fizz, buzz or neither - DONE
//check if should add comma - DONE
//update html - DONE


let input;

fizzBuzzCheck = (i) => {
    i+=1;
    if(i%3 == 0 && i%5 == 0) {
        return 'FizzBuzz'
    }
    else if (i%3 == 0) {
        return 'Fizz'
    }
    else if (i%5 == 0) {
        return 'Buzz'
    }
    else {
        return i
    }
}

commaCheck = (i) => {
    if (i !== 0) {
        return ', '
    } else {return ''}
}

updateHtml = (i) => {
    document.getElementById('output').innerHTML += commaCheck(i) + fizzBuzzCheck(i);
}


numberCheck = () => {
    for (let i = 0; i < input; i++) {
        updateHtml(i);
    }
}

correctInputCheck = () => {
    if (input !== '' && input.toString().indexOf(".") == -1) {
        document.getElementById('output').innerHTML = '';
        numberCheck();
    }
}

clicked = () => {
    input = document.getElementById('userInput').value;
    correctInputCheck();
}








