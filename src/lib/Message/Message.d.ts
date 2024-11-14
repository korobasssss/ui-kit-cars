import { FC } from "react";
export interface IMessage {
    type?: 'base' | 'error';
    message: string;
}
export declare const Message: FC<IMessage>;
