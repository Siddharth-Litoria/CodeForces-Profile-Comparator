import React from 'react'
import {Link} from 'react-router-dom'
import linkedin from './linkedin.png'
import GitHub from './GitHub.png'
function Navbar(params) {
    return (
        <nav class="navbar navbar-expand-sm bg-light navbar-light">
            <Link to="/"><i class="fa fa-fw fa-home"></i>Home</Link>
  <ul class="navbar-nav ml-auto">
    <li class="nav-item active">
    <a class="nav-link" href="https://www.linkedin.com/in/siddharth-litoria-969450129/"><img src={linkedin} style={{width:"30px"}}></img></a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="https://www.linkedin.com/in/siddharth-litoria-969450129/"><img src={GitHub} style={{width:"30px"}}></img></a>
    </li>
    </ul>
    </nav>
    )
}

export default Navbar