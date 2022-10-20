import React, { useState } from 'react';

const Profile = () => {
    const [user, setUset] = useState(
        JSON.parse(localStorage.getItem("currentUser"))
        ? JSON.parse(localStorage.getItem("currentUser"))
        : [],
      );
      console.log(user)

    return ( 
        <div>

        </div>
     );
}
 
export default Profile;