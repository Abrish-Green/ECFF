import React from 'react'
import LinkComponent from './LinkComponent';
import { BiMenuAltRight } from 'react-icons/bi'
const LinkMenus = ['home','about', 'projects', 'publications', 'partners', 'contact us']
const Menu = () => {
    return (
      <>
       <ul className="flex-col gap-6 text-lg list-none md:flex-row md:inline-flex font-robo">
                      {
                          LinkMenus ? LinkMenus.map((menu)=> <LinkComponent key={menu} Name={menu} />) : null
                     }
                      
        </ul>
      </>
    )
  }
const HeaderLinks = () => {
  const [open, setOpen] = React.useState(true)
  return (
    <>
      <div className="hidden px-10 md:inline-flex">
         <Menu />
      </div>
     
      <button onClick={()=>{setOpen(!open)}} className="md:hidden">
          <BiMenuAltRight className="relative text-4xl right-2" color="white" />
      </button>
      {open ? <div className="absolute block w-full h-auto p-2 text-white bg-black md:hidden top-20 menus">
        <Menu />
      </div> : null

      }
      
    </>
  
  )
}

export default HeaderLinks
