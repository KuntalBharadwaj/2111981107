import React from 'react'
import { useParams } from 'react-router-dom'
import ProductOverview from '../component/ProductOverview'

function SpecificProduct() {

    const id = useParams()

  return (
    <div>
        <ProductOverview id={id.id}/>    
    </div>
  )
}

export default SpecificProduct
