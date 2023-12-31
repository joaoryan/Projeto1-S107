"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddUserValidation = void 0;
const validator_composite_1 = require("../../../../presentation/helpers/validators/validator-composite");
const required_field_validation_1 = require("../../../../presentation/helpers/validators/required-field-validation");
const makeAddUserValidation = () => {
    const validations = [];
    const fields = ['idUser', 'typeUser', 'dataUpdate', 'appUpdate', 'serialNumber', 'softwareVersion', 'powerVersion'];
    for (const field of fields) {
        validations.push(new required_field_validation_1.RequiredFieldValidaton(field));
    }
    return new validator_composite_1.ValidationComposite(validations);
};
exports.makeAddUserValidation = makeAddUserValidation;
