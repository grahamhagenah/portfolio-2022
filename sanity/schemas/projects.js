import { MdWeb  as project } from 'react-icons/md'

export default {
  title: 'Projects',
  name: 'projects',
  type: 'document',
  icon: project,
  fields: [
    {
      name: 'name',
      title: 'Title',
      type: 'string',
      description: 'Name of web project'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Short description of project'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'Date completed'
    },
    {
      title: 'Overview', 
      name: 'overview',
      type: 'array', 
      description: 'Overview of project',
      of: [{type: 'block'}]
    },
    {
      title: 'Full Description', 
      name: 'text',
      type: 'array', 
      description: 'Description of project process and details',
      of: [{type: 'block'}]
    }
  ],
};