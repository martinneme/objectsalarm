"use client"

import Slider from "./slider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareWhatsapp, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import PaymentModal from "./paymentModal";
import { useState } from "react";




export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <main className="main">
      {/* Presentación del producto */}
      <section className="section-title">
       
      </section>
      <section className="centerPage">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48 ">
        <h1 className="mb4 text-4xl font-bold uppercase text-white sm:text-5xl md:mb-8 md:text-6xl ">OBJECTS ALARM</h1>
        <p className="max-w-md leading-relaxed text-white-500 xl:text-lg"><b>Mantene tus objetos seguros y a la vista</b> </p> 
        <p> Evita olvidos y posibles hurtos con una sola solución</p>
   
        </div>
        <section className="slider-section">
          <Slider />
        </section>
      </section>
      {/* Slider del producto */}

      <section className="bg-100 py-12">
  <div className="container mx-auto cl-4 px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Características del Producto</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl text-description font-semibold mb-4">¿Te preocupa perder tus pertenencias importantes?</h3>
        <p className="text-gray-700"> Nuestro innovador sistema de localización de objetos es la solución que necesitas. Este dispositivo consta de dos cajas compactas y discretas: una emisora y una receptora. Simplemente coloca la emisora en el objeto que deseas mantener a salvo, como tus llaves, cartera o mochila, y lleva la receptora contigo.</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl text-description  font-semibold mb-4">Funcionalidad Inteligente</h3>
        <p className="text-gray-700">Si el objeto se aleja más allá de una distancia segura, el dispositivo emite una alerta sonora instantánea, avisándote al momento y permitiéndote actuar antes de que sea demasiado tarde. </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl  text-description font-semibold mb-4">Versátil y Fácil de Usar 3</h3>
        <p className="text-gray-700">Ideal para proteger tus pertenencias en cualquier situación: cuando viajas, en el trabajo, o incluso en casa. Con un diseño intuitivo, basta con encender ambos dispositivos para que funcionen automáticamente.</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl text-description font-semibold mb-4">Durabilidad y Confiabilidad</h3>
        <p className="text-gray-700">Fabricado con materiales de alta calidad, este sistema está diseñado para resistir el uso diario, asegurándote años de tranquilidad y seguridad.</p>
      </div>
    </div>
  </div>
  <div className="bg-white shadow-lg rounded-lg p-6 closeCardInfo">
        <h3 className="text-xl text-description  font-semibold mb-4">No dejes que la preocupación por perder tus cosas arruine tu día. </h3>
        <h3>¡Conseguí tu localizador de objetos y mantene tus pertenencias siempre a tu alcance!</h3>
      </div>
</section>

      {/* Botón de compra */}

      <section className="purchase-button">
        <button className="buttonGraf" onClick={openModal}>Comprar</button>
        <PaymentModal isOpen={isModalOpen} onRequestClose={closeModal} />
      </section>

      {/* Datos de contacto */}
      <section className="text-center py-8 border-t border-gray-200 w-full">
        <h2 className="text-2xl font-bold mb-4">Contacto</h2>
        <p className="text-lg mb-2">mibox@objectsalarm.com</p>
        <p className="text-lg">+54 1143 456 7890</p>
        <div className="mt-6 flex justify-center space-x-4">
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="contact-button whatsapp">
            <FontAwesomeIcon icon={faSquareWhatsapp} />
          </a>
          <a href="https://www.facebook.com/miempresa" target="_blank" rel="noopener noreferrer" className="contact-button facebook">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://twitter.com/miempresa" target="_blank" rel="noopener noreferrer" className="contact-button twitter">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="mailto:contacto@miempresa.com" className="contact-button email">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
      </section>
    </main>

  );
}
