import Choose from "@/components/Home/Choose";
import Collection from "@/components/Home/Collection";
import Hero from "@/components/Home/Hero";
import OurClients from "@/components/Home/OurClients";
import OurTeam from "@/components/Home/OurTeam";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Choose />
      <Collection />
      <OurTeam />
      <OurClients />
    </div>
  );
}
