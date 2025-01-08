import { faBookAtlas } from '@fortawesome/free-solid-svg-icons'
import { ArrowPathIcon, ClockIcon, ComputerDesktopIcon, PhoneIcon,ArrowRightIcon, BuildingLibraryIcon, BuildingOfficeIcon, UserIcon, BuildingStorefrontIcon, BuildingOffice2Icon, BookOpenIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Online Interview',
   
    icon: PhoneIcon,
  },
  {
    name: 'CV Search',
    
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Display Jobs',
    
    icon: ArrowPathIcon,
  },
 
]
const features1= [
    {
      name: 'Create Account',
     
      icon: BookOpenIcon,
    },
    {
      name: 'CV/Resume Upload',
      
      icon: ComputerDesktopIcon,
    },
    {
      name: 'Find your Job',
      
      icon: BuildingOffice2Icon,
    },
    {
        name: 'Apply Them',
        
        icon: UserIcon,
      },
   
  ]

export default function Services() {
  return (
    <>
    <div className="bg-gray-100 py-10 sm:py-12 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Best Services For You
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Know your really worth and find the job that qualify your life.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl ">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16   ">
            {features.map((feature) => (
              <div key={feature.name} className=" relative border text-center p-5 bg-white">
                <dt className="text-base font-semibold leading-7 text-gray-900">
  <div className="flex mx-auto top-5 flex h-16 w-20 items-center justify-center rounded-lg bg-green-600">
    <feature.icon aria-hidden="true" className="h-10 w-10 text-white" />
  </div>  
  {/* Centered arrow below the icon */}
  <div className="flex justify-center mt-4">
    <ArrowRightIcon className="h-6 w-6 text-green-600" />
  </div>
  {feature.name}
</dt>

               
                <dd className="mt-2 text-base leading-7 text-gray-600">If success is a process with a number of defined steps.</dd>
              
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
     <div className="bg-white-100 py-10 sm:py-12 ">
     <div className="mx-auto max-w-7xl px-6 lg:px-8">
       <div className="mx-auto max-w-2xl lg:text-center">
         <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
         Our Working Process
         </p>
         <p className="mt-6 text-lg leading-8 text-gray-600">
         Know your really worth and find the job that qualify your life.
         </p>
       </div>
       <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl ">
         <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16   ">
           {features1.map((feature) => (
             <div key={feature.name} className=" relative  text-center p-5 bg-white">
               <dt className="text-base font-semibold leading-7 text-gray-900">
  <div className="flex mx-auto top-5 flex h-16 w-20 items-center justify-center rounded-lg bg-green-600">
    <feature.icon aria-hidden="true" className="h-10 w-10 text-white" />
  </div>  
  {/* Centered arrow below the icon */}
  <div className="flex justify-center mt-4">
    <ArrowRightIcon className="h-6 w-6 text-green-600" />
  </div>
  {feature.name}
</dt>

              
               <dd className="mt-2 text-base leading-7 text-gray-600">Search all the open positions on the web that suits you..</dd>
             </div>
             
           ))}
         </dl>
         

       </div>
     </div>
   </div>
   </>
  )
}