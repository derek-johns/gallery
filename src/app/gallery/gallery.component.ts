import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { ImageService } from '../img/shared/img-service';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
	title = 'Recent Photos'
	@Input() filterBy?: string = 'all'
	visibleImages: any[] = [];
	constructor(private imageService: ImageService){
		this.visibleImages = this.imageService.getImages();
	}
	ngOnChanges() {
		this.visibleImages = this.imageService.getImages();
	}
}