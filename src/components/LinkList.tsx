import React from 'react'
import Link from './Link'
import { useQuery, gql } from '@apollo/client'

export const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        url
        description
        createdAt
        postedBy {
          name
        }
        votes {
          user {
            name
          }
        }
      }
    }
  }
`
type User = {
  name: string
}

export type LinkType = {
  id: string
  description: string
  createdAt: string
  url: string
  votes: User[]
  postedBy?: {
    name: string
  }
}

const LinkList: React.FC = () => {
  const { data } = useQuery<{ feed: { links: LinkType[] } }>(FEED_QUERY)
  return (
    <div>
      {data?.feed.links.map((link, index) => (
        <Link key={link.id} link={link} index={index} />
      ))}
    </div>
  )
}

export default LinkList
