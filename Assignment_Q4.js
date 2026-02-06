function gonoVote(votes) {
    if (!Array.isArray(votes)) {
        return "Invalid";
    }

    let haCount = 0;
    let naCount = 0;

    for (let i = 0; i < votes.length; i++) {
        if (votes[i] === "ha") {
            haCount++;
        } else if (votes[i] === "na") {
            naCount++;
        }
    }

    if (haCount > naCount) {
        return true;
    } else if (haCount === naCount) {
        return "equal";
    } else {
        return false;
    }
}