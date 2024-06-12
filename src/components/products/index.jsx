import React, { useEffect, useState } from 'react'
// import { useGetProductsQuery } from '../../context/api/productApi'
import './products.scss'
import { NavLink, useSearchParams } from 'react-router-dom'
import ProductItem from './ProductItem'
import axios from '../../api'

const Products = () => {
  const [data, setData] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [detailData, setDetailData] = useState(null)


  useEffect(() => {
    axios
      .get(`/products`, { params: { limit: 8 } })
      .then(res => setData(res.data.products))
      .catch(err => setData(err))

  }, [])

  let card = data?.map(el => (
    <ProductItem key={el.id} images={el.images[0]} id={el.id} title={el.title} description={el.description} price={el.price} searchParams={searchParams} setSearchParams={setSearchParams} detailData={detailData} setDetailData={setDetailData}/>
  ))
  return (
    <div className="wrapper">
      <div className='card__wrapper container'>
        {card}
      </div>
      <button onClick={() => setSearchParams({ limit: +searchParams.get("limit") + 1 })}>see more</button>
    </div>
  )
}

export default Products