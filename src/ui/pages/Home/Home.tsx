import React, { FC } from 'react';
import './Home.scss';
import { useHome } from './Home-ViewModel';
import { Shared } from '../../shared/exports';

const Home: FC = () => {
  const viewModel = useHome()
  const {data: posts, isLoading} = viewModel;
  if (isLoading) return <Shared.Preloader/>
  
  return (
    <div className="home">
      <ul>
        {posts?.map(post => (
            <li key={post.id}>
              <b>{`${post.id}) ${post.title}:`}</b>
              <br/>
              {post.body}
            </li>
          )
        )}
      </ul>
      <button onClick={()=>viewModel.push('users')}>
        Go to Users
      </button>
    </div>
  )
}

export default Home;
