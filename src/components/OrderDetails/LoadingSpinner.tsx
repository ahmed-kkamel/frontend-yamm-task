
const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-50">
            <div className="w-16 h-16 relative">
                <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 border-t-4 border-blue-600 rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;