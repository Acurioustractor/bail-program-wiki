import { TinaCMS } from 'tinacms'
import { Suspense } from 'react'

const AdminPage = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Suspense fallback={<div>Loading TinaCMS...</div>}>
        <TinaCMS />
      </Suspense>
    </div>
  )
}

export default AdminPage