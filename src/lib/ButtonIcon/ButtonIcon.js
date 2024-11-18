import { jsx as _jsx } from "react/jsx-runtime";
import cx from 'classnames';
import styles from './styles.module.scss';
export const ButtonIcon = ({ classNames, children, alt, type, onClick, disabled, ...restProps }) => {
    return (_jsx("button", { className: cx(classNames, styles.SButtonIcon), onClick: onClick, type: type, disabled: disabled, ...restProps, children: children }));
};
