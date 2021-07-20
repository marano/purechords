import { getNoteName } from './notes';

export default function Note({ index }) {
  return getNoteName(index) || null;
}
