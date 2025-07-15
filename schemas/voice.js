export default {
  name: 'voice',
  title: 'Community Voice',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'role',
      title: 'Role/Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Elder', value: 'elder'},
          {title: 'Youth', value: 'youth'},
          {title: 'Family', value: 'family'},
          {title: 'Partner', value: 'partner'},
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'avatar',
      title: 'Avatar Initials',
      type: 'string',
      description: 'Two letter initials for avatar'
    },
    {
      name: 'quote',
      title: 'Quote/Testimonial',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
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
      description: 'Show prominently on homepage'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      category: 'category'
    },
    prepare({title, subtitle, category}) {
      return {
        title: title,
        subtitle: `${subtitle} (${category})`
      }
    }
  }
}