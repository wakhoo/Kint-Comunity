import Link from "next/link";
import classes from "./MainNavigation.module.css"
function MainNavigation(){
    return <header className={classes.header}>

            <Link href={'/'}>Knitt Club</Link>
           

    </header>
}

export default MainNavigation;