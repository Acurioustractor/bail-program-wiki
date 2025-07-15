const fs = require('fs')
const path = require('path')

// Simple script to update content files
function updateSectionContent(sectionId, markdownContent) {
  const filePath = path.join(process.cwd(), 'pages', 'index.js')
  let fileContent = fs.readFileSync(filePath, 'utf8')
  
  // Convert markdown to React structure
  const reactContent = convertMarkdownToReact(markdownContent)
  
  // Find and replace the section
  const sectionRegex = new RegExp(
    `(\\{[\\s\\S]*?id:\\s*'${sectionId}'[\\s\\S]*?content:\\s*\\{[\\s\\S]*?children:\\s*\\[)[\\s\\S]*?(\\][\\s\\S]*?\\}[\\s\\S]*?\\}(?=,\\s*\\{|\\s*\\]))`,
    'm'
  )
  
  const newFileContent = fileContent.replace(sectionRegex, `$1
${reactContent}
        $2`)
  
  // Write back to file
  fs.writeFileSync(filePath, newFileContent)
  console.log(`✅ Updated ${sectionId} content`)
}

function convertMarkdownToReact(markdown) {
  const lines = markdown.split('\n').filter(line => line.trim())
  const elements = []
  
  lines.forEach(line => {
    const escapedLine = line.replace(/'/g, "\\'").replace(/"/g, '\\"')
    
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
    } else {
      elements.push(`          {
            type: 'p',
            children: [{ type: 'text', text: '${escapedLine}' }]
          }`)
    }
  })
  
  return elements.join(',\n')
}

// Export for use by API
module.exports = { updateSectionContent }

// Command line usage: node scripts/update-content.js sectionId "content"
if (require.main === module) {
  const [,, sectionId, content] = process.argv
  if (sectionId && content) {
    updateSectionContent(sectionId, content)
  }
}