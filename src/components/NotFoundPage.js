import React from 'react'
import { Link } from 'react-router-dom'
const NotFoundPage  = () => (
    <div>
     404 - <Link to="/">Go-home</Link> {/*link do not allow to refres home page wvwert time we click any link  */}
    </div>
)

export default NotFoundPage