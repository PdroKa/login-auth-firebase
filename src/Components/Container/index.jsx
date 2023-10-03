export function Container({ children }) {
  return (
    <div className="flex h-full max-h-screen items-center justify-center bg-slate-900 font-sans">
      {children}
    </div>
  )
}
