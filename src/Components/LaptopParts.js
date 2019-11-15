import React from 'react';
import slugify from 'slugify';


export default function LaptopParts(props) {
    const features = Object.keys(props.obj.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = props.obj.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === props.state.selected[feature].name}
                onChange={e => this.updateFeature(feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({props.currency.format(item.cost)})
              </label>
            </div>
          );
        });

    return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          <ul>
              <li>
                {options}
            </li>
          </ul>
        </fieldset>
      );
    });

    return (
        features
    )
}

/* needed props
featureHash
feature
options */