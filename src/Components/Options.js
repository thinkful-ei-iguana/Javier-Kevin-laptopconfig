import React from 'react';
import slugify from 'slugify';

export default function Option(props) {
    const itemHash = slugify(props.item.name);
    return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(props.feature)}
            checked={props.checked}
            onChange={e => props.updateFeature(props.feature, props.item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {props.item.name} ({props.currency.format(props.item.cost)})
          </label>
        </div>
      );
}