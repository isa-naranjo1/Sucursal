import React, { useEffect, useState } from 'react';
import './Profile.css'; 
import { useAuth } from '../../Context/AuthContext';
import { doc, getDoc } from 'firebase/firestore'; 
import { db } from '../../firebase'; 

export function Profile() {
  const { currentUser, logout } = useAuth();
  const [userData, setUserData] = useState({});
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          console.error('No such document!');
        }
        
        const userEmail = currentUser.email;
        if (userEmail === "isaacmont88@gmail.com") {
          setLoggedInUser({
            name: "Isaac Montaño",
            email: userEmail,
            password: "123456"
          });
        } else if (userEmail === "isa.naranjov1@gmail.com") {
          setLoggedInUser({
            name: "Isabella Naranjo",
            email: userEmail,
            password: "654321"
          });
        } else if (userEmail === "otroejemplo@gmail.com") {
          setLoggedInUser({
            name: "Sophie Nuñez",
            email: userEmail,
            password: "abcdef"
          });
        }
      }
    };

    fetchUserData();
  }, [currentUser]);

  if (!currentUser) {
    return <p>Loading...</p>;
  }

  return (
    <div className='profile'>
        <h1 className='title-profile'>PROFILE</h1>      
        <div className="profile-form-container">
                <div className="input">
                    <h3 className='subtitle-profile'>•<br />NAME</h3>
                    <p className='profile-p'>{loggedInUser ? loggedInUser.name : userData.username}</p>
                    <svg width="100%" height="1">
                        <line x1="0" y1="0" x2="100%" y2="0" style={{stroke:"#2E2A25", strokeWidth:1}} />
                    </svg>
                </div>
                <div className="input">
                    <h3 className='subtitle-profile'>•<br />E-MAIL</h3>
                    <p className='profile-p'>{loggedInUser ? loggedInUser.email : userData.email}</p>
                    <svg width="100%" height="1">
                        <line x1="0" y1="0" x2="100%" y2="0" style={{stroke:"#2E2A25", strokeWidth:1}} />
                    </svg>
                </div>
                <div className="input">
                    <h3 className='subtitle-profile'>•<br />PASSWORD</h3>
                    <p className='profile-p'>{'•'.repeat(loggedInUser ? loggedInUser.password.length : userData.password ? userData.password.length : 8)}</p>
                    <svg width="100%" height="1">
                        <line x1="0" y1="0" x2="100%" y2="0" style={{stroke:"#2E2A25", strokeWidth:1}} />
                    </svg>
                </div>
                <button className="btn" onClick={logout}>Logout</button>
        </div>
    </div>
  );
}
