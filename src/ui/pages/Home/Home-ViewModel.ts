import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ActionsPosts } from '../../../redux/modules/posts/Actions';

export const useHome = () => {
  const { data } = useSelector((state: any) => state.posts);
  const { goBack } = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionsPosts.fetchPosts())
  }, [])

  return { goBack, data }
}
