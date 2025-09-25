import { forwardRef, HTMLAttributes, ReactNode } from "react"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  onClick: () => void
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, onClick, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`${className} bg-blue-800 px-5 py-3 rounded-lg hover:cursor-pointer hover:bg-blue-800/30`}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = "Button"

export default Button
