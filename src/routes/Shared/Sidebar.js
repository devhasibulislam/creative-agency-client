import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ menuItems, setMidTitle }) => {
    return (
        <section>
            <div id='sidebar-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-layout-text-sidebar-reverse" viewBox="0 0 16 16">
                    <path d="M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z" />
                    <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5V1z" />
                </svg>
            </div>
            <div
                className='min-vh-100 px-3 pt-2 shadow-sm'
                style={{
                    width: 'fit-content',
                    backgroundColor: '#f1f3f4',
                }}
            >
                <div
                    className='d-flex flex-column'
                >
                    {menuItems.map(menuItem => <Link
                        to={menuItem?.path}
                        onClick={() => setMidTitle(menuItem?.name)}
                        className='py-2'
                    >
                        <span className='me-2'>{menuItem?.icon}</span>
                        <span className='ms-2'>{menuItem?.name}</span>
                    </Link>)}
                </div>
            </div>
        </section>
    );
};

export default Sidebar;