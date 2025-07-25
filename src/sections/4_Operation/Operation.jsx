// component & icons
import Cart from "./components/icons/Cart"
import Order from './components/icons/Order'
import Payment from './components/icons/Payment'
import Evaluate from './components/icons/Evaluate'
import ArrowRight from './components/icons/ArrowRight'
import StepCard from './components/features/StepCard'

// css
import './styles/Operation.css'


function Operation() {
    return(
        <section id='operation' className='operation'>
            <div className='operation__layout'>

                {/* Start title */}
                <h2 className='operation__title'>操作流程</h2>
                {/* End title */}

                {/* Start step flow */}
                <div className='operation__step-flow'>
                    <StepCard step='1'  icon={<Cart className='operation__icon operation__icon--cart'/>} label={'選擇商品'}/>
                    <ArrowRight className='operation__arrow' />
                    <StepCard step='2' icon={<Order className='operation__icon operation__icon--order' />} label={'提交訂單'} />
                    <ArrowRight className='operation__arrow' />
                    <StepCard step='3' icon={<Payment className='operation__icon operation__icon--payment' />} label={'安全付款'} />
                    <ArrowRight className='operation__arrow' />
                    <StepCard step='4' icon={<Evaluate className='operation__icon operation__icon--evaluate'/>} label={'收貨評價'} />
                </div>
                {/* End step flow */}
                
            </div>
        </section>
    )
}

export default Operation