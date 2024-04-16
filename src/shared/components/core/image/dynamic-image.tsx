import { FC } from "react";
import Image, { ImageProps } from "next/image";
import clsx from "clsx";

export interface IDynamicImageProps {
	name: string;
	isLazy?: boolean;
	priority?: boolean;
	alt: string;
	sizes?: string;
	blurDataURLDark?: string;
	blurDataURLLight?: string;
	className?: string;
	width: number;
	height: number;
	ext: string;
}
export const DynamicImage: FC<IDynamicImageProps> = ({
	name,
	alt,
	width,
	height,
	sizes,
	blurDataURLDark,
	blurDataURLLight,
	ext,
	priority,
	className,
}) => {
	const additionalProps: Partial<ImageProps> = {
		...(blurDataURLLight
			? { blurDataURL: blurDataURLLight, placeholder: "blur" }
			: {}),
		...(blurDataURLDark
			? { blurDataURL: blurDataURLDark, placeholder: "blur" }
			: {}),
		...(priority ? { priority: true } : { loading: "lazy" }),
	};

	return (
		<>
			<Image
				src={`${name}.${ext}`}
				alt={alt}
				{...additionalProps}
				width={width}
				height={height}
				sizes={sizes && "(max-width: 768px) 100%"}
				className={clsx(className)}
			/>
		</>
	);
};
