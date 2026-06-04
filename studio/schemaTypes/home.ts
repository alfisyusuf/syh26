import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({ name: 'heroHeadline', title: 'Hero Headline', type: 'string' }),
    defineField({ name: 'heroSubheadline', title: 'Hero Subheadline', type: 'text' }),
    defineField({ name: 'ctaText', title: 'CTA Button Text', type: 'string', initialValue: 'Gabung Sekarang' }),
    defineField({ name: 'ctaLink', title: 'CTA Button Link', type: 'string' })
  ]
})