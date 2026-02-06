function newPrice(currentPrice, discount) 
{
    if (typeof currentPrice !== "number" || typeof discount !== "number") 
    {
        return "Invalid";
    }
    if (discount < 0 || discount > 100) 
    {
        return "Invalid";
    }
    let cutprice = (currentPrice * discount) / 100;
    let newCost = currentPrice - cutprice;
    return newCost.toFixed(3);
}