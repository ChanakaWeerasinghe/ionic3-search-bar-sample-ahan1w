import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

@Injectable()
export class Data {
  jsonData: any;

  constructor() {
    this.jsonData = [
      {
        payeeID: "383",
        type: "wallet",
        alias: "Amila",
        wallet: {},
        account: null
      },
      {
        payeeID: "382",
        type: "wallet",
        alias: "Mal1",
        wallet: {},
        account: null
      },
      {
        payeeID: "381",
        type: "wallet",
        alias: "Mali",
        wallet: {},
        account: null
      },
      {
        payeeID: "423",
        type: "wallet",
        alias: "Chanka Lakmal",
        wallet: {},
        account: null
      },
      {
        payeeID: "422",
        type: "wallet",
        alias: "Dasun Kan",
        wallet: {},
        account: null
      },
      {
        payeeID: "424",
        type: "wallet",
        alias: "Thushara1",
        wallet: {},
        account: null
      }
    ];
  }

  filterItems(searchTerm) {
    if (searchTerm.length > 0) {
      console.log("Max");
      return this.jsonData.filter(item => {
        console.log(item);
        return item.alias.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }
  }
}
