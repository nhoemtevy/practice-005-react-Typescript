import { useEffect, useState } from "react";
import LoadingComponent from "../Loader/LoadingComponent";
import CardComponent from "./Card/CardComponent"
export type Products = {
    title: string;
    description: string;
    image: string;
}
export const HomeComponent = () =>{
    const [getProduct, setProduct] = useState<Products[]>();
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        setLoading(true);
        try{
            const fetchProduct = await fetch(" https://fakestoreapi.com/docs");
            const res = await fetchProduct.json();
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
                            <div className="flex justify-center gap-4 flex-wrap">
                                {getProduct?.map((pro, index) => (
                                    <CardComponent 
                                        key={index}
                                        image={pro.image}
                                        title={pro.title}
                                        description={pro.description}
                                    />
                                ))}
                            </div>
                        )
                }
            </div>
        );
    };