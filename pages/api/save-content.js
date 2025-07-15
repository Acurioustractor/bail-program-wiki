import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { sectionId, content } = req.body
    
    // Read the current index.js file
    const filePath = path.join(process.cwd(), 'pages', 'index.js')
    let fileContent = fs.readFileSync(filePath, 'utf8')
    
    // Convert markdown content to the React structure
    const newContentStructure = convertMarkdownToReactStructure(content)
    
    // Find the section and replace its content
    // Look for the specific section pattern
    const sectionPattern = new RegExp(
      `(\\{[\\s\\S]*?id:\\s*'${sectionId}'[\\s\\S]*?content:\\s*\\{[\\s\\S]*?children:\\s*\\[)[\\s\\S]*?(\\][\\s\\S]*?\\}[\\s\\S]*?\\})`,
      'm'
    )
    
    const match = fileContent.match(sectionPattern)
    if (!match) {
      return res.status(500).json({ message: `Could not find section ${sectionId} in file` })
    }
    
    // Replace the content
    const newFileContent = fileContent.replace(sectionPattern, `$1
${newContentStructure}
        $2`)
    
    // Write the file back
    fs.writeFileSync(filePath, newFileContent)
    
    res.status(200).json({ message: 'Content saved successfully' })
  } catch (error) {
    console.error('Error saving content:', error)
    res.status(500).json({ message: 'Error saving content', error: error.message })
  }
}

function convertMarkdownToReactStructure(markdown) {
  const lines = markdown.split('\n')
  const elements = []
  
  for (let line of lines) {
    line = line.trim()
    if (!line) continue
    
    // Escape single quotes for JavaScript
    const escapedLine = line.replace(/'/g, "\\'")
    
    if (line.startsWith('# ')) {
      elements.push(`          {
            type: 'h1',
            children: [{ type: 'text', text: '${escapedLine.substring(2)}' }]
          }`)
    } else if (line.startsWith('## ')) {
      elements.push(`          {
            type: 'h2',
            children: [{ type: 'text', text: '${escapedLine.substring(3)}' }]
          }`)
    } else if (line.startsWith('### ')) {
      elements.push(`          {
            type: 'h3',
            children: [{ type: 'text', text: '${escapedLine.substring(4)}' }]
          }`)
    } else if (line.startsWith('- ')) {
      // Handle list items as paragraphs for now
      elements.push(`          {
            type: 'p',
            children: [{ type: 'text', text: '${escapedLine}' }]
          }`)
    } else {
      // Regular paragraph
      elements.push(`          {
            type: 'p',
            children: [{ type: 'text', text: '${escapedLine}' }]
          }`)
    }
  }
  
  return elements.join(',\n')
}