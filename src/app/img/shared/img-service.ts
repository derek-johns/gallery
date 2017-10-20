import { Injectable } from '@angular/core'

@Injectable()
export class ImageService{
	visibleImages = [];
	getImages(){
		return this.visibleImages = IMAGES.slice(0);
	}
	getImage(id: number){
		return IMAGES.slice(0).find(image => image.id == id)
	}
}

const IMAGES = [
	{'id': 1, 'category': 'Nike', 'name': 'Nike Lebron Soldier 11', 'price': '$129.99', 'url': 'assets/img/bron-soldier.jpeg'},
	{'id': 2, 'category': 'Jordan', 'name': 'Jordan Retro 4', 'price': '$174.99', 'url': 'assets/img/jordan4.jpg'},
	{'id': 3, 'category': 'Nike', 'name': 'Nike PG 1', 'price': '$109.99', 'url': 'assets/img/paul-george.jpeg'},
	{'id': 4, 'category': 'Nike', 'name': 'Nike Kyrie 3', 'price': '$119.99', 'url': 'assets/img/kyrie3.jpeg'},
	{'id': 5, 'category': 'Adidas', 'name': 'Adidas Harden Vol. 1', 'price': '$139.99', 'url': 'assets/img/harden1.jpeg'},
	{'id': 6, 'category': 'Nike', 'name': 'Nike Air Foamposite Pro', 'price': '$229.99', 'url': 'assets/img/foam.jpeg'},
	{'id': 7, 'category': 'Adidas', 'name': 'Adidas Crazy 8', 'price': '$105.99', 'url': 'assets/img/crazy8.jpeg'},
	{'id': 8, 'category': 'Adidas', 'name': 'Adidas Harden Vol. 1', 'price': '$139.99', 'url': 'assets/img/harden1-2.jpeg'},
	{'id': 9, 'category': 'Under-Armour', 'name': 'Under Armour Curry 2.5', 'price': '$84.99', 'url': 'assets/img/steph.jpeg'},
	{'id': 10, 'category': 'Under-Armour', 'name': 'Under Armour Curry 2.5', 'price': '$84.99', 'url': 'assets/img/curry.jpg'},
	{'id': 11, 'category': 'Jordan', 'name': 'Jordan Retro 6', 'price': '$209.99', 'url': 'assets/img/jordan6.jpeg'},
	{'id': 12, 'category': 'Jordan', 'name': 'Jordan Retro 11 Low', 'price': '$277.99', 'url': 'assets/img/jordan11.jpeg'},
	{'id': 13, 'category': 'Jordan', 'name': 'Jordan Retro 12', 'price': '$189.99', 'url': 'assets/img/jordan12.jpg'},
	{'id': 14, 'category': 'Nike', 'name': 'Kevin Durant Nike KD 9', 'price': '$149.99', 'url': 'assets/img/kd.jpeg'},
	{'id': 15, 'category': 'Nike', 'name': 'Nike Kobe Mentality', 'price': '$119.99', 'url': 'assets/img/kobe.jpeg'},
	{'id': 16, 'category': 'Nike', 'name': 'Nike Lebron 14', 'price': '$124.99', 'url': 'assets/img/lebron14.jpeg'},
]