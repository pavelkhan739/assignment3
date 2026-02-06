function gonoVote(votes) {
    if (!Array.isArray(votes)) {
        return "Invalid";
    }

    let haCount = votes.filter(v => v === "ha").length;
    let naCount = votes.filter(v => v === "na").length;

    if (haCount > naCount) {
        return true;
    }
    if (haCount === naCount) {
        return "equal";
    }
    return false;
}