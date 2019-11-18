import React from 'react'
import LaptopParts from './LaptopParts'

export default function MainForm(props) {
    return(
        Object.keys(props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const checked = props.state[feature].name;
            return (
            <LaptopParts
            featureHash={featureHash}
            feature={feature}
            options={props.features[feature]}
            updateFeature={props.updateFeature}
            checked={checked}
            currency={props.currency}
            />
            )
        })
    )
}