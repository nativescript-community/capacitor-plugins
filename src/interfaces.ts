import type { NativeProperty } from '@nativescript/capacitor';

/**
 * Define your own custom strongly typed native helpers here.
 */
export interface NSPlugins {
  brightness: (value: number) => void;
}
