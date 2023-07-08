import ProductCard from '@/components/ProductCard'
import SignUpBar from '@/components/SignUpBar'
import { FooterLinks, categories, dummyBrands, dummyPriceRange, sortingCategories } from '@/constants'
import Image from 'next/image'
import React from 'react'

const SearchPage = () => {
  return (
    <>
      {/* filter stuffs */}
      <section>
        <article className='w-full'>
          <h1 className='w-full text-center text-body-md md:text-head-xl py-4 md:py-14 text-primary-dark font-extralight'>View all products</h1>
        </article>

        <article className='hidden md:flex justify-between place-items-center px-4 md:px-14 overflow-x-auto'>
          <div className='flex gap-8 py-4'>
            <select className='border-none outline-none px-4 py-2 bg-light-grey hover:shadow-md' name="category" id="category">
              <option  disabled>Category</option>
              {
                FooterLinks.Categories.map((el) => (
                  <option   key={el} >{el}</option>
                ))
              }
            </select>

            <select className='border-none outline-none px-4 py-2 bg-light-grey hover:shadow-md' name="product type" id="type">
              <option>Product type</option>
              {
                categories.map((el) => (
                  <option key={el}>{el}</option>
                ))
              }
            </select>

            <select className='border-none outline-none px-4 py-2 bg-light-grey hover:shadow-md' name="product type" id="type">
              <option>Price</option>
              {
                dummyPriceRange.map((el) => (
                  <option key={el}>{el}</option>
                ))
              }
            </select>

            <select className='border-none outline-none px-4 py-2 bg-light-grey hover:shadow-md' name="product type" id="type">
              <option>Brand</option>
              {
              dummyBrands.map((el) => (
                  <option key={el}>{el}</option>
                ))
              }
            </select>

          </div>

          <div className="">
          <select className='border-none outline-none px-4 py-2 bg-light-grey hover:shadow-md' name="product type" id="type">
              <option>Product type</option>
              {
                sortingCategories.map((el) => (
                  <option key={el}>{el}</option>
                ))
              }
            </select>
          </div>
        </article>
        {/* only mobile */}
        <article className='flex md:hidden justify-center gap-10 py-5 px-2'>
        <select className='border-none outline-none px-4 py-2 bg-light-grey hover:shadow-md' name="category" id="category">
              <option >Category</option>
              {
                FooterLinks.Categories.map((el) => (
                  <option   key={el} >{el}</option>
                ))
              }
            </select>

            <select className='border-none outline-none px-4 py-2 bg-light-grey hover:shadow-md' name="product type" id="type">
              <option>Product type</option>
              {
                categories.map((el) => (
                  <option key={el}>{el}</option>
                ))
              }
            </select>
        </article>
      </section>

      {/* products here */}
      
      <section className='flex flex-col place-items-center gap-5 py-4 mt-4'>
          <article className='grid grid-cols-2 md:grid-cols-4 gap-4 p-2 md:px-8'>
            {
              ['hey','me','bro','green','varcho','hey','you','him'].map((i,n) => (
                <ProductCard title='try' id='cool' image='hello' price='99.99' key={n} />
              ))
            }
          </article>
        </section>

      <section className='bg-primary-white flex flex-col md:flex-row text-primary-dark place-content-center'>
        <article>
          <Image alt='hero' width={800} height={600} src='/images/product-hero-image.png' />
        </article>
        <article className='flex flex-col justify-between p-10'>
          <div className='mb-4'>
            <h1 className='text-body-md capitalize '>Join the club and get the benefits</h1>
            <p className='font-extralight'>Sign up for our newsletter and receive exclusive offers on new ranges,<br /> sales, pop up stores and more</p>
          </div>
          <SignUpBar mode='light' />
        </article>
      </section>
    </>
  )
}

export default SearchPage
