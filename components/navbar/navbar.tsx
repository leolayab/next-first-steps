import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"

const navItems = [
    {path:"/pricing", text:"Pricing"},
    {path:"/about", text:"About"},
    {path:"/contact", text:"Contact"},
]

export const NavBar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
        <Link className="flex items-center" href={'/'}>
            <HomeIcon className="mr-2"></HomeIcon>
            <span>Home</span>
        </Link>
        <div className="flex flex-1"></div>
        {
            navItems.map( navItem =>(
                <ActiveLink key={navItem.path} {...navItem}></ActiveLink>
            ) )
        }
        

    </nav>
  )
}
