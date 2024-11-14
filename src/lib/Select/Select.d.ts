import './styles.scss';
export interface ISelectOptions<V extends string | number, K extends string> {
    value: V;
    label: K;
}
export interface ISelect<T extends string | number, K extends string> {
    value?: T;
    onChange?: (args: T) => void;
    placeholder?: string;
    options?: ISelectOptions<T, K>[];
    multiply?: "multiple";
    disabled?: boolean;
    allowClear?: boolean;
    showSearch?: boolean;
    error?: string;
}
export declare const MySelect: <T extends string | number, K extends string>({ value, options, onChange, placeholder, multiply, disabled, allowClear, showSearch, error }: ISelect<T, K>) => JSX.Element;
