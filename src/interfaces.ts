import type {NativeProperty} from '@nativescript/capacitor';

/**
 * Define every plugin interface native helpers here.
 */
export interface brightnessPlugin {
    brightness: (value: number) => void;
}
export interface rateMyAppPlugin {
    rateMyApp: () => void;
}

/**
 * Define all extend interface.
 */
export interface pluginsGlobal extends brightnessPlugin, rateMyAppPlugin {
}
