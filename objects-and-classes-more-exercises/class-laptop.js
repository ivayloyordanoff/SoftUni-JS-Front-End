class Laptop {
  constructor(info, quality) {
    this.info = info;
    this.quality = quality;
    this.isOn = false;
  }

  turnOn() {
    this.isOn = true;
    this.quality -= 1;
  }

  turnOff() {
    this.isOn = false;
    this.quality -= 1;
  }

  showInfo() {
    return JSON.stringify(this.info);
  }

  get price() {
    const { age } = this.info;
    return 800 - age * 2 + this.quality * 0.5;
  }
}
