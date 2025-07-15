import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { sectionId } = req.query
    
    // Read the current index.js file
    const filePath = path.join(process.cwd(), 'pages', 'index.js')
    let fileContent = fs.readFileSync(filePath, 'utf8')
    
    // Extract staticData from the file
    const staticDataMatch = fileContent.match(/const staticData = (\{[\s\S]*?\n\}\n)/m)
    if (!staticDataMatch) {
      return res.status(500).json({ message: 'Could not find staticData' })
    }
    
    // This is a simple approach - in production you'd want a proper parser
    const staticDataString = staticDataMatch[1]
    
    // Find the specific section
    const sectionRegex = new RegExp(`\\{[\\s\\S]*?id:\\s*'${sectionId}'[\\s\\S]*?\\}(?=,\\s*\\{|\\s*\\])`);
    const sectionMatch = staticDataString.match(sectionRegex)
    
    if (!sectionMatch) {
      return res.status(404).json({ message: 'Section not found' })
    }
    
    // Convert the content structure back to markdown-like format
    const sectionData = sectionMatch[0]
    let markdownContent = convertToMarkdown(sectionData)
    
    res.status(200).json({ content: markdownContent })
  } catch (error) {
    console.error('Error getting content:', error)
    res.status(500).json({ message: 'Error getting content', error: error.message })
  }
}

function convertToMarkdown(sectionData) {
  // Extract content from the section structure
  const lines = []
  
  // Simple regex to extract text content
  const h1Matches = sectionData.match(/type:\s*'h1'[\s\S]*?text:\s*'([^']+)'/g)
  const h2Matches = sectionData.match(/type:\s*'h2'[\s\S]*?text:\s*'([^']+)'/g)  
  const h3Matches = sectionData.match(/type:\s*'h3'[\s\S]*?text:\s*'([^']+)'/g)
  const pMatches = sectionData.match(/type:\s*'p'[\s\S]*?text:\s*'([^']+)'/g)
  
  // This is a simplified approach - you'd want better parsing in production
  if (h1Matches) {
    h1Matches.forEach(match => {
      const text = match.match(/text:\s*'([^']+)'/)[1]
      lines.push(`# ${text}`)
    })
  }
  
  if (h2Matches) {
    h2Matches.forEach(match => {
      const text = match.match(/text:\s*'([^']+)'/)[1]
      lines.push(`## ${text}`)
    })
  }
  
  if (h3Matches) {
    h3Matches.forEach(match => {
      const text = match.match(/text:\s*'([^']+)'/)[1]
      lines.push(`### ${text}`)
    })
  }
  
  if (pMatches) {
    pMatches.forEach(match => {
      const text = match.match(/text:\s*'([^']+)'/)[1]
      lines.push(text)
      lines.push('') // Empty line after paragraphs
    })
  }
  
  return lines.join('\n')
}