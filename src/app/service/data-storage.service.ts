import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  pdId: any;

  constructor() { }

  // store data in localstorage ;
  storeCartData(data:any){
     let cartData = JSON.stringify(data);
     localStorage.setItem('cart-data', cartData)
  };


  //get data from localStorage 

  getCartData(){
    let getData:any = localStorage.getItem('cart-data');
    return JSON.parse(getData);
  }

}
