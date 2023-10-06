"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
exports.userSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            readOnly: true,
            description: 'With no swagger-autogen render...'
        },
        idUser: {
            type: 'integer',
            required: false
        },
        storeId: {
            type: 'integer'
        },
        companyId: {
            type: 'integer'
        },
        menuId: {
            type: 'integer'
        },
        sentMenu: {
            type: 'integer'
        },
        name: {
            type: 'string',
            maxLength: '45'
        },
        serialNumber: {
            type: 'string',
            maxLength: '45'
        },
        creationDate: {
            type: 'string',
            format: 'date-time'
        },
        lastUpdate: {
            type: 'string',
            format: 'date-time'
        },
        softwareVersion: {
            type: 'string',
            maxLength: '16'
        },
        iokPin: {
            type: 'string',
            maxLength: '8'
        },
        categoryId: {
            type: 'integer'
        },
        typeUser: {
            type: 'string'
        },
        dataUpdate: {
            type: 'boolean'
        },
        appUpdate: {
            type: 'boolean'
        },
        statusData: {
            type: 'string'
        },
        statusApp: {
            type: 'string'
        },
        hashSw: {
            type: 'integer'
        },
        powerVersion: {
            type: 'string',
            maxLength: '45'
        }
    },
    required: [
        'id',
        'idUser',
        'typeUser',
        'storeId',
        'serialNumber',
        'creationDate',
        'softwareVersion',
        'sentMenu',
        'companyId',
        'iokPin',
        'name',
        'categoryId',
        'dataUpdate',
        'appUpdate',
        'statusData',
        'statusApp',
        'hashSw',
        'menuId',
        'lastUpdate',
        'powerVersion'
    ]
};