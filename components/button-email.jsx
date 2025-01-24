'use client'
import { sendEmail } from '@/actions/send'
import Spinner from '@/components/spinner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { useTransition } from 'react'
import toast from 'react-hot-toast'

export default function ButtonEmail() {
  const [isPending, startTransition] = useTransition()

  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.target

    const formData = new FormData(form)
    const formValues = Object.fromEntries(formData.entries())
    startTransition(() => {
      sendEmail({ correo: formValues.correo })
        .then(() => toast.success('Correo Enviado'))
        .catch(() => toast.error('No se pudo enviar el correo'))
    })
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className='text-white border-none bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-blue-300 0 hover:text-white/60' variant='outline'>Enviar por correo</Button>
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <div className='grid gap-4'>
          <div className='space-y-2'>
            <h4 className='font-medium leading-none'>Ingrese su correo</h4>
          </div>
          <form onSubmit={onSubmit} className='grid gap-2'>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Input
                name='correo'
                type='email'
                placeholder='example@example.com'
                className='col-span-2 h-8'
                required
              />
              <Button disabled={isPending}>
                {
                  isPending
                    ? <Spinner />
                    : 'Enviar'
                }
              </Button>
            </div>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  )
}

// export default function ButtonEmail() {
//   const onClick = () => sendEmail()
//   return (
//     <>
//       <Button onClick={onClick} variant='outline' className='text-white border-none bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-blue-300 0 hover:text-white/60'>Enviar por correo</Button>
//     </>
//   )
// }
