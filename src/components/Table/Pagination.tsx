import React from 'react';

interface PaginationProps {
    totalItems: number;
    page: number;
    onPageChange: (page: number) => void;
    totalPages: number;
    startIndex: number;
    endIndex: number;
}

const Pagination: React.FC<PaginationProps> = ({
    totalItems,
    page,
    onPageChange,
    totalPages,
    startIndex,
    endIndex
}) => {

    return (
        <div className="bg-gray-100 px-6 py-4 border-t border-gray-200 rounded-b-lg">
            <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">
                    Showing {startIndex + 1} to {endIndex} of {totalItems} entries
                </span>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => onPageChange(page - 1)}
                        disabled={page === 0}
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                    >
                        Previous
                    </button>
                    <span className="text-sm text-gray-700">
                        Page {page + 1} of {totalPages}
                    </span>
                    <button
                        onClick={() => onPageChange(page + 1)}
                        disabled={page >= totalPages - 1}
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pagination; 