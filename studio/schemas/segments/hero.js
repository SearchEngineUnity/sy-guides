export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fieldsets: [
    {
      name: 'background',
      title: 'Backgound',
      description: 'Background Image will always override Background Color',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    {
      name: 'idTag',
      title: 'ID',
      type: 'string',
      description: 'Please use "-" in place of space',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'If you need a line break please use "\\n"',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'text',
      title: 'Text',
      type: 'simpleBlockContent',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      fieldset: 'background',
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
      fieldset: 'background',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: '_type',
    },
  },
};
