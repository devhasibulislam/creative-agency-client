import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ menuItems, setMidTitle }) => {
    return (
        <section>
            <div>
                {menuItems.map(menuItem => <Link to={menuItem?.path}>
                    <span>{menuItem?.icon}</span>
                    <span>{menuItem?.name}</span>
                </Link>)}
            </div>
        </section>
    );
};

export default Sidebar;