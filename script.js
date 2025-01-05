function calculatePower() {
    const difficulty = parseFloat(document.getElementById("difficulty").value);
    const score = parseFloat(document.getElementById("score").value);

    if (isNaN(difficulty) || isNaN(score)) {
        document.getElementById("result").innerText = "Please enter valid numbers!";
        return;
    }

    const c = 2.22 * difficulty + 2.31;
    const x = (1000000 - (1000000 - score) * (10 / 3)) / 10000;

    function cal(x, c) {
        let t = 0;
        if (x < 90) {
            t = 0.0;
        } else if (x <= 94.5) {
            t = (24 / 135 * Math.exp(8 / 9 * (x - 95)) + 0.125);
        } else if (x < 95.5) {
            t = cal(94.5, 1) + (cal(95.5, 1) - cal(94.5, 1)) * (x - 94.5) + (x - 94.5) * (x - 95.5) / 30;
        } else if (x <= 96) {
            t = (24 / 135 * Math.exp(2 / 3 * (x - 95)) + 0.125);
        } else if (x < 96.5) {
            t = cal(96, 1) + 2 * (cal(96.5, 1) - cal(96, 1)) * (x - 96);
        } else if (x < 97.5) {
            t = (80 / 297 * (Math.log(x - 95) - Math.log(5)) + 10 / 11) * (3 * x - 250.5) / 40;
        } else if (x < 98) {
            t = (80 / 297 * (Math.log(x - 95) - Math.log(5)) + 10 / 11) * (x - 76.5) / 20;
        } else if (x < 98.5) {
            t = (80 / 297 * (Math.log(x - 95) - Math.log(5)) + 10 / 11) * (3 * x - 186.5) / 100;
        } else if (x < 99) {
            t = (80 / 297 * (Math.log(x - 95) - Math.log(5)) + 10 / 11) * (x - 44) / 50;
        } else if (x < 100) {
            t = 8 / 27 * (Math.log(x - 95) - Math.log(5)) + 1;
        } else if (x === 100) {
            t = 1;
        } else {
            t = 0;
        }
        return t * c;
    }

    const power = cal(x, c);
    document.getElementById("result").innerText = `DJ POWER: ${power.toFixed(4)}`;
}
