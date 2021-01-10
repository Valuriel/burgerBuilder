import React, { Component } from 'react';

import Auks from '../../hoc/Auks';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
          return {showSideDrawer: !prevState.showSideDrawer};  
        });
    }

    render () {
        return (
        <Auks>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
            <SideDrawer 
            open={this.state.showSideDrawer} 
            closed={this.sideDrawerCloseHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Auks>)
    }
} 

export default Layout;