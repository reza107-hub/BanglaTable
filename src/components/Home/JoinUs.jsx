import React from "react";

const JoinUs = () => {
  return (
    <div className="hero lg:w-[80%] mx-auto">
      <div className="hero-content flex-col lg:gap-16 lg:flex-row-reverse bg-[#FFFFFF]  rounded-lg shadow-lg lg:px-20">
        <img
          src="https://i.ibb.co/qDtxm34/image-2.png"
          className="lg:w-[490px] w-full"
        />
        <div>
            <p className="text-[#D74C22] mb-3">JOIN US</p>
          <h1 className="lg:text-5xl text-xl font-semibold text-[#0D0D0D] mb-7">Let's start sharing  your awesome  recipes</h1>
          
          <button className="btn-main">Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
