import Link from "next/link";
import styles from "./SideBar.module.css";
import { useSession, signIn, signOut} from "next-auth/react"

function SideBar(props){
    const { data: session } = useSession()
    if (session) {
      return (
        
    <div className={styles.box}>
    <div className={styles.user}>
        <img className={styles.profImg} src={session.user.image} alt="profile" width={80} height={80} />

       <p>{session.user.name}</p>
       <p><a href={`mailto:${session.user.email}`}>{session.user.email}</a></p>
        <>
          {/* Signed in as {session.user.email} <br /> */}
          <br></br>
          <button onClick={() => signOut()}>Sign out</button>
        </>
    </div>
    <div className={styles.nav}>
        <button><Link href={'/board/free'}>자유게시판</Link></button>
        <button><Link href={'/board/gaze'}>게이지 공유</Link></button>
        <button><Link href={'/board/together'}>함께 떠요</Link></button>
    </div>
</div> )
    }
    return (
        <div className={styles.box}>
        <div className={styles.user}>
            <img className={styles.profImg} src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="profile" width={80} height={80} />
    
           {/* <p>{props.nick}</p>
           <p><a href={`https://twitter.com/${props.twitter}`}>@{props.twitter}</a></p>
            <p>{props.comment}</p> */}
        <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in with Twitter</button>
      </>
      </div>
    <div className={styles.nav}>
        <button><Link href={'/board/free'}>자유게시판</Link></button>
        <button><Link href={'/board/gaze'}>게이지 공유</Link></button>
        <button><Link href={'/board/together'}>함께 떠요</Link></button>
    </div>
</div>
      )
}
export default SideBar;