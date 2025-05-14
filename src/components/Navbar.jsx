import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveHash } from "../slice/navSlice";
import logoDark from "../assets/logo-betabadri-dark.png";
import Button from "./Button";

function Navbar() {
  const dispatch = useDispatch();
  const activeHash = useSelector((state) => state.navigation.activeHash);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#solution", label: "Solution" },
    { href: "#vision", label: "Vision" },
    { href: "#contact", label: "Contact" },
  ];

  // Scroll spy menggunakan IntersectionObserver
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const sections = sectionIds.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            dispatch(setActiveHash(`#${entry.target.id}`));
          }
        });
      },
      {
        threshold: 0.6, // 60% dari section terlihat
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [dispatch]);

  // Dinamis warna teks dan background
  const isHome = activeHash === "#home";
  const bgColor = isHome ? "bg-transparent" : "bg-black/80";

  return (
    <div className={`fixed top-0 left-0 w-full z-50 px-6 py-1 transition-all duration-300 ${bgColor} flex items-center justify-between`}>
      <img src={logoDark} alt="Beta Badri Logo" width={80} height={80} />
      <nav className={`space-x-16 font-normal text-white`}>
        {navItems.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`hover:text-[#B700A5] transition ${activeHash === href ? "text-[#B700A5] font-semibold" : ""}`}>
            {label}
          </a>
        ))}
        <Button>IN</Button>
      </nav>
    </div>
  );
}

export default Navbar;
