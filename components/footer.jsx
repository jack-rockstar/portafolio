export default function Footer() {
  return (
    <footer className='flex w-full bg-[#7d7d7d20]'>
      <div className='w-full max-w-screen-xl p-4 mx-auto md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0'>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>About</a>
            </li>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>Privacy Policy</a>
            </li>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>Licensing</a>
            </li>
            <li>
              <a href='#' className='hover:underline'>Contact</a>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span className='block text-sm text-white sm:text-center'>© 2025 <a href='https://flowbite.com/' className='hover:underline'>JackDev</a>. Todos los derechos reservados.</span>
      </div>
    </footer>

  )
}
