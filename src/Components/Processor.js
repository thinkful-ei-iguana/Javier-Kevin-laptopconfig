import React from 'react'
import slugify from 'slugify'

export default function Processor(props) {
    console.log('proProps:',Object.keys(props.features))


    // const features = Object.keys(props.features).map((feature, idx) => {
    //     const featureHash = feature + '-' + idx;
    //     console.log('feature:',feature)
    //     const options = props.features[feature].map(item => {
    //       const itemHash = slugify(JSON.stringify(item));


        const feature = Object.keys(props.features).map(item => {
            console.log('item:',item)
            
        })

        return (
          <fieldset className="feature" >
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            
          </fieldset>
        );
     
}