const currenyObj = {
    "INR": 86,
    "USD": 1
}

const currencySymbol = {
    "INR": "₹",
    "USD": "$"
}

function priceInCurrency(amount, currency) {
    return `${currencySymbol[currency]} ${(amount * currenyObj[currency]).toFixed(2)}/-`
}

export { currencySymbol }
export default priceInCurrency