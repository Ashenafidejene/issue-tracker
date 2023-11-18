'use client'

import React, { useState } from 'react'
import { TextField, Button,Callout} from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useForm, Controller } from 'react-hook-form'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from 'axios'
import { error } from 'console'

interface IssueForm {
    title: String,
    description: String
}

function NewIssue() {
    const[error,setError]=useState('');
    const { register, control,handleSubmit } = useForm<IssueForm>();
const router = useRouter();
    return (
        <div className='max-w-xl pl-20 pt-20 text-lg'>
            {error &&(<Callout.Root color='red'>
            <Callout.Text>{error} 
            </Callout.Text>
            </Callout.Root>)

            }
            <h1 className='py-2'>New Issue</h1>
            <form
           className=' space-y-2'
            onSubmit={handleSubmit(async (data) => {
                try {
                    
                    await axios.post('/api/issues', data);
                    router.push('/issue');
                } catch (error) {
                    setError('an expected error');
                }
  })}
>
                <TextField.Root>
                    <TextField.Input placeholder='Title' {...register('title')} />
                </TextField.Root>
                 {/* <SimpleMDE placeholder='Write your issue description...' />  */}
                 <Controller
                    name='description'
                    control={control}
                    render={(field)=><SimpleMDE placeholder='Description' {...field} />}
                />
                <Button className='!cursor-pointer duration-150 w-52 !h-8'>Submit</Button>
            </form>
        </div>
    )
}

export default NewIssue