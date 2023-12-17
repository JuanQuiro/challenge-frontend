function Footer() {
  return (
    <>
      <footer className="footer  justify-center lg:gap-96 p-10 text-base-content">
        <nav className="lg:grid hidden">
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
        <nav className="hidden lg:grid">
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
        <div className="sm:w-[375px]  lg:hidden w-[250px] h-60 px-4 flex-col justify-start items-start gap-8 inline-flex">
          <div className="self-stretch justify-start items-start gap-8 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch text-gray-900 text-sm font-semibold leading-tight">
                Product
              </div>
              <div className="self-stretch h-[204px] flex-col justify-start items-start gap-3 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="text-violet-700 text-base font-semibold  leading-normal">
                      Overview
                    </div>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="text-violet-700 text-base font-semibold  leading-normal">
                      Features
                    </div>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="text-violet-700 text-base font-semibold  leading-normal">
                      Solutions
                    </div>
                  </div>
                  <div className="px-2 py-0.5 rounded-full border border-violet-500 justify-start items-center flex">
                    <div className="text-center text-violet-700 text-xs font-medium  leading-[18px]">
                      New
                    </div>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="text-violet-700 text-base font-semibold  leading-normal">
                      Tutorials
                    </div>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="text-violet-700 text-base font-semibold leading-normal">
                      Pricing
                    </div>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="text-violet-700 text-base font-semibold leading-normal">
                      Releases
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch text-gray-900 text-sm font-semibold  leading-tight">
                Company
              </div>
              <div className="self-stretch h-[204px] flex-col justify-start items-start gap-3 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="text-violet-700 text-base font-semibold leading-normal">
                      About us
                    </div>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="text-violet-700 text-base font-semibold  leading-normal">
                      Careers
                    </div>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="text-violet-700 text-base font-semibold leading-normal">
                      Press
                    </div>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="text-violet-700 text-base font-semibold  leading-normal">
                      News
                    </div>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="text-violet-700 text-base font-semibold  leading-normal">
                      Media kit
                    </div>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="text-violet-700 text-base font-semibold  leading-normal">
                      Contact
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className=" order-first lg:order-last ml-0 lg:ml-0 mr-0  justify-center lg:justify-end">
          <header className="footer-title text-base text-black opacity-80">
            Get the app
          </header>
          <div className=" grid grid-cols-2 lg:grid-cols-1  gap-2">
            <a>
              <img src="MobileBadge.svg" />
            </a>
            <a>
              <img src="MobileBadge2.svg" />
            </a>
          </div>
        </nav>
      </footer>
      <div className="border-t-1 mx-10 sm:mx-32"></div>
      <footer className="footer px-5 sm:px-32 py-4">
        <aside className="items-center grid-flow-col">
          <img
            src="/Logo.png"
            width={50}
            height={50}
            alt="Picture of the author"
          />
          <p className="font-bold text-base pl-1  pr-7 text-black">
            Untitled UI
          </p>
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
