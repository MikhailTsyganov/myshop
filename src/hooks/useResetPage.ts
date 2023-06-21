import { useEffect } from "react";

export function useResetPage(
  setPage: React.Dispatch<React.SetStateAction<number>> | null = null,
  device: string,
  limitByUrl: number
) {
  // Обнуление страницы при смене device
  useEffect(() => {
    setPage && setPage(1);
  }, [device]);

  // Обнуление страницы при отсутствии перерендера
  useEffect(() => {
    setPage && setPage(1);
  }, [limitByUrl]);
  return {};
}
