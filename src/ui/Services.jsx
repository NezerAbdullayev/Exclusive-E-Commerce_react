import Image1 from  "../assets/services/Services.svg"
import Image2 from  "../assets/services/Services (1).svg"
import Image3 from  "../assets/services/Services (2).svg"


const styles={
    cart:"flex flex-col justify-center items-center gap-y-3",
    container:"grid grid-cols-1  xs:grid-cols-2 md:grid-cols-3 justify-between gap-8 my-16",
    title:"text-xl font-bold  text-center",
    text:"text-sm text-center"
}


function Services() {
    return (
        <div className={styles.container}  >
            <div className={styles.cart} >
                <img src={Image1} alt="services" />
                <div  >
                    <h4 className={styles.title}>FREE AND FAST DELIVERY</h4>
                    <p className={styles.text}>Free delivery for all orders over $140</p>
                </div>
            </div>

            <div className={styles.cart}>
                <img src={Image2} alt="services" />
                <div>
                    <h4 className={styles.title}>24/7 CUSTOMER SERVICE</h4>
                    <p className={styles.text}>Friendly 24/7 customer support</p>
                </div>
            </div>

            <div className={styles.cart}> 
                <img src={Image3} alt="services" />
                <div>
                    <h4 className={styles.title}>MONEY BACK GUARANTEE</h4>
                    <p className={styles.text}>We reurn money within 30 days</p>
                </div>
            </div>
        </div>
    );
}

export default Services;
