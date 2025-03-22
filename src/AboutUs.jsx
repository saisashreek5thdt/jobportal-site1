import { Topbar, Header, Footer, PageHeader, AboutContent } from "./Components/index";

export default function AboutUs() {
  return (
    <>
      {/* Top Bar Start */}
      <Topbar />
      {/* Top Bar End */}
      {/* Header Start */}
      <Header />
      {/* Header End */}
      {/* Page Header Start */}
      <PageHeader currentPageName="About Us" pageName="Home" pageLink="/" />
      {/* Page Header End */}
      {/* About Page Content Start */}
      {/* About Section Start */}
      <AboutContent />
      {/* About Section End */}
      {/* About Page Content End */}
      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
}
