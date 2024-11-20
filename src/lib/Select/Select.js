import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select } from "antd";
import './styles.scss';
import { Message } from "../Message";
export const MySelect = ({ value, options, onChange, placeholder, multiply, disabled, allowClear = true, showSearch = false, error, errorTextShow = false, }) => {
    return (_jsxs("div", { children: [_jsx(Select, { value: value, placeholder: placeholder, mode: multiply, onChange: onChange, disabled: disabled, allowClear: allowClear, showSearch: showSearch, className: 'SSelect', notFoundContent: 'Нет подходящих опций', children: options?.map((option) => {
                    return (_jsx(Select.Option, { value: option.value, children: option.label }, option.value));
                }) }), error && errorTextShow && (_jsx(Message, { type: 'error', message: error }))] }));
};
