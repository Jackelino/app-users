import styles from '../assets/css/components/User.module.css'
import {useUserStore} from "../stores/useUserStore.js";
export default function User({user}) {
    // DATA
    const {username, email} = user;
    const {removeUser} = useUserStore();

    // METHODS
    const handleRemoveUser = ({user}) => {
        removeUser({user});
    }
    return (
        <>
           <article className={styles.userArticle}>
               <img src="" alt="avatar" width="60" height="60" className={styles.userAvatar} />
               <div className={styles.bodyArticle}>
                   <h2 className="font-semibold text-slate-900 truncate pr-20 dark:text-white">{username}</h2>
                   <small className="text-gray-700 dark:text-gray-300">{email}</small>
               </div>
               <div className={styles.userAction}>
                   <button className={styles.buttonAction}>🖌</button>
                   <button className={styles.buttonAction} onClick={()=> handleRemoveUser({user})}>❌</button>
               </div>
           </article >
        </>
    )
}