import { tv } from 'tailwind-variants'

const icon = tv({
  base: 'mx-1',
  variants: {
    size: { xl: 'text-xl', md: 'text-base', xs: 'text-xs' },

    color: { primary: 'text-indigo-500 hover:text-indigo-600' },
    animate: { ping: 'animate-ping', spin: 'animate-spin' },
  },
  defaultVariants: { size: 'xl' },
})

export function ButtonIcon({ Icon, className, size, animate, color }) {
  return (
    <span>
      <Icon className={icon({ className, size, animate, color })} />
    </span>
  )
}
