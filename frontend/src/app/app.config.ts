import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TituloService } from './services/titulo.service';
import { autenticacaoInterceptor } from './interceptors/autenticacao.interceptor';
import { loadingInterceptor } from './interceptors/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        autenticacaoInterceptor,
        loadingInterceptor
      ])
    ),
    {
      provide: TitleStrategy,
      useClass: TituloService
    }
  ]
};
