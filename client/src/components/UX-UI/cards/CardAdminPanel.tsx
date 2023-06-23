import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IProduct } from "../../../types/Model";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import {
  Button,
  Checkbox,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import { useAppDispatch } from "../../../store/hooks/hooks";
import { addToProduct } from "../../../store/reducers/Products";

interface Props {
  product: IProduct;
  deleted: boolean;
  edit: boolean;
}
export const CardAdminPanel = ({ product, deleted, edit }: Props) => {
  const [editing, setEditing] = useState(false);
  const [editProduct, setEditProduct] = useState<IProduct>({
    id: crypto.randomUUID(),
    name: product.name,
    img: product.img,
    price: product.price,
    inStock: product.inStock,
    detailed: product.detailed,
    isNew: product.isNew,
    total: 0,
    quantity: 0,
    categories: product.categories,
  });
  const dispatch = useAppDispatch();

  const onEditProduct = () => {
    fetch(`http://localhost:3009/edit-product/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(editProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(addToProduct(product))
    setEditProduct({
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
    setEditing(false);
  };

  const onDeleteProduct = () => {
    fetch(`http://localhost:3009/delete-product/${product.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(addToProduct(product))

  };

  return !editing ? (
    <div className="bg-white flex ml-3 gap-1 flex-col justify-between border px-2 py-2 w-[280px] h-[380px]">
      <div className="flex justify-between ">
        <div>
          {product.isNew ? (
            <span className="bg-[#180A3E] text-white px-1 py-1">Новинка</span>
          ) : (
            ""
          )}
        </div>
        <div className="flex text-2xl">
          {edit && (
            <FiEdit
              onClick={() => setEditing(true)}
              className="text-orange-500 cursor-pointer hover:text-orange-700"
            />
          )}
          {deleted && (
            <MdDeleteForever onClick={onDeleteProduct} className="text-3xl text-red-500 cursor-pointer hover:text-red-700" />
          )}
        </div>
      </div>
      <Link to={`/card-product/${product.id}`} className="flex justify-center">
        <img
          className="w-[210px] h-[185px]"
          src={product.img}
          alt={product.name}
        />
      </Link>
      <Link
        to={`/card-product/${product.id}`}
        className="hover:text-[#F05A00] cursor-pointer"
      >
        {product.name}
      </Link>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <p className="font-bold">{product.price} ₽</p>
          <p className="text-[#DEDBDB] line-through text-[14px]">
            {product.isNew === false &&
              product.price + (product.price / 100) * 5}
          </p>
        </div>
        <div className=" w-fit flex gap-3 items-center">
          <p>
            {product.inStock ? (
              <span className="text-[#126935] text-[12px] flex gap-2 items-center justify-center">
                <AiOutlineCheck /> в наличии
              </span>
            ) : (
              <span className="text-red-500">под заказ</span>
            )}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col gap-2">
      <Input
        onChange={(e) =>
          setEditProduct({ ...editProduct, name: e.target.value })
        }
        value={editProduct.name}
        type="text"
        label="Имя"
      />
      <Input
        onChange={(e) =>
          setEditProduct({ ...editProduct, img: e.target.value })
        }
        value={editProduct.img}
        type="text"
        label="Картинка"
      />
      <Input
        onChange={(e) =>
          setEditProduct({
            ...editProduct,
            price: parseInt(e.target.value),
          })
        }
        value={editProduct.price}
        type="number"
        label="Цена"
      />
      <div className="flex items-center">
        <Checkbox
          onChange={(e) => {
            const isChecked = e.target.checked;
            setEditProduct({ ...editProduct, inStock: isChecked });
          }}
        />
        В наличие
      </div>
      <Textarea
        onChange={(e) =>
          setEditProduct({
            ...editProduct,
            detailed: e.target.value,
          })
        }
        value={editProduct.detailed}
        label="Описание"
      />
      <div className="flex items-center">
        <Checkbox
          onChange={(e) => {
            const isChecked = e.target.checked;
            setEditProduct({ ...editProduct, isNew: isChecked });
          }}
        />
        Новинка
      </div>
      <Select
        onChange={(value) => {
          if (!value) return;
          setEditProduct({
            ...editProduct,
            categories: value,
          });
        }}
        value={editProduct.categories}
        label="Выберите категорию"
      >
        <Option value="Малярные товары">Малярные товары</Option>
        <Option value="Электрооборудование">Электрооборудование</Option>
        <Option value="Спецодежда">Спецодежда</Option>
        <Option value="Для дома и дачи">Для дома и дачи</Option>
      </Select>
      <Button onClick={onEditProduct} color="amber">
        Изменить
      </Button>
    </div>
  );
};
