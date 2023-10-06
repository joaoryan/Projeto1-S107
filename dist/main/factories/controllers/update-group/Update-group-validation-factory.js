"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateGroupValidation = void 0;
const validator_composite_1 = require("../../../../presentation/helpers/validators/validator-composite");
const required_field_validation_1 = require("../../../../presentation/helpers/validators/required-field-validation");
const makeUpdateGroupValidation = () => {
    const validations = [];
    const fields = ['id', 'menuId', 'groupName', 'groupPosition', 'groupImage', 'preHeat', 'creationDate', 'lastUpdate'];
    for (const field of fields) {
        validations.push(new required_field_validation_1.RequiredFieldValidaton(field));
    }
    return new validator_composite_1.ValidationComposite(validations);
};
exports.makeUpdateGroupValidation = makeUpdateGroupValidation;