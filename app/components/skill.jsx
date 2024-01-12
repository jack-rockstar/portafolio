import Image from 'next/image'

export const CLIENTS = [
  { alt: 'client1', logo: '/image/nocion.png' },
  { alt: 'client2', logo: '/image/karlitos.png' },
  { alt: 'client3', logo: '/image/nocion.png' },
  { alt: 'client4', logo: '/image/nocion.png' }
]

export default function Skill() {
  return (
    <div className='w-full h-auto my-4 max-w-7xl'>
      <h1 className='my-4 text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-center text-white'>HABILIDADES</h1>
      <section className='relative'>
        <div
          className="overflow-hidden
          flex
          after:content['']
          after:from-transparent
          after:to-transparent
          after:bg-gradient-to-l
          after:right-0
          after:bottom-0
          after:top-0
          after:w-20
          after:z-10
          after:absolute

          before:content['']
          before:from-transparent
          before:to-transparent
          before:bg-gradient-to-r
          before:left-0
          before:top-0
          before:bottom-0
          before:w-20
          before:z-10
          before:absolute
        "
        >
          {[...Array(2)].map((arr) => (
            <div
              key={arr}
              className='flex flex-nowrap animate-slide '
            >
              {CLIENTS.map(({ alt, logo }) => (
                <div
                  key={alt}
                  className=' relative
                    w-[200px]
                    mx-20
                    shrink-0
                    flex
                    items-center
                  '
                >
                  <Image
                    src={logo}
                    alt={alt}
                    height={300}
                    width={350}
                    className='object-contain max-w-none'
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
