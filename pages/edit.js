import { useState } from 'react'
import { useRouter } from 'next/router'

export default function EditPage() {
  const router = useRouter()
  const [editingSection, setEditingSection] = useState('program-overview')
  const [content, setContent] = useState('')

  const sections = [
    { id: 'program-overview', title: 'Program Overview' },
    { id: 'campfire-model', title: 'CAMPFIRE Model' },
    { id: 'impact-stats', title: 'Impact Statistics' },
    { id: 'community-voices', title: 'Community Voices' },
    { id: 'elder-voices', title: 'Elder Voices' },
    { id: 'youth-perspectives', title: 'Youth Perspectives' },
    { id: 'family-impacts', title: 'Family Impacts' },
    { id: 'success-stories', title: 'Success Stories' },
    { id: 'video-gallery', title: 'Video Gallery' },
    { id: 'photo-gallery', title: 'Photo Gallery' },
    { id: 'audio-stories', title: 'Audio Stories' },
    { id: 'documents', title: 'Documents' },
    { id: 'network-partners', title: 'Network Partners' },
    { id: 'community-partners', title: 'Community Partners' },
    { id: 'funding-partners', title: 'Funding Partners' },
    { id: 'cultural-advisors', title: 'Cultural Advisors' }
  ]

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <button 
          onClick={() => router.push('/')}
          style={{
            background: '#8B4513',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '1rem'
          }}
        >
          ← Back to Wiki
        </button>
        <h1>Edit BAIL Program Content</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '2rem' }}>
        <div>
          <h3>Select Section to Edit:</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => setEditingSection(section.id)}
                style={{
                  padding: '0.5rem',
                  border: '1px solid #ddd',
                  background: editingSection === section.id ? '#8B4513' : 'white',
                  color: editingSection === section.id ? 'white' : '#333',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  textAlign: 'left'
                }}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3>Edit: {sections.find(s => s.id === editingSection)?.title}</h3>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ 
              background: '#f0f8ff', 
              padding: '1rem', 
              borderRadius: '4px',
              border: '1px solid #ddd'
            }}>
              <strong>Note:</strong> To edit content, you'll need to modify the files directly:
              <br />• Main content: <code>pages/index.js</code> (staticData sections)
              <br />• Navigation: <code>components/WikiLayout.js</code> (menuSections)
              <br />• After editing, commit and push changes to GitHub to deploy to Vercel
            </p>
          </div>

          <div style={{ 
            background: '#f9f9f9', 
            padding: '1rem', 
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}>
            <h4>Instructions for editing "{sections.find(s => s.id === editingSection)?.title}":</h4>
            <ol style={{ marginTop: '0.5rem' }}>
              <li>Open <code>pages/index.js</code> in your code editor</li>
              <li>Find the section with <code>id: '{editingSection}'</code></li>
              <li>Edit the content inside the <code>children</code> array</li>
              <li>Add new paragraphs, headings, or lists as needed</li>
              <li>Save the file and commit to GitHub</li>
              <li>Vercel will automatically deploy your changes</li>
            </ol>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4>Current Content Structure:</h4>
            <pre style={{ 
              background: '#f5f5f5', 
              padding: '1rem', 
              borderRadius: '4px',
              overflow: 'auto',
              fontSize: '0.9rem'
            }}>
{`{
  id: '${editingSection}',
  title: '${sections.find(s => s.id === editingSection)?.title}',
  content: {
    type: 'root',
    children: [
      {
        type: 'h1',
        children: [{ type: 'text', text: 'Your Title Here' }]
      },
      {
        type: 'p',
        children: [{ type: 'text', text: 'Your content here...' }]
      }
    ]
  }
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}