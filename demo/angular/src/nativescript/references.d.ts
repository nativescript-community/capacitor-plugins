/// <reference path="./node_modules/@nativescript/core/global-types.d.ts" />
/// <reference path="./node_modules/@nativescript/types-ios/index.d.ts" />
/// <reference path="./node_modules/@nativescript/types-android/lib/android-29.d.ts" />

import type { NSPlugin } from '@ns-capacitor/plugins';
import type { nativeCustom } from '../native-custom';

declare global {
  var androidCapacitorActivity: android.app.Activity;
  var native: NodeJS.Global & typeof globalThis & NSPlugin & nativeCustom;
}


