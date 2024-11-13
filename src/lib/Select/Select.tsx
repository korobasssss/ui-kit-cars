import { Select } from "antd"
import './styles.scss'

export interface ISelectOptions<V extends string | number, K extends string> {
    value: V
    label: K
}


export interface ISelect<T extends string | number, K extends string>{
    value?: T
    onChange?: (args: T) => void
    placeholder?: string
    options?: ISelectOptions<T, K>[]
    multiply?: "multiple"
    disabled?: boolean
    allowClear?: boolean
    showSearch?: boolean
}

export const MySelect = <T extends string | number, K extends string>({
    value,
    options,
    onChange,
    placeholder,
    multiply,
    disabled,
    allowClear = true,
    showSearch = false
}: ISelect<T, K>): JSX.Element => {
    return (
        <Select
            value={value}
            placeholder={placeholder}
            mode={multiply}
            onChange={onChange}
            disabled={disabled}
            allowClear={allowClear}
            showSearch={showSearch}
            className={'SSelect'}
            notFoundContent={'Нет подходящих опций'}
        >
            {options?.map((option) => {
                return (
                    <Select.Option value={option.value}>{option.label}</Select.Option>
                )
            })}
        </Select>
    )
}