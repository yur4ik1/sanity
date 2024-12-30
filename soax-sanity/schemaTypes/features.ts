import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'features',
  title: 'Features Module',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Main title for the Features section',
    }),
    defineField({
      name: 'textWithImage',
      title: 'Text with Image Block',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Block Title',
          type: 'string',
          description: 'Title for the block with text, image, and CTA',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Description for the block',
        }),
        defineField({
          name: 'list',
          title: 'Checklist',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'List of feature items',
        }),
        defineField({
          name: 'cta',
          title: 'Call to Action',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'CTA Text',
              type: 'string',
              description: 'Text for the CTA button',
            }),
            defineField({
              name: 'url',
              title: 'CTA URL',
              type: 'url',
              description: 'URL for the CTA button',
            }),
          ],
        }),
        defineField({
          name: 'illustration',
          title: 'Illustration',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Alternative text for the illustration',
            }),
          ],
          description: 'Illustration for the block',
        }),
      ],
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      description: 'List of products associated with the features',
      of: [
        defineField({
          type: 'object',
          name: 'product',
          title: 'Product',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: { hotspot: true },
              description: 'Icon for the product',
            }),
            defineField({
              name: 'name',
              title: 'Product Name',
              type: 'string',
              description: 'Name of the product',
            }),
            defineField({
              name: 'description',
              title: 'Product Description',
              type: 'text',
              description: 'Description of the product',
            }),
            defineField({
              name: 'cta',
              title: 'Call to Action',
              type: 'object',
              fields: [
                defineField({
                  name: 'text',
                  title: 'CTA Text',
                  type: 'string',
                  description: 'Text for the CTA button',
                }),
                defineField({
                  name: 'url',
                  title: 'CTA URL',
                  type: 'url',
                  description: 'URL for the CTA button',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});
