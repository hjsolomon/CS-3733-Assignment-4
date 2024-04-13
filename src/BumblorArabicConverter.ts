type Bumblor = string;

export function bumblor2arabic(Bumblor: string): number {
    let counter = 0;
    let countM = 0;
    let countC = 0;
    let countX = 0;
    let countI = 0;
    let countD = 0;
    let countL = 0;
    let countV = 0;
    let countO = 0;

    for (let i = 0; i < Bumblor.length; i++) {
        if (Bumblor.charAt(i) === undefined && !(Bumblor.charAt(i) === "M") && !(Bumblor.charAt(i) === "C") && !(Bumblor.charAt(i) === "X") && !(Bumblor.charAt(i) === "I") && !(Bumblor.charAt(i) === "D") && !(Bumblor.charAt(i) === "L") && !(Bumblor.charAt(i) === "V") && !(Bumblor.charAt(i) === "O")) {
            throw new Error("Malformed Number");
        }
        if (Bumblor.charAt(i) === "M") {
            countM++;
            countC = 0;
            countX = 0;
            countI = 0;
            countD = 0;
            countL = 0;
            countV = 0;
            countO = 0;

        }
        if (Bumblor.charAt(i) === "C") {
            countC++;
            countM = 0;
            countX = 0;
            countI = 0;
            countD = 0;
            countL = 0;
            countV = 0;
            countO = 0;
        }
        if (Bumblor.charAt(i) === "X") {
            countX++;
            countM = 0;
            countC = 0;
            countI = 0;
            countD = 0;
            countL = 0;
            countV = 0;
            countO = 0;
        }
        if (Bumblor.charAt(i) === "I") {
            countI++;
            countM = 0;
            countC = 0;
            countX = 0;
            countD = 0;
            countL = 0;
            countV = 0;
            countO = 0;
        }
        if (Bumblor.charAt(i) === "D") {
            countD++;
            countM = 0;
            countC = 0;
            countX = 0;
            countI = 0;
            countL = 0;
            countV = 0;
            countO = 0;
        }
        if (Bumblor.charAt(i) === "L") {
            countL++;
            countM = 0;
            countC = 0;
            countX = 0;
            countI = 0;
            countD = 0;
            countV = 0;
            countO = 0;
        }
        if (Bumblor.charAt(i) === "V") {
            countV++;
            countM = 0;
            countC = 0;
            countX = 0;
            countI = 0;
            countD = 0;
            countL = 0;
            countO = 0;
        }
        if (Bumblor.charAt(i) === "O") {
            countO++;
            countM = 0;
            countC = 0;
            countX = 0;
            countI = 0;
            countD = 0;
            countL = 0;
            countV = 0;
        }
        if (countM > 4 || countC > 4 || countX > 4 || countI > 4 || countD > 1 || countL > 1 || countV > 1 || countO > 1) {
            throw new Error("Malformed Number");
        }
            const charToNum =
            Bumblor.charAt(i) === "M"
                ? 1000
                : Bumblor.charAt(i) === "D"
                    ? 500
                    : Bumblor.charAt(i) === "C"
                        ? 100
                        : Bumblor.charAt(i) === "L"
                            ? 50
                            : Bumblor.charAt(i) === "X"
                                ? 10
                                : Bumblor.charAt(i) === "V"
                                    ? 5
                                    : Bumblor.charAt(i) === "I"
                                        ? 1
                                        : Bumblor.charAt(i) === "O"
                                            ? 0
                                            : 0;
        counter += charToNum;
    }

    if (Bumblor.charAt(0) === "-") counter = -counter;

    return counter;
}

export function arabic2bumblor(arabic: number): string {
    let dCounter = 0, lCounter = 0, vCounter = 0;
    if (-4999 > arabic || arabic > 4999) {
        throw new Error("Malformed Number");
    }

    let increment = Math.trunc(arabic);
    let bumblor = "";
    let positive = true;
    if (increment < 0) positive = false;

    increment = Math.abs(arabic) ;
    increment = Math.round(increment-.5)

    while (increment >= 0) {
        if(dCounter > 1 || lCounter > 1 || vCounter > 1) throw new Error("Malformed Number");

        if (increment >= 1000) {
            bumblor += "M";
            increment -= 1000;
            continue;
        }
        if (increment >=  500) {
            bumblor += "D";
            increment -= 500;
            dCounter++;
            continue;

        }
        if (increment >=  100) {
            bumblor += "C";
            increment -= 100;
            continue;

        }
        if (increment >=  50) {
            bumblor += "L";
            increment -= 50;
            lCounter++;
            continue;

        }
        if (increment >= 10) {
            bumblor += "X";
            increment -= 10;
            continue;

        }
        if (increment >=  5) {
            bumblor += "V";
            increment -= 5;
            vCounter++;
            continue;

        }
        if (increment >= 1) {
            bumblor += "I";
            increment -= 1;
            continue;

        }
        if (increment === 0) {
            bumblor += "O";
            break;
        }
    }

    if (!positive) bumblor = "-" + bumblor;
    return bumblor;

}