import Category from "@/components/Category";
import Company from "@/components/Company";
import CTA from "@/components/CTA";
import FeaturedJobs from "@/components/FeaturedJobs";
import Header from "@/components/Header";
import LatestJobOpen from "@/components/LatestJobOpen";

export default function Home() {
  return (
    <div>
      <Header />
      <Company />
      <Category />
      <CTA />
      <FeaturedJobs />
      <LatestJobOpen />
    </div>
  );
}
