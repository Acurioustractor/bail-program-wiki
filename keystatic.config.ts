import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: process.env.KEYSTATIC_GITHUB_REPO_OWNER || 'Acurioustractor',
      name: process.env.KEYSTATIC_GITHUB_REPO_NAME || 'bail-program-wiki',
    },
    token: process.env.KEYSTATIC_GITHUB_TOKEN,
  },
  
  collections: {
    sections: collection({
      label: 'Wiki Sections',
      slugField: 'title',
      path: 'content/sections/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        sectionId: fields.text({
          label: 'Section ID',
          description: 'Unique identifier for navigation'
        }),
        stats: fields.array(
          fields.object({
            number: fields.text({ label: 'Number' }),
            label: fields.text({ 
              label: 'Label',
              multiline: true 
            }),
          }),
          {
            label: 'Statistics',
            itemLabel: props => props.fields.number.value || 'New Stat'
          }
        ),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
    
    voices: collection({
      label: 'Community Voices',
      slugField: 'name',
      path: 'content/voices/*',
      format: { contentField: 'quote' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        role: fields.text({ label: 'Role' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Elder', value: 'elder' },
            { label: 'Youth', value: 'youth' },
            { label: 'Family', value: 'family' },
            { label: 'Community', value: 'community' },
          ],
          defaultValue: 'elder',
        }),
        avatar: fields.text({
          label: 'Avatar (Initials)',
          description: 'Two letter initials for display'
        }),
        photo: fields.image({
          label: 'Photo',
          directory: 'public/images/voices',
          publicPath: '/images/voices/',
        }),
        quote: fields.document({
          label: 'Quote/Story',
          formatting: true,
          links: true,
        }),
      },
    }),
    
    media: collection({
      label: 'Media Gallery',
      slugField: 'title',
      path: 'content/media/*',
      format: { contentField: 'description' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        type: fields.select({
          label: 'Media Type',
          options: [
            { label: 'Photo', value: 'photo' },
            { label: 'Video', value: 'video' },
            { label: 'Audio', value: 'audio' },
            { label: 'Document', value: 'document' },
          ],
          defaultValue: 'photo',
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Cultural Learning', value: 'cultural-learning' },
            { label: 'Fitness Activities', value: 'fitness-activities' },
            { label: 'Graduation', value: 'graduation' },
            { label: 'Traditional Practices', value: 'traditional-practices' },
            { label: 'Community Events', value: 'community-events' },
            { label: 'General', value: 'general' },
          ],
          defaultValue: 'general',
        }),
        image: fields.image({
          label: 'Image/Thumbnail',
          directory: 'public/images/media',
          publicPath: '/images/media/',
        }),
        videoUrl: fields.url({
          label: 'Video URL',
          description: 'YouTube, Vimeo, or other video URL'
        }),
        audioUrl: fields.url({
          label: 'Audio URL',
          description: 'Direct link to audio file'
        }),
        documentUrl: fields.url({
          label: 'Document URL',
          description: 'Link to PDF or other document'
        }),
        description: fields.document({
          label: 'Description',
          formatting: true,
          links: true,
        }),
      },
    }),
    
    partners: collection({
      label: 'Network Partners',
      slugField: 'name',
      path: 'content/partners/*',
      format: { contentField: 'description' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        role: fields.text({ label: 'Role' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Team', value: 'team' },
            { label: 'Community', value: 'community' },
            { label: 'Funding', value: 'funding' },
            { label: 'Cultural', value: 'cultural' },
          ],
          defaultValue: 'team',
        }),
        organization: fields.text({ label: 'Organization' }),
        avatar: fields.text({
          label: 'Avatar (Initials)',
          description: 'Two letter initials for display'
        }),
        photo: fields.image({
          label: 'Photo',
          directory: 'public/images/partners',
          publicPath: '/images/partners/',
        }),
        website: fields.url({ label: 'Website' }),
        email: fields.text({ 
          label: 'Email',
          validation: { length: { min: 0 } }
        }),
        description: fields.document({
          label: 'Description',
          formatting: true,
          links: true,
        }),
      },
    }),
  },
  
  singletons: {
    settings: singleton({
      label: 'Site Settings',
      path: 'content/settings/',
      format: { data: 'json' },
      schema: {
        siteTitle: fields.text({ 
          label: 'Site Title',
          defaultValue: 'BAIL Program Wiki'
        }),
        siteSubtitle: fields.text({ 
          label: 'Site Subtitle',
          defaultValue: 'Be An Indigenous Leader Program'
        }),
        footerText: fields.text({
          label: 'Footer Text',
          multiline: true,
        }),
        logo: fields.image({
          label: 'Site Logo',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        primaryColor: fields.text({
          label: 'Primary Color',
          defaultValue: '#8B4513',
          description: 'Hex color code (e.g., #8B4513)'
        }),
        secondaryColor: fields.text({
          label: 'Secondary Color',
          defaultValue: '#D2691E',
          description: 'Hex color code (e.g., #D2691E)'
        }),
      },
    }),
  },
});