import { AlertType } from "../enums/alert-type.enum";

export interface Alert {
    type: AlertType;
    iconClass?: string;
    message: string;
    title?: string;
}