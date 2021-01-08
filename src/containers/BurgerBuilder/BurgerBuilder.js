import React, { Component } from 'react';

import Auks from '../../hoc/Auks';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <Auks>
                <Burger />
                <div>Build Controls</div>
            </Auks>
        );
    }
}

export default BurgerBuilder;