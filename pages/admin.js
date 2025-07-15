export default function AdminPage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🎨 TinaCMS Admin</h1>
      
      <div style={{ marginTop: '2rem', padding: '1rem', background: '#d4edda', borderRadius: '8px', border: '1px solid #c3e6cb' }}>
        <h2>✅ Step 3: Log in through your site</h2>
        <p style={{ margin: '1rem 0' }}>TinaCMS is now enabled on your site! Look for:</p>
        <ul style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto' }}>
          <li><strong>🖊️ Edit button</strong> on your main page (bottom right corner)</li>
          <li><strong>TinaCMS login prompt</strong> when you click edit</li>
          <li><strong>Visual editing mode</strong> after you log in</li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#f0f8ff', borderRadius: '8px' }}>
        <h3>🔐 To complete TinaCMS login:</h3>
        <ol style={{ textAlign: 'left', maxWidth: '600px', margin: '1rem auto' }}>
          <li>Go to your <a href="/" style={{ color: '#8B4513' }}>main site page</a></li>
          <li>Look for the TinaCMS edit button (should appear at bottom right)</li>
          <li>Click it and log in with your GitHub account</li>
          <li>Once logged in, you can edit content visually</li>
          <li>This will complete step 3 in your TinaCMS setup checklist</li>
        </ol>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#fff3cd', borderRadius: '8px' }}>
        <p><strong>Alternative:</strong> Use our <a href="/editor" style={{ color: '#8B4513' }}>Custom Editor</a> for immediate content editing</p>
      </div>
    </div>
  )
}