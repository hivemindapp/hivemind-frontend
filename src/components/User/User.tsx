import React from 'react';
import './User.css';
import { UserType } from '../../utils/types';
// import { GET_USER } from '../../index';
// import { useQuery } from '@apollo/client';
const baseURL = 'https://hivemind-staging-branch.herokuapp.com';

interface UserProps {
  user: UserType;
}
export const User: React.FC<UserProps> = ({ user }) => {
  // const [user, setUser] = useState<UserType | null>(null);
  // const { loading, data, error } = useQuery(GET_USER);

  // useEffect(() => {
  //   if (!loading && data) {
  //     setUser(data.user);
  //   }
  // }, [data, loading]);

  return (
    <>
      {user && (
        <div className='avatar-wrapper'>
          <img
            className='avatar'
            src={`${baseURL}${user.avatar}`}
            alt={`${user}'s avatar`}
          />
          <h3 className='user-greeting'>{user.username}</h3>
        </div>
      )}
    </>
  );
};
