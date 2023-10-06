"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStepCombiOvenTSIParamsSchema = void 0;
exports.addStepCombiOvenTSIParamsSchema = {
    type: 'object',
    properties: {
        stepCombiOvenTSI: {
            recipeId: {
                type: 'number'
            },
            menuId: {
                type: 'number'
            },
            equipTypeId: {
                type: 'number'
            },
            stepPosition: {
                type: 'number'
            },
            isActive: {
                type: 'boolean'
            },
            stepTemperature: {
                type: 'number'
            },
            steamPercentage: {
                type: 'number'
            },
            fanSpeed: {
                type: 'number'
            },
            steamInjection: {
                type: 'number'
            },
            endByTime: {
                type: 'boolean'
            },
            stepTime: {
                type: 'number'
            },
            stepInfo: {
                type: 'string'
            },
            stepMode: {
                type: 'string'
            },
            stepsTurboGrill: {
                type: 'boolean'
            }
        }
    },
    required: ['recipeId', 'menuId', 'equipTypeId', 'stepPosition', 'isActive', 'stepTemperature', 'steamPercentage', 'fanSpeed', 'steamInjection', 'endByTime', 'stepTime', 'stepInfo', 'stepMode', 'stepsTurboGrill']
};