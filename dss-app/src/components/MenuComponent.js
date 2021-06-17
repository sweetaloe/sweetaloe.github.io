import React from 'react';
import { Link } from 'react-router-dom'



export default class Menu extends React.Component {
    render() {
        return <nav class="nav flex-column background-dark">

            <a class="nav-link active" aria-current="page" href="">Создать фрейм</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link" href="#">Link</a>
        </nav>
    }
}


