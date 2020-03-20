import React from "react";
import classes from "./Users.module.scss";
let Users = props => {
 if (props.users.length === 0){
     props.setUsers([
         {
             id: 1,
             photoUrl:
                 "https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/80732467_1308938332639431_3935941939445605294_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=OFrepzXThC0AX8jmSm0&oh=575aa438812dfb753704e3c8ae43c7d4&oe=5EA90C00",
             followed: false,
             fullName: "Dmitriy",
             status: "I'm Boss",
             location: { city: "Minsk", country: "Belarus" }
         },
         {
             id: 2,
             photoUrl: "https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/90317240_561517534570449_8056048866481299274_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=V3qoRPAridQAX9IWEaV&oh=d0adb134b01cfd7f2e93264c85ecde04&oe=5E9FE1EE",
             followed: true,
             fullName: "Alex",
             status: "I'm teacher",
             location: { city: "Kiev", country: "Ukraine" }
         },
         {
             id: 3,
             photoUrl: "https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/47585029_150707415912307_5350462518413994052_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=sbkEU29zyxEAX8FC8eg&oh=e30f5446bcce7e75d60f324a87cb023f&oe=5EA3A975",
             followed: false,
             fullName: "Max",
             status: "I'm human",
             location: { city: "Moscow", country: "Russia" }
         },
         {
             id: 4,
             photoUrl:"https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/66500181_2324253257847987_4253062814611416098_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=c2jXdWrifcEAX_Ja7Gl&oh=d4f2b4fbf3c380651c74233c78828866&oe=5EA3FEC8",
             followed: true,
             fullName: "Ser",
             status: "I'm person",
             location: { city: "Rome", country: "Italian" }
         }
     ]);
 };

  return (
    <div>
      {props.users.map(user => (
        <div key={user.id} className={classes.Users}>
            <div className={classes.UsersDetail}>
                <img className={classes.Photourl} src={user.photoUrl} alt="" />
                <span>{user.fullName}</span>
                <span>{user.status}</span>
                {
                    user.followed
                    ? <button onClick={ () => props.unfollow(user.id)}> Unfollow </button>
                    : <button onClick={ () => props.follow(user.id)}> Follow </button>
                }

            </div>
            <div className={classes.UsersDetailLocation}>
                <span>Country: {user.location.country}</span>
                <span>City: {user.location.city}</span>

            </div>

        </div>
      ))}
    </div>
  );
};
export default Users;