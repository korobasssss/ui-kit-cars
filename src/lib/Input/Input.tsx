import { FC, InputHTMLAttributes } from "react"
import cx from 'classnames'
import styles from './styles.module.scss'

export interface IInput 
extends InputHTMLAttributes<HTMLInputElement> {
    classNames?: string
    error?: string
}

export const Input: FC<IInput> = ({
    classNames,
    type,
    placeholder,
    value,
    error,
    onChange,
    ...restProps
}) => {

    return (
        <input
            value={value}
            className={cx(
                classNames,
                styles.SInput,
                {
                    [styles['SInput_error']] : error
                }
            )}
            placeholder={placeholder}
            onChange={onChange}
            {...restProps}
        />
    )
}