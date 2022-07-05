export interface BannerItem {
	type: "image" | "cta";
	link: string;

}

export interface ImageBannerItem extends BannerItem {
	type: "image";
	src: string;
	aspectRatio: "square" | "rectangle";
}

export interface CTABannerItem extends BannerItem {
	type: "cta";
	title: string;
	button: string;
}

export type GeneralBannerItem = ImageBannerItem | CTABannerItem;
