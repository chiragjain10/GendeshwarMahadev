import React, { useState } from "react";

const CTASection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission logic here
    console.log("Email submitted:", email);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-yellow-500 font-semibold">WAYS WE CAN HELP</p>
          <h4 className="text-3xl font-bold mt-2">Angels Ready To Help</h4>
        </div>

        {/* CTA Row */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 relative">
          {/* Hotline */}
          <div className="bg-yellow-500 text-white rounded-3xl flex-1 flex items-center p-6 relative overflow-hidden">
            <img
              src="assets/img/cta/1.png"
              alt="cta"
              className="hidden lg:block absolute right-0 top-0 h-full object-contain"
            />
            <div className="z-10">
              <span className="block font-semibold">Need Help, Call Our HOTLINE!</span>
              <h4 className="text-2xl mt-2 font-bold">+1 212-683-9756</h4>
            </div>
          </div>

          {/* Separator */}
          <span className="hidden lg:flex text-2xl font-bold text-gray-500">or</span>

          {/* Newsletter */}
          <div className="bg-yellow-500 text-white rounded-3xl flex-1 flex items-center p-6 relative overflow-hidden">
            <div className="z-10 w-full">
              <form onSubmit={handleSubmit} className="w-full">
                <label className="block mb-2">Temple Newsletter</label>
                <div className="flex">
                  <input
                    type="text"
                    className="flex-1 rounded-l-3xl px-4 py-2 text-gray-800"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-gray-800 px-6 rounded-r-3xl flex items-center justify-center"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <img
              src="assets/img/cta/2.png"
              alt="cta"
              className="hidden lg:block absolute right-0 top-0 h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
