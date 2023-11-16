'use client ';
import { TextField,TextArea, Button } from '@radix-ui/themes'
import React from 'react'
const newIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      {/* <TextField.Root>
      <TextField.Input placeholder="TITLE" />
      </TextField.Root>
      <TextArea placeholder="Description" /> */}
      <form className='block'>
        <input type='email' placeholder='title' style={{border:'2px solid "black'}}/>
        <textarea placeholder='Description '></textarea>
      </form>
      <Button>Submite new issue</Button>
      
    </div>
  )
}

export default newIssuePage
