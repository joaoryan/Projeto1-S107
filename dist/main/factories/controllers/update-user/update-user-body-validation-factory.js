"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateUserBodyValidation = void 0;
const validator_composite_1 = require("../../../../presentation/helpers/validators/validator-composite");
const required_update_field_validation_1 = require("../../../../presentation/helpers/validators/required-update-field-validation");
const makeUpdateUserBodyValidation = () => {
    const validations = [];
    validations.push(new required_update_field_validation_1.RequiredUpdateFieldValidaton());
    return new validator_composite_1.ValidationComposite(validations);
};
exports.makeUpdateUserBodyValidation = makeUpdateUserBodyValidation;
