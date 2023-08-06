export default function User({user}) {
    const {username, email} = user;
    return (
        <>
           <div>
               {username}
           </div>
        </>
    )
}