"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const nodemailer = __importStar(require("nodemailer"));
const params = {
    type: 'smtp',
    host: 'smtp.office365.com',
    secure: false,
    port: 587,
    tls: {
        rejectUnauthorized: true
    },
    auth: {
        user: 'suporte@praticabr.com',
        pass: 'Def6qf2xn'
    }
};
class MailService {
    async sendMail(mailOptions) {
        const transporter = nodemailer.createTransport(params);
        return await transporter.sendMail(mailOptions);
    }
}
exports.MailService = MailService;