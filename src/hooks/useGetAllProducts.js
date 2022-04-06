import {useState, useEffect} from "react";
import {ref, get} from 'firebase/database'

import {db} from 'libs/firebase'

function useGetAllProducts (props){
    const [isLoading, setIsLoading] = useState(false)
    const [products, setProducts] = useState(null)

    useEffect(()=>{
        async function getAllProducts(){
          const productRef = await ref(db, '/products');
          const productSnapShot = await get(productRef)
          const productData = Object.values(productSnapShot.val())
          setProducts(productData)
          setIsLoading(true)
        }
        getAllProducts()
     },[])

    return [isLoading, products]
}

export {useGetAllProducts}