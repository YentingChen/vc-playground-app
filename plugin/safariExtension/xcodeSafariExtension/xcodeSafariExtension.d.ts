import { XcodeProject } from "@expo/config-plugins";
type AddXCodeTargetParmas = {
    extensionName: string;
    extensionBundleIdentifier: string;
    currentProjectVersion: string;
    marketingVersion: string;
    iosRoot: string;
};
export declare function addSafariExtensionXcodeTarget(proj: XcodeProject, { extensionName, extensionBundleIdentifier, currentProjectVersion, marketingVersion, }: AddXCodeTargetParmas): Promise<boolean>;
export {};
