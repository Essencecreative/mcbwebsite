import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/index-2-one-page/Banner"
import About from "@/components/sections/index-2-one-page/About"
import Individual from "@/components/sections/index-2-one-page/Individual"
import EMICalculator from "@/components/sections/index-2-one-page/EMICalculator"
import WealthSecure from "@/components/sections/index-2-one-page/WealthSecure"
import LockerFacility from "@/components/sections/index-2-one-page/LockerFacility"
import FactsArea from "@/components/sections/index-2-one-page/FactsArea"
import FeaturesStyle4 from "@/components/sections/index-2-one-page/FeaturesStyle4"
import OffersArea from "@/components/sections/index-2-one-page/OffersArea"
import Blog from "@/components/sections/index-2-one-page/Blog"
import AwardsAchievements from "@/components/sections/index-2-one-page/AwardsAchievements"
import ContactSection from "@/components/sections/index-2-one-page/ContactSection"

export default function Home() {

    return (
        <div className="homestyle2">
            <Layout headerStyle={5} footerStyle={2}>
                <Banner />
                <About />
                <Individual />
                <EMICalculator />
                <WealthSecure />
                <LockerFacility />
                <FactsArea />
                <FeaturesStyle4 />
                <OffersArea />
                <Blog />
                <AwardsAchievements />
                <ContactSection />
            </Layout>
        </div>
    )
}