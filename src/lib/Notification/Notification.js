import { notification } from 'antd';
export const Notification = (data) => {
    return notification.open({
        message: data.message,
        description: data.description
    });
};
