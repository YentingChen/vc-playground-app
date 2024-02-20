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
Object.defineProperty(exports, "__esModule", { value: true });
exports.withPodfile = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const generateCode_1 = require("@expo/config-plugins/build/utils/generateCode");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const withPodfile = (config, { folderName, dependencies }) => {
    return (0, config_plugins_1.withDangerousMod)(config, [
        "ios",
        (config) => {
            if (!dependencies)
                return config;
            const podFilePath = path.join(config.modRequest.platformProjectRoot, "Podfile");
            let podfileContent = fs.readFileSync(podFilePath).toString();
            const extensionTargetContents = `target '${folderName}' do          
        ${dependencies
                ?.map((dependency) => `pod '${dependency.name}'${dependency.version ? `, '${dependency.version}'` : ""}`)
                .join("\n")}
end`;
            podfileContent = (0, generateCode_1.mergeContents)({
                tag: "safari-extension-target",
                src: podfileContent,
                newSrc: extensionTargetContents,
                anchor: /target\s+'reactnavigationexample'/,
                offset: -1,
                comment: "#",
            }).contents;
            fs.writeFileSync(podFilePath, podfileContent);
            return config;
        },
    ]);
};
exports.withPodfile = withPodfile;
