import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select } from "antd";
import './styles.scss';
import { Message } from "../Message";
import cx from 'classnames';
import { useMemo } from "react";
export const MySelect = ({ value, options, onChange, placeholder, multiply, disabled, allowClear = true, showSearch = false, error, errorTextShow = false, }) => {
    const stylesSelect = useMemo(() => {
        return cx('SSelect', {
            'ant-select-selector_error': error
        });
    }, [error]);
    return (_jsxs("div", { children: [_jsx(Select, { value: value, placeholder: placeholder, mode: multiply, onChange: onChange, disabled: disabled, allowClear: allowClear, showSearch: showSearch, className: stylesSelect, notFoundContent: 'Нет подходящих опций', children: options?.map((option) => {
                    return (_jsx(Select.Option, { value: option.value, children: option.label }, option.value));
                }) }), error && errorTextShow && (_jsx(Message, { type: 'error', message: error }))] }));
};
