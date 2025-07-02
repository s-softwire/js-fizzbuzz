// This is our main function
function fizzbuzz() :void {
    for (let i = 195; i < 256; i++) {
        let messages : string[] = new Array(5);
        let message : string = "";

        // for each rule, the corresponsing message is put in a unique index of messages
        if (i % 3 == 0) {
            messages[0] = "Fizz";
        }
        if (i % 5 == 0) {
            messages[2] = "Buzz";
        }
        if (i % 7 == 0) {
            messages[3] = "Bang";
        }
        if (i % 11 == 0) {
            messages = new Array(6);
            messages[4] = "Bong";
        }
        if (i % 13 == 0) {
            messages[1] = "Fezz";
        }
        if (i % 17 == 0) {
            messages = messages.reverse();
        }

        // generating final message
        if (messages.toString() === (new Array(5)).toString()) {
            message = i.toString();
        }
        else {
            message = messages.join("");
        }

        console.log(message);
    }

}

// Now, we run the main function:
fizzbuzz();

