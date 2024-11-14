import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cx from 'classnames';
import styles from './styles.module.scss';
import { Message } from "../Message";
export const Input = ({ classNames, type, placeholder, value, error, onChange, ...restProps }) => {
    return (_jsxs("div", { className: styles.SInputWrapper, children: [_jsx("input", { value: value, className: cx(classNames, styles.SInput, {
                    [styles['SInput_error']]: error
                }), placeholder: placeholder, onChange: onChange, ...restProps }), error && (_jsx(Message, { type: 'error', message: error }))] }));
};
