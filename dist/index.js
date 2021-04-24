"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = exports.TEMPLATE = void 0;
const handlebars_1 = __importDefault(require("handlebars"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const date_fns_1 = require("date-fns");
var TEMPLATE;
(function (TEMPLATE) {
    TEMPLATE["BASE"] = "base.hbs";
    TEMPLATE["RECEIPT"] = "receipt.hbs";
})(TEMPLATE = exports.TEMPLATE || (exports.TEMPLATE = {}));
const generate = (data, template) => {
    handlebars_1.default.registerHelper("join", function (context, options) {
        return context.map((i) => options.fn(i)).join(", ");
    });
    handlebars_1.default.registerHelper("date", function (context, options) {
        const date = date_fns_1.parseISO(context.fn(this));
        return date_fns_1.format(date, "PPPpp");
    });
    const file = fs_1.default.readFileSync(path_1.default.join(__dirname, "templates", template || TEMPLATE.BASE));
    const compile = handlebars_1.default.compile(file.toString());
    const html = compile(data);
    return html;
};
exports.generate = generate;
exports.default = exports.generate;
