import {isValid} from "@/validation";

export const registrationMixin = {
    methods: {
        validate(fields, validFields) {
            const errors = []
            for (let key of fields) {
                let result = null
                if (this.model[key].isRequired) {
                    result = isValid(key, this.model[key].value)
                    if (result !== true) {
                        errors.push(result)
                        validFields[key] = false
                    } else {
                        validFields[key] = true
                    }
                }
            }
            return errors
        },
        showErrors(errors) {
            for (let error of errors) {
                this.addErrorMessage(error)
                setTimeout(() => {
                    this.removeErrorMessage(error.id)
                }, 3000)
            }
        },
        validateAndNext(validationFields, validFields) {
            const errors = this.validate(validationFields, validFields)
            if (errors.length) {
                this.showErrors(errors)
            } else {
                this.$emit('next')
            }
        }
    }
}