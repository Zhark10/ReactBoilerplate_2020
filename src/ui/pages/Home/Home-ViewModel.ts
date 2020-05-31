import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const useHome = () => {
  const {  } = useSelector(state => state);
  const { goBack } = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {

  }, [])

  return { goBack }
}
