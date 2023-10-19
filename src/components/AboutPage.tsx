import CasaAntiga1 from '../assets/img/casaAntiga1.jpg'
import MedicoAtendendo from '../assets/img/medicoAtendendo1.jpg'
import Familia2 from '../assets/img/familia2.jpg'

const AboutPage = () => {
  return (
    <div>
        <div className="py-20 md:pt-32 mx-2 md:mx-12 bg-green-100">
            <h1 className="text-6xl py-6 text-center">SOBRE</h1>
            <p className="text-2xl text-center">Nossa história é sobre amor em cuidar de nossos pacientes e proporcioná-los a possibilida de viver bem</p>
            <div className="grid md:grid-cols-2 px-4 md:py-8">
                <div className="col-span-1">
                    <img src={CasaAntiga1} alt="" className="p-4 h-68 w-86" />
                </div>
                <div className="col-span-1 flex items-center">
                    <p className="md:text-xl text-base text-justify py-4 px-10">Tudo começou em uma modesta casa, onde a equipe dedicada transformou cada cômodo em um espaço de cura. A simplicidade da casa criou uma atmosfera familiar e aconchegante. Os pacientes eram recebidos com sorrisos calorosos, e cada visita era uma experiência personalizada, onde as necessidades individuais eram compreendidas e tratadas com empatia.</p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 px-4 md:py-8">
                    <div className="col-span-1 flex items-center order-last md:order-first">
                        <p className="md:text-xl text-base text-justify py-4 px-10">Com o tempo, a reputação da Clínica São Patrício se espalhou, atraindo uma equipe diversificada de profissionais de saúde e voluntários apaixonados. A casa simples se tornou um local de cura e esperança, onde a comunidade confiava para obter cuidados excepcionais.  </p>
                    </div>
                    <div className="col-span-1">
                        <img src={MedicoAtendendo} alt="" className="p-4" />
                    </div>
            </div>
            <div className="grid md:grid-cols-2 px-4 md:py-8">
                <div className="col-span-1">
                    <img src={Familia2} alt="" className="p-4 rounded-full object-cover" />
                </div>
                <div className="col-span-1 flex items-center">
                    <p className="text-justify md:text-xl text-base py-4 px-10">Embora tenha começado com um modesto começo, a Clínica São Patrício cresceu em tamanho e escopo, mas manteve a essência do acolhimento e da dedicação aos pacientes. A história dessa clínica é um testemunho de como uma ideia modesta e um coração compassivo podem transformar vidas e comunidades para melhor.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPage