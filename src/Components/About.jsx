

import Header from "./Header";
import Footer from "./Footer"

export default function About() {
  return (
    <>
    <Header/>
    <div className="bg-white">
      <div className=" py-0 mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8  px-4  sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We Help To Get The Best Job And Find A Talent</h2>
          <p className=" text-gray-500">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
          </p>
          <li>Tempor erat elitr rebum at clita</li>
          <li>Aliqu diam amet diam et eos</li>
          <li>Clita duo justo magna dolore erat amet</li>
            <div className=" bg-success text-center text-white fw-semibold fs-5 w-25 m-4 py-2">Read More</div>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-4 sm:gap-6 lg:gap-8">
          <img
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            src="https://jobboard.websitelayout.net/img/content/about-02.jpg"
            className="rounded-lg bg-gray-100  row-span-2 h-100 mt-5"
          />
          <img
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            src="https://jobboard.websitelayout.net/img/content/about-03.jpg"
            className="rounded-lg bg-gray-100  h-100 "
          />
          
          <img
            alt="Side of walnut card tray with card groove and recessed card area."
            src="https://jobboard.websitelayout.net/img/content/about-01.jpg"
            className="rounded-lg bg-gray-100 row-span-2"
          />
         
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

