import { MessageAlertType } from "../enum/message-alert-type";

export interface MessageAlert {
    type: MessageAlertType;
    iconClass?: string;
    message: string;
}
