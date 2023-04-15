import React from "react";
import web3 from "../assets/images/image-web-3-mobile.jpg";
import web3_desktop from "../assets/images/image-web-3-desktop.jpg";

const Content = () => {
  return (
    <section className="">
      <picture>
        <source media="(min-width:36em)" srcSet={web3_desktop} />
        <img src={web3} />
      </picture>
      <div className="content content--main">
        <h1>The Bright Future of web 3.0?</h1>
        <div className="box">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="btn btn--main">read more</button>
        </div>
      </div>
    </section>
  );
};

export default Content;
