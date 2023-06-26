import React from "react";
import {
  Breadcrumbs,
  Button,
  Card,
  CardBody,
  Collapse,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { IHistoryOfOrder } from "../types/Model";
import { IProduct } from "../types/Model";
import { CardAdminPanel } from "../components/UX-UI/cards/CardAdminPanel";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { addToProduct } from "../store/reducers/Products";
import AccordionHistoryBuyAdmin from "../components/UX-UI/accordion/AccordionHistoryBuyAdmin";

export const AdminPage = () => {
  const [HistoryProducts, setHistoryProducts] = useState<IHistoryOfOrder[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);

  const productAdmin = useAppSelector(
    (state) => state.productsAdmin.productsAdmin
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch("http://localhost:3009/products")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3009/products")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, [productAdmin]);

  const [product, setProduct] = useState<IProduct>({
    id: crypto.randomUUID(),
    name: "",
    img: "",
    price: 0,
    inStock: true,
    detailed: "",
    isNew: true,
    total: 0,
    quantity: 0,
    categories: "",
  });

  const onAddProduct = () => {
    fetch("http://localhost:3009/create-product", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setProduct({
      id: crypto.randomUUID(),
      name: "",
      img: "",
      price: 0,
      inStock: true,
      detailed: "",
      isNew: true,
      total: 0,
      quantity: 0,
      categories: "",
    });
    dispatch(addToProduct(product));
  };


  useEffect(() => {
    fetch("http://localhost:3009/history-of-orders")
      .then((response) => response.json())
      .then((historyBuys) => setHistoryProducts(historyBuys));
  }, []);

  const [userInfo, setUserInfo] = useState(false);

  const userLinksActive = !userInfo ? "text-[#F05A00]" : "text-white";
  const userInfoLinksActive = userInfo ? "text-[#F05A00]" : "text-white";
  const userLinksStyle = [
    "h-[72px] flex items-center cursor-pointer justify-center ",
    userLinksActive,
  ].join(" ");
  const userLinksStyleUserInfo = [
    "h-[72px] flex items-center cursor-pointer justify-center ",
    userInfoLinksActive,
  ].join(" ");
  const [deleted, setDeleted] = useState(false);
  const [edit, setEdit] = useState(false);
  // collaps
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);

  const [openLast, setOpenLast] = useState(false);
  const toggleOpenLast = () => {
    setOpenLast((cur) => !cur);
    setDeleted(false);
    setEdit(true);
  };

  const [openThird, setOpenThird] = useState(false);
  const toggleOpenThird = () => {
    setOpenThird((cur) => !cur);
    setDeleted(true);
    setEdit(false);
  };

  return (
    <div className="bg-[#CBCBCB]">
      <div className="lg:px-32 md:px-7 flex flex-col gap-6 pt-4 pb-16">
        <Breadcrumbs>
          <Link className="opacity-60" to="/">
            Главная
          </Link>
          <Link to="/profile-page">Личный кабинет</Link>
        </Breadcrumbs>
        <div className="text-4xl text-start">Личный кабинет</div>
        <div className="flex md:flex-row flex-col gap-[20px]">
          <div className="flex-1 flex flex-col gap-[20px]">
            <div className="bg-[#212526] flex flex-col rounded-[5px]">
              <p
                onClick={() => setUserInfo(false)}
                className={userLinksStyle}
                style={{ borderBottom: "1px solid #3B3B3B" }}
              >
                Заказы
              </p>
              <p
                onClick={() => setUserInfo(true)}
                className={userLinksStyleUserInfo}
                style={{ borderBottom: "1px solid #3B3B3B" }}
              >
                Админ Панель
              </p>
            </div>
          </div>
          <div className="flex-[3] bg-white p-4">
            {!userInfo ? (
              HistoryProducts.length === 0 ? (
                <div className="flex justify-center items-center">
                  История пусто
                </div>
              ) : (
                HistoryProducts.map((product) => (
                  <AccordionHistoryBuyAdmin product={product} />
                ))
              )
            ) : (
              <div className="">
                <div className="grid grid-rows-1 gap-3">
                  <React.Fragment>
                    <Button
                      className="w-[100%] bg-green-500"
                      onClick={toggleOpen}
                    >
                      Добавление товара
                    </Button>
                    <Collapse open={open}>
                      <Card className="my-4 mx-auto ">
                        <CardBody className="flex flex-col gap-3">
                          <Input
                            onChange={(e) =>
                              setProduct({ ...product, name: e.target.value })
                            }
                            value={product.name}
                            type="text"
                            label="Имя"
                          />
                          <Input
                            onChange={(e) =>
                              setProduct({ ...product, img: e.target.value })
                            }
                            value={product.img}
                            type="text"
                            label="Картинка"
                          />
                          <Input
                            onChange={(e) =>
                              setProduct({
                                ...product,
                                price: parseInt(e.target.value),
                              })
                            }
                            value={product.price}
                            type="number"
                            label="Цена"
                          />
                          <Textarea
                            onChange={(e) =>
                              setProduct({
                                ...product,
                                detailed: e.target.value,
                              })
                            }
                            value={product.detailed}
                            label="Описание"
                          />
                          <Select
                            onChange={(value) => {
                              if (!value) return;
                              setProduct({
                                ...product,
                                categories: value,
                              });
                            }}
                            value={product.categories}
                            label="Выберите категорию"
                          >
                            <Option value="Малярные товары">
                              Малярные товары
                            </Option>
                            <Option value="Электрооборудование">
                              Электрооборудование
                            </Option>
                            <Option value="Спецодежда">Спецодежда</Option>
                            <Option value="Для дома и дачи">
                              Для дома и дачи
                            </Option>
                          </Select>
                          <Button onClick={onAddProduct} color="green">
                            Добавить
                          </Button>
                        </CardBody>
                      </Card>
                    </Collapse>
                  </React.Fragment>
                  <React.Fragment>
                    <Button
                      className="w-[100%] bg-orange-500"
                      onClick={toggleOpenLast}
                    >
                      Изменение товара
                    </Button>
                    <Collapse open={openLast}>
                      <Card className="my-4 mx-auto ">
                        <CardBody className="grid md:grid-cols-2 grid-cols-1 gap-2">
                          {products.map((product) => (
                            <CardAdminPanel
                              edit={edit}
                              deleted={deleted}
                              key={product.id}
                              product={product}
                            />
                          ))}
                        </CardBody>
                      </Card>
                    </Collapse>
                  </React.Fragment>
                  <React.Fragment>
                    <Button
                      className="w-[100%] bg-red-500"
                      onClick={toggleOpenThird}
                    >
                      Удаление товара
                    </Button>
                    <Collapse open={openThird}>
                      <Card className="my-4 mx-auto ">
                        <CardBody className="grid md:grid-cols-3 grid-cols-1 gap-2">
                          {products.map((product) => (
                            <CardAdminPanel
                              edit={edit}
                              deleted={deleted}
                              key={product.id}
                              product={product}
                            />
                          ))}
                        </CardBody>
                      </Card>
                    </Collapse>
                  </React.Fragment>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
