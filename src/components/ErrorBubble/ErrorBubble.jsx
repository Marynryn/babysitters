const ErrorBubble = ({ message }) => {
    return (
        <div className="absolute -right-8 -top-4 mt-1 ml-4 bg-red-400 text-white px-2 py-1 rounded  text-sm z-10">
            {message}
        </div>
    );
};
export default ErrorBubble;
// the below code fragment can be found in: