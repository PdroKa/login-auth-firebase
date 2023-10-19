import { tv } from 'tailwind-variants'

const buttonRoot = tv({
  base: 'flex flex-row items-center rounded-md text-base outline-none transition-all duration-500 focus:outline-none  font-medium',
  variants: {
    size: {
      md: 'max-w-md py-2 text-base md:text-lg w-full',
      sm: 'max-w-sm w-full py-3',
      xs: 'max-w-xs w-full py-3',
      full: 'w-full py-3',
    },
    flex: {
      start: 'justify-start',
      center: 'justify-center ',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
    },

    link: {
      default:
        'w-full flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-400 transition-all duration-200 hover:bg-indigo-600 hover:text-white',
      hover:
        'w-full flex items-center bg-indigo-500 rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-100 transition-all duration-200 hover:text-white',
    },

    bg: {
      default:
        'transparent text-zinc-300 border border-zinc-300 hover:border-zinc-500 hover:text-zinc-500',
      primary:
        'bg-indigo-500 text-white hover:bg-indigo-600 focus:bg-indigo-600',
    },
    loading: { true: 'pointer-events-none' },
  },
  defaultVariants: {
    color: 'default',
    size: 'full',
    loading: false,
    flex: 'center',
  },
})

export function ButtonRoot({
  loading,
  flex,
  link,
  className,
  bg,
  size,
  ...props
}) {
  return (
    <>
      <button
        {...props}
        className={buttonRoot({ loading, flex, link, className, bg, size })}
      ></button>
    </>
  )
}
