"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withAppEntitlements = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const withAppEntitlements = (config) => {
    return (0, config_plugins_1.withEntitlementsPlist)(config, (config) => {
        config.modResults["com.apple.security.application-groups"] = [
            `group.${config.ios.bundleIdentifier}`,
        ];
        return config;
    });
};
exports.withAppEntitlements = withAppEntitlements;
