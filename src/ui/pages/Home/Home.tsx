import React, { FC } from 'react';
import './Home.scss';
import { useHome } from './Home-ViewModel';
import { Preloader } from '../../shared/Preloader/Preloader';

const Home: FC = () => {
  const viewModel = useHome()
  const posts = viewModel.data;
  if (!posts) return <Preloader/>
  
  return (
    <div className="home">
      <ul>
        {posts.map(post => (
            <li key={post.id}>
              <b>{`${post.id}) ${post.title}:`}</b>
              <br/>
              {post.body}
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default Home;
