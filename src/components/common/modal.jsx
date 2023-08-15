export const Modal = ({ isOpen, onClick, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50  backdrop-blur-sm flex justify-center items-center">
        <div className="w-3/4 lg:w-1/2 flex flex-col">
          <button
            className="text-white text-xl place-self-end"
            onClick={onClick}
          >
            x
          </button>
          <div className="bg-white rounded-md">{children}</div>
        </div>
      </div>
    </>
  );
};
