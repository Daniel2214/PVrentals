import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Property = () => {
  // const images = [
  //   { url: "https://tropicasa.com/images/photos/1609/B71-1609.jpg" },
  //   {
  //     url: "https://www.davidpullenproperties.com/wp-content/uploads/2014/08/gringo-gulch.jpg",
  //   },
  //   {
  //     url: "https://www.puntademita-realestate.com/wp-content/uploads/2014/12/kristy-00002.jpg",
  //   },
  // ];

  const [property, setProperty] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/properties/${id}`).then((res) => {
      setProperty(res.data);
    });
  }, [id]);

  return (
    <Fragment>
      <h1 className="large text-primary colMarginTitle">{property.title}</h1>
      <div className="properties">
        <div className="gridMainProperty bg-light">
          <div className="colMainProperty colMarginLeft">
            <p>Location: {property.location}</p>
            <p>{`${property.status}: ${property.price} ${property.currency}`}</p>
            {property.status === "Rent" ? (
              <p>Per {property.period}</p>
            ) : (
              <p></p>
            )}
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
              <i className="fas fa-envelope"></i> {property.user}
            </li>
          </ul>
          <div className="colMainProperty">
            <div style={{ width: "100%", display: "flex" }}>
              <div style={{ margin: "0 auto", width: "50%" }}>
                <img
                  alt="temporal (slider)"
                  src="https://tropicasa.com/images/photos/1609/B71-1609.jpg"
                  width="50%"
                  height="400px"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Property;
