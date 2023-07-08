import { FeatureType } from '@/common.types'
import AboutHeroText from '@/components/AboutHeroText'
import CategoriesBar from '@/components/CategoriesBar'
import MainFeature from '@/components/MainFeature'
import MainFooter from '@/components/MainFooter'
import MainHero from '@/components/MainHero'
import MainNav from '@/components/MainNav'
import MenuButton from '@/components/MenuButton'
import ProductCard from '@/components/ProductCard'
import TopFooter from '@/components/TopFooter'
import { Features, categories } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <MainNav/>
    <main className="bg-light-grey">
        {/* hero */}
        <MainHero />
        {/* features */}
        <section className="flex flex-col place-content-center p-4 my-8">
          <h1 className='text-head-md font-light text-primary-light text-center my-8'>What makes our brand different</h1>
          <article className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-center place-items-center gap-8'>
            {
              Features.map((feature: FeatureType) => (
                <MainFeature key={feature.title} feature={feature} />
              ))
              }
          </article>
        </section>
        {/* products */}
        <section className='flex flex-col place-items-center gap-5'>
          <article className='grid grid-cols-2 md:grid-cols-4 gap-4 p-2 md:px-8'>
            {
              ['hey','me','bro','green'].map((i,n) => (
                <ProductCard title='try' id='cool' image='hello' price='99.99' key={n} />
              ))
            }
          </article>
          <article>
          <Link  href={'/'} className='text-primary-dark p-4 text-body-sm font-light shadow-sm rounded-md hover:bg-light-grey hover:shadow-md hover:text-primary-light delay-200 w-full text-center md:text-start md:w-fit'>
                  View collection
              </Link>
          </article>
        </section>
        {/* ab feature */}
        <section className='w-full flex flex-col md:flex-row md:px-20 py-8 justify-center place-content-center gap-4'>
          <AboutHeroText
            title='It started with a small idea'
            description='A global brand with local beginnings, our story begain in a small studio in South London in early 2014'
            action='View collection'
            position='start'
            changeBackground
          />
          <article className='w-full md:bg-about-hero-1 bg-no-repeat bg-cover bg-center '>
            <Image className='md:hidden' src='/images/main_pagehero-image.svg' width={800} height={1000} alt='about-feature' />
          </article>
        </section>
        {/* join block */}
        <TopFooter />
      </main>
      {/* footer */}
      <MainFooter />
    </>
  )
}
