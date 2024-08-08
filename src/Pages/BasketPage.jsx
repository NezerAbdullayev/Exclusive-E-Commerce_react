import { useDispatch, useSelector } from 'react-redux';
import CreateBasketItem from '../features/Basket/CreateBasketItem';
import { useLazyGetUserBasketQuery } from '../services/basketApi';
import { useEffect } from 'react';
import { setBasket } from '../Redux/Slice/BasketSlice';
import toast from 'react-hot-toast';



function BasketPage() {

    const dispatch=useDispatch()

    const userId = useSelector((state) => state?.user?.uid);
    
    
    const [getUserBasket, { data: basketData, error: userBasketError }] =
    useLazyGetUserBasketQuery();
    
    useEffect(() => {
        async function getBasket() {
            if (!userId) return;
            await getUserBasket({ userId });
        }
        getBasket();
    }, [userId]);
    

    useEffect( ()=>{
        if(!basketData) return
        dispatch(setBasket(basketData))
    },[basketData,dispatch])



    if(userBasketError)toast.error(userBasketError)

    return (
        <div className="mb-28 mt-20 ">
            <div
                className="mb-10 grid  grid-cols-2  xs:grid-cols-4 items-center   justify-items-center  overflow-y-auto rounded border
             border-stone-50 px-10 py-6 shadow-md ml:overflow-x-hidden"
            >
                <div>Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Subtotal</div>
            </div>

            {basketData &&
                basketData.map((product) => (
                    <CreateBasketItem
                        key={product.id}
                        id={product.id}
                        image={product.imageUrl}
                        name={product.name}
                        price={product.price}
                        quantity={product?.quantity || 0}
                        productId={product.productId}
                    />
                ))}
            <div className="mr-4 text-end font-bold">
                Total: <span className="font-normal">490304</span>{' '}
            </div>
        </div>
    );
}

export default BasketPage;
