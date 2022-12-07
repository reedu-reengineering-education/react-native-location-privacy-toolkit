import { atom } from "jotai";
import { LayoutAnimation } from "react-native";

const omniBoxState = atom(false);

export const omniBoxExpanded = atom(
  (get) => get(omniBoxState),
  (_get, set, newState: boolean) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    set(omniBoxState, newState);
  }
);
