import { Component } from '@angular/core';
import { ImageService } from './shared/img-service';
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: './img-detail.component.html',
  styleUrls: ['./img-detail.component.css']
})
export class ImageDetailComponent {
  image:any
  constructor(private imageService: ImageService,
    private route: ActivatedRoute) { }
  ngOnInit(){
    this.image = this.imageService.getImage(
      +this.route.snapshot.params['id']
    )
  }
}