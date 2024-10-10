import React from 'react'

const VerticalGallery = ({ images }) => {
    return (
        <div>
            {images && images.map((i, index) => {
                return (
                    <GridCard image={i}
                    orientation={(index %2===0)?'left':'right'} />
                )
            })}</div>
    )
}

export default VerticalGallery

function GridCard({ image, orientation }) {
    return (
        <div className={` relative mx-72 transition ease-in duration-300 transform hover:${(orientation==='left')?"translate-x-20":"translate-x-20"}`}>
            <img src={image} />
        </div>
    )
}