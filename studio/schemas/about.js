import { UserIcon } from '@sanity/icons'

export default {
  name: 'about',
  title: 'About',
  icon: UserIcon,
  type: 'document',
  fields: [
    {
      name: 'aboutImage',
      title: 'About image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'updatedAt',
      title: 'Updated at',
      type: 'datetime'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'aboutImage'
    },
    prepare(selection) {
      return Object.assign({}, selection,)
    }
  }
}
