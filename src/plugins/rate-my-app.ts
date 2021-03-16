import '@nativescript/capacitor/bridge';

export const rateMyApp = () => {
    if (native.isAndroid) {
        const context = native.androidCapacitorActivity;
        // @ts-ignore
        const googlePlayTasks = (<any>com.google.android.play.core).tasks;

        const reviewDialogListener = new googlePlayTasks.OnCompleteListener({
            onComplete: task => {
                if (task.isSuccessful()) {
                    task.getResult();
                }
            }
        });
        const reviewIntentListener = new googlePlayTasks.OnCompleteListener({
            onComplete: task => {
                if (task.isSuccessful()) {
                    const reviewInfo = task.getResult();
                    const flow = manager.launchReviewFlow(context, reviewInfo);
                    flow.addOnCompleteListener(reviewDialogListener);
                } else {
                    const code = task.getException().getErrorCode();
                }
            }
        });

        // @ts-ignore
        const manager = com.google.android.play.core.review.ReviewManagerFactory.create(context)
        const request = manager.requestReviewFlow();
        request.addOnCompleteListener(reviewIntentListener);
    } else if (native.isIOS) {
        SKStoreReviewController.requestReview()
    } else {
        throw new Error('Unsupported platform');
    }
}
