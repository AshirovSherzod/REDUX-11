import axios from '../../api'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './singlepage.scss'

const SinglePage = () => {
    let { id } = useParams()
    const [data, setData] = useState(null)


    useEffect(() => {
        axios
            .get(`/products/${id}`)
            .then(res => setData(res.data))
            .catch(err => setData(err))

    }, [])

    return (
        <div className='container single'>
            <div className="single__img">
                <img src={data?.images[0]} alt="" />
            </div>
            <div className="single__desc">
                <h1>{data?.title}</h1>
                <p>{data?.price}</p>
                <p>{data?.description}</p>
            </div>
        </div>
    )
}

export default SinglePage