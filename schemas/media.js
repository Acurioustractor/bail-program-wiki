export default {
  name: 'media',
  title: 'Media Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'type',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          {title: 'Video', value: 'video'},
          {title: 'Photo', value: 'photo'},
          {title: 'Audio', value: 'audio'},
          {title: 'Document', value: 'document'},
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Cultural Learning', value: 'cultural-learning'},
          {title: 'Graduation', value: 'graduation'},
          {title: 'Camp Activities', value: 'camp-activities'},
          {title: 'Testimonials', value: 'testimonials'},
          {title: 'Ceremonies', value: 'ceremonies'},
        ]
      }
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'mediaUrl',
      title: 'Media URL',
      type: 'url',
      description: 'External URL for video/audio content'
    },
    {
      name: 'file',
      title: 'File',
      type: 'file',
      description: 'Upload file directly'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H3', value: 'h3'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
          },
        },
      ],
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show prominently in galleries'
    }
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
      category: 'category',
      media: 'thumbnail'
    },
    prepare({title, type, category, media}) {
      return {
        title: title,
        subtitle: `${type} - ${category}`,
        media: media
      }
    }
  }
}