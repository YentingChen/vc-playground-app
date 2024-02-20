"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withExtensionConfig = void 0;
const withExtensionConfig = (config, { folderName }) => {
    if (!config.ios?.bundleIdentifier) {
        throw new Error("You need to specify ios.bundleIdentifier in app.json.");
    }
    const extensionBundleIdentifier = `${config.ios.bundleIdentifier}.${folderName}`;
    const appExtensions = config.extra?.eas?.build?.experimental?.ios?.appExtensions;
    const safariExtensionConfig = appExtensions?.find((extension) => extension.targetName === folderName);
    return {
        ...config,
        extra: {
            ...(config.extra ?? {}),
            eas: {
                ...(config.extra?.eas ?? {}),
                build: {
                    ...(config.extra?.eas?.build ?? {}),
                    experimental: {
                        ...(config.extra?.eas?.build?.experimental ?? {}),
                        ios: {
                            ...(config.extra?.eas?.build?.experimental?.ios ?? {}),
                            appExtensions: [
                                {
                                    ...(safariExtensionConfig ?? {
                                        targetName: folderName,
                                        bundleIdentifier: extensionBundleIdentifier,
                                    }),
                                    entitlements: {
                                        ...safariExtensionConfig?.entitlements,
                                        "com.apple.security.application-groups": [
                                            `group.${config.ios.bundleIdentifier}`,
                                        ],
                                    },
                                },
                                ...(appExtensions?.filter((extension) => extension.targetName !== folderName) ?? []),
                            ],
                        },
                    },
                },
            },
        },
    };
};
exports.withExtensionConfig = withExtensionConfig;
