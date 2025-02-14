interface SelectProps {
    readonly value: string;
    readonly onChange: (value: string) => void;
    readonly options: readonly { readonly value: string; readonly label: string }[];
}

export function Select({ value, onChange, options }: SelectProps) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
} 