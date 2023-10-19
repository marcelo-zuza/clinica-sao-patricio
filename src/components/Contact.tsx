

const Contact = () => {
  return (
    <div>
        <h1 className="text-5xl text-center pt-20">Localização</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center my-8 mx-6">
            <div className="bg-white col-span-1">
                <p>Localização</p>
                <iframe className="w-80 h-80 md:w-96 md:h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.1923082423114!2d-47.40109082539437!3d-20.53931105757007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a6250c0f718f%3A0x8889f6a56e8e7818!2sR.%20Padre%20Anchieta%20-%20Centro%2C%20Franca%20-%20SP%2C%2014400-740!5e0!3m2!1spt-BR!2sbr!4v1694637059544!5m2!1spt-BR!2sbr"></iframe>
            </div>
            <div className="bg-green-100 col-span-1 rounded-xl my-8 px-4 py-4 md:p-24 text-center">
                <p className=" text-3xl py-1">Rua Padre Anchieta</p>
                <p className=" text-3xl py-1">CEP 11253-632</p>
                <p className=" text-3xl py-1">(11) 9797-9797</p>
                <p className=" text-3xl py-1">cep 11253-632</p>
            </div>
        </div>
    </div>
  )
}

export default Contact