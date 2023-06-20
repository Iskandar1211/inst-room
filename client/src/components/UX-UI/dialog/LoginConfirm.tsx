import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { FaRegUserCircle } from "react-icons/fa";

export function LoginConfirm() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <React.Fragment>
      <div
        onClick={handleOpen}
        className="h-[100%] flex items-center justify-center text-4xl bg-[#3B3B3B] w-[5rem] relative cursor-pointer hover:bg-[#F05A00]"
      >
        <FaRegUserCircle className="text-white" />
      </div>
      <Dialog open={open} handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader> </DialogHeader>
          <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen} />
        </div>
        <div className="flex justify-center">
          <DialogHeader>Введите код из СМС</DialogHeader>
        </div>
        <DialogBody divider>
          <div className="grid gap-6">
            <p>4 цифры</p>
            <Input label="Телефон" />
            <p>Код отправлен на номер:  <span>*********5612</span></p>
            <Button value='text'>Изменить</Button>
          </div>
        </DialogBody>
        <DialogFooter className="flex flex-col gap-[12px]">
          <Button
            variant="gradient"
            size="lg"
            color="indigo"
            onClick={handleOpen}
          >
            Войти
          </Button>
          <div className="text-[12px] flex gap-2 justify-end">
          Отправить код ещё раз можно через 00:59
          </div>
        </DialogFooter>
      </Dialog>
    </React.Fragment>
  );
}
