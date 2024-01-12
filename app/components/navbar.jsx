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
    <nav className='absolute top-0 flex justify-around w-full px-16 py-6 text-white transition-all bg-transparent '>
      <div>
        <ul className='flex max-w-3xl px-20 py-2.5 text-xl font-bold rounded-lg cursor-pointer text-white bg-[#7d7d7d20] gap-x-10'>
          {
            MENU.map((item, index) => (
              <li key={index} className='border-2 border-transparent hover:border-b-black'>{item.name}</li>
            ))
          }
        </ul>
      </div>

    </nav>
  )
}
