import { FunctionComponent, useMemo, type CSSProperties } from "react";

type AvatarAlexanderImageType = {
  imageDimensions?: string;

  /** Style props */
  avatarAlexanderIconWidth?: CSSProperties["width"];
  avatarAlexanderIconHeight?: CSSProperties["height"];
  avatarAlexanderIconPosition?: CSSProperties["position"];
  avatarAlexanderIconMargin?: CSSProperties["margin"];
  avatarAlexanderIconTop?: CSSProperties["top"];
  avatarAlexanderIconLeft?: CSSProperties["left"];
  avatarAlexanderIconZIndex?: CSSProperties["zIndex"];
};

const AvatarAlexanderImage: FunctionComponent<AvatarAlexanderImageType> = ({
  imageDimensions,
  avatarAlexanderIconWidth,
  avatarAlexanderIconHeight,
  avatarAlexanderIconPosition,
  avatarAlexanderIconMargin,
  avatarAlexanderIconTop,
  avatarAlexanderIconLeft,
  avatarAlexanderIconZIndex,
}) => {
  const avatarAlexanderIconStyle: CSSProperties = useMemo(() => {
    return {
      width: avatarAlexanderIconWidth,
      height: avatarAlexanderIconHeight,
      position: avatarAlexanderIconPosition,
      margin: avatarAlexanderIconMargin,
      top: avatarAlexanderIconTop,
      left: avatarAlexanderIconLeft,
      zIndex: avatarAlexanderIconZIndex,
    };
  }, [
    avatarAlexanderIconWidth,
    avatarAlexanderIconHeight,
    avatarAlexanderIconPosition,
    avatarAlexanderIconMargin,
    avatarAlexanderIconTop,
    avatarAlexanderIconLeft,
    avatarAlexanderIconZIndex,
  ]);

  return (
    <img
      className="w-[97px] h-[97px] object-cover"
      alt=""
      src={imageDimensions}
      style={avatarAlexanderIconStyle}
    />
  );
};

export default AvatarAlexanderImage;
