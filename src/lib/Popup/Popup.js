import { jsx as _jsx } from "react/jsx-runtime";
import { Modal } from "antd";
export const Popup = ({ title, isModalOpen, children, handleClose }) => {
    return (_jsx(Modal, { title: title, open: isModalOpen, onCancel: () => handleClose(false), footer: null, zIndex: 10, width: 679, children: children }));
};
