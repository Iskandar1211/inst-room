import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export function RequestAcall() {
  
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <React.Fragment>
      <Button onClick={handleOpen} variant="text" color="amber">
        Заказать звонок
      </Button>
      <Dialog className="min-w-fit" open={open} handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader> </DialogHeader>
          <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen} />
        </div>
        <div className="flex justify-center"><DialogHeader>Заказать звонок</DialogHeader></div>
        <DialogBody divider>
          <div className="grid gap-6">
            <Input label="Имя" />
            <Input label="Телефон" />

            <Textarea label="Комментарий" />
          </div>
        </DialogBody>
        <DialogFooter className="flex flex-col gap-[12px]">
          <Button variant="gradient" size="lg" color="indigo" onClick={handleOpen}>
            ОТПРАВИТЬ
          </Button>
          <div className="text-[12px] flex gap-2">
            <span>Нажимая на кнопку вы соглашаетесь </span>
            <b className="font-bold">на обработку ваших персональных данных</b>
          </div>
        </DialogFooter>
      </Dialog>
    </React.Fragment>
  );
}
