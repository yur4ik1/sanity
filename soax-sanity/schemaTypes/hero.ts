import { defineType } from 'sanity';

export default defineType({
  name: 'hero',
  title: 'Hero Module',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the Hero module',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description for the Hero module',
    },
    {
      name: 'checklist',
      title: 'Checklist',
      type: 'array',
      description: 'Checklist for the Hero module',
      of: [{ type: 'string' }],
    },
    {
      name: 'heroReviews',
      title: 'Hero Reviews',
      type: 'array',
      description: 'Reviews for the Hero module',
      of: [
        {
          type: 'object',
          name: 'review',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Alternative text for the image',
            },
          ],
        },
      ],
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      description: 'Main image for the Hero module',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Alternative text for the main image',
        },
      ],
    },
    {
      name: 'ctaPrimary',
      title: 'Primary CTA',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          description: 'Text for the primary CTA button',
        },
        {
          name: 'url',
          title: 'Button URL',
          type: 'url',
          description: 'URL for the primary CTA button',
        },
      ],
    },
    {
      name: 'ctaSecondary',
      title: 'Secondary CTA',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          description: 'Text for the secondary CTA button',
        },
        {
          name: 'url',
          title: 'Button URL',
          type: 'url',
          description: 'URL for the secondary CTA button',
        },
      ],
    },
    {
      name: 'styleVariant',
      title: 'Style Variant',
      type: 'string',
      description: 'Select the style variant for the Hero module',
      options: {
        list: [
          { title: 'Style 1', value: 'style-1' },
          { title: 'Style 2', value: 'style-2' },
        ],
        layout: 'dropdown', // You can use dropdown or radio buttons
      },
      initialValue: 'style-1',
    },
  ],
});
