import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/book';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  livro!: Book;

  constructor() {}

  ngOnInit(): void {}
}

  
