/**
 * Try calling from Ionic with:
 *
 * import { native } from '@nativescript/capacitor';
 *
 * native.dreamBig().value.then(v => console.log(v));
 *
 * Reference:
 * iOS: https://developer.apple.com/documentation/foundation/nsstring
 * Android: https://developer.android.com/reference/java/lang/String
 */

export const dreamBig = () => {
  const message = 'Dream big!';
  if (native.isAndroid) {
    return new java.lang.String(message);
  } else {
    return NSString.alloc().initWithString(message);
  }
};
