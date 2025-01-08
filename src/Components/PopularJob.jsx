import { ArrowRightIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { icon } from "leaflet";
const features = [
    {
      name: 'Facebook',
      description: 'Website Designer/Developer',
      location: 'USA',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
    },
    {
      name: 'Google',
      description: 'Marketing Director',
      location: 'USA',
      icon: 'https://www.svgrepo.com/show/303108/google-icon-logo.svg',
    },
    {
      name: 'Android',
      description: 'Application Developer',
      location: 'USA',
    icon:'https://www.svgrepo.com/show/452155/android.svg',
    },
    {
      name: 'Lenovo',
      description: 'Senior Product Designer',
      location: 'USA',
      icon:'https://www.svgrepo.com/show/330827/lenovo.svg',
    },
    {
      name: 'Spotify',
      description: 'Website Designer/Developer',
      location: 'USA',
      icon: 'https://www.svgrepo.com/show/303356/spotify-logo.svg',
    },
    {
      name: 'LinkedIn',
      description: 'PHP Developer',
      location: 'USA',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    },
  ];
  
  export default function Features() {
    return (
        <>
      <div className="bg-gray-50 py-10 sm:py-12 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center ">
            <p className="mt-2 text-3xl font-semibold tracking-tight text-black-400 sm:text-4xl">
              Popular Jobs
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30,000+ companies worldwide.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl sm:mt-10 lg:mt-14 lg:max-w-4xl ">
            <dl className="grid max-w-xl grid-cols-1 gap-x-5 gap-y-2 lg:max-w-none lg:grid-cols-3 lg:gap-y-5">
              {features.map((feature) => (
                <div key={feature.name} className="relative border p-4 bg-white">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 ml-4 flex h-16 w-20 items-center justify-center rounded-lg bg-green-100">
                      <img src={feature.icon} alt={`${feature.name} logo`} className="h-10 w-10" />
                    </div>
                    <div className="flex mx-auto pl-20">{feature.name}</div>
                    <div className="text-base leading-7 text-gray-400 pl-20">2 days ago</div>
                  </dt>
                  <dd className="m-3 text-base font-semibold leading-7">
                    {feature.description}
                    <div className="flex items-center space-x-2">
                    <MapPinIcon className="h-5 w-5 text-black-400" />
                    <span className="text-black-700">{feature.location}</span></div><br/>
                      {/* Half-filled slider */}
                      <div className="h-1 w-full bg-gray-300 rounded-fusvgll overflow-hidden ml-2">
                        <div className="h-full w-1/2 bg-green-500" />
                      </div>
                      
                    <br />
                    <div className="flex items-center  ">
                    21 Applied<span className="text-green-700"> of 40 vacancy</span><br/></div>
                    {/* <div className="flex items-center text-green-600 space-x-2">
                    Read More<br/>
                    
                    <ArrowRightIcon className="h-5 w-5 text-green-600" /></div> */}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
    </div>
     </div>
                    <section className=" w-full  relative ">
                    <img src="https://jobstack-shreethemes.vercel.app/static/media/bg2.bfccecc679de287507db.jpg" className=" bg-top bg-no-repeat bg-cover"/>
                    <div className=" overlay1 ">
                        <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-4 md:text-[26px] text-2xl text-white font-medium">
                        Get the job that's right for you</h3>
                        <p className="text-white max-w-xl mx-auto">
                        Search all the open positions on the web. Get your own personalized salary estimate.
                        Read reviews on over 30000+ companies worldwide.</p>
                        
                        
                        
                            </div>
                            </div>
                            </section>
                            </>
)};
  