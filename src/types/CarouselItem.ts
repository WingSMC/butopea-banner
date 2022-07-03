export interface CarouselItem {
	type: "image" | "cta";
	link: string;

}

export interface ImageCarouselItem extends CarouselItem {
	type: "image";
	src: string;
	aspectRatio: "square" | string;
}

export interface CTACarouselItem extends CarouselItem {
	type: "cta";
	title: string;
	button: string;
}

export type GeneralCarouselItem = ImageCarouselItem | CTACarouselItem;
