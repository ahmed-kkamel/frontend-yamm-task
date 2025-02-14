interface SwitchProps {
    readonly checked: boolean;
    readonly onChange: () => void;
}

export function Switch({ checked, onChange }: SwitchProps) {
    return (
        <button
            onClick={onChange}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none
        ${checked ? 'bg-blue-500' : 'bg-gray-200'}`}
        >
            <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform
          ${checked ? 'translate-x-6' : 'translate-x-1'}`}
            />
        </button>
    );
} 