import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import styles from './styles.module.scss';
import { ButtonIcon } from "../ButtonIcon";
import { DeleteIcon } from "../../shared/assets/icons";
import { Message } from "../Message";
export const FileLoader = ({ handleChange, error }) => {
    const [currentImage, setCurrentImage] = useState(null);
    const handleImageChange = (event) => {
        const file = event.target.files?.[0];
        handleChange(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCurrentImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleDeleteImage = () => {
        setCurrentImage(null);
        handleChange(undefined);
    };
    if (currentImage)
        return (_jsxs("div", { className: styles.SImageWrapper, children: [_jsx("img", { src: currentImage, alt: "current image", className: styles.SImage }), _jsx(ButtonIcon, { alt: "delete", onClick: handleDeleteImage, children: _jsx("img", { src: DeleteIcon, alt: 'delete' }) })] }));
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: styles.SFileWrapper, children: [_jsx("div", { className: styles.SFileTitle, children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043E\u0442\u043E \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0441\u044E\u0434\u0430" }), _jsx("input", { type: "file", name: "f", style: {
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            opacity: 0,
                            cursor: 'pointer'
                        }, onChange: handleImageChange })] }), error && (_jsx(Message, { type: 'error', message: error }))] }));
};
