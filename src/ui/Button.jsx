function Button({ children, type, onClick, className = '' }) {
    const styles =
        'tansition-all cursor-pointer rounded border-transparent bg-main px-12 py-4 ';

    if (type === 'green')
        return (
            <button
                className={`${styles} max-w-44  bg-green-500 text-textWhite duration-300 hover:bg-newGreen hover:shadow-lg hover:shadow-green-400 hover:ring hover:ring-newGreen hover:ring-offset-2`}
            >
                {children}
            </button>
        );

    if (type === 'form')
        return (
            <button
                type="submit"
                className={`${styles} w-full text-textWhite duration-300 hover:bg-buttonRed `}
            >
                {children}
            </button>
        );

    if (type === 'cancel')
        return (
            <button type="button" className={`${className} px-3 py-3 text-sm border-none `}>
                {children}
            </button>
        );

    return (
        <button
            className={`${styles} ${className} text-textWhite duration-300 hover:bg-buttonRed `}
        >
            {children}
        </button>
    );
}

export default Button;
