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
            className="block w-full px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out hover:border-blue-400 cursor-pointer"
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
} 