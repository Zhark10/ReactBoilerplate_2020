import React, { FC } from 'react'
import { usePosts } from './Posts-ViewModel'
import { Shared } from '../../shared/exports'

import './Posts.module.scss'

const Posts: FC = () => {
  const viewModel = usePosts()
  const { data: posts, isLoading } = viewModel
  if (isLoading) return <Shared.Preloader />

  return (
    <div className="posts">
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <b>{`${post.id}) ${post.title}:`}</b>
            <br />
            {post.body}
          </li>
        ))}
      </ul>
      <button onClick={() => viewModel.push('users')}>Go to Users</button>
    </div>
  )
}

export default Posts
