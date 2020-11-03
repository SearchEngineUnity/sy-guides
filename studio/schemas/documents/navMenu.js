import { FiNavigation2 } from 'react-icons/fi';

export default {
  name: 'navMenu',
  title: 'Navigation Menu',
  type: 'document',
  icon: FiNavigation2,
  fields: [
    {
      name: 'title',
      Title: 'Title',
      type: 'string',
    },
    {
      name: 'menu',
      title: 'Menu',
      type: 'array',
      description: 'Use Navigation Item for single link and Group for bundled links',
      of: [
        {
          type: 'navItem',
        },
        {
          type: 'navGroup',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
