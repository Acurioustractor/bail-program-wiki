export default function AdminPage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🎨 TinaCMS Admin</h1>
      <div style={{ marginTop: '2rem', padding: '1rem', background: '#f0f8ff', borderRadius: '8px' }}>
        <h2>To set up TinaCMS Cloud editing:</h2>
        <ol style={{ textAlign: 'left', maxWidth: '600px', margin: '1rem auto' }}>
          <li>Go to <a href="https://app.tina.io/projects/5c9f979e-f06b-4cd5-87b7-16ed33d60dda" target="_blank" style={{ color: '#8B4513' }}>your TinaCMS project</a></li>
          <li>Wait for the schema to finish indexing (it's processing your GitHub changes)</li>
          <li>Once indexing is complete, you can edit content directly through the TinaCMS interface</li>
          <li>Changes will automatically deploy to your live site</li>
        </ol>
      </div>
      <div style={{ marginTop: '2rem', padding: '1rem', background: '#fff3cd', borderRadius: '8px' }}>
        <p><strong>Alternative:</strong> Use our <a href="/editor" style={{ color: '#8B4513' }}>Custom Editor</a> for immediate content editing</p>
      </div>
    </div>
  )
}