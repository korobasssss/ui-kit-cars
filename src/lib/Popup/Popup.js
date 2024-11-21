import { jsx as _jsx } from "react/jsx-runtime";
import { Modal } from "antd";
import './styles.scss';
export const Popup = ({ title, isModalOpen, children, handleClose, destroyOnClose = false }) => {
    return (_jsx(Modal, { title: title, open: isModalOpen, onCancel: () => handleClose(false), footer: null, zIndex: 10, width: 679, destroyOnClose: destroyOnClose, children: children }));
};
