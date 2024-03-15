import { useEffect, useState } from "react";
import LoadingComponent from "../Loader/LoadingComponent";
import {CardProductComponent} from "./Card/CardProductComponent"
export type Products = {
    title: string;
    description: string;
    image: string;
    price: number;
}
export const HomeComponent = () =>{
    const [getProduct, setProduct] = useState<Products[]>();
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        setLoading(true);
        try{
            const fetchProduct = await fetch(" https://fakestoreapi.com/products");
            const res = await fetchProduct.json();
            console.log(res)
            setProduct(res);
        }catch(error){
            console.log("Error", error);
        } finally{
            setLoading(false);
        }
        
    }
        useEffect(() => {
            fetchData();
        },[]);
        return (
            <div>
                {
                    loading ? (
                        <LoadingComponent />
                        ) : (
                            <div className="flex justify-center gap-4 flex-wrap mt-8">
                                {getProduct?.map((pro, index) => (
                                    <CardProductComponent 
                                        key={index}
                                        image={pro.image}
                                        title={pro.title}
                                        price={pro.price}
                                        description={pro.description}
                                    />
                                ))}
                            </div>
                        )
                }
            </div>
        );
    };