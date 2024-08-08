import { NavLink } from 'react-router-dom';

function Nav({ to, children, end, type }) {
    const active = `pb-1 border-b border-stone-800 text-stone-600 `;

    if (type === 'mobil')
        return (
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'p-3 text-stone-600' : 'p-3 hover:text-stone-600'
                }
                to={to}
            >
                {children}
            </NavLink>
        );

    if (type === 'headernav')
        return (
            <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                    isActive
                        ? active
                        : 'pb-1 hover:border-b hover:border-stone-800 hover:text-stone-600'
                }
            >
                {children}
            </NavLink>
        );

    if (type === 'account')
        return (
            <NavLink to={to} end={end} className={({isActive})=> isActive ? "text-sm text-main" :" text-sm text-borderColor"}>
                {children}
            </NavLink>
        );

    return (
        <NavLink
            to="/"
            className="text-stone-900  hover:text-stone-600 hover:underline"
        >
            {children}
        </NavLink>
    );
}

export default Nav;
