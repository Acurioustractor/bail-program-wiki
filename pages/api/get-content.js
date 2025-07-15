// Import the actual data directly instead of parsing files
import { staticData } from '../index.js'

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { sectionId } = req.query
    
    // Find the section in staticData
    const section = staticData.sections.find(s => s.id === sectionId)
    
    if (!section) {
      return res.status(404).json({ message: 'Section not found' })
    }
    
    // Convert the content structure to markdown
    let markdownContent = convertToMarkdown(section)
    
    res.status(200).json({ content: markdownContent })
  } catch (error) {
    console.error('Error getting content:', error)
    res.status(500).json({ message: 'Error getting content', error: error.message })
  }
}

function convertToMarkdown(section) {
  const lines = []
  
  if (!section.content || !section.content.children) {
    return `# ${section.title}\n\nNo content found for this section.`
  }
  
  // Process each content element
  section.content.children.forEach(element => {
    if (element.type === 'h1') {
      const text = extractText(element.children)
      lines.push(`# ${text}`)
      lines.push('')
    } else if (element.type === 'h2') {
      const text = extractText(element.children)
      lines.push(`## ${text}`)
      lines.push('')
    } else if (element.type === 'h3') {
      const text = extractText(element.children)
      lines.push(`### ${text}`)
      lines.push('')
    } else if (element.type === 'p') {
      const text = extractText(element.children)
      lines.push(text)
      lines.push('')
    }
  })
  
  // Add stats if they exist
  if (section.stats && section.stats.length > 0) {
    lines.push('## Key Statistics')
    lines.push('')
    section.stats.forEach(stat => {
      lines.push(`- **${stat.number}** ${stat.label.replace(/\n/g, ' ')}`)
    })
    lines.push('')
  }
  
  return lines.join('\n').trim()
}

function extractText(children) {
  if (!children || !Array.isArray(children)) {
    return ''
  }
  
  return children.map(child => {
    if (child.type === 'text') {
      return child.text || ''
    }
    return ''
  }).join('')
}