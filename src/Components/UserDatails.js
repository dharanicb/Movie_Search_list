import React from 'react'
import { useSelector } from 'react-redux';

const UserDatails = () => {
const userProfile = useSelector((state) => state.userProfile)

  return (
    <div className='displays'>
    <table cellPadding = "10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Date Of birth</th>
          <th>Occupation</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {userProfile ? 
        userProfile.map((person) => (
          <tr key={person.id}>
            <td>{person.name}</td>
            <td>{person.email}</td>
            <td>{person.phoneNo}</td>
            <td>{person.dateOfBirth}</td>
            <td>{person.occupation}</td>
            <td>{person.address}</td>
            {/* <td>{person.email}</td> */}
          </tr>
        )): null
        }
        
      </tbody>
    </table>
    </div>
  );
}

export default UserDatails