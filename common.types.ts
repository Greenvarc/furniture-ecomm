export type FeatureType = {
    icon: string;
    title: string;
    description: string;
}

export type CartType = {
    image: string,
    title: string,
    curency?:'$'|'€'|'£'
    description: string,
    price:number,
    quantity:number,
}