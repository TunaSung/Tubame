// Library
import { useMediaQuery } from "react-responsive";

// component
import BrandSwiper from './features/BrandSwiper';


// css
import './styles/Brand.css';

function Brand(){

    const isBelow1440 = useMediaQuery({ maxWidth: 1439 });

    return (
        <section id='brand' className='brand'>

            {isBelow1440 ? 
                (
                    // start mobile layout
                    <div className='brand__layout brand__layout--mobile'>
        
                        {/* start carousel */}
                        <BrandSwiper />
                        {/* end carousel */}
                        
                        {/* start content */}
                        <div className="brand__content brand__content--mobile">
                            <p className='brand__copy brand__copy--mobile'>
                                Tubame代購致力於為客戶提供快捷、可靠的代購服務 <br />
                                無論是國內還是國外的商品 <br />
                                Tubame代購都能幫助您輕鬆購買到手
                            </p>
                            <p className='brand__copy brand__copy--mobile'>
                                我們的使命是通過專業的服務和用戶友好的平台 <br />
                                讓購物變得簡單而愉快 <br />
                                我們相信，信任和透明是我們與客戶建立長久關係的基礎 <br />
                            </p>
                        </div>
                        {/* end content */}
        
                    </div>
                    // end mobile layout
                )
                :
                (

                    // start desktop layout
                    <div className="brand__layout brand__layout--desktop">
        
                        {/* start image */}
                        <div className="brand__images-wrapper">
                            <div className="brand__image-left" />
                            <div className="brand__image-right">
                                <div className="brand__image-right-top" />
                                <div className="brand__image-right-bottom" />
                            </div>
                        </div>
                        {/* end image */}
                        
                        {/* start content */}
                        <div className="brand__content brand__content--desktop">
                            <h1 className="brand__title">Tubame</h1>
                            <div className="brand__copy brand__copy--desktop">
                                <p className="brand__copy-item">
                                    Tubame 代購致力於為客戶提供快捷、可靠的代購服務無論是國內還是國外的商品 <br />
                                    Tubame代購都能幫助您輕鬆購買到手 <br /><br />
                                    我們的使命是通過專業的服務和用戶友好的平台讓購物變得簡單而愉快 <br /><br />
                                    我們相信 <br />
                                    信任和透明是我們與客戶建立長久關係的基礎
                                </p>
                            </div>
                        </div>
                        {/* end content */}
                        
                    </div>
                    // end desktop layout
                )
            }


        </section>
    )
}

export default Brand