import React, {Fragment} from 'react'
import SimpleImageSlider from "react-simple-image-slider";


const Property = () => {

  const images = [
    { url: "https://tropicasa.com/images/photos/1609/B71-1609.jpg" },
    { url: "https://www.davidpullenproperties.com/wp-content/uploads/2014/08/gringo-gulch.jpg" },
    { url: "https://www.puntademita-realestate.com/wp-content/uploads/2014/12/kristy-00002.jpg" }
  ];


  return (
    <Fragment>
      <h1 className="large text-primary colMarginTitle">House in El Tigre</h1>
      <div className="properties">
          <div className="gridMainProperty bg-light">
            <div className="colMainProperty colMarginLeft">
              <p>El Tigre, Nuevo Vallarta</p>
              <p>Rent for 1600 dlls</p>
              <p>For 1 year</p>
            </div>

            <ul className="colMainProperty colMarginLeft">
              <li className="text-primary">
                <i className="fas fa-minus"></i> 14 rooms
              </li>
              <li className="text-primary">
                <i className="fas fa-minus"></i> Private Pool
              </li>
              <li className="text-primary">
                <i className="fas fa-minus"></i> 3 parking spots
              </li>
              <li className="text-primary">
                <i className="fas fa-minus"></i> Bathroom in each bedroom
              </li>
              <li className="text-primary">
                <i className="fas fa-minus"></i> Security 24 hrs
              </li>
            </ul>
            <ul className="colMainProperty colMarginLeft">
              <li className="text-primary">
                <i className="fas fa-phone"></i> 321313213
              </li>
              <li className="text-primary">
                <i className="fa fa-facebook"></i> Facebook link
              </li>
              <li className="text-primary">
                <i className="fas fa-envelope"></i> d@test.com
              </li>
            </ul>
            <div className="colMainProperty colMarginLeftImage">
              <SimpleImageSlider
                width={window.innerWidth > 700 ? 600 : 300}
                height={window.innerWidth > 700 ? 400 : 200}
                showNavs={true}
                slideDuration={1}
                showBullets={true}
                images={images}
              />
            </div>
          </div>
      </div>
    </Fragment>
  )
}

export default Property