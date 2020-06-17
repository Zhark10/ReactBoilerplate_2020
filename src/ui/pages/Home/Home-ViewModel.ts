import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Actions_Posts } from '../../../redux/modules/posts/Actions';
import { TState } from '../../../redux/config/root-types';

export const useHome = () => {
  const { data } = useSelector((state: TState) => state.posts);
  const { goBack } = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions_Posts.saga.fetchPosts())
  }, [dispatch])

  return { goBack, data }
}
