import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function AdminPage() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to the working custom editor
    router.push('/editor')
  }, [router])

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Redirecting to Content Editor...</h1>
      <p>If you're not redirected automatically, <a href="/editor">click here</a></p>
    </div>
  )
}