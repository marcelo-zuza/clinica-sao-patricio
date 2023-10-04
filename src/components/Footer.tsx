import Logo from '../assets/img/saude.png'


const Footer = () => {
  return (
    <div>
        <footer className="bg-green-100 py-6 border-t">
            <div className="flex justify-center">
            <img src={Logo} className="w-16 content-center" alt="" />

            </div>
            <p className="text-center py-1 text-2xl font-extrabold">Clinica São Patrício</p>

            <div className="flex flex-row justify-center">
              <a href="#" className="px-2 hover:underline text-center border-r border-black font-bold">Fale Conosco</a>
              <a href="#" className="px-2 hover:underline text-center font-bold">Guia Médico</a>
            </div>

            <p className="text-center text-base py-1 font-extrabold">Todos os direitos reservados - 2023 </p>
        </footer>
    </div>
  )
}

export default Footer