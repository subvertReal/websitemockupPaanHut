// import bootstrap
import { useState } from 'react'
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
  integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
  crossorigin="anonymous"
/>
import 'bootstrap/dist/css/bootstrap.min.css';

// global css
import '../src/styles/App.css'

// component imports
import Head from '../components/Head.jsx'
import FirstPara from '../components/FirstPara.jsx'
import SecPara from '../components/SecPara.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <script src="http://localhost:8097"></script>

      <Head />


      <FirstPara />

      <SecPara />

    </div>



  )
}

export default App
