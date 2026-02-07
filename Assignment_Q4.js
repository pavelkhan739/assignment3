function gonoVote(array) {
    if (Array.isArray(array) === false) {
        return "Invalid";
    }

    let hacount = 0;
    let nacount = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "ha") {
            hacount++;
        } else if (array[i] === "na") {
            nacount++;
        }
    }

    if (hacount > nacount) {
        return true;
    } else if (hacount === nacount) {
        return "equal";
    } else {
        return false;
    }
}