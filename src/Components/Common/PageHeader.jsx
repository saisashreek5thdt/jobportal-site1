import { Link } from "react-router-dom";

export default function PageHeader({ currentPageName, pageLink, pageName }) {
  return (
    <>
      <div class="page-header bg-section dark-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              {/* Page Header Box Start */}
              <div class="page-header-box">
                <h1 class="text-anime-style-2" data-cursor="-opaque">
                  {currentPageName}
                </h1>
                <nav class="wow fadeInUp">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to={pageLink}>{pageName}</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      {currentPageName}
                    </li>
                  </ol>
                </nav>
              </div>
              {/* Page Header Box End */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
