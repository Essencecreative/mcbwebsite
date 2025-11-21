import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home2/Banner"
import Individual from "@/components/sections/home2/Individual"
import EMICalculator from "@/components/sections/home2/EMICalculator"
import WealthSecure from "@/components/sections/home2/WealthSecure"
import Partner from "@/components/sections/home2/Partner"
import ServiceRequest from "@/components/sections/home2/ServiceRequest"
import LockerFacility from "@/components/sections/home2/LockerFacility"
import FactsArea from "@/components/sections/home2/FactsArea"
import FeaturesStyle4 from "@/components/sections/home2/FeaturesStyle4"
import OffersArea from "@/components/sections/home2/OffersArea"
import Blog from "@/components/sections/home2/Blog"
import AwardsAchievements from "@/components/sections/home2/AwardsAchievements"

export default function Home() {

    return (
        <div className="homestyle2">
            <Layout headerStyle={2} footerStyle={2}>
                <Banner />
                <Individual />
                <EMICalculator />
                <WealthSecure />
                <Partner />
                <ServiceRequest />
                <LockerFacility />
                <FactsArea />
                <FeaturesStyle4 />
                <OffersArea />
                <Blog />
                <AwardsAchievements />
            </Layout>
        </div>
    )
}