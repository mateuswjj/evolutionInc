import { Component, OnInit } from '@angular/core';
import { AnimalsService } from './_services/animals-service.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit{  
  items$ = new BehaviorSubject<AnimalsComponent[]>([]);

  constructor(public animalService: AnimalsService){  
  }

  ngOnInit() {
  }

  searchAnimal(animal:any){
    const input = document.getElementById("input") as HTMLInputElement
    const inputValue = input.value
    this.animalService.getAnimalsByName(inputValue).subscribe((res) => console.log())

  }
//TODO create enviroments
}
