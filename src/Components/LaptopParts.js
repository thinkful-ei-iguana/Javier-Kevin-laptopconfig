import React from 'react';
import Options from './Options';

export default function LaptopParts(props) {
    const options = props.options.map(item => {
        return (
            <Options
            feature={props.feature}
            item={item}
            checked={item.name === props.toBeChecked}
            updateFeature={props.updateFeature}
            currency={props.currency}
            />
        );
    });

    return (
        <fieldset className="feature" key={props.featureHash}>
          <legend className="feature__name">
            <h3>{props.feature}</h3>
          </legend>
          {options}
        </fieldset>
    );
}