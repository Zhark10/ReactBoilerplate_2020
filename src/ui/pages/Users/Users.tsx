import React, { FC }  from 'react';
import './Users.scss';
import { useUsers } from './Users-ViewModel';

const Users: FC  = () => {
  const viewModel = useUsers()
  return (
    <div className="users">
      is Users page
    </div>
  )
}

export default Users;
