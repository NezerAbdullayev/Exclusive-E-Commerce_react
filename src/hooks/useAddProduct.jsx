import { useDispatch, useSelector } from 'react-redux';
import {
    useAddProductToBasketMutation,
    useUpdateProductMutation,
} from '../services/basketApi';
import { addInBasket } from '../Redux/Slice/BasketSlice';
import toast from 'react-hot-toast';
import { useCallback, useEffect } from 'react';

function useAddProduct() {
    //user melumatlari
    const { uid: userId } = useSelector((state) => state.user);
    const { basket: userBasket } = useSelector((state) => state.basket);

    const dispatch = useDispatch();

    const [
        updateProduct,
        { error: upDateError, isLoading: UpdateLoading, data: updateData },
    ] = useUpdateProductMutation();

    const [
        addProductToBasket,
        { error: addInError, isLoading: AddinLoading, data: addInProductData },
    ] = useAddProductToBasketMutation();

    console.log(updateData, 'up');
    console.log(addInProductData, 'addin');

    ///add function
    const addProduct = useCallback(
        (addProductData) => {
            if (userId) {
                const updateProductData = (
                    userBasket.length > 0 ? userBasket : []
                )?.find((product) => product?.id === addProductData.id);

                //product sebetde varsa count artir
                if (updateProductData) {
                    updateProduct({
                        userId,
                        updateProductId: updateProductData.productId,
                        updateProductDate: {
                            ...updateProductData,
                            count: updateProductData.count + 1,
                        },
                    });
                    //yoxdursa sebete elave et
                } else {
                    const newProduct = { ...addProductData, count: 1 };
                    addProductToBasket({ userId, newProduct });
                    dispatch(addInBasket(newProduct));
                }
            } else {
                toast.error('Zəhmət olmazsa hesaba daxil olun.');
            }
        },
        [userId, userBasket, updateProduct, addProductToBasket, dispatch]
    );

    console.log(1)

    useEffect(() => {
        if (upDateError && addInError)
            toast.error('Məhsul səbətə əlavə edilərkən bir xəta baş verdi');
    }, [upDateError, addInError]);


    
    if (addInProductData?.length > 0 || updateData === "ok")  toast.success('Məhsul səbətə əlavə edildi add product');

    return {
        addProduct,
        isLoading: UpdateLoading || AddinLoading,
    };
}

export default useAddProduct;
