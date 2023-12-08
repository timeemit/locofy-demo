import { FunctionComponent, useMemo, type CSSProperties } from "react";

type AvatarBenPlaceholderImageType = {
  avatarBenPlaceholderImage?: string;

  /** Style props */
  avatarBenPlaceholderIconWidth?: CSSProperties["width"];
  avatarBenPlaceholderIconHeight?: CSSProperties["height"];
  avatarBenPlaceholderIconPosition?: CSSProperties["position"];
  avatarBenPlaceholderIconMargin?: CSSProperties["margin"];
  avatarBenPlaceholderIconTop?: CSSProperties["top"];
  avatarBenPlaceholderIconLeft?: CSSProperties["left"];
  avatarBenPlaceholderIconZIndex?: CSSProperties["zIndex"];
};

const AvatarBenPlaceholderImage: FunctionComponent<
  AvatarBenPlaceholderImageType
> = ({
  avatarBenPlaceholderImage,
  avatarBenPlaceholderIconWidth,
  avatarBenPlaceholderIconHeight,
  avatarBenPlaceholderIconPosition,
  avatarBenPlaceholderIconMargin,
  avatarBenPlaceholderIconTop,
  avatarBenPlaceholderIconLeft,
  avatarBenPlaceholderIconZIndex,
}) => {
  const avatarBenPlaceholderIconStyle: CSSProperties = useMemo(() => {
    return {
      width: avatarBenPlaceholderIconWidth,
      height: avatarBenPlaceholderIconHeight,
      position: avatarBenPlaceholderIconPosition,
      margin: avatarBenPlaceholderIconMargin,
      top: avatarBenPlaceholderIconTop,
      left: avatarBenPlaceholderIconLeft,
      zIndex: avatarBenPlaceholderIconZIndex,
    };
  }, [
    avatarBenPlaceholderIconWidth,
    avatarBenPlaceholderIconHeight,
    avatarBenPlaceholderIconPosition,
    avatarBenPlaceholderIconMargin,
    avatarBenPlaceholderIconTop,
    avatarBenPlaceholderIconLeft,
    avatarBenPlaceholderIconZIndex,
  ]);

  return (
    <img
      className="w-[97px] h-[97px] object-cover"
      alt=""
      src={avatarBenPlaceholderImage}
      style={avatarBenPlaceholderIconStyle}
    />
  );
};

export default AvatarBenPlaceholderImage;
