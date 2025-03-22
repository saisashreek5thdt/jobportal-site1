import {
  Topbar,
  Header,
  HeroSection,
  HeroCTA,
  About,
  Footer,
  OurServices,
  OurFeatures,
  OurGoals,
} from "./Components/index";

export default function Home() {
  return (
    <>
      {/* Top Bar Start */}
      <Topbar />
      {/* Top Bar End */}
      {/* Header Start */}
      <Header />
      {/* Header End */}
      {/* Hero Section Start */}
      <HeroSection />
      {/* Hero Section End */}
      {/* Hero CTA Box Start */}
      <HeroCTA />
      {/* Hero CTA Box End */}
      {/* About Section Start */}
      <About />
      {/* About Section End */}
      {/* Our Services Start */}
      <OurServices />
      {/* Our Services End */}
      {/* Our Features Start */}
      <OurFeatures />
      {/* Our Features End */}
      {/* Our Goals Start */}
      <OurGoals />
      {/* Our Goals End */}
      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
}
