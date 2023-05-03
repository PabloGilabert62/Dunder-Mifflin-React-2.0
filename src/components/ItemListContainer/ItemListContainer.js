import "./ItemListContainer.css";
import React from "react";
import ItemList from "../ItemList/ItemList";
import NavbarCategory from "../NavbarCategory/NavbarCategory";
import { useParams } from "react-router-dom";
import { getProds } from "../../services/firebase/firestore/prods";
import { useEffect } from "react";
import { useState } from "react";
// import { useAsync } from '../../hooks/useAsync';

const ItemListContainer = ({initial}) => {

    // const { categoryId } = useParams()
    // const getProdsByCategory = () => getProds(categoryId)
    // const { data: prods, error, loading } = useAsync(getProdsByCategory, [categoryId])

    const [prods, setProds] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        getProds(categoryId)
        
        .then(prods => {
            setProds(prods)
        })
        .catch(error => {
            console.error(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if(loading) {
        return(
        <button className="spinner-margin btn btn-primary" type="button" disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
        </button>
        )  
    }

    // if(error){
    // return <h1>Error, press F5 to reload</h1>}

    return(
        <div>
            <p className='title-category animate__animated animate__backInUp'>See our products below!</p>

            <div className="audio-item animate__animated animate__backInUp">
                <audio src="../images/the office theme.mp3" controls></audio>
            </div>

            <NavbarCategory/>
            <ItemList prods={prods}/>
            
            <span className="footer-">
                <img className="footer-logo" src='/images/DunderMifflinLogo.png' alt="Dunder Mifflin Paper Company Logo"/>
                <span className="text-footer">Dunder Mifflin Company Since 2008</span>
            </span>
        </div>
    )
}

export default ItemListContainer