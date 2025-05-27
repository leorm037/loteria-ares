import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';

import { routes } from './app.routes';
import { CORE_PROVIDERS } from './core/core.providers';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor, loadingInterceptor, TitleService } from '@app/core';



export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(
      withInterceptors([
        authInterceptor,
        loadingInterceptor
      ])
    ),
    provideRouter(routes),
    ...CORE_PROVIDERS,
    {
      provide: TitleStrategy,
      useClass: TitleService
    }
  ],
};

