import { FC, useMemo } from "react"
import cx from 'classnames'
import styles from './styles.module.scss'

export interface IMessage {
    type?: 'base' | 'error'
    message: string
}

export const Message: FC<IMessage> = (
    {
        type = 'base',
        message
    }
) => {

    const stylesMessage = useMemo(() => {
        return cx(
            styles.SMessage,
            styles[`SMessage_${type}`]
        );
    }, [type]);

    return (
        <p className={stylesMessage}>
            {message}
        </p>
    )
}