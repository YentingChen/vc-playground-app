"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withXcodeProject = exports.withXcodeTarget = void 0;
const config_plugins_1 = require("@expo/config-plugins");
Object.defineProperty(exports, "withXcodeProject", { enumerable: true, get: function () { return config_plugins_1.withXcodeProject; } });
const xcodeSafariExtension_1 = require("./xcodeSafariExtension/xcodeSafariExtension");
const withXcodeTarget = (config, { folderName }) => {
    return (0, config_plugins_1.withXcodeProject)(config, (config) => {
        (0, xcodeSafariExtension_1.addSafariExtensionXcodeTarget)(config.modResults, {
            extensionName: folderName,
            extensionBundleIdentifier: `${config.ios?.bundleIdentifier}.${folderName}`,
            currentProjectVersion: config.ios?.buildNumber || "1",
            marketingVersion: config.version || "1.0.0",
            iosRoot: config.modRequest.platformProjectRoot,
        });
        return config;
    });
};
exports.withXcodeTarget = withXcodeTarget;
