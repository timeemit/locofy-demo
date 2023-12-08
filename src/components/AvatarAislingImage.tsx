import { FunctionComponent, useMemo, type CSSProperties } from "react";

type AvatarAislingImageType = {
  imageDimensions?: string;

  /** Style props */
  avatarAislingIconWidth?: CSSProperties["width"];
  avatarAislingIconHeight?: CSSProperties["height"];
  avatarAislingIconPosition?: CSSProperties["position"];
  avatarAislingIconMargin?: CSSProperties["margin"];
  avatarAislingIconTop?: CSSProperties["top"];
  avatarAislingIconLeft?: CSSProperties["left"];
  avatarAislingIconZIndex?: CSSProperties["zIndex"];
};

const AvatarAislingImage: FunctionComponent<AvatarAislingImageType> = ({
  imageDimensions,
  avatarAislingIconWidth,
  avatarAislingIconHeight,
  avatarAislingIconPosition,
  avatarAislingIconMargin,
  avatarAislingIconTop,
  avatarAislingIconLeft,
  avatarAislingIconZIndex,
}) => {
  const avatarAislingIconStyle: CSSProperties = useMemo(() => {
    return {
      width: avatarAislingIconWidth,
      height: avatarAislingIconHeight,
      position: avatarAislingIconPosition,
      margin: avatarAislingIconMargin,
      top: avatarAislingIconTop,
      left: avatarAislingIconLeft,
      zIndex: avatarAislingIconZIndex,
    };
  }, [
    avatarAislingIconWidth,
    avatarAislingIconHeight,
    avatarAislingIconPosition,
    avatarAislingIconMargin,
    avatarAislingIconTop,
    avatarAislingIconLeft,
    avatarAislingIconZIndex,
  ]);

  return (
    <img
      className="w-[97px] h-[97px] object-cover"
      alt=""
      src={imageDimensions}
      style={avatarAislingIconStyle}
    />
  );
};

export default AvatarAislingImage;
