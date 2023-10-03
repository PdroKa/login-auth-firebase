import Content from '../Content'
import MainHeader from '../MainHeader'
import Sidebar from '../Sidebar'

function Layout({ children }) {
  return (
    <div className="grid-layout">
      <MainHeader />
      <Content>{children}</Content>
      <Sidebar />
    </div>
  )
}
export default Layout
