import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'benefits',
    title: 'Benefits Module',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Title of the Benefits module',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Description for the Benefits module',
        }),
        defineField({
            name: 'items',
            title: 'Benefits Items',
            type: 'array',
            description: 'List of benefits',
            of: [
                {
                    type: 'object',
                    name: 'benefit',
                    title: 'Benefit',
                    fields: [
                        defineField({
                            name: 'icon',
                            title: 'Icon',
                            type: 'image',
                            description: 'Icon for the benefit',
                            options: {
                                hotspot: true,
                            },
                            fields: [
                                {
                                    name: 'alt',
                                    title: 'Alt Text',
                                    type: 'string',
                                    description: 'Alternative text for the icon',
                                },
                            ],
                        }),
                        defineField({
                            name: 'title',
                            title: 'Benefit Title',
                            type: 'string',
                            description: 'Title of the benefit',
                        }),
                        defineField({
                            name: 'description',
                            title: 'Benefit Description',
                            type: 'text',
                            description: 'Description of the benefit',
                        }),
                    ],
                },
            ],
        }),
    ],
});
