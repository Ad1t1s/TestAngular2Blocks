import { Injectable } from '@angular/core';

@Injectable()
export class BlockService {
  private blocks: string[][] = [
  		
  ];

  constructor() { }

  addColumn(title) {
  	this.blocks.push([title])
   }


  addBlock(columnIndex, title) { 
  	this.blocks[columnIndex].push(title);
  }

  removeBlock(columnIndex, blockIndex): void { 
  	if (blockIndex !== 0) {
  		this.blocks[columnIndex].splice(blockIndex);
  	} else { 
  		this.blocks.splice(columnIndex)
  	}
  }

  all(): string[][] {
  	return this.blocks;
  }

}
