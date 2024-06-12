import axios from '../../api'
import React, { useCallback, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Model from '../model'

const ProductItem = ({ images, id, title, description, price, searchParams, setSearchParams, detailData, setDetailData }) => {

  // const [detailData, setDetailData] = useState(null)


  useEffect(() => {
    let id = searchParams.get('detail')
    if (id) {
      axios
        .get(`/products/${id}`)
        .then(res => setDetailData(res.data))
    }
  }, [searchParams])

  const closeDetailModel = useCallback(() => {
    setDetailData(null)
    setSearchParams({})
  })

  return (
    <>
      <div className="card">
        <div className="card__img">
          <img onClick={() => setSearchParams({ detail: id })} src={images} alt="" />
        </div>
        <div className="card__desc">
          <NavLink to={`/singlepage/${id}`}>
            <h2 className='line-clamps'>{title}</h2>
          </NavLink>
          <p className='line-clamp'>{description}</p>
        </div>
        <div className="card__paragraph">
          <p>{price} руб</p>
          <hr />
          <p>В корзину</p>
        </div>
      </div>
      {
        detailData ?
          <Model width={"60%"} close={closeDetailModel}>
            <div className='row'>
              <img width={400} src={detailData?.images[0]} alt="" />
              <h2>{detailData?.title}</h2>
            </div>
          </Model>
          :
          <></>
      }
    </>
  )
}

export default ProductItem