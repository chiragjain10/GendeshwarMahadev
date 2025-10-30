import React from "react";

const Footer = () => {
  const recentPosts = [
    {
      img: "assets/img/blog/sm/1.jpg",
      date: "May 20, 2024",
      title: "Temple companies are being so transparent with their work",
      link: "blog-details.html",
    },
    {
      img: "assets/img/blog/sm/2.jpg",
      date: "May 20, 2024",
      title: "Testimony love offering so blessed",
      link: "blog-details.html",
    },
    {
      img: "assets/img/blog/sm/3.jpg",
      date: "May 20, 2024",
      title: "As we've all discovered by now, the world can change",
      link: "blog-details.html",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16">
      {/* Middle Footer */}
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 gap-8">
          {/* About Us */}
          <div className="lg:col-span-4">
            <h5 className="text-xl font-semibold mb-4">About Us</h5>
            <p className="mb-4 text-gray-300">
              You need to be sure there isn’t anything embarrassing hidden in the middle of text.
            </p>
            <div className="flex items-center mb-2 gap-3">
              <i className="far fa-phone text-yellow-500"></i>
              <span>987-987-930-302</span>
            </div>
            <div className="flex items-center mb-2 gap-3">
              <i className="far fa-envelope text-yellow-500"></i>
              <span>info@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="far fa-map-marker text-yellow-500"></i>
              <span>14/A, Poor Street City Tower, New York USA</span>
            </div>
          </div>

          {/* Information */}
          <div className="lg:col-span-2">
            <h5 className="text-xl font-semibold mb-4">Information</h5>
            <ul className="space-y-2 text-gray-300">
              {["Puja", "Services", "Temple", "Holis", "Volunteers", "Donation"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
                  <i className="fas fa-om"></i>
                  <a href={`${item.toLowerCase()}.html`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Others */}
          <div className="lg:col-span-2">
            <h5 className="text-xl font-semibold mb-4">Others</h5>
            <ul className="space-y-2 text-gray-300">
              {["Shop", "Checkout", "Donation", "Contact Us", "Blog"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
                  <i className="fas fa-om"></i>
                  <a href={`${item.toLowerCase().replace(/\s/g, "-")}.html`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="lg:col-span-4 hidden lg:block">
            <h5 className="text-xl font-semibold mb-4">Recent Posts</h5>
            {recentPosts.map((post, index) => (
              <article key={index} className="flex mb-4">
                <a href={post.link}>
                  <img src={post.img} alt={post.title} className="w-16 h-16 object-cover rounded" />
                </a>
                <div className="ml-4 text-gray-300">
                  <a href={post.link} className="text-sm flex items-center gap-1 mb-1">
                    <i className="far fa-calendar"></i> {post.date}
                  </a>
                  <h6 className="text-white hover:text-yellow-500">
                    <a href={post.link}>{post.title}</a>
                  </h6>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400">
            &copy; Maharatri - <a href="#" className="text-yellow-500">2024</a>
          </p>
          <img src="assets/img/logo.png" alt="logo" className="h-10 my-3 md:my-0" />
          <ul className="flex gap-4 text-gray-400">
            {["facebook-f", "linkedin-in", "twitter", "youtube"].map((icon, i) => (
              <li key={i}>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  <i className={`fab fa-${icon}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
