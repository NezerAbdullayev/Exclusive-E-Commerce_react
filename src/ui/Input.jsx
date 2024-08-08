function Input({
    type = 'text',
    name = '',
    placeholder = '',
    classname = '',
    value,
    onChange,
    disabled=false,
    isRequired=true
}) {
    let className;

    if (classname === 'search')
        className =
            'bg-textWhite2 py-2.5 pl-4 pr-9 w-48 text-sm outline-none  hover:outline-none active:outline-none lg:w-60';

    if (classname === 'form')
        className =
            'bg-textWhite2 px-5 py-2.5 rounded text-sm mb-8 hover:outline-none active:outline-none focus:outline-none';

    if (classname === 'account')
        className =
            'w-full bg-textWhite2 px-5 py-2.5 rounded text-sm mb-3 hover:outline-none active:outline-none focus:outline-none mt-1';

    if (classname === 'auth') {
        className =
            'w-full py-3 px-2 border-b border-stone-700 text-stone-800 mb-8    hover:outline-none active:outline-none focus:outline-none';

        return (
            <input
                required
                autoComplete="off"
                type={type}
                name={name}
                placeholder={placeholder}
                className={className}
                onChange={onChange}
                value={value}
            />
        );
    }

    return (
        <input
            type={type}
            placeholder={placeholder}
            className={className}
            name={name}
            autoComplete="off"
            required={isRequired}
            disabled={disabled}
            value={value}
            onChange={onChange}
        />
    );
}

export default Input;
