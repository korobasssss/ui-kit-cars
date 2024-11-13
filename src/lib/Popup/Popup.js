import { jsx as _jsx } from "react/jsx-runtime";
import { Modal } from "antd";
export const Popup = ({ isModalOpen, children, handleClose }) => {
    return (_jsx(Modal, { open: isModalOpen, onCancel: () => handleClose(false), footer: null, zIndex: 10, width: 679, children: children }));
};
