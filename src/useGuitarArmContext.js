import { useContext } from 'react';
import GuitarArmContext from './GuitarArmContext';

export default function useGuitarArmContext() {
  return useContext(GuitarArmContext);
}
