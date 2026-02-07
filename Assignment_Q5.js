function analyzeText(str) 
{
    {
        return "Invalid";
    }

    str = str.trim();
    if (str === "") 
    {
        return "Invalid";
    }

    let words = str.split(" ");
    let longest = words[0];

    for (let i = 1; i < words.length; i++) 
    {
        if (words[i].length > longest.length) 
        {
            longest = words[i];
        }
    }

    let totalChars = str.split(" ").join("").length;

    return {
        longwords: longest,
        token: totalChars
    };
}