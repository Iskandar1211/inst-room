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
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import { setLogin } from "../../../store/reducers/Registration";

interface Props {
  setIsLogin: (arg: boolean) => void;
  setIsRegistred: (arg: boolean) => void;
}

export function Login({ setIsLogin, setIsRegistred }: Props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const login = useAppSelector((state) => state.registration.login);

  const dispatch = useAppDispatch();

  const onLogin = () => {
    fetch("http://localhost:3009/login", {
      method: "POST",
      body: JSON.stringify(login),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        setIsLogin(true);
      }
    });
  };

  

  return (
    <React.Fragment >
      <div
        onClick={handleOpen}
        className="max-w-sm h-[60px] w-[70px] md:h-[100%] flex items-center justify-center text-4xl bg-[#3B3B3B] md:w-[5rem] relative cursor-pointer hover:bg-[#F05A00]"
      >
        <FaRegUserCircle className="text-white" />
      </div>
      <Dialog className="min-w-fit" open={open} handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader> </DialogHeader>
          <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen} />
        </div>
        <div className="flex justify-center">
          <DialogHeader>Вход</DialogHeader>
        </div>
        <DialogBody divider>
          <div className="grid gap-6">
            <Input
              value={login.phone}
              onChange={(e) =>
                dispatch(setLogin({ ...login, phone: e.target.value }))
              }
              label="Телефон"
            />
          </div>
        </DialogBody>
        <DialogFooter className="flex flex-col gap-[12px]">
          <div className="flex gap-4">
            <Button
              variant="gradient"
              size="lg"
              color="indigo"
              onClick={() => {
                handleOpen();
                onLogin();
              }}
            >
              ПОЛУЧИТЬ КОД
            </Button>
            <Button
              onClick={() => setIsRegistred(true)}
              variant="gradient"
              size="lg"
              color="green"
            >
              РЕГИСТРАЦИЯ
            </Button>
          </div>
          <div className="text-[12px] flex gap-2">
            <span>Нажимая на кнопку вы соглашаетесь </span>
            <b className="font-bold">на обработку ваших персональных данных</b>
          </div>
        </DialogFooter>
      </Dialog>
    </React.Fragment>
  );
}
