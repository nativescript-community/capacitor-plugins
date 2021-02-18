import type { NSPlugins } from '@ns-capacitor/plugins/src/interfaces';

declare module '@nativescript/capacitor' {
  export interface customNativeAPI extends nativeCustom {}
}

/**
 * Define your own custom strongly typed native helpers here.
 */
export interface nativeCustom extends NSPlugins {}
