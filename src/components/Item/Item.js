import './Item.css';
import { Link } from 'react-router-dom';
import React from 'react';
import 'animate.css';

const Item = ({ prods }) => {
    //ALL CARDS
    return(
        <div className='cards-grids animate__animated animate__backInUp'>
            <div className='cards'>
                <img src={prods.src} alt={prods.alt}/>
                <p className='prod-titl-item'>{prods.title}</p>
                <div className='line-item'></div>
                <Link className='btn-details' to={`/prods/${prods.id}`}>See more</Link>
            </div>
        </div>
    )
}
export default Item