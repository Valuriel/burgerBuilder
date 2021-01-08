import React, { Component } from 'react';

import Auks from '../../hoc/Auks';

class BurgerBuilder extends Component {
    render() {
        return (
            <Auks>
                <div>Burger</div>
                <div>Build Controls</div>
            </Auks>
        );
    }
}

export default BurgerBuilder;