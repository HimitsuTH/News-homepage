import React from "react";

const New = () => {
  return (
    <aside className="new-container">
      <h1 className="text-orange">New</h1>
      <div className="container">
      <div className="box">
          <h2><a href="#" className="link link--news">Hydrogen Vs Electric Cars</a></h2>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <div className="box box--midle">
          <h2><a href="#" className="link link--news">The Downsides of AI Artistry</a></h2>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div className="box">
          <h2><a href="#" className="link link--news">Is VC Funding Drying Up?</a></h2>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default New;
