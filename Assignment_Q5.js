function analyzeText(text) {
    if (typeof text !== "string") {
        return "Invalid";
    }

    let words = text.trim().split(/\s+/);
    if (words.length === 0 || words[0] === "") {
        return "Invalid";
    }

    let longestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    let totalChars = text.replace(/\s+/g, "").length;

    return {
        longwords: longestWord,
        token: totalChars
    };
}