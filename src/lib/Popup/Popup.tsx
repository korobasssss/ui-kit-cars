import { Modal } from "antd"
import { FC, ReactNode, SetStateAction } from "react"
import './styles.scss'

export interface IPopup {
    title: string
    children: ReactNode
    isModalOpen: boolean
    handleClose: React.Dispatch<SetStateAction<boolean>>
    isForceRender?: boolean
}

export const Popup: FC<IPopup> = (
{
    title,
    isModalOpen,
    children,
    handleClose,
    isForceRender = false
}
) => {
    return (
        <Modal
            title={title}
            open={isModalOpen}
            onCancel={() => handleClose(false)}
            footer={null}
            zIndex={10}
            width={679}
            forceRender={isForceRender}
        >
            {children}
        </Modal>
    )
}