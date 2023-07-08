import Image from "next/image"
import Link from "next/link"

type Props = {
    image: string,
    title: string,
  price: string,
  id:string,
}

const ProductCard = ({image,title,price,id}:Props) => {
  return (
    <Link href={`/products/${id}`} className=" text-primary-dark">
      <Image width={300} height={300} alt={title} src='/images/dumy-furn-img.png' />
      <h1 className="font-light text-body-sm  md:text-head-sm">The silky Vase</h1>
      <p className=" font-light text-body-sm md:text-body-md">$ {price}</p>
    </Link>
  )
}

export default ProductCard
