import type { MouseEventHandler } from "react";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState
} from "recoil";

const navigationAtom = atom<{
  top?: {
    title?: JSX.Element;
    right?: {
      element: JSX.Element;
      onClick: MouseEventHandler<HTMLButtonElement>;
    };
    marginBottom?: Common.CSSPixelValue;
    hideBackButton?: true;
    backButtonCaution?: boolean;
    backDirectlyURL?: Route.Path;
    backButtonClickHandler?: VoidFunction;
  };
  bottom?: boolean;
}>({
  key: "navigationAtom",
  default: {
    top: undefined,
    bottom: false
  }
});

export const useNavigation = () => useRecoilState(navigationAtom);
export const useNavigationValue = () => useRecoilValue(navigationAtom);
export const useNavigationSetter = () => useSetRecoilState(navigationAtom);
