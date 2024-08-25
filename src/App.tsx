import { useState } from "react";
import { Button } from "./ui/button/button";
import { Input } from "./ui/input/input";
import { Modal } from "./components/modal/modal";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <>
      <div className="flex justify-between max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold mb-4">Input:</h1>
          <Input
            type="text"
            variant="default"
            placeholder="Ismingizni kiriting"
          />
          <Input
            type="password"
            variant="outlined"
            placeholder="Password kiriting"
          />
          <Input
            type="email"
            variant="filled"
            placeholder="Emailingizni kiriting"
          />
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold mb-4">Button:</h1>
          <Button variant="primary">Yuklanmoqda...</Button>
          <Button variant="secondary">Yuborish</Button>
          <Button variant="danger">O'chirish</Button>
          <Button variant="success">Saqlash</Button>
        </div>

        <div className="">
          <h1 className="text-xl font-bold mb-4">Modal:</h1>

          <div className="max-w-md mx-auto p-4">
            <Button variant="primary" onClick={openModal}>
              Modalni ochish
            </Button>

            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              title="Reusable Modal"
              size="large"
              footer={
                <div className="flex justify-end space-x-2">
                  <Button variant="danger" onClick={closeModal}>
                    Bekor qilish
                  </Button>
                  <Button variant="success" onClick={closeModal}>
                    Saqlash
                  </Button>
                </div>
              }
            >
              <div className="space-y-5">
                <Input
                  className="w-full"
                  variant="outlined"
                  placeholder="Ismingizni kiriting"
                  type="text"
                />
                <Input
                  className="w-full"
                  variant="outlined"
                  placeholder="Emailingizni kiriting"
                  type="email"
                />
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
