import React from 'react';
import Cart from './Cart';

export default function CartForm(props) {
    console.log(props)
    return(
        Object.keys(props.state).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = props.state[feature];
            return (
            <Cart 
            featureHash={featureHash}
            feature={feature}
            selectedOption={selectedOption}
            currency={props.currency}
            />
            );
        })
    )
}