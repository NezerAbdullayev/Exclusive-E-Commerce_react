import Nav from '../../ui/Nav';

const asidenav = [
    'Woman’s Fashion',
    'Men’s Fashion',
    'Electronics',
    'Home & Lifestyle',
    'Medicine',
    'Sports & Outdoor',
    'Baby’s & Toys',
    'Groceries & Pets',
    'Health & Beauty',
];

function AsideNavbar() {
    return (
        <aside className="hidden ml:block">
            <ul className="flex h-full flex-col justify-between">
                {asidenav.map((nav) => (
                    <Nav key={nav}>{nav}</Nav>
                ))}
            </ul>
        </aside>
    );
}

export default AsideNavbar;
