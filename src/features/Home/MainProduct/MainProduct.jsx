// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Button from '../../../ui/Button';
import CreateProduct from './CreateProduct';
import { memo, useMemo } from 'react';

function MainProduct({
    productsData = [],
    padding,
    borderB,
    bottomButton,
    discountRate,
    slider = true,
}) {
    const swiperParams = useMemo(
        () => ({
            spaceBetween: 30,
            slidesPerView: 1,
            pagination: {
                clickable: true,
            },
            breakpoints: {
                980: {
                    slidesPerView: 4,
                },
                762: {
                    slidesPerView: 3,
                },
                480: {
                    slidesPerView: 2,
                },
            },
            modules: [Pagination],
            className: 'mySwiper',
        }),
        []
    );

    console.log("mainproduct")

    return (
        <div
            className={`border-b-1  mb-14 ${padding ? padding : 'pb-14'} ${borderB ? ' border-b' : ''}`}
        >
            <Swiper {...swiperParams}>
                {/* crete product */}

                {slider ? (
                    productsData.map((product) => {
                        // slider product
                        return (
                            <SwiperSlide className="pb-8" key={product.id}>
                                {/* create product */}
                                <CreateProduct
                                    product={product}
                                    discountRate={discountRate}
                                />
                            </SwiperSlide>
                        );
                    })
                ) : (
                    // normal product
                    <div className="grid grid-cols-1  gap-x-6 gap-y-12  xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                        {productsData.map((product) => (
                            <CreateProduct product={product} key={product.id} />
                        ))}
                    </div>
                )}
            </Swiper>

            {bottomButton && (
                <div className="mt-14 flex justify-center">
                    <Button>{bottomButton}</Button>
                </div>
            )}
        </div>
    );
}

export default memo(MainProduct);
