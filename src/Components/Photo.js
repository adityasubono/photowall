import React from 'react';
import PropTypes from 'prop-types';

function Photo(props) {
    const  postData = props.postData
    return <figure className="figure">
        <img className="photo" src={postData.imageLink} alt={postData.description}/>
        <figcaption><p>{postData.description}</p></figcaption>
        <div className="button-container">
            <button className="button" onClick={() =>{
                // console.log(post)
                props.onRemovePhoto(postData)
            }}>Remove</button>
        </div>
    </figure>
}

Photo.propType = {
    postData: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default Photo;
