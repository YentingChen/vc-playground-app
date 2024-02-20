import { XcodeProject } from "@expo/config-plugins";
import { PBXFile } from "../utils";
type AddBuildPhaseParams = {
    groupName: string;
    productFile: PBXFile;
    targetUuid: string;
};
export default function addBuildPhases(proj: XcodeProject, { groupName, productFile, targetUuid }: AddBuildPhaseParams): void;
export {};
