import { Component } from '@angular/core';
import { native } from '@nativescript/capacitor';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  launchModal() {
    native.openNativeModalView(); // Open native modal
  }
}
