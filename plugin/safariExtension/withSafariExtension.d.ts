import { ConfigPlugin } from "@expo/config-plugins";
type PluginParams = {
    folderName: string;
    dependencies?: Record<string, string>[];
};
declare const withSafariExtension: ConfigPlugin<PluginParams>;
export default withSafariExtension;
