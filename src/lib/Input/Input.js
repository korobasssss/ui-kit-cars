import { jsx as _jsx } from "react/jsx-runtime";
import cx from 'classnames';
import styles from './styles.module.scss';
export const Input = ({ classNames, type, placeholder, value, error, onChange, ...restProps }) => {
    return (_jsx("input", { value: value, className: cx(classNames, styles.SInput, {
            [styles['SInput_error']]: error
        }), placeholder: placeholder, onChange: onChange, ...restProps }));
};
