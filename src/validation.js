const errorMessages = {
    name: {
        id: 1,
        type: 'invalid name',
        message: "Name can't be less then 3 symbols",
    },
    email: {
        id: 2,
        type: 'invalid email',
        message: "Mail format must be '@redberry.ge'",
    },
    phone: {
        id: 3,
        type: 'invalid phone number',
        message: "Phone number must be 9 digits",
    },
    experience_level: {
        id: 4,
        type: 'invalid experience',
        message: "This field is required",
    },
    date_of_birth: {
        id: 5,
        type: 'invalid date',
        message: "This field is required",
    },
    character_id: {
        id: 6,
        type: 'invalid character',
        message: "This field is required",
    },
    already_participated: {
        id: 7,
        type: 'invalid participated value',
        message: "This field is required",
    }
}
const rules = {
    name: (key, value) => {
        if (value.length > 2) {
            return true
        }
        return errorMessages[key]
    },
    email: (key, value) => {
        if (value.includes('@redberry.ge')) {
            return true
        }
        return errorMessages[key]
    },
    phone: (key, value) => {
        if (value.length === 9) {
            return true
        }
        return errorMessages[key]
    },
    experience_level: (key, value) => {
        if (value !== null) {
            return true
        }
        return errorMessages[key]
    },
    date_of_birth: (key, value) => {
        if (value) {
            return true
        }
        return errorMessages[key]
    },
    character_id: (key, value) => {
        if (value !== null) {
            return true
        }
        return errorMessages[key]
    },
    already_participated: (key, value) => {
        if (value !== null && value !== undefined) {
            return true
        }
        return errorMessages[key]
    }
}

export function isValid(key, value) {
    if (rules[key]) {
        return rules[key](key, value)
    }
    return true
}