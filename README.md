[![npm version](https://badge.fury.io/js/%40nativescript-community%2Fcapacitor-plugins.svg)](https://badge.fury.io/js/%40nativescript-community%2Fcapacitor-plugins)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

# @nativescript-community/capacitor-plugins

__✅ This repository is test repository, and not release @nativescript-community/capacitor-plugins now.__

## 👊 Try this project

Please clone, and npm link in your local.

```bash
% git clone git@github.com:nativescript-community/capacitor-plugins.git
% cd capacitor-plugins && npm install
% npm link
```

## 📱 Install in your Capacitor Project

### PreInstall in your project
```
% npm install @capacitor/cli@next --save-dev
% npm install @capacitor/core@next --save
% npm install @nativescript/capacitor
```

### Install

```bash
% npm install --save @nativescript-community/capacitor-plugins
```

### Change your project

#### 1. Add `src/nativescript/index.ts`

Add the following code:

```diff
  import '@nativescript/capacitor/bridge';
+ import * as Plugins from '@nativescript-community/capacitor-plugins';

+ native = Object.assign(native, Plugins);
...
```

[Example demo is here.](https://github.com/nativescript-community/capacitor-plugins/blob/main/demo/angular/src/nativescript/index.ts)

### 2. Change `src/native-custom.d.ts`

Replace the following code:

```diff
+ import type { pluginsGlobal } from '@nativescript-community/capacitor-plugins/src/interfaces';

  declare module '@nativescript/capacitor' {
    export interface customNativeAPI extends nativeCustom {}
  }

  /**
   * Define your own custom strongly typed native helpers here.
   */
- export interface nativeCustom {
+ export interface nativeCustom extends pluginsGlobal {
```

[Example demo is here.](https://github.com/nativescript-community/capacitor-plugins/blob/main/demo/angular/src/native-custom.d.ts)

## Usage
[Usage Example demo is here.](https://github.com/nativescript-community/capacitor-plugins/blob/main/demo/angular/src/app/tab1/tab1.page.ts).


### 1. brightness(value: number)
You can change device brightness (1〜10). This is official example code.

```ts
import { native } from '@nativescript/capacitor';

native.brightness(1);
```
### 2. rateMyApp()
You can allow users to rate the app from inside the application.

#### iOS
No additional configurations are required for iOS. 
However, for now it supports iOS version 10.3 and later.  

#### Android
Before start using this function add next lines to the dependencies 
section of your `android/app/build.gradle`

```gradle
implementation "androidx.appcompat:appcompat:1.2.0"
implementation 'com.google.android.play:core:1.10.0'
```
You can read more about how to import Google Play Core Library 
into your project [here](https://developer.android.com/guide/playcore?authuser=1#java-kotlin)

In-app reviews only work on Android devices (phones and tablets) running Android 5.0 (API level 21) 
or higher that have the Google Play Store installed and on Chrome OS devices that have the Google Play Store installed.

Important: your app should be published for at least internal testing. 
Read more about it in [this SO answer](https://stackoverflow.com/questions/63286540/play-core-in-app-review-api-not-showing-the-review-activity)

#### Usage
```ts
import { native } from '@nativescript/capacitor';
native.rateMyApp();
```

### Demo Code
You can check Native Console Log. This is official example code.
```ts
import { native } from '@nativescript/capacitor';

native.dreamBig();
```

And Launch Native Modal View. This is official example code.

```ts
import { native } from '@nativescript/capacitor';

native.openNativeModalView();
```

## Option

### If you want use some plugin only:
You should select plugin and import.

`src/nativescript/index.ts`:

```ts
import { brightness } from '@nativescript-community/capacitor-plugins';
native = Object.assign(native, {
  brightness,
});
```

`src/native-custom.d.ts`:

```ts
import type { IBrightness } from '@nativescript-community/capacitor-plugins/src/interfaces';
export interface nativeCustom extends IBrightness {
  dreamBig: () => NativeProperty<string>;
  openNativeModalView: () => void;
}
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://agilie.com"><img src="https://avatars.githubusercontent.com/u/12133261?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sergey Mell</b></sub></a><br /><a href="https://github.com/nativescript-community/capacitor-plugins/commits?author=SergeyMell" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
