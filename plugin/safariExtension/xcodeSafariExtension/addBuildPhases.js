"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
function addBuildPhases(proj, { groupName, productFile, targetUuid }) {
    const buildPath = (0, utils_1.quoted)("");
    // Sources build phase
    const { uuid: sourcesBuildPhaseUuid } = proj.addBuildPhase(["SafariWebExtensionHandler.swift"], "PBXSourcesBuildPhase", groupName, targetUuid, "app_extension", buildPath);
    // Copy files build phase
    const { uuid: copyFilesBuildPhaseUuid } = proj.addBuildPhase([productFile.path], "PBXCopyFilesBuildPhase", groupName, proj.getFirstTarget().uuid, "app_extension", buildPath);
    // Frameworks build phase
    const { uuid: frameworksBuildPhaseUuid } = proj.addBuildPhase([], "PBXFrameworksBuildPhase", groupName, targetUuid, "app_extension", buildPath);
    // Resources build phase
    const { uuid: resourcesBuildPhaseUuid } = proj.addBuildPhase(["src", "assets", "manifest.json"], "PBXResourcesBuildPhase", groupName, targetUuid, "app_extension", buildPath);
}
exports.default = addBuildPhases;
