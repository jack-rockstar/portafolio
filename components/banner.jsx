import { Button } from '@/components/ui/button'
import Image from 'next/image'
import ButtonEmail from './button-email'

export default function Banner() {
  return (
    <section className='flex flex-col w-full h-auto pt-24 gap-y-14 lg:gap-y-0 xl:gap-y-0'>
      <article className='flex  p-4 flex-col items-center justify-center h-full max-w-6xl m-auto md:flex-col lg:flex-row xl:flex-row'>
        <div className='flex flex-col w-full h-auto text-center md:text-center lg:text-left xl:text-left'>
          <span className='text-2xl font-bold text-white'>
            ¡Hola! Soy
          </span>
          <h1 className='text-[#3f77bd]  font-bold text-7xl'>Jack Najarro</h1>
          <span className='block mt-2 text-lg leading-8 text-white'>Desarrollador front-end apasionado por crear experiencias de usuario atractivas e intuitivas.
          </span>
          <div className='flex items-center justify-center my-4 lg:justify-start xl:justify-start gap-x-4'>
            <ButtonEmail />
            <Button variant='outline' className='text-white border-none bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-blue-300 0 hover:text-white/60'><a target='_blank' href={process.env.URL_CV} rel='noreferrer'>Descargar CV</a></Button>
          </div>
        </div>
        <div className='w-full h-full'>
          <picture className='relative flex items-center justify-end w-full p-0 mt-8 h-96'>
            <Image
              src='/image/student.svg'
              width={500}
              height={420}
              alt=''
              className='absolute -bottom-12 opacity-60'
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
      <article className='flex flex-col-reverse justify-center h-auto max-w-6xl m-auto md:flex-col lg:flex-row xl:flex-row gap-x-4'>
        <section className='flex flex-col px-2 items-center justify-center h-full w-full m-auto'>
          <h3 className='block my-4 text-4xl font-bold text-center text-white'>SOBRE MI</h3>
          <span className='w-full text-lg leading-8 text-center text-white'>Cursando la carrera de Ingeniería Informática, comprometido con el trabajo que se me encomienda. La búsqueda constante de aprendizaje me motiva a mantenerme al tanto de las últimas tendencias tecnológicas y a descubrir nuevas formas de mejorar.

            Dispuesto a aprender nuevas tecnologías y a enfrentar los desafíos que estas conllevan.
          </span>
        </section>

      </article>
    </section>
  )
}
