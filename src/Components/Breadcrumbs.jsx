import React from "react";

const Breadcrumbs = ({ title }) => {
  return (
    <>
 



<div
  className="container-fluid page-header mb-5 p-0"
  style={{ backgroundImage: "url(img/inner-banner1.jpg)" }}
>
  <div className="container-fluid page-header-inner py-5">
    <div className="container text-center pb-5">
      <h1 className="display-3 text-white mb-3 headtittle">
        {title}
      </h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center text-uppercase brd-crm">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item text-white active" aria-current="page">
            {title}
          </li>
        </ol>
      </nav>
    </div>
  </div>
</div>



      
    </>
  );
};

export default Breadcrumbs;
