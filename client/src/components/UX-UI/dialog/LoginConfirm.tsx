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
import { setLoginConfirm } from "../../../store/reducers/Registration";

interface Props {
  setIsLoginConfirm: (arg: boolean) => void;
}

export function LoginConfirm({ setIsLoginConfirm }: Props) {
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => setOpen(!open);

  const loginConfirm = useAppSelector(
    (state) => state.registration.loginConfirm
  );

  const dispatch = useAppDispatch();

  const onLoginConfirm = () => {
    fetch("http://localhost:3009/login-confirm", {
      method: "POST",
      body: JSON.stringify(loginConfirm),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        setIsLoginConfirm(true);
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
          <DialogHeader>Введите код из СМС</DialogHeader>
        </div>
        <DialogBody divider>
          <div className="grid gap-6">
            <p>4 цифры</p>
            <Input
            type='password'
              value={loginConfirm.code}
              onChange={(e) =>
                dispatch(
                  setLoginConfirm({ ...loginConfirm, code: e.target.value })
                )
              }
              label="Потдвердите код"
            />
            <p>
              Код отправлен на номер: <span></span>
            </p>
            {/* <Button value='text'>Изменить</Button> */}
          </div>
        </DialogBody>
        <DialogFooter className="flex flex-col gap-[12px]">
          <Button
            variant="gradient"
            size="lg"
            color="indigo"
            onClick={() => {
              handleOpen();
              onLoginConfirm();
            }}
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
