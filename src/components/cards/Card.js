import Link from 'next/link'
import React from 'react'

export default function Card({img, title, excerpt}) {
  return (
    <div>
        <img 
        src={img} 
        alt={title} 
        className='max-w-xs'
        />
        <p>{title}</p>
        <p>{excerpt}</p>
    </div>
  )
}
