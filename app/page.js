import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import FeaturesStyle1 from "@/components/sections/home1/FeaturesStyle1"
import MoneyExchange from "@/components/sections/home1/MoneyExchange"
import WealthSecure from "@/components/sections/home1/WealthSecure"
import FeaturesStyle2 from "@/components/sections/home1/FeaturesStyle2"
import Faq from "@/components/sections/home1/Faq"
import DealsArea from "@/components/sections/home1/DealsArea"
import EMICalculator from "@/components/sections/home1/EMICalculator"
import FeaturesStyle3 from "@/components/sections/home1/FeaturesStyle3"
import ServiceStyle1 from "@/components/sections/home1/ServiceStyle1"
import Slogan from "@/components/sections/home1/Slogan"
import ServiceRequest from "@/components/sections/home2/ServiceRequest"
import ForeignExchangeSlider from "@/components/Foreign/ForeignExchangeSlider"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <div style={{ paddingTop: '50px', paddingBottom: '50px' }}>
  <ForeignExchangeSlider />
</div>
                   <div style={{paddingTop: '0px', paddingBottom: '0px'}}>
                     <DealsArea />
                   </div>
                {/* <FeaturesStyle1 />
                <ServiceStyle1 /> */}
                <WealthSecure />
                {/* <FeaturesStyle2 />
                <FeaturesStyle3 />
                <MoneyExchange />
                <Faq />
                <DealsArea />
                <EMICalculator /> */}
                <Slogan />
            </Layout>
        </>
    )
}