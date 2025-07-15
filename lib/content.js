import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export function getAllContent(collection) {
  try {
    const collectionPath = path.join(contentDirectory, collection)
    if (!fs.existsSync(collectionPath)) {
      return []
    }
    
    const fileNames = fs.readdirSync(collectionPath)
    const allContent = fileNames
      .filter(name => name.endsWith('.mdx') || name.endsWith('.json'))
      .map(fileName => {
        const filePath = path.join(collectionPath, fileName)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        
        if (fileName.endsWith('.json')) {
          return JSON.parse(fileContents)
        }
        
        const { data, content } = matter(fileContents)
        const slug = fileName.replace(/\.(mdx|md)$/, '')
        
        return {
          slug,
          ...data,
          content,
        }
      })
    
    return allContent
  } catch (error) {
    console.log(`Error loading ${collection}:`, error)
    return []
  }
}

export function getVoices() {
  return getAllContent('voices')
}

export function getPartners() {
  return getAllContent('partners')
}

export function getMedia() {
  return getAllContent('media')
}

export function getSections() {
  return getAllContent('sections')
}

export function getPosts() {
  return getAllContent('posts')
}

export function getSettings() {
  const settings = getAllContent('settings')
  return settings[0] || {
    siteTitle: 'BAIL Program Wiki',
    siteSubtitle: 'Be An Indigenous Leader Program'
  }
}