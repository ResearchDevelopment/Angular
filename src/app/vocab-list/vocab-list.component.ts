import { Component, OnInit } from '@angular/core';
import { VocabsService } from '../vocabs.service';
import { Vocabulary } from '../types';

@Component({
  selector: 'app-vocab-list',
  templateUrl: './vocab-list.component.html',
  styleUrls: ['./vocab-list.component.css']
})
export class VocabListComponent implements OnInit {
  vocabs: Vocabulary[] = [];
  constructor(private vocabServbice: VocabsService) {

  }

  ngOnInit(): void {
    this.vocabServbice.getVocabs()
    .subscribe(vocabs=>this.vocabs=vocabs);
  }

}
