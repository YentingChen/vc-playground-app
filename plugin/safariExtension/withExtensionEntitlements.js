"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withExtensionEntitlements = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const plist_1 = __importDefault(require("@expo/plist"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const withExtensionEntitlements = (config, { folderName }) => {
    return (0, config_plugins_1.withInfoPlist)(config, (config) => {
        const extensionEntitlementsPath = path.join(config.modRequest.projectRoot, folderName, `${folderName}.entitlements`);
        const entitilementsFileExists = fs.existsSync(extensionEntitlementsPath);
        if (entitilementsFileExists)
            return config;
        const safariExtensionEntitlements = {
            "com.apple.security.application-groups": [
                `group.${config.ios?.bundleIdentifier}`,
            ],
        };
        fs.mkdirSync(path.dirname(extensionEntitlementsPath), { recursive: true });
        fs.writeFileSync(extensionEntitlementsPath, plist_1.default.build(safariExtensionEntitlements));
        return config;
    });
};
exports.withExtensionEntitlements = withExtensionEntitlements;
