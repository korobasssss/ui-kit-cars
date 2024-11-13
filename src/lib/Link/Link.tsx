import { FC, ReactNode } from "react"
import { NavLink } from "react-router-dom"
import cx from 'classnames'
import styles from './styles.module.scss'

export interface ILink {
    classNames?: string
    url: string
    children: ReactNode
}

export const Link: FC<ILink> = (
    {
        classNames,
        url,
        children
    }
) => {
    return (
        <NavLink
            to={url}
            className={cx(
                classNames,
                styles.SLink
            )}
        >
            {children}
        </NavLink>
    )
}