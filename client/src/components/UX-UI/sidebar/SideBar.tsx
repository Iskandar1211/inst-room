import { Card, List, ListItem } from "@material-tailwind/react";
import { RequestAcall } from "../dialog/RequestAcall";
import { Link } from "react-router-dom";
import { RxInstagramLogo } from "react-icons/rx";
import { SlSocialVkontakte } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";

interface Props {
  resultBuy: number;
  setShowSidebar: (arg: boolean) => void;
}

export default function Sidebar({ resultBuy, setShowSidebar }: Props) {
  return (
    <Card className="fixed top-[21vh] bg-[#171a1c] left-0 h-fit w-[75vw] max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 text-white">
      <List>
        <ListItem className="text-white flex justify-center py-2 border-t-0 border-b-2">
          Время работы: 10:00-20:00
        </ListItem>
      </List>
      <List className="text-white flex flex-col items-center justify-center py-2 border-t-0 border-b-2">
        <span className="text-white">+7 495 120-32-14</span>
        <RequestAcall />
      </List>
      <List className="text-white flex flex-row justify-center gap-4 py-4 border-t-0 border-b-2">
        <p className="text-[16px]">Товаров на сумму</p>
        <p className="text-[18px]">{resultBuy} &#8381;</p>
      </List>
      <List className="text-white text-center border-t-0 border-b-2">
        <Link
          onClick={() => setShowSidebar(false)}
          className="hover:text-[#F05A00]"
          to="/about"
        >
          О компании
        </Link>
        <Link
          onClick={() => setShowSidebar(false)}
          className="hover:text-[#F05A00]"
          to="/stocks-page"
        >
          Акции
        </Link>
        <Link
          onClick={() => setShowSidebar(false)}
          to="/contacts"
          className="hover:text-[#F05A00]"
        >
          Контакты
        </Link>
        <Link
          onClick={() => setShowSidebar(false)}
          className="hover:text-[#F05A00]"
          to="/new-product"
        >
          Новинки
        </Link>
      </List>
      <List className="flex flex-row justify-center gap-2 py-2 border-t-0 border-b-2">
        <RxInstagramLogo className="bg-white cursor-pointer text-3xl rounded-full px-1 hover:text-[#D52574]" />
        <SlSocialVkontakte className="bg-white cursor-pointer text-3xl rounded-full px-1 hover:text-[#0272F1]" />
        <FiFacebook className="bg-white cursor-pointer text-3xl rounded-full px-1 hover:text-[#6781B8]" />
      </List>
    </Card>
  );
}
