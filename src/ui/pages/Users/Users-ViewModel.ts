import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TState } from '../../../redux/config/root-types';

export const useUsers = () => {
  const {  } = useSelector((state: TState) => state);
  const { goBack } = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {

  }, [dispatch])

  return { goBack }
}
