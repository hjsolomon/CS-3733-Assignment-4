type Bumblor = string;

export function bumblor2arabic(Bumblor: string): number {
    let counter = 0;
    for (let i = 0; i < Bumblor.length; i++) {
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


    let increment = Math.trunc(arabic);
    let bumblor = "";
    let positive = true;
    if (increment < 0) positive = false;

    increment = Math.abs(arabic);

    while (increment >= 0) {
        if(dCounter > 1 || lCounter > 1 || vCounter > 1) throw new Error("MalformedNumber");

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