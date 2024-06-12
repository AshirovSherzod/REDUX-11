import React from 'react'
import "./model.scss"

const Model = ({children, close, width=400}) => {
  return (
    <>
        <div onClick={()=> close(false)} className="overlay">
        </div>
        <div style={{width}} className="model">
            {children}
        </div>
    </>
  )
}

export default Model