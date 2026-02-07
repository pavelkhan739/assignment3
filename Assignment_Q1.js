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
    let discount_price = (currentPrice * discount) / 100;
    let new_Price = currentPrice - discount_price;
    return new_Price.toFixed(3);
}