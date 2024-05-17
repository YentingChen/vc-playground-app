import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from "expo-modules-core";

// Import the native module. On web, it will be resolved to MyModule.web.ts
// and on native platforms to MyModule.ts
import MyModule from "./src/MyModule";

import { ChangeEventPayload } from "./src/MyModule.types";

// Get the native constant value.
export const PI = MyModule.PI;

export function setKeyValue(value: string): void {
  return MyModule.setKeyValue(value);
}

export function getKeyValue(): String {
  return MyModule.getKeyValue();
}

export async function setValueAsync(value: string) {
  return await MyModule.setValueAsync(value);
}

const emitter = new EventEmitter(MyModule ?? NativeModulesProxy.MyModule);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void
): Subscription {
  return emitter.addListener<ChangeEventPayload>("onChange", listener);
}

export { ChangeEventPayload };
