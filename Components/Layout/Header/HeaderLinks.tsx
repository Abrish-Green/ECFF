import React from 'react'
import LinkComponent from './LinkComponent';

const LinkMenus = ['home','about', 'projects', 'publications', 'partners', 'contact us']

const HeaderLinks = () => {
  return (
    <div className="px-10 header-links">
                  <ul className="inline-flex gap-6 text-lg list-none font-robo">
                      {
                          LinkMenus ? LinkMenus.map((menu)=> <LinkComponent key={menu} Name={menu} />) : null
                     }
                      
                  </ul>
              </div>
  )
}

export default HeaderLinks
