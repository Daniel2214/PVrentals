import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import ImageSlider from "../imageSlider/ImageSlider";
import { useParams } from "react-router-dom";

const Property = () => {
  const [property, setProperty] = useState(undefined);
  const [images, setImages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/properties/${id}`).then((res) => {
      setProperty(res.data);
      const tempImages = [];
      res.data.images.forEach((image) => {
        tempImages.push({
          url: `https://pvrentals.s3.us-east-2.amazonaws.com/${image}`,
        });
      });
      setImages(tempImages);
    });
  }, [id]);

  return (
    <Fragment>
      {property === undefined ? (
        <div></div>
      ) : (
        <Fragment>
          <h1 className="large text-primary colMarginTitle">
            {property.title}
          </h1>
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
                {property.description.map((description) => (
                  <li className="text-primary">
                    <i className="fas fa-minus"></i> {description}
                  </li>
                ))}
              </ul>
              <ul className="colMainProperty colMarginLeft">
                <li className="text-primary">
                  <i className="fas fa-phone"></i> 321313213
                </li>
                {property.fbLink ? (
                  <li className="text-primary">
                    <i className="fa fa-facebook"></i>{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={property.fbLink}
                    >
                      Facebook
                    </a>
                  </li>
                ) : (
                  <div></div>
                )}
                <li className="text-primary">
                  <i className="fas fa-envelope"></i> {property.user}
                </li>
              </ul>
              <div className="colMainProperty">
                <div style={{ width: "100%", display: "flex" }}>
                  <div style={{ margin: "0 auto", width: "50%" }}>
                    <ImageSlider images={images} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Property;
