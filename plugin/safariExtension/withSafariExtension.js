"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const withAppEntitlements_1 = require("./withAppEntitlements");
const withExtensionConfig_1 = require("./withExtensionConfig");
const withExtensionEntitlements_1 = require("./withExtensionEntitlements");
const withExtensionInfoPlist_1 = require("./withExtensionInfoPlist");
const withPodfile_1 = require("./withPodfile");
const withSafariWebExtensionHandler_1 = require("./withSafariWebExtensionHandler");
const withXcodeTarget_1 = require("./withXcodeTarget");
const withSafariExtension = (config, { folderName, dependencies }) => {
    return (0, config_plugins_1.withPlugins)(config, [
        withAppEntitlements_1.withAppEntitlements,
        [withExtensionEntitlements_1.withExtensionEntitlements, { folderName }],
        [withExtensionInfoPlist_1.withExtensionInfoPlist, { folderName }],
        [withSafariWebExtensionHandler_1.withSafariWebExtensionHandler, { folderName }],
        [withPodfile_1.withPodfile, { folderName, dependencies }],
        [withExtensionConfig_1.withExtensionConfig, { folderName }],
        [withXcodeTarget_1.withXcodeTarget, { folderName }],
    ]);
};
exports.default = withSafariExtension;
