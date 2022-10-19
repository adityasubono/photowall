import React from 'react';
import PropTypes from 'prop-types';

function Photo(props) {
    // console.log(props.postData)
    const  postData = props.postData
    return <figure className="figure">
        <img className="photo" src={postData.imageLink} alt={postData.description}/>
        <figcaption><p>{postData.description}</p></figcaption>
        <div className="button-container">
            <button className="button" onClick={() => {
                props.removePost(1)
            }}>Remove</button>
        </div>
    </figure>
}

Photo.propType = {
    postData: PropTypes.object.isRequired,
}

export default Photo;
