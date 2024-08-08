import { FaEye, FaRegHeart } from 'react-icons/fa';

import StartRating from '../../../ui/StartRating';
import { useMemo } from 'react';
import useAddProduct from '../../../hooks/useAddProduct';

function CreateProduct({ product, discountRate = false }) {
    const {
        discount,
        description,
        id,
        imageUrl,
        name,
        price,
        categories,
        productId,
    } = product;

    const { addProduct, isLoading } = useAddProduct();

    const discountRateCalc = useMemo(() => {
        if (discountRate && price > 0 && discount > 0) {
            return Math.floor(100 - (100 * discount) / price);
        }
        return null;
    }, [price, discount, discountRate]);

    function handleAddProduct(productData) {
        addProduct(productData);
    }

    return (
        <div>
            <div className="group relative h-[250px] overflow-hidden rounded bg-textWhite2">
                <img
                    className="h-full w-full transform  transition-transform  duration-300 group-hover:scale-110"
                    src={imageUrl}
                    alt={name}
                />

                {discountRateCalc && (
                    <span className="absolute left-3 top-3 z-20 rounded  bg-main px-3 py-1 text-sm text-stone-50">
                        {`-${discountRateCalc}%`}
                    </span>
                )}

                <div className="urekk ve goz sekli absolute right-2 top-3 flex flex-col gap-2 ">
                    <span className="block cursor-pointer rounded-full bg-stone-50 p-2">
                        <FaRegHeart className="hover:bg-red-8 text-xl hover:text-red-500 " />
                    </span>
                    <span className="block rounded-full bg-stone-50 px-2 py-2 ">
                        <FaEye className="cursor-pointer text-center text-xl " />
                    </span>
                </div>

                <button
                    className="absolute bottom-[-100%] left-0 z-10 w-full cursor-pointer rounded-bl  rounded-br bg-black py-2 tracking-wide text-stone-50 transition-all duration-300 group-hover:bottom-0"
                    onClick={() => handleAddProduct(product)}
                    disabled={isLoading}
                >
                    Add to cart
                </button>
            </div>

            <div className="mt-2.5">
                <div className="text-base">{name}</div>

                {discount ? (
                    <div className="text-main">
                        ${discount}
                        <s className="ml-1 text-textColor">${price}</s>
                    </div>
                ) : (
                    <span className="inline-block text-main  ">${price}</span>
                )}

                <span>
                    <StartRating size={26} />
                </span>
            </div>
        </div>
    );
}

export default CreateProduct;
