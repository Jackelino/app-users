import styles from '../assets/css/components/User.module.css'
export default function User({user}) {
    const {username, email} = user;
    return (
        <>
           <article className={styles.userArticle}>
               <img src="" alt="avatar" width="60" height="60" className={styles.userAvatar} />
               <div className={styles.bodyArticle}>
                   <h2 className="font-semibold text-slate-900 truncate pr-20">{username}</h2>
                   <small className="text-gray-700">{email}</small>
               </div>
               <div className={styles.userAction}>
                   <button className={styles.buttonAction}>🖌</button>
                   <button className={styles.buttonAction}>❌</button>
               </div>
           </article >
        </>
    )
}