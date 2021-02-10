import React from 'react'
import Book from './Book'
import img1 from '../the-catcher-in-the-rye.jpg'
import img2 from '../the-great-gatsby.jpg'
import img3 from '../to-kill-a-mockingbird.jpg'


function BookStore(props) {
    return (
        <div className="col-12">
            <div className="row">
                <div className="col-12 text-center">
                    <p>Browse our Books</p>
                </div>
            </div>
            <div className="row">
                {/* Place your three books in this row.
                Each book takes four props: title, author,
                pages, and imageSrc (the image filename to
                the left in the public folder) */}
                <Book title="Small fry" author = "bones" pages = "200" image ={img1}/>
                <Book title="Small fry" author = "bones" pages = "200" image ={img2}/>
                <Book title="Small fry" author = "bones" pages = "200" image ={img3}/>
            </div>
        </div>
    )
}

export default BookStore
