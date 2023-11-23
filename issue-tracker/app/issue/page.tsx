'use client'
import React from 'react'
import {Button} from '@radix-ui/themes'
import Link from 'next/link'
const IssuePage = () => {
  return (
    <div>
      <Button><Link href='/issue/new'>New Issue </Link></Button>
    </div>
  )
}

export default IssuePage
