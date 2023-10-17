export function ButtonContent({ dataLoading, className, loading, ...props }) {
  return (
    <span className={className} {...props}>
      {loading ? dataLoading : props.children}
    </span>
  )
}
