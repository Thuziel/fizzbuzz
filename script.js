//click function - DONE
//check if input empty, or if its float - DONE 
//loop through numbers - DONE
//check if fizzbuzz, fizz, buzz or neither - DONE
//check if should add comma - DONE
//update html - DONE

fizzBuzzCheck = (i) => {
    i+=1;
    if(i%3 == 0 && i%5 == 0) {
        return '<span class="fizzbuzz">FizzBuzz</span>';
    }
    else if (i%3 == 0) {
        return '<span class="fizz">Fizz</span>';
    }
    else if (i%5 == 0) {
        return '<span class="buzz">Buzz</span>';
    }
    else {
        return '<span class="num">'+i+'</span>'
    }
}

commaCheck = (i) => {
    if (i !== 0) {
        return '<span class="comma">,</span> ';
    } else {return ''}
}

updateHtml = (i) => {
    document.getElementById('output').innerHTML += commaCheck(i) + fizzBuzzCheck(i);
}


numberCheck = (input) => {
    for (let i = 0; i < input; i++) {
        updateHtml(i);
    }
}

correctInputCheck = (input) => {
    if (input !== '' && input.toString().indexOf(".") == -1 && input.toString().indexOf("-") == -1 && input !== '0') {
        document.getElementById('output').innerHTML = '';
        numberCheck(input);
    } else {document.getElementById('output').innerHTML = 'Try entering "15"...';}
}

clicked = () => {
    let input = document.getElementById('userInput').value;
    correctInputCheck(input);
    document.getElementById('userInput').focus();
}

clearInput = () => {
    document.getElementById('userInput').value = '';
    document.getElementById('userInput').focus();
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('userInput').value = 15;
    clicked();
    let x = document.getElementById('list');
    x.style.display = 'block';
});




hide = () => {
    let x = document.getElementById('list');
    let y = document.querySelector('.introHide');
    if (x.style.display === 'block') {
        x.style.display = 'none';
        y.innerHTML = 'Show&#x25BC;'
        y.style.marginBottom = "12px";
    } else {
        x.style.display = 'block';
        y.innerHTML = 'Hide&#x25B2;'
    }
    document.getElementById('userInput').focus();
}





