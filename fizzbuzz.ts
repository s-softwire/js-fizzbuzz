type Rule = (before: string[], index: number) => string[];

// This is our main function
function fizzbuzz(args : string[], ruleMap : Map<number,Rule>) :void {
    for (let i = 195; i < 256; i++) {
        let messages : string[] = [];
        let message : string = "";

        // for each rule, apply it to the message to be generated
        for (let a of args) {
            let rule_fn : Rule | undefined = ruleMap.get(Number(a));
            if (rule_fn) {
                messages = rule_fn(messages, i);
            }
            else {
                console.log("RULE NOT PRESENT");
            }
        }

        // generating final message
        if (!messages.some(x=>x)) { // condition: if none of the elements of messages are defined
            message = i.toString();
        }
        else {
            message = messages.join("");
        }

        console.log(message);
    }

}

/* Main program */

let args : string[] = process.argv.slice(2);

// list of rules, indexed by the divisor of the rule
let ruleMap = new Map<number,Rule>([
    [3, function(messages, index) {
        if (index % 3 == 0) {
            messages.push("Fizz");
        }
        return messages;
    }],
    [5, function(messages,index) {
        if (index % 5 == 0) {
            messages.push("Buzz");
        }
        return messages;
    }],
    [7, function(messages,index) {
        if (index % 7 == 0) {
            messages.push("Bang");
        }
        return messages;
    }],
    [11, function(messages,index) {
        if (index % 11 == 0) {
            messages = ["Bong"];
        }
        return messages;
    }],
    [13, function(messages,index) {
        if (index % 13 == 0) {
            if (messages[0] && messages[0] == "Fizz") {
                messages.splice(1, 0, "Fezz");
            }
            else {
                messages.unshift("Fezz");
            }
        }
        return messages;
    }],
    [17, function(messages,index) {
        if (index % 17 == 0) {
            messages = messages.reverse();
        }
        return messages;
    }]
]);

fizzbuzz(args, ruleMap);