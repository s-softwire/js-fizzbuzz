// This is our main function
function fizzbuzz() :void {
    for (let i = 1; i < 101; i++) {
        let message : string = "";
        if (i % 3 == 0 && i % 5 == 0) {
            message = "FizzBuzz";
        }
        else if (i % 3 == 0) {
            message = "Fizz";
        }
        else if (i % 5 == 0) {
            message = "Buzz";
        }
        else {
            message = i.toString();
        }

        console.log(message);
    }

}

// Now, we run the main function:
fizzbuzz();

