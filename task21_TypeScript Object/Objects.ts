
class Mobile {
    Model: string;
    color: string;
    Performance: string;
  
    constructor(Model: string, color: string, Performance: string) {
      this.Model = Model;
      this.color = color;
      this.Performance = Performance;
    }
  }
  
 
  const Samsung = new Mobile("S9", "Black", "Good");
  const Iphone = new Mobile("Iphone 14 pro", "Purple", "Good");
  const BlackBerry = new Mobile("BBM1", "Black", "Bad");
  

  console.log(Samsung);
  console.log(Iphone);
  console.log(BlackBerry);
  