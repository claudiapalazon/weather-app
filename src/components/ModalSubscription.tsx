interface IModal {
  setShowModal: (showModal: boolean) => void;
}

// This modal appears when you get the limit of +5 searchs or refresh location
export const ModalSubscription = ({ setShowModal }: IModal) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div>
          <div className="modal-header">
            <div className="modal-title">
              Suscríbete para acceder a todo el contenido
            </div>
          </div>
          <div className="modal-body">
            Has superado el límite de búsquedas/actualizaciones gratuitas. Para
            acceder a búsquedas ilimitadas, suscríbete en el siguiente enlace
          </div>
        </div>

        <div className="modal-footer">
          <button
            className="close-button button-footer"
            onClick={() => {
              setShowModal(false);
              localStorage.removeItem("showModalNumber");
            }}
          >
            Reiniciar (pruebas)
          </button>
          <button
            className="subscribeMe button-footer"
            onClick={() =>
              window.open("https://www.meteologica.com/", "_blank")
            }
          >
            Suscribirme
          </button>
        </div>
      </div>
    </div>
  );
};
