import React from 'react';
import './Layout.module.css';

import Navbar from '../../components/Navigation/Navbar/Navbar';
import TaskList from '../../components/TaskList/TaskList';

function Layout() {
    return (
        <div className="Layout">
            <Navbar/>
            <main>
            <TaskList/>
            </main>
        </div>
    );
}

export default Layout;

