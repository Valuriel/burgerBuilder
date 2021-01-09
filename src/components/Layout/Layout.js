import React from 'react';
import Auks from '../../hoc/Auks';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => (
        <Auks>
            <Toolbar />
            <SideDrawer />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auks>
    );

export default Layout;