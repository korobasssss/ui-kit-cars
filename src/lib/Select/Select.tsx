import { Select } from "antd"
import './styles.scss'
import { Message } from "../Message"
import cx from 'classnames'
import { useMemo } from "react"

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
    error?: string
    errorTextShow?: boolean
}

export const MySelect = <T extends string | number, K extends string>({
    value,
    options,
    onChange,
    placeholder,
    multiply,
    disabled,
    allowClear = true,
    showSearch = false,
    error,
    errorTextShow = false,
}: ISelect<T, K>): JSX.Element => {

    const stylesSelect = useMemo(() => {
        return cx(
            'SSelect',
            {
                'ant-select-selector_error': error
            }
        )
    }, [error])

    return (
        <div>
            <Select
                value={value}
                placeholder={placeholder}
                mode={multiply}
                onChange={onChange}
                disabled={disabled}
                allowClear={allowClear}
                showSearch={showSearch}
                className={stylesSelect}
                notFoundContent={'Нет подходящих опций'}
            >
                {options?.map((option) => {
                    return (
                        <Select.Option 
                            value={option.value}
                            key={option.value}
                        >
                            {option.label}
                        </Select.Option>
                    )
                })}
            </Select>
            {error && errorTextShow && (
                <Message 
                    type='error'
                    message={error}
                />
            )}
        </div>
    )
}