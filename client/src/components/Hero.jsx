import React from "react";

function Hero() {
  return (
    <div
      className="py-16"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-5xl text-white font-semibold">
          Are you ready? Enjoy your trip!
        </h1>
        <p className="text-white text-2xl mt-4">เที่ยวไหนดี ?</p>
      </div>
    </div>
  );
}

export default Hero;

