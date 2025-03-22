import { MessageAlertType } from "../enum/message-alert-type";

export interface MessageAlert {
    type: MessageAlertType;
    message: string;
    show: boolean;
}
