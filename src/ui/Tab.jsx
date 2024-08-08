import { NavLink } from 'react-router-dom';

function Tab({ to, name, active }) {
    return (
        <NavLink
            to="/"
            className={`${active ? 'text-stone-950' : 'hover:text-stone-950'}`}
        >
            {name}
        </NavLink>
    );
}

export default Tab;
