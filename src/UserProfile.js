// src/UserProfile.js
function UserProfile(props) {
    return (
      <div>
        <h2>{props.name}</h2>
        <p>Возраст: {props.age}</p>
      </div>
    );
  }
  
  export default UserProfile;
  