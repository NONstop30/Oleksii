import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    render() {
        return (
            <>
                <form className='store-selector'>
                    <h2>Please Enter A Store Name</h2>
                    <input type='text' 
                    required 
                    placeholder='Store Name' 
                    defaultValue={getFunName()} />
                    <button type='submit'>Visit Store <span>➡️</span></button>
                </form>
            </>
        )
    }
}

export default StorePicker;