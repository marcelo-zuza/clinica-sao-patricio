import Dra1 from '../assets/img/Dra1.jpg'
import Dra2 from '../assets/img/Dra2.jpg'
import Dra3 from '../assets/img/Dra3.jpg'
import Dra4 from '../assets/img/Dra4.jpg'
import Dr1 from '../assets/img/Dr1.jpg'
import Dr2 from '../assets/img/Dr2.jpg'

const Team = () => {
  return (
    <div className="py-20 md:pt-32 mx-2 md:mx-12 bg-green-100">
    <h1 className="text-6xl py-6 text-center">EQUIPE</h1>
      <p className="text-2xl text-center">Nossa equipe é composta por médicos, psiquiatras e psicólogos para proporcional um atendimento completo em saúde mental</p>
      <div className="grid grid-cols-1 md:grid-cols-3 py-6 justify-items-center rounded-xl">
        <div className="p-8 col-span-1 grid justify-items-center">
          <img src={Dra1} alt="" className='w-72 h-72 object-cover  rounded-full' />
          <h3 className='text-xl text-center py-2 font-semibold'>Dra. Maria da Graça</h3>
          <p className="text-justify text-xl">Médica Geriátra, especialista em cuidado do idoso e prevenção de doenças cardiovasculares. Formada pela Universidade Federal de Minas Gerais.</p>
        </div>
        <div className="p-8 col-span-1 grid justify-items-center">
          <img src={Dra2} alt="" className='w-72 h-72 object-cover rounded-full' />
          <h3 className='text-xl text-center py-2 font-semibold'>Dra. Mariana Gonçalves</h3>
          <p className="text-justify text-xl">Psicóloga especialista em saúde da mente na terceira idade e qualidade de vida após os 70. Formada pela Universidade Federal do Espírito Santo.</p>
        </div>
        <div className="p-8 col-span-1 grid justify-items-center">
          <img src={Dr1} alt="" className='rounded-full w-72 h-72 object-cover' />
          <h3 className='text-xl text-center py-2 font-semibold'>Dr. Fernando Souza</h3>
          <p className="text-justify text-xl">Ortopedista e Fisioterapeuta, especialista em recuperação de traumas oriundos de artrite e artrose na terceira idade. Formado pela PUC-MG</p>
        </div>

        <div className="p-8 col-span-1 grid justify-items-center">
          <img src={Dra3} alt="" className='w-72 h-72 object-cover rounded-full' />
          <h3 className='text-xl text-center py-2 font-semibold'>Dra. Sarah Manielli</h3>
          <p className="text-justify text-xl">Terapeuta Ocupacional especialista em Terapia Ocupacional na terceira idade. Conhecida pela entrevista dada à Revista Veja de agosto-2022. Formada pela Universidade de São Paulo (USP), Campus Ribeirão Preto.</p>
        </div>
        <div className="p-8 col-span-1 grid justify-items-center">
          <img src={Dr2} alt="" className='w-72 h-72 object-cover rounded-full' />
          <h3 className='text-xl text-center py-2 font-semibold'>Dr. Mario Manielli</h3>
          <p className="text-justify text-xl">Renomado Cirurgião Plástico especializado em cirurgias na terceira idade. Formado pela Universidade de Federal de São Carlos.</p>
        </div>
        <div className="p-8 col-span-1 grid justify-items-center">
          <img src={Dra4} alt="" className='w-72 h-72 object-cover rounded-full' />
          <h3 className='text-xl text-center py-2 font-semibold'>Dra. Sebastiana da Graça</h3>
          <p className="text-justify text-xl">Médica Neurologista especialista em saúde mental e demência na terceira idade. Formada pela Universidade Federal do Mato Grosso do Sul. </p>
        </div> 
      </div>

      <div className="flex"></div>

    </div>
  )
}

export default Team