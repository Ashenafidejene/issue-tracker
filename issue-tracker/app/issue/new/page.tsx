'use client'

import React from 'react'
import { Text, TextArea ,TextField, Button } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useForm, Controller } from 'react-hook-form'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from 'axios'

interface IssueForm {
    title: String,
    description: String
}

function NewIssue() {

    const { register, control,handleSubmit } = useForm<IssueForm>();
const router = useRouter();
    return (
        <div className='pl-20 pt-20 text-lg'>
            <h1 className='py-2'>New Issue</h1>
            <form
           className='max-w-xl space-y-2'
            onSubmit={handleSubmit(async (data) => {
            await axios.post('/api/issues', data);
               router.push('/issue');
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