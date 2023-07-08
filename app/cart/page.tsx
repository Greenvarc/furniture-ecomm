import { CartType } from '@/common.types'
import ProductCount from '@/components/ProductCount'
import { dummyCartitems } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartPage =async () => {
  return (
    <div className='p-4'>
      <h1 className='text-head-sm md:text-head-xl text-primary-dark font-extralight py-4 md:py-8'>Your shopping cart</h1>
      {/* cart table */}
      <section className='flex flex-col gap-4 py-4 border-y  border-y-border-dark'>  
        {
          dummyCartitems.map(({ image, title, description, price, quantity,curency }:CartType) => (
            <article className='flex  w-full justify-between gap-5 place-items-center' key={title}>
              <div className='flex  place-items-center gap-4'>
                <Image width={130} height={100} alt='item' src={image} />
                <div className='flex  flex-col gap-2 max-w-full md:max-w-xs '>
                  <h1 className='text-head-sm text-primary-dark font-light'>{title}</h1>
                  <p className='text-body-sm font-extralight'>{description}</p>
                  <p className='text-body-sm text-primary-dark'>{`${curency ? curency : '$'}${price}`}</p>
                  <div className="  md:hidden w-full max-w-md">
                <ProductCount inStock={99} key={title} />
              </div>
                </div>
              </div>
              <div className=" hidden md:block w-full max-w-md">
                <ProductCount inStock={99} key={title} />
              </div>
              <p className='hidden md:block'>{price}</p>
            </article>
          ))
        }
    
      </section>
      <section className='flex flex-col mt-4 place-items-end'>
        <article className='flex gap-2 place-items-center'>
          <h1 className='text-body-lg text-primary-light font-light'>Subtotal </h1> 
          <p className='text-head-sm text-primary-dark font-bold'>$99.99</p>
        </article>
        <article className='text-primary-light font-extralight pt-4'>
          Taxes and shipping are calculated at checkout
        </article>
        <article className='w-full flex place-content-center md:place-content-end py-2'>
          <Link className='bg-primary-dark hover:bg-primary-white hover:text-primary-dark w-full md:w-fit text-primary-white text-head-xs font-extralight text-center px-4 py-2' href='/checkout' >Go to checkout</Link>
        </article>
      </section>
    </div>
  )
}

export default CartPage
