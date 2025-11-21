import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/index-one-page/Banner"
import About from "@/components/sections/index-one-page/About"
import FeaturesStyle1 from "@/components/sections/index-one-page/FeaturesStyle1"
import MoneyExchange from "@/components/sections/index-one-page/MoneyExchange"
import FeaturesStyle2 from "@/components/sections/index-one-page/FeaturesStyle2"
import FeaturesStyle3 from "@/components/sections/index-one-page/FeaturesStyle3"
import Blog from "@/components/sections/index-one-page/Blog"
import ServiceStyle1 from "@/components/sections/index-one-page/ServiceStyle1"
import ContactSection from "@/components/sections/index-one-page/ContactSection"
import Slogan from "@/components/sections/index-one-page/Slogan"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1}>
                <Banner />
                <About />
                <FeaturesStyle1 />
                <ServiceStyle1 />
                <FeaturesStyle3 />
                <MoneyExchange />
                <Blog />
                <FeaturesStyle2 />
                <ContactSection />
                <Slogan />
            </Layout>
        </>
    )
}