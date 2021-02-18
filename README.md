# @ns-capacitor/plugins

__✅ This repository is test repository, and not release @ns-capacitor/plugins now.__

## 👊 Try this project

Please clone, and npm link in your local.

```bash
% git clone git@github.com:rdlabo/ns-capacitor-plugins.git
% cd ns-capacitor-plugins && npm install
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
% npm install --save @ns-capacitor/plugins
```

### Change your project

#### 1. Replace `src/nativescript/index.ts`

Replace the following code:

```ts
import '@nativescript/capacitor/bridge';
import * as Plugins from '@ns-capacitor/plugins';

native = Object.assign(native, Plugins);
```

[Example demo is here.](https://github.com/rdlabo/ns-capacitor-plugins/blob/main/demo/angular/src/nativescript/index.ts)

### 2. Replace `src/native-custom.d.ts`

Replace the following code:

```d.ts
import type { NSPlugins } from '@ns-capacitor/plugins/src/interfaces';

declare module '@nativescript/capacitor' {
  export interface customNativeAPI extends nativeCustom {}
}

/**
 * Define your own custom strongly typed native helpers here.
 */
export interface nativeCustom extends NSPlugins {}
```

[Example demo is here.](https://github.com/rdlabo/ns-capacitor-plugins/blob/main/demo/angular/src/native-custom.d.ts)

## Usage
[Usage Example demo is here.](https://github.com/rdlabo/ns-capacitor-plugins/blob/main/demo/angular/src/app/tab1/tab1.page.ts).


### 1. brightness(value: number)
You can change device brightness (1〜10). This is official example code.

```ts
import { native } from '@nativescript/capacitor';

native.brightness(1);
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
