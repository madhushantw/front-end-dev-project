import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from './Logo'

const navigation = [
  { name: 'SERVICES', href: '#', current: true },
  { name: 'ABOUT US', href: '#', current: false },
  { name: 'CONTACT US', href: '#', current: false },
  { name: 'CAREERS', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className=" bg-primary">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              
              <div className="flex flex-1 items-center sm:items-stretch sm:justify-start font-medium text-2xl text-accent-white">
                <div className="flex flex-shrink-0 items-center">
                <Logo/>

                </div>
              </div>

              <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='bg-gray-900 text-white text-sm'
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                
            </div>
          </div>
        <div className="absolute top-0 right-0 flex items-center sm:hidden">
            <Disclosure.Button className="relative inline-flex z-20 items-center justify-center rounded-md p-2 text-white outline-none ring-0">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {open ? (
                    <XMarkIcon className="block h-10 w-10 text-text" aria-hidden="true" />
                ) : (
                    <Bars3Icon className="block h-10 w-10" aria-hidden="true" />
                )}
            </Disclosure.Button>
        </div>
          <Disclosure.Panel className="sm:hidden bg-accent-white absolute top-0 bottom-0 left-0 right-0 z-10">
            <div className="space-y-8 px-2 pb-3 pt-4">
              
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className=
                   'text-  hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>

        </>
      )}
    </Disclosure>
  )
}
