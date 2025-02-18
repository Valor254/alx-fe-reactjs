import { useContext } from 'react';
import UserContext from '../UserContext ';

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
    );
  };
  <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
  <h2 style={{ color: 'blue' }}>{props.name}</h2>
  <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
  <p>Bio: {props.bio}</p>
</div>
  export default UserProfile;