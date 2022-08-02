import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  livros: any;
  bookservice!: BookService;

  constructor( private _BookService: BookService) { 

    this._BookService = this._BookService;

  }

  ngOnInit(): void {

    this.livros = this._BookService.getBooks().subscribe((data => {
      this.livros = data;
      console.log(this.livros);
    }))
  }
}
