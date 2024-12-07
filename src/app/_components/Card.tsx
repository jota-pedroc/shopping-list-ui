import React from 'react'

type Props = {children: React.ReactNode}

export default function Card({children}: Props) {
  return (
    <div className='rounded-md bg-slate-500 p-2'>
        {children}
    </div>
  )
}