
  export interface Product {
    description: string;
    _id: string;
    title: string;
    price: number;
   imageUrl? : {
        asset : {
            _ref : string;
            _type : "image";
        }
    };
    
    tags:string[];
    slug: {
        _type : "slug" 
        current : string 
    dicountPercentage: number;
    discountedPrice:number;
    isNew: boolean;
    description:string;

  }}