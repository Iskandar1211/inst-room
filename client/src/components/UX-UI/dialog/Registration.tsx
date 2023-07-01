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
import { setRegistration } from "../../../store/reducers/Registration";

interface Props {
  setIsRegistred: (arg: boolean) => void;
  setIsLogin: (arg: boolean) => void;
}

export function Registration({ setIsRegistred, setIsLogin }: Props) {
  const [open, setOpen] = React.useState(true);

  const registration = useAppSelector(
    (state) => state.registration.registration
  );

  const dispatch = useAppDispatch();

  const handleOpen = () => {
    setOpen(!open);
  };

  const onRegistration = () => {
    fetch("http://localhost:3009/registration", {
      method: "POST",
      body: JSON.stringify(registration),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        setIsRegistred(false);
      }
    });
  };

  return (
    <React.Fragment>
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
          <DialogHeader>Регистрация</DialogHeader>
        </div>
        <DialogBody divider>
          <div className="grid gap-6">
            <Input
              value={registration.lastName}
              onChange={(e) =>
                dispatch(
                  setRegistration({ ...registration, lastName: e.target.value })
                )
              }
              label="Фамилия"
            />
            <Input
              value={registration.name}
              onChange={(e) =>
                dispatch(
                  setRegistration({ ...registration, name: e.target.value })
                )
              }
              label="Имя"
            />
            <Input
              type="tel"
              value={registration.phone}
              onChange={(e) =>
                dispatch(
                  setRegistration({ ...registration, phone: e.target.value })
                )
              }
              label="Телефон"
            />
            <Input
              type="email"
              value={registration.email}
              onChange={(e) =>
                dispatch(
                  setRegistration({ ...registration, email: e.target.value })
                )
              }
              label="Электронная почта"
            />
            <Input
              type="password"
              value={registration.password}
              onChange={(e) =>
                dispatch(
                  setRegistration({ ...registration, password: e.target.value })
                )
              }
              label="Пароль"
            />
            <Input
              value={registration.confirmPassword}
              onChange={(e) =>
                dispatch(
                  setRegistration({
                    ...registration,
                    confirmPassword: e.target.value,
                  })
                )
              }
              type="password"
              label="Подтвердите пароль"
            />
          </div>
        </DialogBody>
        <DialogFooter className="flex flex-col gap-[12px]">
          <div className="flex gap-3">
            <Button
              variant="gradient"
              size="lg"
              color="indigo"
              onClick={() => {
                handleOpen();
                onRegistration();
              }}
            >
              РЕГИСТРАЦИЯ
            </Button>
            <Button
              onClick={() => {
                setIsLogin(true);
                handleOpen();
              }}
              variant="gradient"
              size="lg"
              color="amber"
            >
              Логин
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
