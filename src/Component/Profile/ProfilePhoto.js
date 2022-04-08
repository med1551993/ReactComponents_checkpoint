import React from "react";
import im from './cat.jpg'

const ProfilePhoto = () => {
    return(
        <div className="photo">
        <img src={im} alt='cat'/>
        </div>
    )
}
export default ProfilePhoto;