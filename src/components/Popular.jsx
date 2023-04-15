import React from "react";
import retro_pcs from "../assets/images/image-retro-pcs.jpg";
import top_laptops from "../assets/images/image-top-laptops.jpg";
import gaming_growth from "../assets/images/image-gaming-growth.jpg";

const Popular = () => {
  return (
    <section className="popular">
      <div className="box box--popular">
        <div className="img-container">
          <img src={retro_pcs} alt="img-1" />
        </div>
        <div className="content content--popular">
          <h1>01</h1>
          <h2><a href="#" className="link">Reviving Retro PCs</a></h2>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>

      <div className="box box--popular">
        <div className="img-container">
          <img src={top_laptops} alt="img-2" />
        </div>
        <div className="content content--popular">
          <h1>02</h1>
          <h2><a href="#" className="link">Top 10 Laptops of 2022</a></h2>
          <p> Our best picks for various needs and budgets.</p>
        </div>
      </div>

      <div className="box box--popular">
        <div className="img-container">
          <img src={gaming_growth} alt="img-3" />
        </div>
        <div className="content content--popular">
          <h1>03</h1>
          <h2><a href="#" className="link">The Growth of Gaming</a></h2>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </section>
  );
};

export default Popular;
