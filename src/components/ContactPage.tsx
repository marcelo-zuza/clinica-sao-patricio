
const ContactPage = () => {
  return (
    <div>
        <div className="py-20 md:pt-32 mx-2 md:mx-12 bg-green-100">
            <h1 className="text-6xl py-6 text-center">CONTATO</h1>
            <p className="text-2xl text-center">Fale conosco e agende sua consulta</p>
            <form className="px-20">
                      <div className="py-3">
                        <div className="grid grid-cols-1 py-2">
                          <input className="text-base form-input rounded-xl" type="text" name="name"placeholder="Insira seu nome" />
                        </div>
                        <div className="grid grid-cols-1 py-2">
                        <input className="text-base form-input rounded-xl" type="email" name="email" placeholder="Insira seu email" />
                        </div>

                      </div>
                      <div className="grid grid-cols-1">
                        <textarea className="bg-whitetext-base form-textarea rounded-xl" rows={6} name="message"placeholder="mensagem"></textarea>
                      </div>

                      <div className="flex justify-center pt-4">
                        <button className="bg-gray-400 text-white text-2xl px-8 py-4 rounded-full hover:bg-white hover:text-gray-400 duration-700 hover:px-14" type="submit">Enviar</button>
                      </div>
                </form>
        </div>
    </div>
  )
}

export default ContactPage