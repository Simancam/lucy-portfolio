"use client";

import StaggeredMenu from "./StaggeredMenu";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Services", ariaLabel: "View our services", link: "/services" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "Instagram", link: "https://twitter.com" },
  { label: "WhatsApp", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

export default function Menu() {
  return (
    <div style={{ height: "100vh" }}>
      <StaggeredMenu
        isFixed={true}
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={["#B19EEF", "#8d47f5"]}
        logoUrl="/path-to-your-logo.svg"
        accentColor="#8d47f5"
      />
    </div>
  );
}
