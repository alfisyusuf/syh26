import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Site Title', type: 'string', initialValue: 'Solo Youth Hub' }),
    defineField({
      name: 'mainMenu',
      title: 'Main Navigation Menu',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Menu Title', type: 'string' },
          { name: 'link', title: 'URL/Path', type: 'string' }
        ]
      }]
    })
  ]
})