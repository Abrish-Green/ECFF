import Link from 'next/link'
import React from 'react'

 const LinkComponent = ({ Name }: { Name: string }) => {
        let slugUrl = ''
        
        if (Name.indexOf(' ')) {
            slugUrl = Name.split(' ').join('-')
        }
        
        return (
            <>
                <li className='hover:underline'>
                   <Link href={`${slugUrl.toLowerCase()}`}>
                        <a>{ Name.toUpperCase()}</a>
                    </Link>
                </li>
            </>
        )
    }

export default LinkComponent
