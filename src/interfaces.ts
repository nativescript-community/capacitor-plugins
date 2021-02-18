import type { NativeProperty } from '@nativescript/capacitor';

/**
 * Define your own custom strongly typed native helpers here.
 */
export interface NSPlugins {
  dreamBig: () => NativeProperty<string>;
  openNativeModalView: () => void;
  brightness: (value: number) => void;
}
