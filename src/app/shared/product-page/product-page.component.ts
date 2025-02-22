import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from 'src/app/service/getdata.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  getParamValue: any;
  getProductData: any = [];
  filterProductData: any = [];
  getSubCategoryOption: any = [];
  constructor(private route: ActivatedRoute, private getData: GetdataService) {}

  ngOnInit(): void {
    this.getParamValue = this.route.snapshot.paramMap.get('name');

    this.getData.productData.filter((ele: any) => {
      if (ele.pdCategory == this.getParamValue) {
        this.getProductData.push(ele);
        this.filterProductData.push(ele);
      }
    });

    this.getData.subCategorisFilterData.filter((ele: any) => {
      if (ele.categories == this.getParamValue) {
        this.getSubCategoryOption.push(ele);
      }
    });
  }

  filterSelect(data: any) {
    this.filterProductData = [];
    var getFilterValue: any = data.target.value;
    console.log(getFilterValue, 'getFilterValue');

    if (getFilterValue != 'all') {
      this.getData.productData.filter((ele: any) => {
        if (ele.pdSubCategory == getFilterValue) {
          this.filterProductData.push(ele);
        }
      });
    } else {
      this.filterProductData = this.getProductData;
    }
  }

}
