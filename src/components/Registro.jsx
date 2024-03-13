import SocialButtom from "./SocialButtom"

const Registro = () => {
  return (
    <>
      <div className="container border border-light-subtle rounded-5 bg-white p-5">
        <h1 className="fs-1">Crea una cuenta</h1>
        <div className="d-flex gap-3 justify-content-center m-3">
          <SocialButtom icon="fa-brands fa-facebook fa-3x"/>
          <SocialButtom icon="fa-brands fa-github fa-3x"/>
          <SocialButtom icon="fa-brands fa-linkedin fa-3x"/>
        </div>
        <p>O usa tu email para registrarte</p>
      </div>
    </>
  )
}

export default Registro