import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProductsDateQuery } from '../services/productApi';
import toast from 'react-hot-toast';
import { setProducts } from '../Redux/Slice/ProductsSlice';

// data
import { categories } from '../../data/data';

import Hero from '../assets/hero/ hero.svg';
//
import Section from '../ui/Section';
import Main from '../ui/Main';

//
import AsideNavbar from '../features/Home/AsideNavbar';
import HeaderProduct from '../features/Home/HeaderProduct';
import MainProduct from '../features/Home/MainProduct/MainProduct';
import CreateCatogyCart from '../features/Home/MainProduct/CreateCatogyCart';
import Trending from '../features/Home/Trending';
import Galery from '../features/Home/Galery';
import Services from '../ui/Services';
import Spinner from '../ui/Spinner';

function HomePage() {
    const dispatch = useDispatch();

    const { todays, our_products, this_month } = useSelector(
        (state) => state.product.products
    );

    const {
        error: ProductsError,
        isLoading,
        data: productData,
    } = useGetProductsDateQuery();

    useEffect(() => {
        if (productData) dispatch(setProducts(productData));
    }, [productData]);

    //error yarandiqda ekrana cixarir
    useEffect(() => {
        if (ProductsError) toast.error(ProductsError);
    }, [ProductsError]);

    if (isLoading) return <Spinner />;

    return (
        <Main>
            <div className="mb-24  mt-10 grid grid-cols-1 ml:grid-cols-[20%_80%] ">
                <AsideNavbar />
                <img
                    src={Hero}
                    alt="iphone img"
                    className="ml:justify-self-center"
                />
            </div>

            {/* product 1  */}
            <Section>
                <HeaderProduct
                    catagoryName="Todoy's"
                    catagorTitle="Flash Sales"
                    time={true}
                />

                <MainProduct
                    productsData={todays}
                    borderB={true}
                    discountRate={true}
                    bottomButton="View All Products"
                />
            </Section>
            {/* product 1 end  */}

            {/* catogory  */}
            <Section>
                <HeaderProduct
                    catagoryName="Categories"
                    catagorTitle="Browse By Category"
                />

                <CreateCatogyCart catogoryData={categories} />
            </Section>
            {/* category  end  */}

            {/* product 2   */}
            <Section>
                <HeaderProduct
                    catagoryName="This Month"
                    catagorTitle="Best Selling Products"
                    buttonName="Vuiw All"
                />

                <MainProduct productsData={this_month} />
            </Section>
            {/* product 2 end  */}

            {/* Trending */}
            <Section>
                <Trending />
            </Section>
            {/* Trending  end*/}

            {/* product 3   */}
            <Section>
                <HeaderProduct
                    catagoryName="Our Products"
                    catagorTitle="Explore Our Products"
                    buttonName="View All Products"
                />

                <MainProduct
                    productsData={our_products}
                    slider={false}
                    bottomButton="View All Products"
                />
            </Section>
            {/* product 3 end   */}

            {/* galery   */}
            <Section>
                <HeaderProduct
                    catagoryName="Featured"
                    catagorTitle="New Arrival"
                />

                <Galery />

                <Services />
            </Section>
            {/* galery  end   */}
        </Main>
    );
}

export default HomePage;
