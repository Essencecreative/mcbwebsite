import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/index-3-one-page/Banner"
import Slogan from "@/components/sections/index-3-one-page/Slogan"
import Accounts from "@/components/sections/index-3-one-page/Accounts"
import Partner from "@/components/sections/index-3-one-page/Partner"
import BankingTab from "@/components/sections/index-3-one-page/BankingTab"
import Benefits from "@/components/sections/index-3-one-page/Benefits"
import ServiceRequest from "@/components/sections/index-3-one-page/ServiceRequest"
import AccountSteps from "@/components/sections/index-3-one-page/AccountSteps"
import FeaturesStyle3 from "@/components/sections/index-3-one-page/FeaturesStyle3"
import Testimonials from "@/components/sections/index-3-one-page/Testimonials"
import BlogStyle2 from "@/components/sections/index-3-one-page/BlogStyle2"
import ContactSection from "@/components/sections/index-3-one-page/ContactSection"


export default function Home() {

    return (
        <div className="homestyle3">
            <Layout headerStyle={6} footerStyle={3}>
                <Banner />
                <Accounts />
                <Partner />
                <BankingTab />
                <Benefits />
                <ServiceRequest />
                <AccountSteps />
                <FeaturesStyle3 />
                <Testimonials />
                <BlogStyle2 />
                <ContactSection />
                <Slogan />
            </Layout>
        </div>
    )
}