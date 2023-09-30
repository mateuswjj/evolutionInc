import { Component, OnInit } from '@angular/core';
import { AnimalsServiceService } from './_services/animals-service.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit{

  constructor(public animalService: AnimalsServiceService){
    
  }

  ngOnInit() {
   this.animalService.getAnimalsByName("Lion").subscribe((res) => console.log(res))
  }

  searchAnimal(animal:any){
    console.log(animal)
  }
//TODO create enviroments
}
