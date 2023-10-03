import { useState } from 'react'
import { MdClose, MdMenu, MdSearch } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Sidebar() {
  const [buttonSelected, setbuttonSelected] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const colors = {
    colorFocus:
      'group w-full flex items-center bg-indigo-500 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-indigo-500 hover:text-white',
    colorPadrao:
      'group w-full flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-indigo-500 hover:text-white',
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
            <Link to={'/'} onClick={() => setbuttonSelected('/dashboard')}>
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
                <Link
                  to={'/'}
                  onClick={() => setbuttonSelected('/dashboard')}
                  className={
                    buttonSelected === '/dashboard'
                      ? colors.colorFocus
                      : colors.colorPadrao
                  }
                >
                  <svg
                    className="mr-4 h-5 w-5 flex-shrink-0 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Dashboard
                </Link>

                <a
                  href="#"
                  className="group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-indigo-500 hover:text-white"
                >
                  <svg
                    className="mr-4 h-5 w-5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Tickets
                </a>

                <a
                  href="#"
                  className="group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-indigo-500 hover:text-white"
                >
                  <svg
                    className="mr-4 h-5 w-5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Agents
                </a>

                <a
                  href="#"
                  className="group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-400 transition-all duration-200 hover:bg-indigo-500 hover:text-white"
                >
                  <svg
                    className="mr-4 h-5 w-5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  Customers
                  <svg
                    className="ml-auto h-6 w-4 text-gray-400 group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </nav>

              <hr className="border-gray-200" />

              <nav className="flex-1 space-y-2">
                <Link
                  to={'/update-profile'}
                  onClick={() => setbuttonSelected('/update-profile')}
                  className={
                    buttonSelected === '/update-profile'
                      ? colors.colorFocus
                      : colors.colorPadrao
                  }
                >
                  <svg
                    className="mr-4 h-5 w-5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Settings
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
