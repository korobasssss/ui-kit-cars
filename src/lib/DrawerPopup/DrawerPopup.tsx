import { Drawer } from "antd"
import { FC, ReactNode } from "react"
import './styles.scss'

export interface IDrawerPopup {
    children: ReactNode
    title: string
    isOpen: boolean
    setIsOpen: () => void
}

export const DrawerPopup: FC<IDrawerPopup> = (
    {
        children,
        title,
        isOpen,
        setIsOpen
    }
) => {
    return (
        <Drawer
            placement="right"
            onClose={setIsOpen}
            open={isOpen}
            title={title}
            closable
        >
            {children}
        </Drawer>
    )
}