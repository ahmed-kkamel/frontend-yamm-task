import { ReactNode, useState } from 'react';
import Pagination from './Pagination';

interface TableColumn<T> {
    header: string;
    key: keyof T | string;
    render?: (row: T) => ReactNode;
}

interface TableProps<T> {
    readonly data: T[];
    readonly columns: TableColumn<T>[];
    readonly totalItems: number;
    readonly idKey?: keyof T;
}

export function Table<T>({
    data,
    columns,
    totalItems,
    idKey
}: TableProps<T>) {
    const [page, setPage] = useState(0);

    const PER_PAGE = 15;
    const totalPages = Math.ceil(totalItems / PER_PAGE);
    const startIndex = page * PER_PAGE;
    const endIndex = Math.min(startIndex + PER_PAGE, totalItems);
    const displayedData = data.slice(startIndex, endIndex);


    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 shadow-lg rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            {columns.map((column) => (
                                <th
                                    key={column.key.toString()}
                                    className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider"
                                >
                                    {column.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {displayedData.map((row, index) => (
                            <tr
                                key={idKey ? String(row[idKey]) : index}
                                className="hover:bg-blue-100 transition-colors duration-200"
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

            <Pagination
                totalItems={totalItems}
                page={page}
                onPageChange={setPage}
                totalPages={totalPages}
                startIndex={startIndex}
                endIndex={endIndex}
            />
        </div>
    );
}