import React, { FC } from "react";
import {
	DynamicImage,
	IDynamicImageProps,
} from "@/shared/components/core/image/dynamic-image";

export const DynamicISvg: FC<Omit<IDynamicImageProps, "ext">> = (props) => {
	return <DynamicImage {...props} ext={"svg"} />;
};
