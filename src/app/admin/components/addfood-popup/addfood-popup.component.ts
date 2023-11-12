import { Component } from '@angular/core';
import { Uploader, UploadWidgetConfig, UploadWidgetResult } from 'uploader'

@Component({
  selector: 'app-addfood-popup',
  templateUrl: './addfood-popup.component.html',
  styleUrls: ['./addfood-popup.component.scss']
})
export class AddfoodPopupComponent {
  uploader = Uploader({ 
    apiKey: "free" 
  });
  options: UploadWidgetConfig = {
    multi: false
  };
  // 'onUpdate' vs 'onComplete' attrs on 'upload-dropzone':
  // - Dropzones are non-terminal by default (they don't have an end
  //   state), so by default we use 'onUpdate' instead of 'onComplete'.
  // - To create a terminal dropzone, use the 'onComplete' attribute
  //   instead and add the 'showFinishButton: true' option.
  onUpdate = (files: UploadWidgetResult[]) => {
    alert(files.map(x => x.fileUrl).join("\n"));
  };
  width = "600px";
  height = "375px";
}
  

