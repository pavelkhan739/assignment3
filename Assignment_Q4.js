function gonoVote(votes) {
    if (Array.isArray(votes) === false) {
        return "Invalid";
    }

    let hacount = 0;
    let nacount = 0;

    for (let i = 0; i < votes.length; i++) {
        if (votes[i] === "ha") {
            hacount++;
        } else if (votes[i] === "na") {
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