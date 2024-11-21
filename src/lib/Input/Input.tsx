import { FC, InputHTMLAttributes, useMemo } from "react"
import cx from 'classnames'
import styles from './styles.module.scss'
import { Message } from "../Message"

export interface IInput 
extends InputHTMLAttributes<HTMLInputElement> {
    classNames?: string
    error?: string
    errorTextShow?: boolean
}

export const Input: FC<IInput> = ({
    classNames,
    type,
    placeholder,
    value,
    error,
    errorTextShow = false,
    onChange,
    ...restProps
}) => {

    const stylesInput = useMemo(() => cx(
        classNames,
        styles.SInput,
        {
            [styles['SInput_error']] : error
        }
    ), [error])

    return (
        <div className={styles.SInputWrapper}>
            <input
                value={value}
                className={stylesInput}
                placeholder={placeholder}
                onChange={onChange}
                type={type}
                {...restProps}
            />
            {error && errorTextShow && (
                <Message 
                    type='error'
                    message={error}
                />
            )}
        </div>
    )
}