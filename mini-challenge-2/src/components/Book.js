/* The entire book component must be
contained within a div with the class
col-4. Use a <h5> for the title, <p>
for the author and pages, and <img>
for the cover photo. */
import React from 'react'

const Book = (props) => {
    return (
        <div className="col-4">
            <h5>{props.title}</h5>
            <p>{props.author}</p>
            <p>{props.pages}</p>
            <img src={props.image} />
        </div>
    )
}
export default Book