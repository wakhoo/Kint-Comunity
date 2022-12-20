import MainNavigation from "./MainNavigation";
import SideBar from "./SideBar";
import styles from "./Layout.module.css"

function Layout(props){
return <div>
    <MainNavigation/>
    <div className={styles.mainBox}>
    <SideBar 
    nick={props.user.nick} 
    twitter={props.user.twitter} 
    comment={props.user.comment}
    />
    <main className={styles.main}>
        {props.children}
    </main>
    </div>
</div>
}

export default Layout;