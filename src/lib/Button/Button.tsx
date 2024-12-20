import { ButtonHTMLAttributes, FC, ReactNode, useMemo } from "react"
import cx from 'classnames'
import styles from './styles.module.scss'
import { LoaderSpin } from "../LoaderSpin"

export interface IButton
extends ButtonHTMLAttributes<HTMLButtonElement> {
    classNames?: string
    children: ReactNode
    theme: 'primary' | 'danger' | 'none'
    isLoading?: boolean
}

export const MyButton: FC<IButton> = (
    {
        classNames,
        theme = 'primary',
        type,
        children,
        disabled,
        onClick,
        isLoading
    }
) => {

    const stylesButton = useMemo(() => cx(
        classNames,
        styles.SButton,
        styles[`SButton_${theme}`]
    ), [theme])
    
    return (
        <button
            className={stylesButton}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {isLoading ? 
                <LoaderSpin size="xs"/>
                :
                <span>
                    {children}
                </span>
            }
        </button>
    )
}