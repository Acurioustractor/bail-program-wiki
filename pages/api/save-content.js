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
    
    // Find and replace the section content
    const sectionRegex = new RegExp(
      `(\\{[\\s\\S]*?id:\\s*'${sectionId}'[\\s\\S]*?content:\\s*\\{[\\s\\S]*?children:\\s*\\[)[\\s\\S]*?(\\][\\s\\S]*?\\}[\\s\\S]*?\\})`,
      'g'
    )
    
    // Create the new content structure
    const newContent = content.split('\n').map(line => {
      if (line.startsWith('# ')) {
        return `          {
            type: 'h1',
            children: [{ type: 'text', text: '${line.substring(2).replace(/'/g, "\\'")}' }]
          }`
      } else if (line.startsWith('## ')) {
        return `          {
            type: 'h2', 
            children: [{ type: 'text', text: '${line.substring(3).replace(/'/g, "\\'")}' }]
          }`
      } else if (line.startsWith('### ')) {
        return `          {
            type: 'h3',
            children: [{ type: 'text', text: '${line.substring(4).replace(/'/g, "\\'")}' }]
          }`
      } else if (line.trim()) {
        return `          {
            type: 'p',
            children: [{ type: 'text', text: '${line.replace(/'/g, "\\'")}' }]
          }`
      }
      return null
    }).filter(Boolean).join(',\n')
    
    // Replace the content
    fileContent = fileContent.replace(sectionRegex, `$1
${newContent}
        $2`)
    
    // Write the file back
    fs.writeFileSync(filePath, fileContent)
    
    res.status(200).json({ message: 'Content saved successfully' })
  } catch (error) {
    console.error('Error saving content:', error)
    res.status(500).json({ message: 'Error saving content', error: error.message })
  }
}