import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './enviroment/enviroment'

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

