function Footer() {
  return (
    <>
      <footer className="footer p-10 text-base-content">
        <nav>
          <header className="footer-title text-black opacity-80">
            Product
          </header>
          <a className="link link-hover text-[#6941C6]">Owerviuw</a>
          <a className="link link-hover text-[#6941C6]">Features</a>
          <a className="link link-hover text-[#6941C6]">
            Solutions
            <span className="badge badge-primary ml-2 badge-outline">New</span>
          </a>
          <a className="link link-hover text-[#6941C6]">Tutorials</a>
          <a className="link link-hover text-[#6941C6]">Pricing</a>
          <a className="link link-hover text-[#6941C6]">Releases</a>
        </nav>
        <nav>
          <header className="footer-title text-black opacity-80">
            Company
          </header>
          <a className="link link-hover text-[#6941C6]">About us</a>
          <a className="link link-hover text-[#6941C6]">Careers</a>
          <a className="link link-hover text-[#6941C6]">Press</a>
          <a className="link link-hover text-[#6941C6]">News</a>
          <a className="link link-hover text-[#6941C6]">Media kit</a>
          <a className="link link-hover text-[#6941C6]">Contact</a>
        </nav>
        <nav className="items-end ml-96 justify-end">
          <header className="footer-title text-black opacity-80">
            Get the app
          </header>
          <div className=" grid gap-2">
            <a>
              <img src="MobileBadge.svg" />
            </a>
            <a>
              <img src="MobileBadge2.svg" />
            </a>
          </div>
        </nav>
      </footer>
      <div className="border-t-1 mx-32"></div>
      <footer className="footer px-32 py-4">
        <aside className="items-center grid-flow-col">
          <img
            src="/Logo.png"
            width={50}
            height={50}
            alt="Picture of the author"
          />
          <p className="font-bold pl-1  pr-7 text-black">Untitled UI</p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            © 2077 Untitled UI. All rights reserved.
          </div>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
