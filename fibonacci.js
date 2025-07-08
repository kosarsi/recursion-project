function fibs(n) {
    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        let output = [0, 1];
        for (let i = 2; i < n; i++) {
            output.push(output[i - 1] + output[i - 2]);
        }
        return output; 
    }
}

function fibsRec(n) {
    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        let output = fibsRec(n - 1);
        let num = fibsRec(n - 1)[fibsRec(n - 1).length - 1] + fibsRec(n - 2)[fibsRec(n - 2).length - 1];
        output.push(num);
        return output; 
    }
}

console.log(fibs(10));
console.log(fibsRec(10));