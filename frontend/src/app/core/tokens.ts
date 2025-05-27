import { InjectionToken } from '@angular/core';
import { AppConfig } from './models/app-config.model';

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export const IS_PRODUCTION = new InjectionToken<boolean>('IS_PRODUCTION');

export const LOGGER_FN = new InjectionToken<(message: string) => void>('LOGGER_FN');