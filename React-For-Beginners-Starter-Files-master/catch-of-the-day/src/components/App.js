import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }
    addFish = fish => {
        // to update state we need:
        //1 take a copy of the existing state
        const fishes = {...this.state.fishes};
        // 2 add our new fish to thet fishes
        fishes[`fish${Date.now()}`] = fish;
        // 3 Set the new fishes object to state
        this.setState({ fishes: fishes})
    }
    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    }
    render() {
        return(
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline='Fresh Seafood Market' />
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>
        );
    }
}

export default App;