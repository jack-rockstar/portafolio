const MENU = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Skill',
    path: '/skill'
  },
  {
    name: 'Projects',
    path: '/projects'
  }
]

export default function Navbar() {
  return (
    <nav className='absolute top-0 items-center justify-center w-full px-2 py-6 text-white transition-all bg-transparent'>
      <ul className='flex justify-center gap-x-10 py-2.5 px-20 w-full m-auto max-w-max text-xl font-bold rounded-lg cursor-pointer text-white bg-[#7d7d7d20]'>
        {
            MENU.map((item, index) => (
              <li key={index} className='border-2 border-transparent hover:border-b-black'>{item.name}</li>
            ))
          }
      </ul>
    </nav>
  )
}
