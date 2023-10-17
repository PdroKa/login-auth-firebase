import { useState } from 'react'
import {
  LuBarChart,
  LuBarChartBig,
  LuChevronDown,
  LuLayoutDashboard,
  LuSettings,
  LuUser,
  LuUsers,
} from 'react-icons/lu'
import { MdClose, MdMenu, MdSearch } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import { tv } from 'tailwind-variants'
import { Button } from '../Button'
import { ButtonContent } from '../Button/ButtonContent'

function Sidebar() {
  const location = useLocation().pathname

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const colors = {
    colorFocus:
      'group w-full flex items-center bg-indigo-500 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-200 transition-all duration-200 hover:bg-indigo-500 hover:text-white',
    colorPadrao:
      'group w-full flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-400 transition-all duration-200 hover:bg-indigo-500 hover:text-white',
  }
  return (
    <aside
      className={`layout-aside ease-in-ou h-screen border-r border-zinc-400 bg-slate-800 pl-5 transition-[position] duration-1000 md:static md:flex md:w-64 md:flex-col ${
        sidebarOpen
          ? 'fixed  h-screen border-r border-zinc-400 bg-slate-800 pl-5'
          : 'fixed -left-96 z-10 h-screen border-r border-zinc-400 bg-slate-800 pl-5 duration-[50000ms]'
      }`}
    >
      <div>
        <div className="flex flex-grow flex-col pt-5">
          <header className="flex flex-shrink-0 items-center px-4">
            <button
              onClick={() => {
                setSidebarOpen(!sidebarOpen)
              }}
              className="md:hidden"
            >
              {sidebarOpen ? (
                <MdClose className="absolute right-3 top-6 h-10 w-12 text-xs text-white md:hidden" />
              ) : (
                <MdMenu className="absolute left-96 top-6 h-10 w-12 text-xs text-white md:hidden" />
              )}
            </button>
            <Link to={'/'}>
              <h1 className="text-3xl text-white">Logo</h1>
            </Link>
          </header>

          <div className="mt-8 px-4">
            <label htmlFor="search" className="sr-only">
              {' '}
              Search{' '}
            </label>
            <div className="group relative">
              <input
                type="search"
                name=""
                id="search"
                className="peer block w-full rounded-lg border-none px-6 py-2 indent-2 outline-none ring-4 transition-all focus:ring-indigo-500 sm:text-sm"
                placeholder="Search"
              />
              <MdSearch className="pointer-events-none absolute left-2 top-[7px] text-2xl font-bold text-gray-300 hover:text-3xl peer-focus:text-indigo-500" />
            </div>
          </div>

          <div className="mt-6 px-4">
            <hr className="border-gray-200" />
          </div>

          <div className="mt-6 flex flex-1 flex-col px-3">
            <div className="space-y-4">
              <nav className="flex-1 space-y-2">
                <Link to={'/'}>
                  <Button.Root
                    flex="start"
                    link={location === '/' ? 'hover' : 'default'}
                  >
                    <Button.Icon className={'mr-4'} Icon={LuLayoutDashboard} />
                    <Button.Content>Dashboard</Button.Content>
                  </Button.Root>
                </Link>

                <Button.Root flex="start" link={'default'}>
                  <Button.Icon Icon={LuBarChartBig} />
                  <Button.Content className={'ml-4'}>Tickets</Button.Content>
                </Button.Root>

                <Button.Root flex="start" link={'default'}>
                  <Button.Icon Icon={LuUser} />
                  <Button.Content className={'ml-4'}>Agents</Button.Content>
                </Button.Root>

                <Button.Root flex="start" link={'default'}>
                  <Button.Icon Icon={LuUsers} />
                  <ButtonContent className="ml-4 mr-11">
                    Customers
                  </ButtonContent>
                  <Button.Icon Icon={LuChevronDown} />
                </Button.Root>
              </nav>

              <hr className="border-gray-200" />

              <nav className="flex-1 space-y-2 ">
                <Link to={'/update-profile'}>
                  <Button.Root
                    flex="start"
                    link={location === '/update-profile' ? 'hover' : 'default'}
                  >
                    <Button.Icon Icon={LuSettings} />
                    <Button.Content className={'ml-4'}>Settings</Button.Content>
                  </Button.Root>
                </Link>
              </nav>
            </div>

            <div className="mt-20 pb-4">
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-gray-300 transition-all hover:bg-indigo-600 hover:text-white"
              >
                <img
                  className="mr-3 h-6 w-6 flex-shrink-0 rounded-full object-cover"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/vertical-menu/2/avatar-male.png"
                  alt=""
                />
                Kauan Reis
                <svg
                  className="ml-auto h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
