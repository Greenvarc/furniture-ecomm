"use client"

const ProductAction = ({ quantity, element }: {
    quantity:number,element:any
}) => {
  return (
    <div className='font-extralight flex flex-col-reverse md:flex-row gap-4'>
            <button
              onClick={() => console.log('added to cart')}
              className='bg-primary-dark text-primary-white px-6 py-3 w-full '
              type="button"
            >Add to Cart</button>
            
            <button
              onClick={() => console.log('added to favs')}
              className='text-primary-dark px-6 py-3 w-full bg-primary-white'
              type="button"
            >Save to favorites</button>
    </div>
  )
}

export default ProductAction
