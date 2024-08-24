"use client"
import React from 'react';
import Modal from 'react-modal';

// Configura el modal para que el elemento principal de la aplicación sea accesible

// Define la interfaz para las propiedades del componente
interface PaymentModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Payment Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
      <button
          onClick={onRequestClose}
          className="mt-1 w-10 bg-white-500 text-white py-2 rounded-md hover:bg-red-600 buttonClose"
        >
          X
        </button>
        <h5 className="svelte-1ghw4p8 extra-large-2sq8m4 modalTitle" >Tarjeta de débito o crédito</h5>
          <div>
            <label htmlFor="card-number" className="svelte-azord5 margin-bottom-1u-SJa labelPay">Número de Tarjeta</label>
            <input
              type="text"
              id="card-number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className='CardPanel'>
          <div>
            <label htmlFor="expiry-date" className="block text-sm font-medium labelPay">Fecha de Expiración</label>
            <input
              type="text"
              id="expiry-date"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="MM/AA"
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block text-sm font-medium labelPay">CVV</label>
            <input
              type="text"
              id="cvv"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="123"
            />
          </div>
          </div>
        <form className="space-y-4">
          <div>
          <label htmlFor="card-number" className="svelte-azord5 margin-bottom-1u-SJa labelPay">Nombre del titular como aparece en la tarjeta</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Juan Pérez"
            />
          </div>
          <div>
          <label htmlFor="card-number" className="svelte-azord5 margin-bottom-1u-SJa labelPay">Documento del titular</label>
          <div className='CardPanel'>
          <select className="document"><option value="DNI" className="svelte-p4q4i8">DNI</option><option value="CI" className="svelte-p4q4i8">Cédula</option><option value="LC" className="svelte-p4q4i8">L.C.</option><option value="LE" className="svelte-p4q4i8">L.E.</option><option value="Otro" className="svelte-p4q4i8">Otro</option></select>
          <input
              type="document"
              id="document"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="99999999 "
            />
          </div>
          </div>
          <h6 className="svelte-1ghw4p8 extra-large-2sq8m4 modalTitle" >Completa tu información</h6>
          <div>
            <label htmlFor="email" className="block text-sm font-medium labelPay">E-mail</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="juan.perez@example.com"
            />
          </div>
       
          <button
            type="submit"
            className="w-80 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 payButton"
          >
            
            Pagar
          </button>
        </form>
       
      </div>
    </Modal>
  );
};

export default PaymentModal;
