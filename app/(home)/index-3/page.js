import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home3/Banner"
import Slogan from "@/components/sections/home3/Slogan"
import Accounts from "@/components/sections/home3/Accounts"
import Partner from "@/components/sections/home3/Partner"
import BankingTab from "@/components/sections/home3/BankingTab"
import Benefits from "@/components/sections/home3/Benefits"
import ServiceRequest from "@/components/sections/home3/ServiceRequest"
import AccountSteps from "@/components/sections/home3/AccountSteps"
import FeaturesStyle3 from "@/components/sections/home3/FeaturesStyle3"
import Testimonials from "@/components/sections/home3/Testimonials"
import BlogStyle2 from "@/components/sections/home3/BlogStyle2"


export default function Home() {

    return (
        <div className="homestyle3">
            <Layout headerStyle={3} footerStyle={3}>
                <Banner />
                <Slogan />
                <Accounts />
                <Partner />
                <BankingTab />
                <Benefits />
                <ServiceRequest />
                <AccountSteps />
                <FeaturesStyle3 />
                <Testimonials />
                <BlogStyle2 />
            </Layout>
        </div>
    )
}