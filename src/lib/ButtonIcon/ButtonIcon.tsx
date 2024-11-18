import { ButtonHTMLAttributes, FC, ReactNode } from "react"
import cx from 'classnames'

import styles from './styles.module.scss'

export interface IButtonIcon 
extends ButtonHTMLAttributes<HTMLButtonElement> {
    classNames?: string
    children: ReactNode
    alt: string
}

export const ButtonIcon: FC<IButtonIcon> = (
    {
        classNames,
        children,
        alt,
        type,
        onClick,
        disabled,
        ...restProps
    }
) => {
    return (
        <button
            className={cx(
                classNames,
                styles.SButtonIcon
            )}
            onClick={onClick}
            type={type}
            disabled={disabled}
            {...restProps}
        >
            {children}
        </button>
    )
}