import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Banner() {
  return (
    <section className='w-full h-auto pt-24 mt-16'>
      <article className='flex items-center justify-center max-w-6xl m-auto h-96'>
        <div className='flex flex-col w-full h-auto'>
          <span className='text-2xl font-bold text-white'>
            ¡Hola!
          </span>
          <h1 className='text-[#3f77bd] text-left font-bold text-7xl'>Jack Najarro</h1>
          <span className='block mt-2 text-lg leading-8 text-white'>Desarrollador front-end apasionado por crear experiencias de usuario atractivas e intuitivas.
          </span>
          <div className='flex items-center justify-start my-4 gap-x-4'>
            <Button variant='outline' className='text-white border-none bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-blue-300 0 hover:text-white/60'>Enviar por correo</Button>
            <Button variant='outline' className='text-white border-none bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-blue-300 0 hover:text-white/60'>Descargar CV</Button>
          </div>
        </div>
        <div className='relative w-full h-full'>
          <picture className='flex items-center justify-end w-full h-auto'>
            <Image
              src='/image/student.svg'
              width={500}
              height={420}
              alt=''
              className='absolute right-0 -bottom-12 opacity-60'
            />
            <Image
              src='/image/home-right.webp'
              width={520}
              height={620}
              alt=''
              className='z-[99999] absolute bottom-0'
            />
          </picture>

        </div>
      </article>
      <article className='flex justify-center h-auto max-w-6xl m-auto my-10 gap-x-4 '>
        <section className='w-full h-auto'>
          <Image
            src='/image/header.svg'
            width={420}
            height={450}
            alt=''
            className=''
          />
        </section>
        <section className='w-full h-auto text-left'>
          <h3 className='my-4 text-4xl font-bold text-center text-white'>SOBRE MI</h3>
          <span className='text-lg leading-8 text-white'>Graduado en Ingeniería Informática, comprometido con el trabajo que se me encomienda. La búsqueda constante de aprendizaje me motiva a mantenerme al tanto de las últimas tendencias tecnológicas y a descubrir nuevas formas de mejorar.

            Dispuesto a aprender nuevas tecnologías y a enfrentar los desafíos que estas conllevan.
          </span>
        </section>

      </article>
    </section>
  )
}
