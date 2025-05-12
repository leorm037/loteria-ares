import { Provider } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { APP_CONFIG, API_BASE_URL, IS_PRODUCTION, LOGGER_FN } from "./tokens";

const version = environment.version;
const api_base_url = environment.api_base_url;
const is_production = environment.is_production;

export const CORE_PROVIDERS: Provider[] = [
    {
        provide: APP_CONFIG,
        useValue: {
            version: version,
            api_base_url: api_base_url,
            production: is_production
        }
    },
    {
        provide: API_BASE_URL,
        useValue: api_base_url
    },
    {
        provide: IS_PRODUCTION,
        useValue: is_production
    },
    {
        provide: LOGGER_FN,
        useFactory: () => {
            if (is_production) {
                return () => { };
            } else {
                return (message: string) => {
                    console.log(message);
                };
            }
        }
    }
];