import type { NativeProperty } from '@nativescript/capacitor';
import type { NSPlugins } from '@nativescript-community/capacitor-plugins/src/interfaces';

declare module '@nativescript/capacitor' {
  export interface customNativeAPI extends nativeCustom {}
}

/**
 * Define your own custom strongly typed native helpers here.
 */
export interface nativeCustom extends NSPlugins {
  dreamBig: () => NativeProperty<string>;
  openNativeModalView: () => void;
}
