import { useState } from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { FiEdit } from 'react-icons/fi';

import Box from '../../ui/Box';
import { useDeleteProductMutation } from '../../services/basketApi';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { deleteBasketItem } from '../../Redux/Slice/BasketSlice';

function CreateBasketItem({ image, name, price, quantity,productId }) {
    const dispatch=useDispatch()
    const { uid: userId } = useSelector((state) => state.user);
    const [productQuantity, setProductQuantity] = useState(quantity);


    const [deleteProduct, { isLoading, error, data: deleteProductData }] =
        useDeleteProductMutation();


    async function handleDeleteProduct(productId) {
        const {data}=await deleteProduct({ userId, deleteProductId: productId });
        if(data== "ok"){
            toast.success("Məhsul səbətdən silindi")
            dispatch(deleteBasketItem(productId))
        }
    }



    if (error) console.log(error);
    if (deleteProductData) console.log(deleteProductData);

    return (
        <div className="relative">
            <Box className="relative mb-10  grid  grid-cols-[30%_20%_25%_25%]  items-center justify-items-center   overflow-y-auto px-2 py-6    sm:grid-cols-[240px_140px_100px_140px]  sm:px-10 md:grid-cols-4 ml:overflow-x-hidden">
                <div className="mr-auto flex flex-wrap items-center justify-start gap-2">
                    <img src={image} alt={name} className="h-14 w-14" />
                    <div className="hidden text-xs xs:inline-block xs:text-sm sm:text-base ">
                        {name}
                    </div>
                </div>

                <div>${price}</div>

                <div>
                    <input
                        type="number"
                        className="w-14 rounded border border-stone-950 p-2 focus:outline-none"
                        value={productQuantity}
                        onChange={(e) => setProductQuantity(e.target.value)}
                    />
                </div>

                <div>${Number(quantity) * Number(price)}</div>
            </Box>
            <button
                className="absolute left-[5px] top-[5px]"
                onClick={() => handleDeleteProduct(productId)}
                disabled={isLoading}
            >
                <IoMdCloseCircleOutline className=" cursor-pointer text-2xl hover:text-stone-600" />
            </button>

            <button className="absolute right-[5px] top-[5px] ">
                <FiEdit className=" cursor-pointer text-2xl hover:text-stone-600" />
            </button>
        </div>
    );
}

export default CreateBasketItem;
