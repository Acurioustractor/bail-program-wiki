import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function AdminPage() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to the TinaCMS admin interface
    router.push('/admin/index.html')
  }, [router])

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Redirecting to TinaCMS Admin...</h1>
      <p>If you're not redirected automatically, <a href="/admin/index.html">click here</a></p>
    </div>
  )
}