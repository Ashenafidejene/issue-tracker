'use client'

import React, { useState } from 'react'
import { TextField, Button,Callout,Text} from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { createIssueSchema } from '@/app/createIssueSchema'
import {z} from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage'
type issueForm = z.infer<typeof createIssueSchema>
interface IssueForm {
    title: String,
    description: String
}

function NewIssue() {
    const[error,setError]=useState('');
    const { register, control,handleSubmit ,formState:{errors}} = useForm<IssueForm>(
       { resolver:zodResolver(createIssueSchema)}
    );
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
                  <ErrorMessage>{errors.title?.message}</ErrorMessage>
                 <Controller
                    name='description'
                    control={control}
                    render={(field)=><SimpleMDE placeholder='Description' {...field} />}
                />
                <ErrorMessage >{errors.description?.message}</ErrorMessage>

                <Button className='!cursor-pointer duration-150 w-52 !h-8'>Submit</Button>
            </form>
        </div>
    )
}

export default NewIssue