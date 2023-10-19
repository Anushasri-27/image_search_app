import React from 'react'

const ImageCard = ({data}) => {
  return (
    <a href={data.urls.regular} target="blank" rel="noreferrer">
      <img className='h-72 w-full object-cover rounded-lg shadow-dark' src={data.urls.small} alt={data.alt_description} />
    </a>
  )
}

export default ImageCard;
