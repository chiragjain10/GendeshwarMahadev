import React, { useState } from "react";
import { FaRupeeSign, FaHeart, FaUsers } from "react-icons/fa";

const DonationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    message: ""
  });

  const [donationStats, setDonationStats] = useState({
    totalDonors: 125, // starting number of donors
    totalAmount: 250000 // starting total amount collected in ₹
  });

  const suggestedAmounts = [101, 501, 1001, 5001];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSuggestedAmount = (amt) => {
    setFormData({ ...formData, amount: amt });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseInt(formData.amount) || 0;

    // Update stats
    setDonationStats(prev => ({
      totalDonors: prev.totalDonors + 1,
      totalAmount: prev.totalAmount + amount
    }));

    alert(`Thank you ${formData.name} for donating ₹${amount}`);

    // Reset form
    setFormData({ name: "", email: "", amount: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-red-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto bg-red-800/70 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-amber-400/30">
        <h1 className="text-4xl font-bold mb-4 text-amber-400 text-center">
          Make a Donation
        </h1>
        <p className="text-gray-200 text-center mb-8">
          Support Shiva Dham Temple and help us continue our spiritual services. Any contribution is greatly appreciated.
        </p>

        {/* Donation Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-center">
          <div>
            <div className="text-3xl font-bold text-amber-400 flex items-center justify-center gap-2">
              <FaUsers /> {donationStats.totalDonors}+
            </div>
            <p className="text-gray-300">Donors</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-400 flex items-center justify-center gap-2">
              <FaRupeeSign /> {donationStats.totalAmount.toLocaleString()}
            </div>
            <p className="text-gray-300">Collected</p>
          </div>
        </div>

        {/* Suggested Amounts */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {suggestedAmounts.map((amt) => (
            <button
              key={amt}
              onClick={() => handleSuggestedAmount(amt)}
              className={`px-6 py-3 rounded-xl font-bold transition duration-300 shadow-lg ${
                formData.amount == amt
                  ? "bg-amber-400 text-red-900"
                  : "bg-red-700 hover:bg-red-600 text-white"
              }`}
            >
              <FaRupeeSign className="inline mr-1" /> {amt}
            </button>
          ))}
        </div>

        {/* Donation Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="flex-1 px-4 py-3 rounded-xl border border-amber-400/30 bg-red-700/50 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="flex-1 px-4 py-3 rounded-xl border border-amber-400/30 bg-red-700/50 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Donation Amount"
            required
            className="w-full px-4 py-3 rounded-xl border border-amber-400/30 bg-red-700/50 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message (Optional)"
            className="w-full px-4 py-3 rounded-xl border border-amber-400/30 bg-red-700/50 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
            rows="4"
          />

          <button
            type="submit"
            className="w-full bg-amber-400 text-red-900 font-bold px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center gap-2 hover:scale-105"
          >
            <FaHeart className="text-lg" />
            Donate Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationPage;
