"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidaton = void 0;
const errors_1 = require("../../errors");
class EmailValidaton {
    constructor(emailValidator, fieldName) {
        this.emailValidator = emailValidator;
        this.fieldName = fieldName;
    }
    validate(input) {
        const isValid = this.emailValidator.isValid(input[this.fieldName]);
        if (!isValid) {
            return new errors_1.InvalidParamError(this.fieldName);
        }
    }
}
exports.EmailValidaton = EmailValidaton;
