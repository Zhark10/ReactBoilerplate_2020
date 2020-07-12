import React, { FC } from 'react'
import { usePosts } from './Posts-ViewModel'
import { Shared } from '../../shared/exports'
import { Link } from 'react-router-dom'

const Posts: FC = () => {
  const viewModel = usePosts()
  const { data: posts, isLoading } = viewModel
  if (isLoading) return <Shared.Preloader />

  console.log(posts)

  return (
    <div className="posts">
      <ul>
        {posts?.data.map((post: { id: string | number | undefined; title: any; body: React.ReactNode }) => (
          <li key={post.id}>
            <b>{`${post.id}) ${post.title}:`}</b>
            <br />
            {post.body}
          </li>
        ))}
      </ul>
      <Link to={'/users'} />
    </div>
  )
}

export default Posts
