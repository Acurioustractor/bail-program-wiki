import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function EditorPage() {
  const router = useRouter()
  const [editingSection, setEditingSection] = useState('program-overview')
  const [content, setContent] = useState('')
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [showPreview, setShowPreview] = useState(false)

  const sections = [
    { id: 'program-overview', title: 'Program Overview', icon: '🎯' },
    { id: 'campfire-model', title: 'CAMPFIRE Model', icon: '🔥' },
    { id: 'impact-stats', title: 'Impact Statistics', icon: '📊' },
    { id: 'community-voices', title: 'Community Voices', icon: '👥' },
    { id: 'elder-voices', title: 'Elder Voices', icon: '👴' },
    { id: 'youth-perspectives', title: 'Youth Perspectives', icon: '👦' },
    { id: 'family-impacts', title: 'Family Impacts', icon: '👨‍👩‍👧‍👦' },
    { id: 'success-stories', title: 'Success Stories', icon: '⭐' },
    { id: 'video-gallery', title: 'Video Gallery', icon: '📹' },
    { id: 'photo-gallery', title: 'Photo Gallery', icon: '📸' },
    { id: 'audio-stories', title: 'Audio Stories', icon: '🎤' },
    { id: 'documents', title: 'Documents', icon: '📄' },
    { id: 'network-partners', title: 'Network Partners', icon: '🤝' },
    { id: 'community-partners', title: 'Community Partners', icon: '🏘️' },
    { id: 'funding-partners', title: 'Funding Partners', icon: '💰' },
    { id: 'cultural-advisors', title: 'Cultural Advisors', icon: '🏛️' }
  ]

  // Load actual content for the selected section
  useEffect(() => {
    loadSectionContent(editingSection)
  }, [editingSection])

  const loadSectionContent = async (sectionId) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/get-content?sectionId=${sectionId}`)
      if (response.ok) {
        const data = await response.json()
        setContent(data.content || getDefaultContent(sectionId))
      } else {
        setContent(getDefaultContent(sectionId))
      }
    } catch (error) {
      console.error('Error loading content:', error)
      setContent(getDefaultContent(sectionId))
    }
    setLoading(false)
  }

  const getDefaultContent = (sectionId) => {
    const section = sections.find(s => s.id === sectionId)
    return `# ${section?.title || 'Content'}

Add your content here using the formatting guide below.

## Subheading

Your content goes here...

### Smaller Heading

More content here.

## Adding Media

**For Videos:**
🎥 Video Title: "Description of video"
URL: https://youtube.com/watch?v=your-video-id

**For Images:**
📸 Image Title: "Description of image"  
URL: https://your-image-url.com/image.jpg

**For Audio:**
🎵 Audio Title: "Description of audio"
URL: https://your-audio-url.com/audio.mp3`
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
        setMessage('✅ Content saved successfully! Refresh the main site to see changes.')
      } else {
        const error = await response.json()
        setMessage('❌ Error saving content: ' + error.message)
      }
    } catch (error) {
      setMessage('❌ Error saving content: ' + error.message)
    }
    
    setSaving(false)
  }

  const insertTemplate = (template) => {
    const templates = {
      video: '\n\n🎥 Video Title: "Enter video description"\nURL: https://youtube.com/watch?v=VIDEO_ID\n\n',
      image: '\n\n📸 Image Title: "Enter image description"\nURL: https://your-image-url.com/image.jpg\n\n',
      audio: '\n\n🎵 Audio Title: "Enter audio description"  \nURL: https://your-audio-url.com/audio.mp3\n\n',
      voice: '\n\n## Community Voice\n\n**Name:** Person Name\n**Role:** Their role/title\n**Quote:** "Their inspiring quote goes here..."\n\n',
      stats: '\n\n## Key Statistics\n\n- **85%** Program completion rate\n- **70%** Education re-engagement\n- **30%** Reduction in police contacts\n- **95%** Improved family relationships\n\n'
    }
    
    setContent(content + templates[template])
  }

  const renderPreview = () => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} style={{ color: '#8B4513', marginTop: '1.5rem' }}>{line.substring(2)}</h1>
      } else if (line.startsWith('## ')) {
        return <h2 key={index} style={{ color: '#8B4513', marginTop: '1rem' }}>{line.substring(3)}</h2>
      } else if (line.startsWith('### ')) {
        return <h3 key={index} style={{ color: '#8B4513', marginTop: '0.5rem' }}>{line.substring(4)}</h3>
      } else if (line.startsWith('🎥') || line.startsWith('📸') || line.startsWith('🎵')) {
        return <div key={index} style={{ background: '#f0f8ff', padding: '0.5rem', margin: '0.5rem 0', borderRadius: '4px', border: '1px solid #ddd' }}>{line}</div>
      } else if (line.trim()) {
        return <p key={index} style={{ margin: '0.5rem 0' }}>{line}</p>
      }
      return <br key={index} />
    })
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#f8f9fa',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <div style={{ 
        background: 'linear-gradient(135deg, #8B4513 0%, #CD853F 100%)',
        color: 'white',
        padding: '1rem 2rem',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px', margin: '0 auto' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.8rem', fontWeight: '300' }}>📝 Content Editor</h1>
            <p style={{ margin: '0.2rem 0 0 0', opacity: 0.9, fontSize: '0.9rem' }}>BAIL Program Wiki Content Management</p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              onClick={() => router.push('/')}
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.3)',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              ← Back to Wiki
            </button>
            <button
              onClick={() => setShowPreview(!showPreview)}
              style={{
                background: showPreview ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.3)',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              {showPreview ? '📝 Edit' : '👁️ Preview'}
            </button>
          </div>
        </div>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '280px 1fr', 
        gap: '0', 
        maxWidth: '1400px', 
        margin: '0 auto',
        minHeight: 'calc(100vh - 100px)'
      }}>
        {/* Sidebar */}
        <div style={{ 
          background: 'white', 
          borderRight: '1px solid #e9ecef', 
          padding: '1.5rem',
          overflowY: 'auto'
        }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#8B4513', fontSize: '1.1rem' }}>Select Section:</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => setEditingSection(section.id)}
                style={{
                  padding: '0.7rem',
                  border: '1px solid #ddd',
                  background: editingSection === section.id ? '#8B4513' : 'white',
                  color: editingSection === section.id ? 'white' : '#333',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  textAlign: 'left',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s'
                }}
              >
                <span>{section.icon}</span>
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Editor */}
        <div style={{ background: 'white', padding: '1.5rem', overflowY: 'auto' }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <p>⏳ Loading content...</p>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ margin: 0, color: '#8B4513' }}>
                  {sections.find(s => s.id === editingSection)?.icon} {sections.find(s => s.id === editingSection)?.title}
                </h2>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={() => insertTemplate('video')} style={buttonStyle}>📹 Add Video</button>
                  <button onClick={() => insertTemplate('image')} style={buttonStyle}>📸 Add Image</button>
                  <button onClick={() => insertTemplate('audio')} style={buttonStyle}>🎵 Add Audio</button>
                  <button onClick={() => insertTemplate('voice')} style={buttonStyle}>👤 Add Voice</button>
                  <button onClick={() => insertTemplate('stats')} style={buttonStyle}>📊 Add Stats</button>
                </div>
              </div>

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

              {showPreview ? (
                <div style={{ 
                  border: '1px solid #ddd', 
                  borderRadius: '4px', 
                  padding: '1.5rem',
                  background: '#fafafa',
                  minHeight: '500px'
                }}>
                  <h4 style={{ margin: '0 0 1rem 0', color: '#8B4513' }}>Preview:</h4>
                  {renderPreview()}
                </div>
              ) : (
                <>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    style={{
                      width: '100%',
                      height: '500px',
                      padding: '1rem',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontSize: '14px',
                      fontFamily: 'Monaco, Consolas, monospace',
                      resize: 'vertical',
                      lineHeight: '1.5'
                    }}
                    placeholder="Enter your content here..."
                  />

                  <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
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
                    
                    <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                      Auto-saves to pages/index.js • Push to GitHub to deploy
                    </div>
                  </div>
                </>
              )}

              {/* Help Guide */}
              <div style={{ 
                marginTop: '2rem',
                background: '#f8f9fa', 
                padding: '1rem', 
                borderRadius: '4px',
                border: '1px solid #dee2e6'
              }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#8B4513' }}>📖 Quick Formatting Guide:</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.9rem' }}>
                  <div>
                    <strong>Text Formatting:</strong>
                    <ul style={{ margin: '0.5rem 0', paddingLeft: '1rem' }}>
                      <li><code># Title</code> - Main heading</li>
                      <li><code>## Subtitle</code> - Subheading</li>
                      <li><code>### Small heading</code> - Section heading</li>
                      <li><code>**Bold text**</code> - Bold formatting</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Media & Content:</strong>
                    <ul style={{ margin: '0.5rem 0', paddingLeft: '1rem' }}>
                      <li><code>🎥 Video Title: "Description"</code></li>
                      <li><code>📸 Image Title: "Description"</code></li>
                      <li><code>🎵 Audio Title: "Description"</code></li>
                      <li>Use the buttons above to insert templates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

const buttonStyle = {
  background: '#6c757d',
  color: 'white',
  border: 'none',
  padding: '0.4rem 0.8rem',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '0.8rem'
}