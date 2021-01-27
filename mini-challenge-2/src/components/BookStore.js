import React from 'react'

function BookStore(props) {
    return (
        <div className="col-12">
            <div className="row">
                <div className="col-12 text-center">
                    {/* Call to action goes here */}
                </div>
            </div>
            <div className="row">
                {/* Place your three books in this row.
                Each book takes four props: title, author,
                pages, and imageSrc (the image filename to
                the left in the public folder) */}
            </div>
        </div>
    )
}

export default BookStore
