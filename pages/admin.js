import { TinaEditProvider } from 'tinacms/dist/edit-state'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const AdminRedirect = () => {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // This creates the proper TinaCMS edit mode
    if (typeof window !== 'undefined') {
      window.location.href = `${window.location.origin}/?edit=true`
    }
  }, [])

  if (!isMounted) {
    return (
      <div style={{ 
        padding: '2rem', 
        textAlign: 'center',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <h1>Loading TinaCMS...</h1>
      </div>
    )
  }

  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <h1>🎨 TinaCMS Admin</h1>
      <p>You should be redirected to the TinaCMS editor...</p>
      <div style={{ marginTop: '2rem' }}>
        <p><strong>To edit content:</strong></p>
        <ol style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto' }}>
          <li>Go to your main site: <a href="/?edit=true" style={{ color: '#8B4513' }}>Open Editor</a></li>
          <li>You'll see an "Edit with TinaCMS" button</li>
          <li>Click it to start editing</li>
          <li>Make your changes and save</li>
          <li>Changes auto-deploy to your live site</li>
        </ol>
      </div>
      <div style={{ marginTop: '2rem', padding: '1rem', background: '#f0f8ff', borderRadius: '8px' }}>
        <p><strong>📱 Alternative:</strong></p>
        <p>Use our <a href="/editor" style={{ color: '#8B4513' }}>Custom Editor</a> for quick content changes</p>
      </div>
    </div>
  )
}

export default AdminRedirect