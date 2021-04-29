import React, { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import gql from 'graphql-tag'
import Link from './Link'
import { LinkType } from './Link'

const FEED_SEARCH_QUERY = gql`
  query FeedSearchQuery($filter: String!) {
    feed(filter: $filter) {
      links {
        id
        url
        description
        createdAt
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`

const Search: React.FC = () => {
  const [searchFilter, setSearchFilter] = useState('')
  const [executeSearch, { data }] = useLazyQuery(FEED_SEARCH_QUERY)
  return (
    <>
      <div>
        Search
        <input type='text' onChange={(e) => setSearchFilter(e.target.value)} />
        <button
          onClick={() => {
            executeSearch({
              variables: { filter: searchFilter },
            })
          }}
        >
          OK
        </button>
      </div>
      {data?.feed.links.map((link: LinkType, index: number) => (
        <Link key={link.id} link={link} index={index} />
      ))}
    </>
  )
}

export default Search
