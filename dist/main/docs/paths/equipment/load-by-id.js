"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadUserById = void 0;
exports.loadUserById = {
    get: {
        security: [{
            apiKeyAuth: []
        }],
        tags: ['User'],
        summary: 'Retrieve a user by its id',
        parameters: [{
            name: 'id',
            in: 'path',
            required: true,
            description: 'Id of the user',
            schema: {
                type: 'integer',
                format: 'int64',
                minimum: 1
            }
        }],
        responses: {
            200: {
                description: 'OK',
                content: {
                    'application/json': {
                        schema: {
                            allOf: [
                                {
                                    $ref: '#/schemas/user',
                                },
                                {
                                    type: 'object',
                                    properties: {
                                        modelName: {
                                            type: 'string'
                                        },
                                        categoryName: {
                                            type: 'string'
                                        },
                                        storeName: {
                                            type: 'string'
                                        },
                                        menuName: {
                                            type: 'string'
                                        },
                                        address: {
                                            type: 'string'
                                        },
                                        city: {
                                            type: 'string'
                                        },
                                        zipCode: {
                                            type: 'string'
                                        }
                                    }
                                }
                            ]
                        }
                    }
                }
            },
            204: {
                description: 'No content'
            },
            400: {
                $ref: '#/components/badRequest'
            },
            403: {
                $ref: '#/components/forbidden'
            },
            500: {
                $ref: '#/components/serverError'
            }
        }
    }
};