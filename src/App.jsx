/* Layout */

import './App.css'
import Layout from './Components/elements/Layout'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  )
}

export default App
