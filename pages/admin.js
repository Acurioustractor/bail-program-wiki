export default function AdminPage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🎨 TinaCMS Setup - Step 3</h1>
      
      <div style={{ marginTop: '2rem', padding: '1rem', background: '#fff3cd', borderRadius: '8px', border: '1px solid #ffeaa7' }}>
        <h2>📋 EXACT Steps to Complete "Log in through your site":</h2>
        <ol style={{ textAlign: 'left', maxWidth: '700px', margin: '1rem auto', lineHeight: '1.6' }}>
          <li><strong>Run TinaCMS locally:</strong> 
            <br /><code style={{ background: '#f1f1f1', padding: '0.2rem 0.5rem', borderRadius: '3px' }}>cd "/Users/benknight/BG fit/bail-program-cms" && npm run dev</code>
          </li>
          <li><strong>Open your local site:</strong> Go to <code>http://localhost:3000</code></li>
          <li><strong>Navigate to admin:</strong> Go to <code>http://localhost:3000/admin/index.html</code></li>
          <li><strong>Login with GitHub:</strong> Use the same GitHub account connected to your repo</li>
          <li><strong>This completes step 3</strong> in your TinaCMS dashboard checklist</li>
        </ol>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#e8f5e8', borderRadius: '8px', border: '1px solid #4caf50' }}>
        <h3>🎯 Why this works:</h3>
        <p style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          TinaCMS requires you to log in through your actual development environment, not the live site. 
          The login creates a connection between your GitHub account and TinaCMS Cloud.
        </p>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#f0f8ff', borderRadius: '8px' }}>
        <p><strong>Alternative:</strong> Use our <a href="/editor" style={{ color: '#8B4513' }}>Custom Editor</a> for immediate content editing while you set up TinaCMS</p>
      </div>
    </div>
  )
}