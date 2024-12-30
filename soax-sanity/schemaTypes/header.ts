import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document', // Document type to appear in the list
  fields: [
    defineField({
      name: 'title',
      title: 'Menu Title',
      type: 'string',
      description: 'Title of the menu to display in the header',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Logo for the header',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'navigation',
      title: 'Navigation Links',
      type: 'array',
      description: 'Links for navigation',
      of: [
        defineField({
          name: 'link',
          title: 'Link',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Text of the link',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              description: 'URL for the link',
            }),
          ],
        }),
      ],
    }),
  ],
});
