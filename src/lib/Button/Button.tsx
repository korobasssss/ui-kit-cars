import { ButtonHTMLAttributes, FC, ReactNode } from "react"
import cx from 'classnames'
import styles from './styles.module.scss'

export interface IButton
extends ButtonHTMLAttributes<HTMLButtonElement> {
    classNames?: string
    children: ReactNode
    theme: 'primary'
}

export const MyButton: FC<IButton> = (
    {
        classNames,
        theme = 'primary',
        type,
        children,
        disabled,
        onClick,
    }
) => {
    return (
        <button
            className={cx(
                classNames,
                styles.SButton,
                styles[`SButton_${theme}`]
            )}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}