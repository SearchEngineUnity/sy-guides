import MouseIcon from '../components/MouseIcon';

export default {
  name: 'socialInfo',
  title: 'Social Info',
  description: 'social media links',
  type: 'document',
  icon: MouseIcon,
  fields: [
    {
      name: 'social',
      title: 'Social',
      type: 'string',
      options: {
        list: [
          { title: 'Facebook', value: 'facebook' },
          { title: 'Twitter', value: 'twitter' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'Pinterest', value: 'pinterest' },
          { title: 'LinkedIn', value: 'linkedin' },
        ],
      },
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'social',
    },
    prepare({ title }) {
      switch (title) {
        case 'facebook':
          return { title: 'Facebook' };
        case 'twitter':
          return { title: 'Twitter' };
        case 'instagram':
          return { title: 'Instagram' };
        case 'pinterest':
          return { title: 'Pinterest' };
        case 'linkedin':
          return { title: 'LinkedIn' };
        default:
          return { title: 'Error' };
      }
    },
  },
};
