import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pos-main-screen",
  templateUrl: "./pos-main-screen.component.html",
  styleUrls: ["./pos-main-screen.component.css"]
})
export class POSMainScreenComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  foodCategories = ["Burgers", "Gravy", "Rice", "Bar Bq", "Drinks", "Salad"];

  burgers = [
    { name: "Zinger", quantity: 1, price: 230 },
    { name: "Beef Burger", quantity: 1, price: 360 },
    { name: "Chicken Burger", quantity: 1, price: 350 },
    { name: "Mighty Burger", quantity: 1, price: 450 },
    { name: "Grilled Burger", quantity: 1, price: 310 }
  ];
  gravy = [
    { name: "Korma", quantity: 1, price: 250 },
    { name: "Makhni", quantity: 1, price: 420 },
    { name: "Karhai", quantity: 1, price: 340 },
    { name: "Payee", quantity: 1, price: 370 },
    { name: "Keema", quantity: 1, price: 270 }
  ];

  rice = [
    { name: "Fried Rice", quantity: 1, price: 200 },
    { name: "Singaporean", quantity: 1, price: 220 },
    { name: "Biryani", quantity: 1, price: 170 },
    { name: "Manchurian", quantity: 1, price: 230 },
    { name: "Pulao", quantity: 1, price: 170 }
  ];

  barbq = [
    { name: "Tikka", quantity: 1, price: 180 },
    { name: "Malai Boti", quantity: 1, price: 240 },
    { name: "Beef Boti", quantity: 1, price: 250 },
    { name: "Reshmi Kabab", quantity: 1, price: 240 },
    { name: "Green Boti", quantity: 1, price: 240 }
  ];

  drinks = [
    { name: "Pepsi", quantity: 1, price: 30 },
    { name: "7up", quantity: 1, price: 30 },
    { name: "Pakola", quantity: 1, price: 30 },
    { name: "Slice", quantity: 1, price: 30 },
    { name: " Dew", quantity: 1, price: 30 }
  ];

  salad = [
    { name: "Ceaser Salad", quantity: 1, price: 230 },
    { name: "Dry Salad", quantity: 1, price: 50 },
    { name: "Fruit Salad", quantity: 1, price: 140 },
    { name: "Vegetable Salad", quantity: 1, price: 80 },
    { name: "Bean Salad", quantity: 1, price: 120 }
  ];

  selection = [];

  cashSection = [];

  //finalOrder = {};
  totalBill = 0;

  onSelect(foodCategory) {
    if (foodCategory == "Burgers") {
      this.selection = this.burgers;
    }
    if (foodCategory == "Gravy") {
      this.selection = this.gravy;
    }
    if (foodCategory == "Rice") {
      this.selection = this.rice;
    }
    if (foodCategory == "Bar Bq") {
      this.selection = this.barbq;
    }
    if (foodCategory == "Drinks") {
      this.selection = this.drinks;
    }
    if (foodCategory == "Salad") {
      this.selection = this.salad;
    }
  }

  onSelectProduct(product) {
    // product.BilledAmount= 0

    if (this.cashSection.includes(product)) {
      // alert("already in!")
      if (!product.BilledAmount || product.BilledAmount == NaN) {
        product.BilledAmount = product.price;
        //this.totalBill = this.totalBill+ product.price;
      }
      product.quantity++;
      product.BilledAmount = product.price * product.quantity;
      this.totalBill += product.price;
    } else {
      this.cashSection.push(product);
      product.BilledAmount = product.price;

      this.totalBill = this.totalBill + product.price;
    }
  }
  deleteProduct(item) {
    this.totalBill = this.totalBill - item.BilledAmount;
    this.cashSection.forEach(element => {
      
      if(element.name == item.name){
        element.quantity = 1;
      }
    });

    var index = this.cashSection.indexOf(item);
    if (index > -1) {
      this.cashSection.splice(index, 1);
    }
  }

  cashout() {
    var BillGenerated = {
      "Total Bill": this.totalBill,
      "Bill Details": this.cashSection
    };

    var parseAction = JSON.stringify(BillGenerated);
    parseAction = JSON.parse(parseAction);

    console.log(parseAction);
    console.log("------------------------------");
    // console.log("total bill = ", this.totalBill);
    // console.log(" bill details = ", this.cashSection);
    this.cashSection.forEach(product => {
      product.quantity = 1;
      product.BilledAmount = 0;
    });

    this.cashSection = [];
    this.totalBill = 0;
  }
}
