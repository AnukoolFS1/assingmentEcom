const currenyObj = {
    "INR": 86,
    "USD": 1
}

const symbol = {
    "INR": "₹",
    "USD": "$"
}

function priceInCurrency(amount, currency) {
    return `${symbol[currency]} ${amount*currenyObj[currency]}/-`
}

export default priceInCurrency