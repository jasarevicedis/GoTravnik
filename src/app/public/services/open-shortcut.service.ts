import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Shortcut1PageComponent } from '../itempages/shortcut1-page/shortcut1-page.component';
import { Shortcut2PageComponent } from '../itempages/shortcut2-page/shortcut2-page.component';
import { Shortcut3PageComponent } from '../itempages/shortcut3-page/shortcut3-page.component';
import { Shortcut4PageComponent } from '../itempages/shortcut4-page/shortcut4-page.component';

@Injectable({
  providedIn: 'root'
})
export class OpenShortcutService {

  constructor(private dialog: MatDialog) { }

  openShortcut1Popup(): void {
    this.dialog.open(Shortcut1PageComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      
    });

  }
  openShortcut2Popup(): void {
    this.dialog.open(Shortcut2PageComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
    });

  }
  openShortcut3Popup(): void {
    this.dialog.open(Shortcut3PageComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
    });

  }
  openShortcut4Popup(): void {
    this.dialog.open(Shortcut4PageComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
    });

  }
}
