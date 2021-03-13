import '@nativescript/capacitor/bridge';

export const rateMyApp = () => {
    if (native.isAndroid) {

    } else if (native.isIOS) {
        SKStoreReviewController.requestReview()
    } else {
        throw new Error('Unsupported platform');
    }
}
