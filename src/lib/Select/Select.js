import { jsx as _jsx } from "react/jsx-runtime";
import { Select } from "antd";
import './styles.scss';
export const MySelect = ({ value, options, onChange, placeholder, multiply, disabled, allowClear = true, showSearch = false }) => {
    return (_jsx(Select, { value: value, placeholder: placeholder, mode: multiply, onChange: onChange, disabled: disabled, allowClear: allowClear, showSearch: showSearch, className: 'SSelect', notFoundContent: 'Нет подходящих опций', children: options?.map((option) => {
            return (_jsx(Select.Option, { value: option.value, children: option.label }));
        }) }));
};
