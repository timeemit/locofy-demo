import { FunctionComponent, useMemo, type CSSProperties } from "react";

type AvatarMarkImageType = {
  imageDimensions?: string;

  /** Style props */
  avatarMarkIconWidth?: CSSProperties["width"];
  avatarMarkIconHeight?: CSSProperties["height"];
  avatarMarkIconPosition?: CSSProperties["position"];
  avatarMarkIconMargin?: CSSProperties["margin"];
  avatarMarkIconTop?: CSSProperties["top"];
  avatarMarkIconLeft?: CSSProperties["left"];
  avatarMarkIconZIndex?: CSSProperties["zIndex"];
};

const AvatarMarkImage: FunctionComponent<AvatarMarkImageType> = ({
  imageDimensions,
  avatarMarkIconWidth,
  avatarMarkIconHeight,
  avatarMarkIconPosition,
  avatarMarkIconMargin,
  avatarMarkIconTop,
  avatarMarkIconLeft,
  avatarMarkIconZIndex,
}) => {
  const avatarMarkIconStyle: CSSProperties = useMemo(() => {
    return {
      width: avatarMarkIconWidth,
      height: avatarMarkIconHeight,
      position: avatarMarkIconPosition,
      margin: avatarMarkIconMargin,
      top: avatarMarkIconTop,
      left: avatarMarkIconLeft,
      zIndex: avatarMarkIconZIndex,
    };
  }, [
    avatarMarkIconWidth,
    avatarMarkIconHeight,
    avatarMarkIconPosition,
    avatarMarkIconMargin,
    avatarMarkIconTop,
    avatarMarkIconLeft,
    avatarMarkIconZIndex,
  ]);

  return (
    <img
      className="w-[97px] h-[97px] object-cover"
      alt=""
      src={imageDimensions}
      style={avatarMarkIconStyle}
    />
  );
};

export default AvatarMarkImage;
