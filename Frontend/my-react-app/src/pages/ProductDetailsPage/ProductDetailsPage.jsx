import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDetailsComponent from '../../components/ProductDetailsComponent/ProductDetailsComponent'

const ProductDetailsPage = () => {
    const {id} = useParams()
    return (
        <div style={{width: '100%',background: '#efefef', height: '100%'}}>
        <div style={{ width: '1270px', height: '100%', margin: '0 auto'}} >
            <h5 style={{ fontSize: '30px', textAlign: 'center', paddingTop: '30px', marginTop: '0' }}> Chi tiết sản phẩm</h5>
            <ProductDetailsComponent idProduct={id} />
        </div>
        </div>
    )
}

export default ProductDetailsPage