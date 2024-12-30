import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'benefits' },
        {
          name: 'logosGlobal',
          title: 'Logos (Global)',
          type: 'object',
          fields: [
            defineField({
              name: 'note',
              title: 'Note',
              type: 'string',
              readOnly: true,
              initialValue: 'This module is using global logos content and cannot be edited here.',
            }),
          ],
        },
        { type: 'features' },
      ],
    }),
  ],
});
