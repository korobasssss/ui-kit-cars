import { notification } from 'antd';

export interface INotification {
    message: string
    description?: string
}

export const Notification = (data: INotification) => {
    return notification.open({
                message: data.message,
                description: data.description
    })
}