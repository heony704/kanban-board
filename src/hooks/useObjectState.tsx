import { useState } from 'react';

export default function useObjectState<T>(
  object: T,
): [T, (key: string, value: number | string | Date) => void] {
  const [cardDetail, setCardDetail] = useState(object);

  const changeCardDetail = (key: string, value: number | string | Date) => {
    setCardDetail(prev => ({ ...prev, ...{ [key]: value } }));
  };

  return [cardDetail, changeCardDetail];
}
