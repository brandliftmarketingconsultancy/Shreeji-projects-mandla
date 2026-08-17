import { useEffect } from 'react'
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
import { site } from './data/site.js'

export default function App() {
  // Keep <title> / meta description in sync with data/site.js so it stays the
  // single source of truth (index.html carries a static fallback for pre-JS crawlers).
  useEffect(() => {
    document.title = site.metaTitle
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', site.metaDescription)
  }, [])

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
        {/* Add further pages (Blogs, Certifications) here,
            reusing the same section/ui components. */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  )
}