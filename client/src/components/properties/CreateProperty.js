import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';
import ImageUploader from 'react-images-upload';


const CreateProperty = () => {

  const onDrop = (picture) =>  {
    console.log(picture)
}

  return (
    <Fragment>
      <h1 className="large text-primary">
        Add new property
      </h1>
      <p className="lead">
        Let's add some property's information
      </p>
      <form className="form">
        <div className="form-group">
          <select name="status">
            <option value="0">* Select Property Status</option>
            <option value="Rent">For Rent</option>
            <option value="Sell">For Sell</option>
          </select>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Title" name="title" />
        </div>
        <div className="form-group">
          <input type="number" placeholder="Price" name="price" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Currency" name="currency" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Period of time" name="period" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" />
        </div>
        <div className="form-group">
          <textarea type="text" placeholder="Description" name="description"></textarea>
          <small className="form-text">Describe the property: number of rooms, amenities, parking slots, etc.</small>
        </div>

        <ImageUploader
          withIcon={false}
          buttonText='Choose images'
          onChange={onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
          withPreview={true}
        />
        
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/properties">Go Back</Link>
      </form>
    </Fragment>
  )
}

export default CreateProperty
