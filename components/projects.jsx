import Firebase from '@/components/icons/firebase'
import NextJs from '@/components/icons/nextjs'
import Tailwind from '@/components/icons/tailwind'
import TypeScript from '@/components/icons/typescript'
import { GithubIcon, Pyramid } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

const projects = [
  {
    title: 'Clone notion',
    description: 'Un panel de control intuitivo y eficiente inspirado en Notion, Esta plataforma permite a los usuarios organizar, monitorear y administrar sus proyectos de manera sencilla y visual.',
    image: '/image/nocion.png',
    href: 'https://notion-clone-teal.vercel.app/',
    status: 'finalizado',
    tecnologies: [
      {
        name: 'NextJs',
        icon: NextJs
      },
      {
        name: 'Firebase',
        icon: Firebase
      },
      {
        name: 'Tailwind',
        icon: Tailwind
      }
    ]
  },
  {
    title: 'Karlitos Web',
    description: 'Un sistema donde se pueden realizar cotizaciones de seguros vehiculares con las compañias mas reconocidas del mercado.',
    image: '/image/karlitos.png',
    href: 'https://www.karlosseguros.com/',
    status: 'finalizado',
    tecnologies: [
      {
        name: 'NextJs',
        icon: NextJs
      },
      {
        name: 'Tailwind',
        icon: Tailwind
      }
    ]
  },
  {
    title: 'Ecommerce Admin',
    description: 'Una plataforma diseñada para administrar y vender productos en línea. Los usuarios pueden gestionar inventarios, procesar pedidos y configurar su tienda de manera eficiente, ofreciendo una experiencia de compra personalizada para los clientes.',
    image: '/image/ecommerce.png',
    status: 'desarrollo',
    href: null,
    tecnologies: [
      {
        name: 'NextJs',
        icon: NextJs
      },
      {
        name: 'Tailwind',
        icon: Tailwind
      },
      {
        name: 'ORM Prisma',
        icon: Pyramid
      },
      {
        name: 'Typescript',
        icon: TypeScript
      }
    ]
  }
]

export default function Projects() {
  return (
    <div className='w-full h-auto mt-4 mb-10 max-w-7xl'>
      <h1 className='my-4 text-4xl font-bold text-center text-white'>Proyectos</h1>
      <section className='grid justify-end w-full h-full grid-cols-1 gap-6 p-8 rounded-lg md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        {projects.map((e, index) => (
          <article key={index} className='flex flex-col justify-between w-full relative h-full max-h-[400px] p-1 group'>
            <section className='relative h-80'>
              <Image
                src={e.image}
                alt='Picture of the author'
                fill
                className='w-full h-full rounded-t-lg'
              />
            </section>
            <div className='absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg'>
              {
                  e.status === 'finalizado'
                    ? <Button variant='outline' asChild><Link href={e.href} target='_blank' rel='noreferrer'>Visitar Web</Link></Button>
                    : <Button variant='outline' className='cursor-not-allowed text-red-500 hover:text-red-500'> En curso</Button>
              }
            </div>

            <section className='flex flex-col h-full justify-between bg-[#7d7d7d20] gap-2 px-4 py-2 text-white rounded-b-lg '>
              <div className='flex flex-col py-1 text-center h-36'>
                <h3 className=''>{e.title}</h3>
                <small>{e.description}</small>
              </div>
              <div className='flex items-center justify-between py-2 border-t border-t-white'>
                <section className='flex gap-2'>
                  {
                    e.tecnologies.map(({ icon: Icon, name }, index) => (
                      <div key={index} title={name} className='p-2 transition-all rounded-full cursor-pointer hover:bg-white'>
                        <Icon className='w-7 h-7 text-white' />
                      </div>
                    ))
                  }
                </section>
                <section className='flex items-center justify-end w-full'>
                  <div className='p-2 text-center transition-all rounded-full hover:bg-white'>
                    <GithubIcon className='w-7 h-7' />
                  </div>
                </section>
              </div>
            </section>
          </article>
        ))}
      </section>

    </div>
  )
}
