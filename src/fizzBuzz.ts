export class FizzBuzz{
    answerFor(arg0: number): string | number {
        if((isFizz(arg0) && isBuzz(arg0)) || (contains3(arg0) && contains5(arg0))) return "FizzBuzz";
        if(isFizz(arg0) || contains3(arg0)) return "Fizz";
        if(isBuzz(arg0)|| contains5(arg0)) return "Buzz";
        return arg0;
    }
}

function isFizz(arg0: number) {
    return arg0 % 3 === 0;
}

function isBuzz(arg0: number) {
    return arg0 % 5 === 0;
}

function contains3(arg0: number): boolean {
    return arg0.toString().includes('3');
}

function contains5(arg0: number): boolean {
    return arg0.toString().includes('5');
}


