"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadSpeedOvensConfigsFactory = void 0;
const usecases_1 = require("../../../../data/usecases");
const mysql_1 = require("../../../../infra/db/mysql");
const makeDbLoadSpeedOvensConfigsFactory = (pool) => {
    const repository = new mysql_1.MenuConfigsMySqlRepository(pool);
    return new usecases_1.DbLoadSpeedOvensConfigs(repository);
};
exports.makeDbLoadSpeedOvensConfigsFactory = makeDbLoadSpeedOvensConfigsFactory;