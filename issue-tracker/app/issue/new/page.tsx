'use client'

import React from 'react'
import { Text, TextArea ,TextField, Button } from '@radix-ui/themes'

import Link from 'next/link'
import { useForm, Controller } from 'react-hook-form'

interface IssueForm {
    title: String,
    description: String
}

function NewIssue() {

    const { register, control } = useForm<IssueForm>();

    /*
    <Controller
                    name='description'
                    control={ }
                />
                <SimpleMdeReact placeholder='Description' {...register('description')} />
    */

    return (
        <div className='pl-20 pt-20 text-lg'>
            <h1 className='py-2'>New Issue</h1>
            <div className='max-w-xl space-y-2'>
                <TextField.Root>
                    <TextField.Input placeholder='Title' {...register('title')} />
                </TextField.Root>
                 <TextArea placeholder='Write your issue description...' /> 
                <Button className='!cursor-pointer duration-150 w-52 !h-8'>Submit</Button>
            </div>
        </div>
    )
}

export default NewIssue