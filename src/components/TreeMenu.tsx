import { useState } from "react"

export default function TreeMenu({menuList}:any){
    return(
        <div>
            <MenuList menuList={menuList}/>
        </div>
    )
}

function MenuList({menuList}:any){
    return(
        <ul className="list-none">
            {
                menuList && menuList.length ?
                menuList.map((item:any)=>{
                    return <MenuItem menuItem={item} />
                })
                : null
            }
        </ul>
    )
}

function MenuItem({menuItem}:any){

    const [displayChildren, setDisplayChildren] = useState(false)

    function handleVisibility(){
        setDisplayChildren(old => !old)
    }

    return(
        <li className="">
            <div className="m-3 text-lg font-medium">
                {menuItem.label}
                {
                    menuItem && menuItem.children && menuItem.children.length?
                    <span onClick={handleVisibility}> {displayChildren ? "-" : "+"} </span>
                    :null
                }
            </div>
            {
                menuItem && menuItem.children && menuItem.children.length && displayChildren?
                <MenuList menuList={menuItem.children} />
                :null
            }
        </li>
    )
}