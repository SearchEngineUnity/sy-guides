import { MdInfoOutline } from 'react-icons/md';

export default {
  name: 'guide',
  title: 'Guide',
  type: 'document',
  icon: MdInfoOutline,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'pdf',
      title: 'PDF document',
      type: 'file',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'software',
      title: 'Software',
      type: 'reference',
      to: [{ type: 'brand' }],
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'platform',
      title: 'Platform',
      type: 'reference',
      to: [{ type: 'brand' }],
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
