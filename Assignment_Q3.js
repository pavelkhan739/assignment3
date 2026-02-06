function finalScore(result) {
    if (typeof result !== "object" || result === null) {
        return "Invalid";
    }

    let right = result.right;
    let wrong = result.wrong;
    let skip = result.skip;

    if (typeof right !== "number" || typeof wrong !== "number" || typeof skip !== "number") {
        return "Invalid";
    }

    if (right + wrong + skip !== 100) {
        return "Invalid";
    }

    let score = (right * 1) + (wrong * -0.5) + (skip * 0);
    return Math.round(score);
}
