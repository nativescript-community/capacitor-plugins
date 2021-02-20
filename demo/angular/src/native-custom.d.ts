import type { NativeProperty } from '@nativescript/capacitor';
import type { pluginsGlobal } from '@nativescript-community/capacitor-plugins/src/interfaces';

declare module '@nativescript/capacitor' {
  export interface customNativeAPI extends nativeCustom {}
}

/**
 * Define your own custom strongly typed native helpers here.
 */
export interface nativeCustom extends pluginsGlobal {
  dreamBig: () => NativeProperty<string>;
  openNativeModalView: () => void;
}

