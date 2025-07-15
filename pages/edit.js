import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function EditPage() {
  const router = useRouter()
  const [editingSection, setEditingSection] = useState('program-overview')
  const [content, setContent] = useState('')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  // Load current content for the selected section
  useEffect(() => {
    loadSectionContent(editingSection)
  }, [editingSection])

  const loadSectionContent = (sectionId) => {
    // Get content from staticData (we'll improve this)
    const sampleContent = getSampleContent(sectionId)
    setContent(sampleContent)
  }

  const getSampleContent = (sectionId) => {
    const contentMap = {
      'program-overview': `# Mission Statement

The BAIL (Be An Indigenous Leader) Program, delivered through the innovative CAMPFIRE model, represents a transformative approach to addressing youth crime and disconnection among Aboriginal and Torres Strait Islander young people in Mount Isa and Doomadgee.

Led by Brodie Germaine Fitness (BG Fit), this culturally-grounded initiative combines the healing power of Country with fitness, mentoring, and Elder guidance to break cycles of disadvantage and empower young Indigenous leaders.

## The CAMPFIRE Model

Our innovative framework combines eight key elements that work together to create transformative experiences for young Indigenous people.`,

      'campfire-model': `# The CAMPFIRE Framework

Our innovative framework combines eight key elements that work together to create transformative experiences for young Indigenous people. Each element of CAMPFIRE works together like the components of a traditional campfire - each piece is essential, and together they create something powerful and transformative.

## The Eight Elements

### C - Culture
Deep immersion in traditional practices and knowledge systems. Participants engage with traditional Aboriginal and Torres Strait Islander practices, learning about their cultural heritage, customs, and spiritual connections to Country.

### A - Ancestral Wisdom
Learning from Elders and traditional knowledge holders. Direct mentorship from respected Elders who share ancient wisdom, traditional stories, and cultural protocols that have been passed down through generations.

### M - Mentoring
One-on-one guidance from culturally strong role models. Individualized support from Indigenous mentors who understand the challenges young people face and can provide culturally appropriate guidance.`
    }
    return contentMap[sectionId] || `# ${sections.find(s => s.id === sectionId)?.title || 'Content'}

Edit this content using markdown formatting:
- Use # for main headings
- Use ## for subheadings  
- Use ### for smaller headings
- Write regular paragraphs normally`
  }

  const saveContent = async () => {
    setSaving(true)
    setMessage('')
    
    try {
      const response = await fetch('/api/save-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sectionId: editingSection,
          content: content
        })
      })
      
      if (response.ok) {
        setMessage('✅ Content saved successfully! Changes will appear after the next deployment.')
      } else {
        const error = await response.json()
        setMessage('❌ Error saving content: ' + error.message)
      }
    } catch (error) {
      setMessage('❌ Error saving content: ' + error.message)
    }
    
    setSaving(false)
  }

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
          {message && (
            <div style={{ 
              padding: '1rem', 
              borderRadius: '4px',
              marginBottom: '1rem',
              background: message.includes('✅') ? '#d4edda' : '#f8d7da',
              border: `1px solid ${message.includes('✅') ? '#c3e6cb' : '#f5c6cb'}`,
              color: message.includes('✅') ? '#155724' : '#721c24'
            }}>
              {message}
            </div>
          )}

          <div style={{ marginBottom: '1rem' }}>
            <p style={{ 
              background: '#e7f3ff', 
              padding: '1rem', 
              borderRadius: '4px',
              border: '1px solid #b3d7ff'
            }}>
              <strong>📝 Live Editor:</strong> Edit your content below using simple markdown formatting. 
              Click "Save Changes" to update the content on your site!
            </p>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Content for "{sections.find(s => s.id === editingSection)?.title}":
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{
                width: '100%',
                height: '400px',
                padding: '1rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                fontFamily: 'Monaco, Consolas, monospace',
                resize: 'vertical'
              }}
              placeholder="Enter your content here using markdown formatting..."
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <button
              onClick={saveContent}
              disabled={saving}
              style={{
                background: saving ? '#6c757d' : '#28a745',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                cursor: saving ? 'not-allowed' : 'pointer',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}
            >
              {saving ? '💾 Saving...' : '💾 Save Changes'}
            </button>
          </div>

          <div style={{ 
            background: '#f8f9fa', 
            padding: '1rem', 
            borderRadius: '4px',
            border: '1px solid #dee2e6'
          }}>
            <h4>📖 Markdown Formatting Guide:</h4>
            <ul style={{ marginTop: '0.5rem' }}>
              <li><code># Title</code> - Creates a main heading</li>
              <li><code>## Subtitle</code> - Creates a subheading</li>
              <li><code>### Small heading</code> - Creates a smaller heading</li>
              <li>Regular text becomes paragraphs</li>
              <li>Leave blank lines between paragraphs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}