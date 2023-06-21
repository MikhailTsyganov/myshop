import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

export function useUrlSearch(
  numberOfGoodsInRequest: number,
  setOptionSize: React.Dispatch<
    React.SetStateAction<{
      device: string;
      numberOfGoodsInRequest: number;
    }>
  >
) {
  let [searchParams, setSearchParams] = useSearchParams();

  const limitByUrl = Number(searchParams.get("limit"));

  useEffect(() => {
    //Добавляет limit когда пользователь вручную изменил limit в url
    if (limitByUrl > 0) {
      setOptionSize((prevState) => ({
        ...prevState,
        numberOfGoodsInRequest: limitByUrl,
      }));
    }
    // Добавляет limit в уже зарендеренный компонент (пр.: при клике на лого)
    if (limitByUrl === 0) {
      setSearchParams(`limit=${numberOfGoodsInRequest}`);
    }
  }, [limitByUrl]);

  // Добавляет limit в url при изменении числа товаров в запросе (оно изменяется при изменении device)
  useEffect(() => {
    if (numberOfGoodsInRequest !== 0) {
      setSearchParams(`limit=${numberOfGoodsInRequest}`);
    }
  }, [numberOfGoodsInRequest]);

  return { limitByUrl };
}
