import { Modal } from "antd"
import { FC, ReactNode, SetStateAction } from "react"

export interface IPopup {
    title: string
    children: ReactNode
    isModalOpen: boolean
    handleClose: React.Dispatch<SetStateAction<boolean>>
}

export const Popup: FC<IPopup> = (
{
    title,
    isModalOpen,
    children,
    handleClose
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
        >
            {children}    
        </Modal>
    )
}