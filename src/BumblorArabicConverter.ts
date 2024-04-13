//type Bumblor = string;

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

    // let posM = Bumblor.search("M");
    // let posD = Bumblor.search("D");
    // let posC = Bumblor.search("C");
    // let posL = Bumblor.search("L");
    // let posX = Bumblor.search("X");
    // let posV = Bumblor.search("V");
    // let posI = Bumblor.search("I");

    // if (!(posD === -1) && !(posM < posD)) {
    //     throw new Error("Malformed Number");
    // }
    // if (!(posC === -1) && !(posD < posC)) {
    //     throw new Error("Malformed Number");
    // }
    // if (!(posL === -1) && !(posC < posL)) {
    //     throw new Error("Malformed Number");
    // }
    // if (!(posX === -1) && !(posL < posX)) {
    //     throw new Error("Malformed Number");
    // }
    // if (!(posV === -1) && !(posX < posV)) {
    //     throw new Error("Malformed Number");
    // }
    // if (!(posV === -1) && !(posV < posI)) {
    //     throw new Error("Malformed Number");
    // }


    for (let i = 0; i < Bumblor.length; i++) {
        if (Bumblor.charAt(i) === undefined && !(Bumblor.charAt(i) === "M") && !(Bumblor.charAt(i) === "C") && !(Bumblor.charAt(i) === "X") && !(Bumblor.charAt(i) === "I") && !(Bumblor.charAt(i) === "D") && !(Bumblor.charAt(i) === "L") && !(Bumblor.charAt(i) === "V") && !(Bumblor.charAt(i) === "O")) {
            throw new Error("Malformed Number");
        }

        if (Bumblor.charAt(i) === "M") {
            countM++;
            // countC = 0;
            // countX = 0;
            // countI = 0;
            // countD = 0;
            // countL = 0;
            // countV = 0;
            // countO = 0;

        }
        if (Bumblor.charAt(i) === "C") {
            countC++;
            if (!(Bumblor.search("M") < Bumblor.search("C"))) {
                throw new Error("Malformed Number");
            }
            if (!(Bumblor.search("D") < Bumblor.search("C"))) {
                throw new Error("Malformed Number");
            }
            // countM = 0;
            // countX = 0;
            // countI = 0;
            // countD = 0;
            // countL = 0;
            // countV = 0;
            // countO = 0;
        }
        if (Bumblor.charAt(i) === "X") {
            countX++;
            if (!(Bumblor.search("M") < Bumblor.search("X"))) {
                throw new Error("Malformed Number");
            }
            if (!(Bumblor.search("D") < Bumblor.search("X"))) {
                throw new Error("Malformed Number");
            }
            if (!(Bumblor.search("C") < Bumblor.search("X"))) {
                throw new Error("Malformed Number");
            }
            if (!(Bumblor.search("L") < Bumblor.search("X"))) {
                throw new Error("Malformed Number");
            }
            // countM = 0;
            // countC = 0;
            // countI = 0;
            // countD = 0;
            // countL = 0;
            // countV = 0;
            // countO = 0;
        }
        if (Bumblor.charAt(i) === "I") {
            countI++;
            if (!(Bumblor.search("M") < Bumblor.search("I"))) {
                throw new Error("Malformed Number");
            }
            if (!(Bumblor.search("D") < Bumblor.search("I"))) {
                throw new Error("Malformed Number");
            }
            if (!(Bumblor.search("C") < Bumblor.search("I"))) {
                throw new Error("Malformed Number");
            }
            if (!(Bumblor.search("L") < Bumblor.search("I"))) {
                throw new Error("Malformed Number");
            }
            if (!(Bumblor.search("X") < Bumblor.search("I"))) {
                throw new Error("Malformed Number");
            }
            if (!(Bumblor.search("V") < Bumblor.search("I"))) {
                throw new Error("Malformed Number");
            }
            // countM = 0;
            // countC = 0;
            // countX = 0;
            // countD = 0;
            // countL = 0;
            // countV = 0;
            // countO = 0;
        }
        if (Bumblor.charAt(i) === "D") {
            countD++;
            if (!(Bumblor.search("M") < Bumblor.search("D"))) {
                throw new Error("Malformed Number");
            }
            // countM = 0;
            // countC = 0;
            // countX = 0;
            // countI = 0;
            // countL = 0;
            // countV = 0;
            // countO = 0;
        }
        if (Bumblor.charAt(i) === "L") {
            countL++;
            if (!(Bumblor.search("M") < Bumblor.search("L"))) {
                throw new Error("Malformed Number");
            }
            if (!(Bumblor.search("D") < Bumblor.search("L"))) {
                throw new Error("Malformed Number");
            }
            if (!(Bumblor.search("C") < Bumblor.search("L"))) {
                throw new Error("Malformed Number");
            }
            // countM = 0;
            // countC = 0;
            // countX = 0;
            // countI = 0;
            // countD = 0;
            // countV = 0;
            // countO = 0;
        }
        if (Bumblor.charAt(i) === "V") {
            countV++;
            if (!(Bumblor.search("M") < Bumblor.search("V"))) {
                throw new Error("Malformed Number");
            }
            if (!(Bumblor.search("D") < Bumblor.search("V"))) {
                throw new Error("Malformed Number");
            }
            if (!(Bumblor.search("C") < Bumblor.search("V"))) {
                throw new Error("Malformed Number");
            }
            if (!(Bumblor.search("L") < Bumblor.search("V"))) {
                throw new Error("Malformed Number");
            }
            if (!(Bumblor.search("X") < Bumblor.search("V"))) {
                throw new Error("Malformed Number");
            }
            // countM = 0;
            // countC = 0;
            // countX = 0;
            // countI = 0;
            // countD = 0;
            // countL = 0;
            // countO = 0;
        }
        if (Bumblor.charAt(i) === "O") {
            if (!(Bumblor.length === 1)){
                throw new Error("Malformed Number");
            }
            countO++;
            // countM = 0;
            // countC = 0;
            // countX = 0;
            // countI = 0;
            // countD = 0;
            // countL = 0;
            // countV = 0;
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
        throw new Error("Out of Range");
    }
    if (arabic === 0) {
        return "O"
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
            break;
        }
    }
    if (!positive) bumblor = "-" + bumblor;
    return bumblor;

}