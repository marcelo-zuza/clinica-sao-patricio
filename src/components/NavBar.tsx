import Logo from '../assets/img/saude.png'
import { useState } from 'react'

const NavBar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const openMenu = () => {
        if(isOpen == false){
            setIsOpen(true)
        }else{
            setIsOpen(false)
        }
    }

  return (
    <div>
        <header className="absolute hrefp-0 z-10">
            <div className="fixed bg-white w-full px-3 md:px-4 py-0 bord border-b">
                <div className="container items-center mx-auhref">
                    {/* Mobile Navbar */}
                    <div className="grid grid-cols-6 gap-x-0 font-oswald md:hidden">
                        <div className='col-span-1 -mr-10'>
                            <a href="/">
                                <img className="w-12 md:w-96px" src={Logo} alt="logo" />
                            </a>
                        </div>
                        <div className="col-span-3">
                            <a href="/"><p className='text-3xl font-bold -mx-4 py-3 px-0 md:py-6 md:px-4'>Clinica São Patrício</p></a>
                        </div>
                        
                        <div className="col-start-6 md:hidden text-black text-3xl grid justify-items-end">
                            <div className="text-black col-span-1">
                                <button className="" onClick={openMenu}><i className="fas fa-bars"></i></button>
                            </div>    
                        </div>
                        {isOpen &&
                            <div className="grid grid-cols-6 col-start-6">
                                <ul className="font-bold -mx-6">
                                    <li className="text-lg px-4">
                                        <a onClick={openMenu} href="/sobre"><p>Sobre</p></a>
                                    </li>
                                    <li className="text-lg px-4">
                                        <a onClick={openMenu} href="/equipe"><p>Equipe</p></a>
                                    </li>
                                    <li className="text-lg px-4">
                                        <a onClick={openMenu} href="/contato"><p>Contato</p></a>
                                    </li>

                                </ul>
                            </div>
                                }
                    </div>

                    {/* Full navbar */}
                    <div className="hidden md:grid grid-cols-9 py-4 font-oswald tracking-widest">
                            <div className="col-start-1 col-end-4">
                                <div className="flex flex-row">
                                <a href="/">
                                    <img className="bg-white w-16" src={Logo} alt="logo" />
                                </a>
                                <div className="px-4 py-3 text-3xl font-bold">
                                <a href="/"><p className="text-black font-oswald tracking-wide text2">Clinica São Patrício</p></a>
                                </div>

                                </div>
                            </div>

                        <div className="col-start-6 pl-28 py-4">
                            <div className="items-end text-black font-bold hidden md:flex">
                                <nav className="flex-1">
                                    <ul className="flex flex-row pl-10">
                                        <li className="px-3">
                                            <a className="hover:underline duration-700 text-xl" href="/sobre"><p>Sobre</p></a>
                                        </li>
                                        <li className="px-3">
                                            <a className="hover:underline duration-700 text-xl" href="/equipe"><p>Equipe</p></a>
                                        </li>

                                        <li className="px-3">
                                            <a className="hover:underline duration-700 text-xl" href="/contato"><p>Contato</p></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    </div>
  )
}

export default NavBar