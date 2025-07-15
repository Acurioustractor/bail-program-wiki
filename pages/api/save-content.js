export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { sectionId, content } = req.body
    
    // For now, just simulate saving since file editing on Vercel is complex
    // In a real app, you'd save to a database or use Git-based storage
    console.log(`Would save content for section ${sectionId}:`, content)
    
    // Simulate successful save
    res.status(200).json({ 
      message: `Content for ${sectionId} saved successfully! (Note: Changes are simulated - in production this would update your content files)`,
      sectionId,
      contentLength: content.length
    })
  } catch (error) {
    console.error('Error saving content:', error)
    res.status(500).json({ message: 'Error saving content', error: error.message })
  }
}