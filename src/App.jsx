
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import AacBlocks from './pages/AacBlocks.jsx'
import FlyAshBricks from './pages/FlyAshBricks.jsx'
import PaverBlocks from './pages/PaverBlocks.jsx'
import FencingPole from './pages/FencingPole.jsx'
import CoverBlocks from './pages/CoverBlocks.jsx'
import Manufacturing from './pages/Manufacturing.jsx'
import ProjectsGallery from './pages/ProjectsGallery.jsx'
import TechnicalResources from './pages/TechnicalResources.jsx'
import DealerInquiry from './pages/DealerInquiry.jsx'
import ComingSoon from './pages/ComingSoon.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path="/aac-blocks" element={<AacBlocks />} />
        <Route path="/products/aac-blocks" element={<AacBlocks />} />
        <Route path="/products/fly-ash-bricks" element={<FlyAshBricks />} />
        <Route path="/products/paver-blocks" element={<PaverBlocks />} />
        <Route path="/products/fencing-pole" element={<FencingPole />} />
        <Route path="/products/cover-blocks" element={<CoverBlocks />} />

        <Route path="/manufacturing-process" element={<Manufacturing />} />
        <Route path="/manufacturing-plants" element={<Manufacturing />} />

        <Route path="/projects" element={<ProjectsGallery />} />
        <Route path="/resources" element={<TechnicalResources />} />
        <Route path="/dealer-inquiry" element={<DealerInquiry />} />

        <Route
          path="/products/precast-walls"
          element={<ComingSoon slug="precast-walls" />}
        />
        <Route
          path="/products/aac-jointing-mortar"
          element={<ComingSoon slug="aac-jointing-mortar" />}
        />
        <Route
          path="/products/ready-mix-plaster"
          element={<ComingSoon slug="ready-mix-plaster" />}
        />
        <Route
          path="/products/curve-stone"
          element={<ComingSoon slug="curve-stone" />}
        />

        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  )
}
