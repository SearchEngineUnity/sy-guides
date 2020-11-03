export default {
  name: 'textBox',
  title: 'Text Box',
  type: 'object',
  fields: [
    {
      name: 'leaderText',
      title: 'Leader text',
      type: 'string',
    },
    {
      name: 'leaderIcon',
      title: 'Leader Icon',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'simpleBlockContent',
    },
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: `Alt text: ${title}`,
        media,
      };
    },
  },
};
