import Link from 'next/link'


const Navbar = () => {
  return (
    <header>
    <nav className='bg-stone-100 p-3 flex'>
      <Link href='/'>
      <h1 className='text-xl'>Jokes App</h1>

      </Link>
    
    </nav>
    </header>
  )
}
export default Navbar

