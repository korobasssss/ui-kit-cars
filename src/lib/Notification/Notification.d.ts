export interface INotification {
    message: string;
    description?: string;
}
export declare const Notification: (data: INotification) => void;
