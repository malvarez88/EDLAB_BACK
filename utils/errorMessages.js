module.exports = {
    null: (field) => `A ${field} is required`,
    isEmail : () => `Please provide a valid email`,
    notEmpty : (field) => `Please provide a ${field}`,
    isDate : () => `A date is required. Format:"YYYY/MM/DD"`,
    unique : (field) => `An account already exists with the proposed ${field})`,
    is : (field) => `The ${field} can only contain letters and numbers(no special characters or spaces)`,
    len : (field,min,max) => `The ${field} can only have between ${min} and ${max} characters`
}