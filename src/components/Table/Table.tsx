import { ReactNode } from 'react';

interface TableColumn<T> {
    header: string;
    key: keyof T | string;
    render?: (row: T) => ReactNode;
}

interface TableProps<T> {
    readonly data: T[];
    readonly columns: TableColumn<T>[];
    readonly totalItems: number;
    readonly page: number;
    readonly perPage: number;
    readonly onPageChange: (page: number) => void;
    readonly idKey?: keyof T;
}

export function Table<T>({
    data,
    columns,
    totalItems,
    page,
    perPage,
    onPageChange,
    idKey
}: TableProps<T>) {
    const totalPages = Math.ceil(totalItems / perPage);
    const startIndex = page * perPage;
    const endIndex = Math.min(startIndex + perPage, totalItems);
    const displayedData = data.slice(startIndex, endIndex);

    if (process.env.NODE_ENV === 'development' && !idKey) {
        console.warn('No idKey provided to Table component. Using array indices as keys may lead to issues with component updates.');
    }

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                            {columns.map((column) => (
                                <th
                                    key={column.key.toString()}
                                    className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                >
                                    {column.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {displayedData.map((row, index) => (
                            <tr
                                key={idKey ? String(row[idKey]) : index}
                                className="hover:bg-gray-50 transition-colors duration-200"
                            >
                                {columns.map((column) => (
                                    <td
                                        key={column.key.toString()}
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                                    >
                                        {column.render
                                            ? column.render(row)
                                            : String(row[column.key as keyof T])}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                        Showing {startIndex + 1} to {endIndex} of {totalItems} entries
                    </span>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => onPageChange(page - 1)}
                            disabled={page === 0}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                        >
                            Previous
                        </button>
                        <span className="text-sm text-gray-700">
                            Page {page + 1} of {totalPages}
                        </span>
                        <button
                            onClick={() => onPageChange(page + 1)}
                            disabled={page >= totalPages - 1}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}