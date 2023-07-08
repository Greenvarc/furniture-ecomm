"use client"
import { useState } from 'react'

const ProductCount = ({ inStock }: { inStock: number }) => {
    const [count, setCount] = useState(0);
  return (
    <div className='flex gap-5 justify-between place-items-center  bg-primary-white md:max-w-fit  max-h-8'>
          <button className='text-border-dark disabled:text-border-gray hover:bg-primary-dark px-3 py-1'
              onClick={() => setCount(p=>--p)}
              disabled={count <= 0}
              type="button"
          >-</button>
          <p>{count}</p>
          <button
              className='text-border-dark disabled:text-border-gray hover:bg-primary-dark px-3 py-1'
              onClick={() => setCount(p=>++p)}
              disabled={count >= inStock}
              type="button"
          >+</button>
    </div>
  )
}

export default ProductCount
5