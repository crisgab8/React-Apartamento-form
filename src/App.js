import { useState } from "react"
import './App.css';

import Button from './components/Button';
import Input from './components/Input';
import Logo from './components/Logo';


function App() {
  const [ResidenceForm, setResidenceForm] = useState({
    name: " ",
    phoneNumber: " ",
    email: " ",
    residence: " ",
    apartment: " ",
  });

  const handleSubmitForm = () => {
    console.log(ResidenceForm)

    setResidenceForm(v => ({
      ...v,
      name: '',
      phoneNumber: '',
      email: '',
      residence: '',
      apartment: '',
    }))
  }

  return (
    <div className="flex flex-col w-[100%]container">


      <header className="App-header">

        <Logo />
        <h2>
          Bienvenido a mi APPartamento
        </h2>
      </header>

      <form class="px-[25px] md:px-[200px]">

        <div className=" grid sm:grid-cols-1  md:grid-cols-3 gap-3">
          <Input
            name="nombre"
            label="Nombre"
            placeholder="nombre del residente"
            type="text"
            value={ResidenceForm.name}
            onChange={e => setResidenceForm(v => ({ ...v, name: e.target.value }))}
          />

          <Input
            name="telefono"
            label="Teléfono"
            placeholder="telefono del residente"
            type="tel"
            value={ResidenceForm.phoneNumber}
            onChange={e => setResidenceForm(v => ({ ...v, phoneNumber: e.target.value }))}
          />

          <Input
            name="correo"
            label="Correo electrónico"
            placeholder="Correo electrónico"
            type="email"
            value={ResidenceForm.email}
            onChange={e => setResidenceForm(v => ({ ...v, email: e.target.value }))}
          />

        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            name="residencial"
            label="Nombre del residencial"
            placeholder="Nombre del residencial"
            value={ResidenceForm.residence}
            onChange={e => setResidenceForm(v => ({ ...v, residence: e.target.value }))}
          />

          <Input
            name="apartamento"
            label="Número del apartamento"
            placeholder="Número del apartamento"
            value={ResidenceForm.apartment}
            onChange={e => setResidenceForm(v => ({ ...v, apartment: e.target.value }))}
          />
        </div>

        <div className="py-6 grid justify-center">
          <button className="bg-purple-700  hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full">
            <Button onClick={handleSubmitForm}>Registrarme</Button>
          </button>
        </div>


      </form>







    </div>
  );
}

export default App;
