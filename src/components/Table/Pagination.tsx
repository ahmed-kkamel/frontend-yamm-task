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
        <div className="bg-gray-100 px-4 py-4 border-t border-gray-200 rounded-b-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <span className="text-sm md:text-base text-gray-700 mb-2 md:mb-0">
                    Showing {startIndex + 1} to {endIndex} of {totalItems} entries
                </span>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => onPageChange(page - 1)}
                        disabled={page === 0}
                        className={`flex items-center justify-center w-10 h-10 text-white rounded-full hover:shadow-lg transition-shadow duration-200 ${page === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-blue-700'}`}
                    >
                        <span className="transform rotate-180">&rarr;</span>
                    </button>
                    <span className="text-sm md:text-base text-gray-700">
                        Page {page + 1} of {totalPages}
                    </span>
                    <button
                        onClick={() => onPageChange(page + 1)}
                        disabled={page >= totalPages - 1}
                        className={`flex items-center justify-center w-10 h-10 text-white rounded-full hover:shadow-lg transition-shadow duration-200 ${page >= totalPages - 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-blue-700'}`}
                    >
                        <span>&rarr;</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pagination; 