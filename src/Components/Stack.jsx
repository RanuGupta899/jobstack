import { ArrowPathIcon, ClockIcon, ComputerDesktopIcon, PhoneIcon,ArrowRightIcon, UserGroupIcon, BriefcaseIcon, UserPlusIcon, UserMinusIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: '24/7 Support',
    description:
      'Many desktop publishing now use and a search for job',
    icon: PhoneIcon,
  },
  {
    name: 'Tech and Startup Jobs',
    description:
      'Many desktop publishing now use and a search for job',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Quick and Easy',
    description:
      'Many desktop publishing now use and a search for job.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Save Time',
    description:
      'Many desktop publishing now use and a search for job.',
    icon: ClockIcon,
  },
  {
    name: 'Apply with confidence',
    description:
      'Many desktop publishing now use and a search for job.',
    icon: UserMinusIcon,
  },
  {
    name: 'Reduce Hiring Bias',
    description:
      'Many desktop publishing now use and a search for job.',
    icon: UserPlusIcon,
  },
  {
    name: 'Proactive Employers',
    description:
      'Many desktop publishing now use and a search for job.',
    icon: BriefcaseIcon,
  },
  {
    name: 'NO Missed Opportunity',
    description:
      'Many desktop publishing now use and a search for job.',
    icon: UserGroupIcon,
  },
]

export default function Stack() {
  return (
    <div className="bg-gray-50 py-10 sm:py-12 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Here's why you'll love it Jobstack
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
         Search all the open position on the web.Get your Own personalized salary
         estimate.Read reviews on over 30000+ company worldwide
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl ">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16  ">
            {features.map((feature) => (
              <div key={feature.name} className=" relative border text-center p-4">
                <dt className="text-base font-semibold leading-7 text-gray-900  ">
                  <div className="mx-auto top-5 flex h-16 w-20 items-center justify-center rounded-lg bg-green-100">
                    <feature.icon aria-hidden="true" className="h-10 w-10 text-green-600" />
                  </div>
                  {feature.name}
                </dt>
               
                <dd className="mt-4 text-base leading-7 text-gray-600">{feature.description}<br/><span className=' mt-2 text-green-600'>Read More 
                  
                  </span></dd>
              
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}