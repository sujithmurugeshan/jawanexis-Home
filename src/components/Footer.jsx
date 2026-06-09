import { footerColumns } from "../pages/homeData.jsx";

function Footer() {
  return (
    <footer id="contact-us" className="bg-black py-14 text-white/70">
      <div className="shell grid gap-10 md:grid-cols-3 lg:grid-cols-6">
        {footerColumns.map(([title, ...items]) => (
          <div key={title}>
            <h3 className="text-sm font-extrabold text-white">{title}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {items.map((item) => (
                <li key={item}>
                  <a href="#home" className="hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
