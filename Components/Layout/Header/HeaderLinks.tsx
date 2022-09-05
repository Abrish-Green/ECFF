import React from 'react'
import LinkComponent from './LinkComponent';

const LinkMenus = ['home','about', 'projects', 'publications', 'partners', 'contact us']

const HeaderLinks = () => {
  return (
    <div className="header-links px-10">
                  <ul className="list-none inline-flex gap-6 font-robo font-thin text-md tracking-wide">
                      {
                          LinkMenus ? LinkMenus.map((menu)=> <LinkComponent key={menu} Name={menu} />) : null
                     }
                      
                  </ul>
              </div>
  )
}

export default HeaderLinks
