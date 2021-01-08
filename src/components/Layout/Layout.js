import React from 'react';
import Auks from '../../hoc/Auks';
import classes from './Layout.css';

const Layout = (props) => (
        <Auks>
            <div>Toolbar, SideDrawer, BackDrop</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auks>
    );

export default Layout;