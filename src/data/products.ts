
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Royal Enfield Continental GT 650",
    brand: "Royal Enfield",
    price: 320000,
    originalPrice: 345000,
    category: "Cafe Racer",
    images: [
      "https://images.unsplash.com/photo-1631862279863-8c7c1e449c52?q=80&w=1000",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/130711/continental-gt-650-right-front-three-quarter.jpeg?isig=0",
      "https://images.financialexpress.com/2021/08/Royal-Enfield-Continental-GT-650-10.jpg"
    ],
    description: "The Continental GT 650 is a cafe racer motorcycle from Royal Enfield. It is powered by a 648cc, air-cooled, SOHC, parallel-twin engine that produces 47 bhp and 52 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The Continental GT 650 is the most expensive offering from Royal Enfield in India.",
    inStock: true,
    rating: 4.5,
    specs: {
      engine: "648cc, Air/Oil-Cooled, Parallel Twin",
      power: "47 bhp @ 7,250 rpm",
      torque: "52 Nm @ 5,150 rpm",
      transmission: "6-Speed",
      mileage: "20-25 kmpl",
      topSpeed: "160 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "Telescopic Front, Twin Shocks Rear",
      tires: "100/90-18 (Front), 130/70-18 (Rear)",
      weight: "198 kg",
      fuelCapacity: "12.5 liters"
    },
    featured: true
  },
  {
    id: 2,
    name: "Bajaj Dominar 400",
    brand: "Bajaj",
    price: 215000,
    category: "Sport",
    images: [
      "https://bd.gaadicdn.com/processedimages/bajaj/dominar-400-bs6/640X309/dominar-400-bs662a5dfb6d5fb4.jpg?tr=w-290",
      "https://img.etimg.com/thumb/width-640,height-480,imgsize-137544,resizemode-75,msid-83229659/industry/auto/two-wheelers-three-wheelers/bajaj-auto-drives-in-dominar-400-with-factory-fitted-touring-accessories-priced-at-rs-2-17-lakh/bajaj-dominardy.jpg",
      "https://images.hindustantimes.com/auto/img/2022/10/19/1600x900/Dominar_400_new_1666165613467_1666165625045_1666165625045.jpg"
    ],
    description: "The Bajaj Dominar 400 is a sports touring motorcycle from Bajaj Auto. It is powered by a 373.3cc, liquid-cooled, single-cylinder engine that produces 40 bhp and 35 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The Dominar 400 is one of the most affordable touring motorcycles in India.",
    inStock: true,
    rating: 4.3,
    specs: {
      engine: "373.3cc, Liquid-Cooled, Single Cylinder, FI",
      power: "40 bhp @ 8,800 rpm",
      torque: "35 Nm @ 7,000 rpm",
      transmission: "6-Speed",
      mileage: "25-30 kmpl",
      topSpeed: "150 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "USD Front, Monoshock Rear",
      tires: "110/70-17 (Front), 150/60-17 (Rear)",
      weight: "187 kg",
      fuelCapacity: "13 liters"
    }
  },
  {
    id: 3,
    name: "Kawasaki Ninja ZX-10R",
    brand: "Kawasaki",
    price: 1549000,
    category: "Sport",
    images: [
      "https://images.carandbike.com/bike-images/large/kawasaki/ninja-zx-10r-bs6/kawasaki-ninja-zx-10r-bs6.jpg?v=26",
      "https://img.etimg.com/thumb/msid-96589283,width-640,height-480,imgsize-87666,resizemode-4/2023-kawasaki-ninja-zx-10r-launched-at-rs-15-99-lakh-details-here.jpg",
      "https://media.zigcdn.com/media/model/2021/Mar/right-side-view-135696384_930x620.jpg"
    ],
    description: "The Kawasaki Ninja ZX-10R is a supersport motorcycle from Kawasaki. It is powered by a 998cc, liquid-cooled, inline-four engine that produces 200 bhp and 114 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The Ninja ZX-10R is one of the most powerful supersport motorcycles available in India.",
    inStock: true,
    rating: 4.8,
    specs: {
      engine: "998cc, Liquid-Cooled, Inline-Four, FI",
      power: "200 bhp @ 13,500 rpm",
      torque: "114 Nm @ 11,200 rpm",
      transmission: "6-Speed",
      mileage: "15-18 kmpl",
      topSpeed: "299 km/h (limited)",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "Showa BFF Front, BFRC lite Rear",
      tires: "120/70-ZR17 (Front), 190/55-ZR17 (Rear)",
      weight: "207 kg",
      fuelCapacity: "17 liters"
    },
    featured: true
  },
  {
    id: 4,
    name: "TVS Apache RR 310",
    brand: "TVS",
    price: 270000,
    category: "Sport",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/51233/apache-rr-310-right-front-three-quarter-2.jpeg?q=80",
      "https://images.hindustantimes.com/auto/img/2021/08/30/1600x900/TVS_Apache_RR_310_BTO_1630323013478_1630323019196.jpg",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/51233/apache-rr-310-right-rear-three-quarter-2.jpeg?isig=0&q=80"
    ],
    description: "The TVS Apache RR 310 is a sport bike manufactured by TVS Motor Company. It is powered by a 312.2cc, liquid-cooled, single-cylinder engine that produces 34 bhp and 27.3 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The Apache RR 310 is the flagship motorcycle from TVS in India.",
    inStock: true,
    rating: 4.4,
    specs: {
      engine: "312.2cc, Liquid-Cooled, Single Cylinder, FI",
      power: "34 bhp @ 9,700 rpm",
      torque: "27.3 Nm @ 7,700 rpm",
      transmission: "6-Speed",
      mileage: "30-35 kmpl",
      topSpeed: "160 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "USD Front, Monoshock Rear",
      tires: "110/70-17 (Front), 150/60-17 (Rear)",
      weight: "174 kg",
      fuelCapacity: "11 liters"
    }
  },
  {
    id: 5,
    name: "KTM 390 Duke",
    brand: "KTM",
    price: 295000,
    category: "Naked",
    images: [
      "https://img.etimg.com/thumb/msid-101213195,width-640,height-480,imgsize-73174,resizemode-4/ktm-390-duke-2022-review-a-remarkable-all-rounder.jpg",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/149889/2023-390-duke-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://www.drivespark.com/bikes-photos/models/750x550/390duke_1497941583.jpg/3/x.pagespeed.ic.U_Xlyp3TIL.jpg"
    ],
    description: "The KTM 390 Duke is a naked sports motorcycle from KTM. It is powered by a 373.2cc, liquid-cooled, single-cylinder engine that produces 43 bhp and 37 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The 390 Duke is known for its aggressive styling and performance.",
    inStock: true,
    rating: 4.6,
    specs: {
      engine: "373.2cc, Liquid-Cooled, Single Cylinder, FI",
      power: "43 bhp @ 9,000 rpm",
      torque: "37 Nm @ 7,000 rpm",
      transmission: "6-Speed",
      mileage: "25-30 kmpl",
      topSpeed: "170 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "USD Front, Monoshock Rear",
      tires: "110/70-17 (Front), 150/60-17 (Rear)",
      weight: "163 kg",
      fuelCapacity: "13.4 liters"
    },
    featured: true
  },
  {
    id: 6,
    name: "Triumph Street Triple R",
    brand: "Triumph",
    price: 950000,
    category: "Naked",
    images: [
      "https://www.triumphmotorcycles.in/media-library/images/motorcycles/roadsters-supersports/my22/street-triple-r/colourways/rs/crystal-white/crystal-white-right-side.jpg",
      "https://www.bennetts.co.uk/-/media/bikesocial/2023-january-images/triumph-street-triple-765-review/triumph-street-triple-765-r-motion-1.ashx?h=493&la=en&w=740&hash=0FCB43BB53E745A9B5EE9D1CEDF95177F752E97E",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/134365/street-triple-r-right-front-three-quarter.jpeg?isig=0&q=80"
    ],
    description: "The Triumph Street Triple R is a naked sports motorcycle from Triumph Motorcycles. It is powered by a 765cc, liquid-cooled, inline-three engine that produces 118 bhp and 79 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The Street Triple R is known for its distinctive triple-cylinder engine note and handling.",
    inStock: true,
    rating: 4.7,
    specs: {
      engine: "765cc, Liquid-Cooled, Inline-Three, FI",
      power: "118 bhp @ 11,750 rpm",
      torque: "79 Nm @ 9,350 rpm",
      transmission: "6-Speed",
      mileage: "18-22 kmpl",
      topSpeed: "225 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "Showa SFF Front, Showa Monoshock Rear",
      tires: "120/70-ZR17 (Front), 180/55-ZR17 (Rear)",
      weight: "189 kg",
      fuelCapacity: "17.4 liters"
    }
  },
  {
    id: 7,
    name: "BMW S 1000 RR",
    brand: "BMW",
    price: 2049000,
    category: "Sport",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/129819/s1000rr-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://cdn.motor1.com/images/mgl/MJlo3y/s3/2023-bmw-s-1000-rr.jpg",
      "https://www.motorbeam.com/wp-content/uploads/BMW-S1000RR-30-Jahre-Edition.jpg"
    ],
    description: "The BMW S 1000 RR is a race oriented sport bike from BMW Motorrad. It is powered by a 999cc, liquid-cooled, inline-four engine that produces 207 bhp and 113 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The S 1000 RR is known for its distinctive asymmetrical headlight design and performance.",
    inStock: true,
    rating: 4.9,
    specs: {
      engine: "999cc, Liquid-Cooled, Inline-Four, FI",
      power: "207 bhp @ 13,500 rpm",
      torque: "113 Nm @ 11,000 rpm",
      transmission: "6-Speed",
      mileage: "14-18 kmpl",
      topSpeed: "299 km/h (limited)",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "USD Front, Monoshock Rear",
      tires: "120/70-ZR17 (Front), 200/55-ZR17 (Rear)",
      weight: "197 kg",
      fuelCapacity: "16.5 liters"
    },
    featured: true
  },
  {
    id: 8,
    name: "Suzuki Hayabusa",
    brand: "Suzuki",
    price: 1649000,
    category: "Sport",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/95143/hayabusa-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/suzuki-motorcycles/suzuki-hayabusa/640X309/suzuki-hayabusa624394356ce83.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/95143/hayabusa-left-side-view.jpeg?isig=0&q=80"
    ],
    description: "The Suzuki Hayabusa is a sport bike motorcycle manufactured by Suzuki. It is powered by a 1340cc, liquid-cooled, inline-four engine that produces 190 bhp and 150 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The Hayabusa is known for its high top speed and distinctive styling.",
    inStock: true,
    rating: 4.8,
    specs: {
      engine: "1340cc, Liquid-Cooled, Inline-Four, FI",
      power: "190 bhp @ 9,700 rpm",
      torque: "150 Nm @ 7,000 rpm",
      transmission: "6-Speed",
      mileage: "15-18 kmpl",
      topSpeed: "299 km/h (limited)",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "USD Front, Link-Type Monoshock Rear",
      tires: "120/70-ZR17 (Front), 190/50-ZR17 (Rear)",
      weight: "264 kg",
      fuelCapacity: "20 liters"
    },
    featured: true
  },
  {
    id: 9,
    name: "Ducati Panigale V4",
    brand: "Ducati",
    price: 2749000,
    category: "Sport",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/108523/panigale-v4-right-front-three-quarter-5.jpeg?isig=0&q=80",
      "https://images.hindustantimes.com/auto/img/2022/08/31/1600x900/Ducati_Panigale_V4_1661930912727_1661930927342_1661930927342.jpg",
      "https://media.zigcdn.com/media/model/2021/Jul/right-side-view-1836338486_930x620.jpg"
    ],
    description: "The Ducati Panigale V4 is a sport bike manufactured by Ducati. It is powered by a 1103cc, liquid-cooled, V4 engine that produces 214 bhp and 124 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The Panigale V4 is the flagship superbike from Ducati.",
    inStock: true,
    rating: 4.9,
    specs: {
      engine: "1103cc, Liquid-Cooled, V4, FI",
      power: "214 bhp @ 13,000 rpm",
      torque: "124 Nm @ 10,000 rpm",
      transmission: "6-Speed",
      mileage: "12-16 kmpl",
      topSpeed: "299 km/h (limited)",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "Showa BPF Front, Sachs Monoshock Rear",
      tires: "120/70-ZR17 (Front), 200/60-ZR17 (Rear)",
      weight: "198 kg",
      fuelCapacity: "16 liters"
    }
  },
  {
    id: 10,
    name: "Harley-Davidson Fat Boy",
    brand: "Harley-Davidson",
    price: 1995000,
    category: "Cruiser",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/46652/fat-boy-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Harley-Davidson-Fat-Boy-110820211733.jpg&w=730&h=484&q=75&c=1",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/46652/fat-boy-right-side-view.jpeg?isig=0&q=80"
    ],
    description: "The Harley-Davidson Fat Boy is a cruiser motorcycle manufactured by Harley-Davidson. It is powered by a 1868cc, air-cooled, Milwaukee-Eight 114 engine that produces 93 bhp and 155 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The Fat Boy is known for its distinctive solid disc wheels and wide stance.",
    inStock: true,
    rating: 4.7,
    specs: {
      engine: "1868cc, Air-Cooled, Milwaukee-Eight 114",
      power: "93 bhp @ 5,020 rpm",
      torque: "155 Nm @ 3,000 rpm",
      transmission: "6-Speed",
      mileage: "15-18 kmpl",
      topSpeed: "180 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "Showa Dual Bending Valve Front, Emulsion Rear",
      tires: "160/60-18 (Front), 240/40-18 (Rear)",
      weight: "317 kg",
      fuelCapacity: "18.9 liters"
    }
  },
  // Adding more products to reach 45+
  {
    id: 11,
    name: "Honda CB650R",
    brand: "Honda",
    price: 875000,
    category: "Naked",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/119547/cb650r-right-front-three-quarter-2.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/honda/cb650r/640X309/cb650r6376bf7ab2eac.jpg?tr=w-290",
      "https://bd.gaadicdn.com/processedimages/honda/cb650r/source/cb650r.jpg?tr=h-48"
    ],
    description: "The Honda CB650R is a naked sports motorcycle from Honda. It is powered by a 649cc, liquid-cooled, inline-four engine that produces 87 bhp and 60 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The CB650R is known for its Neo Sports Café styling and reliable performance.",
    inStock: true,
    rating: 4.5,
    specs: {
      engine: "649cc, Liquid-Cooled, Inline-Four, FI",
      power: "87 bhp @ 12,000 rpm",
      torque: "60 Nm @ 8,500 rpm",
      transmission: "6-Speed",
      mileage: "20-23 kmpl",
      topSpeed: "225 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "Showa SFF Front, Monoshock Rear",
      tires: "120/70-17 (Front), 180/55-17 (Rear)",
      weight: "208 kg",
      fuelCapacity: "15.4 liters"
    }
  },
  {
    id: 12,
    name: "Suzuki V-Strom 650XT",
    brand: "Suzuki",
    price: 885000,
    category: "Adventure",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/48368/v-strom-650xt-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/suzuki-motorcycles/v-strom-650xt/494X300/v-strom-650xt61113b4bc733e.jpg?imwidth=400&impolicy=resize",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/48368/v-strom-650xt-left-side-view.jpeg?isig=0&q=80"
    ],
    description: "The Suzuki V-Strom 650XT is an adventure touring motorcycle from Suzuki. It is powered by a 645cc, liquid-cooled, V-Twin engine that produces 70 bhp and 62 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The V-Strom 650XT is known for its versatility and all-day comfort.",
    inStock: true,
    rating: 4.6,
    specs: {
      engine: "645cc, Liquid-Cooled, V-Twin, FI",
      power: "70 bhp @ 8,800 rpm",
      torque: "62 Nm @ 6,500 rpm",
      transmission: "6-Speed",
      mileage: "22-25 kmpl",
      topSpeed: "200 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "Telescopic Front, Link-Type Monoshock Rear",
      tires: "110/80-19 (Front), 150/70-17 (Rear)",
      weight: "216 kg",
      fuelCapacity: "20 liters"
    }
  },
  // Add more products
  {
    id: 13,
    name: "Yamaha MT-15",
    brand: "Yamaha",
    price: 165000,
    category: "Naked",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/143131/mt-15-v2-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/yamaha/yamaha-mt-15/640X309/yamaha-mt-1561e34c52694e7.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/143131/mt-15-v2-right-side-view.jpeg?isig=0&q=80"
    ],
    description: "The Yamaha MT-15 is a naked sports motorcycle from Yamaha. It is powered by a 155cc, liquid-cooled, single-cylinder engine that produces 18.5 bhp and 13.9 Nm of torque. The bike gets a 6-speed gearbox and single-channel ABS. The MT-15 is the smallest member of Yamaha's MT 'Master of Torque' series.",
    inStock: true,
    rating: 4.4,
    specs: {
      engine: "155cc, Liquid-Cooled, Single Cylinder, FI",
      power: "18.5 bhp @ 10,000 rpm",
      torque: "13.9 Nm @ 8,500 rpm",
      transmission: "6-Speed",
      mileage: "40-45 kmpl",
      topSpeed: "130 km/h",
      brakes: "Disc (Front & Rear), Single Channel ABS",
      suspension: "USD Front, Monoshock Rear",
      tires: "100/80-17 (Front), 140/70-17 (Rear)",
      weight: "139 kg",
      fuelCapacity: "10 liters"
    }
  },
  {
    id: 14,
    name: "Hero Xpulse 200",
    brand: "Hero",
    price: 135000,
    category: "Adventure",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/131907/xpulse-200-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/hero/xpulse-200/640X309/xpulse-2006376bfce3471c.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/131907/xpulse-200-right-side-view.jpeg?isig=0&q=80"
    ],
    description: "The Hero Xpulse 200 is an adventure motorcycle from Hero MotoCorp. It is powered by a 199.6cc, oil-cooled, single-cylinder engine that produces 18.8 bhp and 17.1 Nm of torque. The bike gets a 5-speed gearbox and single-channel ABS. The Xpulse 200 is the most affordable adventure motorcycle in India.",
    inStock: true,
    rating: 4.3,
    specs: {
      engine: "199.6cc, Oil-Cooled, Single Cylinder, FI",
      power: "18.8 bhp @ 8,500 rpm",
      torque: "17.1 Nm @ 6,500 rpm",
      transmission: "5-Speed",
      mileage: "35-40 kmpl",
      topSpeed: "115 km/h",
      brakes: "Disc (Front & Rear), Single Channel ABS",
      suspension: "Telescopic Front, Monoshock Rear",
      tires: "90/90-21 (Front), 120/80-18 (Rear)",
      weight: "162 kg",
      fuelCapacity: "13 liters"
    },
    featured: true
  },
  {
    id: 15,
    name: "KTM 250 Duke",
    brand: "KTM",
    price: 240000,
    category: "Naked",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/149667/2023-250-duke-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/ktm/250-duke-2020/640X309/250-duke-2020637a8538d1dff.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/149667/2023-250-duke-right-side-view.jpeg?isig=0&q=80"
    ],
    description: "The KTM 250 Duke is a naked sports motorcycle from KTM. It is powered by a 248.8cc, liquid-cooled, single-cylinder engine that produces 30 bhp and 24 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The 250 Duke is positioned between the 200 Duke and 390 Duke in KTM's lineup.",
    inStock: true,
    rating: 4.5,
    specs: {
      engine: "248.8cc, Liquid-Cooled, Single Cylinder, FI",
      power: "30 bhp @ 9,000 rpm",
      torque: "24 Nm @ 7,500 rpm",
      transmission: "6-Speed",
      mileage: "30-35 kmpl",
      topSpeed: "140 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "USD Front, Monoshock Rear",
      tires: "110/70-17 (Front), 150/60-17 (Rear)",
      weight: "156 kg",
      fuelCapacity: "13.5 liters"
    }
  },
  // Continue with more products...
  {
    id: 16,
    name: "Royal Enfield Meteor 350",
    brand: "Royal Enfield",
    price: 205000,
    category: "Cruiser",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/51814/meteor-350-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/royal-enfield/meteor-350/640X309/meteor-3505ff01c2b31eb4.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/51814/meteor-350-right-side-view.jpeg?isig=0&q=80"
    ],
    description: "The Royal Enfield Meteor 350 is a cruiser motorcycle from Royal Enfield. It is powered by a 349cc, air-cooled, single-cylinder engine that produces 20.2 bhp and 27 Nm of torque. The bike gets a 5-speed gearbox and dual-channel ABS. The Meteor 350 replaces the Thunderbird 350 in Royal Enfield's lineup.",
    inStock: true,
    rating: 4.5,
    specs: {
      engine: "349cc, Air-Cooled, Single Cylinder, FI",
      power: "20.2 bhp @ 6,100 rpm",
      torque: "27 Nm @ 4,000 rpm",
      transmission: "5-Speed",
      mileage: "35-40 kmpl",
      topSpeed: "120 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "Telescopic Front, Twin Shocks Rear",
      tires: "100/90-19 (Front), 140/70-17 (Rear)",
      weight: "191 kg",
      fuelCapacity: "15 liters"
    }
  },
  {
    id: 17,
    name: "Triumph Tiger 900",
    brand: "Triumph",
    price: 1450000,
    category: "Adventure",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/48346/tiger-900-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/triumph/tiger-900/640X309/tiger-90062b1572c6f338.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/48346/tiger-900-right-side-view.jpeg?isig=0&q=80"
    ],
    description: "The Triumph Tiger 900 is an adventure touring motorcycle from Triumph Motorcycles. It is powered by a 888cc, liquid-cooled, inline-three engine that produces 94 bhp and 87 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS with multiple riding modes. The Tiger 900 is known for its versatility and long-distance touring abilities.",
    inStock: true,
    rating: 4.7,
    specs: {
      engine: "888cc, Liquid-Cooled, Inline-Three, FI",
      power: "94 bhp @ 8,750 rpm",
      torque: "87 Nm @ 7,250 rpm",
      transmission: "6-Speed",
      mileage: "18-22 kmpl",
      topSpeed: "200 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "Showa USD Front, Showa Monoshock Rear",
      tires: "100/90-19 (Front), 150/70-17 (Rear)",
      weight: "220 kg",
      fuelCapacity: "20 liters"
    }
  },
  {
    id: 18,
    name: "Honda CBR650R",
    brand: "Honda",
    price: 925000,
    category: "Sport",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/119549/cbr650r-right-front-three-quarter-2.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/honda/cbr650r/640X309/cbr650r641558d4c3607.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/119549/cbr650r-right-side-view.jpeg?isig=0&q=80"
    ],
    description: "The Honda CBR650R is a sports motorcycle from Honda. It is powered by a 649cc, liquid-cooled, inline-four engine that produces 87 bhp and 60 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The CBR650R is the fully-faired sibling of the CB650R naked sports bike.",
    inStock: true,
    rating: 4.6,
    specs: {
      engine: "649cc, Liquid-Cooled, Inline-Four, FI",
      power: "87 bhp @ 12,000 rpm",
      torque: "60 Nm @ 8,500 rpm",
      transmission: "6-Speed",
      mileage: "20-22 kmpl",
      topSpeed: "225 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "Showa SFF Front, Monoshock Rear",
      tires: "120/70-17 (Front), 180/55-17 (Rear)",
      weight: "210 kg",
      fuelCapacity: "15.4 liters"
    }
  },
  // Continue to add more products to reach 45 total
  {
    id: 19,
    name: "Royal Enfield Classic 350",
    brand: "Royal Enfield",
    price: 190000,
    originalPrice: 205000,
    category: "Classic",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/58261/right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/royal-enfield/classic-350-2021/640X309/classic-350-2021617f8ade8a409.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/58261/right-side-view.jpeg?isig=0&q=80"
    ],
    description: "The Royal Enfield Classic 350 is a modern classic motorcycle from Royal Enfield. It is powered by a 349cc, air-cooled, single-cylinder engine that produces 20.2 bhp and 27 Nm of torque. The bike gets a 5-speed gearbox and dual-channel ABS. The Classic 350 is the best-selling model from Royal Enfield in India.",
    inStock: true,
    rating: 4.5,
    specs: {
      engine: "349cc, Air-Cooled, Single Cylinder, FI",
      power: "20.2 bhp @ 6,100 rpm",
      torque: "27 Nm @ 4,000 rpm",
      transmission: "5-Speed",
      mileage: "35-40 kmpl",
      topSpeed: "120 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "Telescopic Front, Twin Shocks Rear",
      tires: "100/90-19 (Front), 120/80-18 (Rear)",
      weight: "195 kg",
      fuelCapacity: "13 liters"
    },
    new: true
  },
  {
    id: 20,
    name: "Kawasaki Z900",
    brand: "Kawasaki",
    price: 850000,
    category: "Naked",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/112863/z900-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/kawasaki/kawasaki-z900/640X309/kawasaki-z900611cb0c23c76e.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/112863/z900-right-side-view.jpeg?isig=0&q=80"
    ],
    description: "The Kawasaki Z900 is a naked sports motorcycle from Kawasaki. It is powered by a 948cc, liquid-cooled, inline-four engine that produces 125 bhp and 98.6 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The Z900 is the successor to the Z800 and is known for its aggressive styling and performance.",
    inStock: true,
    rating: 4.7,
    specs: {
      engine: "948cc, Liquid-Cooled, Inline-Four, FI",
      power: "125 bhp @ 9,500 rpm",
      torque: "98.6 Nm @ 7,700 rpm",
      transmission: "6-Speed",
      mileage: "17-20 kmpl",
      topSpeed: "240 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "USD Front, Horizontal Back-Link Rear",
      tires: "120/70-ZR17 (Front), 180/55-ZR17 (Rear)",
      weight: "212 kg",
      fuelCapacity: "17 liters"
    }
  },
  {
    id: 21,
    name: "KTM 390 Adventure",
    brand: "KTM",
    price: 339000,
    category: "Adventure",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/102709/right-front-three-quarter-3.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/ktm/390-adventure-bs6/640X309/390-adventure-bs65e28859f6e1c7.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/102709/right-side-view-3.jpeg?isig=0&q=80"
    ],
    description: "The KTM 390 Adventure is an adventure touring motorcycle from KTM. It is powered by a 373.2cc, liquid-cooled, single-cylinder engine that produces 43 bhp and 37 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS with off-road mode. The 390 Adventure is the most affordable adventure motorcycle in KTM's lineup.",
    inStock: true,
    rating: 4.6,
    specs: {
      engine: "373.2cc, Liquid-Cooled, Single Cylinder, FI",
      power: "43 bhp @ 9,000 rpm",
      torque: "37 Nm @ 7,000 rpm",
      transmission: "6-Speed",
      mileage: "25-30 kmpl",
      topSpeed: "160 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "WP APEX USD Front, WP APEX Monoshock Rear",
      tires: "100/90-19 (Front), 130/80-17 (Rear)",
      weight: "171 kg",
      fuelCapacity: "14.5 liters"
    }
  },
  {
    id: 22,
    name: "Bajaj Pulsar NS200",
    brand: "Bajaj",
    price: 143000,
    category: "Naked",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/115243/pulsar-ns200-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/bajaj/pulsar-ns200-2017/640X309/pulsar-ns200-201762639923c6c9d.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/115243/pulsar-ns200-right-side-view.jpeg?isig=0&q=80"
    ],
    description: "The Bajaj Pulsar NS200 is a naked sports motorcycle from Bajaj Auto. It is powered by a 199.5cc, liquid-cooled, single-cylinder engine that produces 24.5 bhp and 18.5 Nm of torque. The bike gets a 6-speed gearbox and single-channel ABS. The NS200 stands for Naked Sport 200 and is known for its streetfighter styling.",
    inStock: true,
    rating: 4.4,
    specs: {
      engine: "199.5cc, Liquid-Cooled, Single Cylinder, FI",
      power: "24.5 bhp @ 9,750 rpm",
      torque: "18.5 Nm @ 8,000 rpm",
      transmission: "6-Speed",
      mileage: "35-40 kmpl",
      topSpeed: "140 km/h",
      brakes: "Disc (Front & Rear), Single Channel ABS",
      suspension: "Telescopic Front, Monoshock Rear",
      tires: "100/80-17 (Front), 130/70-17 (Rear)",
      weight: "156 kg",
      fuelCapacity: "12 liters"
    }
  },
  {
    id: 23,
    name: "TVS Apache RTR 160 4V",
    brand: "TVS",
    price: 123000,
    category: "Naked",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/106637/apache-rtr-160-right-front-three-quarter-2.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/tvs/apache-rtr-160-4v-bs6/640X309/apache-rtr-160-4v-bs662279c747cdea.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/106637/apache-rtr-160-right-side-view-2.jpeg?isig=0&q=80"
    ],
    description: "The TVS Apache RTR 160 4V is a naked sports motorcycle from TVS Motor Company. It is powered by a 159.7cc, oil-cooled, single-cylinder engine that produces 17.6 bhp and 14.73 Nm of torque. The bike gets a 5-speed gearbox and single-channel ABS. The RTR stands for Racing Throttle Response and 4V stands for 4-Valve technology.",
    inStock: true,
    rating: 4.5,
    specs: {
      engine: "159.7cc, Oil-Cooled, Single Cylinder, FI",
      power: "17.6 bhp @ 9,250 rpm",
      torque: "14.73 Nm @ 7,250 rpm",
      transmission: "5-Speed",
      mileage: "45-50 kmpl",
      topSpeed: "115 km/h",
      brakes: "Disc (Front & Rear), Single Channel ABS",
      suspension: "Telescopic Front, Monoshock Rear",
      tires: "90/90-17 (Front), 130/70-17 (Rear)",
      weight: "147 kg",
      fuelCapacity: "12 liters"
    }
  },
  {
    id: 24,
    name: "Yamaha R15 V4",
    brand: "Yamaha",
    price: 185000,
    category: "Sport",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/104883/r15-v4-right-front-three-quarter-2.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/yamaha/r15-v4/640X309/r15-v4614c46020d958.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/104883/r15-v4-right-rear-three-quarter.jpeg?isig=0&q=80"
    ],
    description: "The Yamaha R15 V4 is a sports motorcycle from Yamaha. It is powered by a 155cc, liquid-cooled, single-cylinder engine that produces 18.4 bhp and 14.2 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The R15 V4 is the fourth generation of the R15 series and is known for its track-focused performance.",
    inStock: true,
    rating: 4.6,
    specs: {
      engine: "155cc, Liquid-Cooled, Single Cylinder, FI",
      power: "18.4 bhp @ 10,000 rpm",
      torque: "14.2 Nm @ 7,500 rpm",
      transmission: "6-Speed",
      mileage: "40-45 kmpl",
      topSpeed: "135 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "USD Front, Linked-Type Monoshock Rear",
      tires: "100/80-17 (Front), 140/70-17 (Rear)",
      weight: "142 kg",
      fuelCapacity: "11 liters"
    }
  },
  {
    id: 25,
    name: "Hero Xtreme 160R",
    brand: "Hero",
    price: 117000,
    category: "Naked",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/115793/xtreme-160r-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/hero/xtreme-160r/640X309/xtreme-160r5ee707c0de289.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/115793/xtreme-160r-right-side-view.jpeg?isig=0&q=80"
    ],
    description: "The Hero Xtreme 160R is a naked sports motorcycle from Hero MotoCorp. It is powered by a 163cc, air-cooled, single-cylinder engine that produces 15 bhp and 14 Nm of torque. The bike gets a 5-speed gearbox and single-channel ABS. The Xtreme 160R is known for its agile handling and muscular design.",
    inStock: true,
    rating: 4.2,
    specs: {
      engine: "163cc, Air-Cooled, Single Cylinder, FI",
      power: "15 bhp @ 8,500 rpm",
      torque: "14 Nm @ 6,500 rpm",
      transmission: "5-Speed",
      mileage: "45-50 kmpl",
      topSpeed: "115 km/h",
      brakes: "Disc (Front & Rear), Single Channel ABS",
      suspension: "Telescopic Front, Monoshock Rear",
      tires: "100/80-17 (Front), 130/70-17 (Rear)",
      weight: "140 kg",
      fuelCapacity: "12 liters"
    }
  },
  // Add more products and continue incrementing the IDs
  {
    id: 26,
    name: "Royal Enfield Himalayan",
    brand: "Royal Enfield",
    price: 215000,
    category: "Adventure",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/116121/himalayan-right-front-three-quarter-5.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/royal-enfield/himalayan/640X309/himalayan641b2e5fbd2c2.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/116121/himalayan-right-side-view-23.jpeg?isig=0&q=80"
    ],
    description: "The Royal Enfield Himalayan is an adventure touring motorcycle from Royal Enfield. It is powered by a 411cc, air-cooled, single-cylinder engine that produces 24.3 bhp and 32 Nm of torque. The bike gets a 5-speed gearbox and dual-channel ABS. The Himalayan is designed to be a versatile motorcycle capable of both on and off-road riding.",
    inStock: true,
    rating: 4.4,
    specs: {
      engine: "411cc, Air-Cooled, Single Cylinder, FI",
      power: "24.3 bhp @ 6,500 rpm",
      torque: "32 Nm @ 4,500 rpm",
      transmission: "5-Speed",
      mileage: "30-35 kmpl",
      topSpeed: "130 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "Telescopic Front, Monoshock Rear",
      tires: "90/90-21 (Front), 120/90-17 (Rear)",
      weight: "199 kg",
      fuelCapacity: "15 liters"
    },
    featured: true
  },
  // Additional products to reach 45+
  {
    id: 27,
    name: "Suzuki Gixxer SF 250",
    brand: "Suzuki",
    price: 190000,
    category: "Sport",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/48490/gixxer-sf-250-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/suzuki-motorcycles/gixxer-sf-250-bs6/640X309/gixxer-sf-250-bs65efa7a1430f97.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/48490/gixxer-sf-250-right-rear-three-quarter.jpeg?isig=0&q=80"
    ],
    description: "The Suzuki Gixxer SF 250 is a sports motorcycle from Suzuki. It is powered by a 249cc, oil-cooled, single-cylinder engine that produces 26.5 bhp and 22.2 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The Gixxer SF 250 is the fully-faired version of the Gixxer 250 naked sports bike.",
    inStock: true,
    rating: 4.5,
    specs: {
      engine: "249cc, Oil-Cooled, Single Cylinder, FI",
      power: "26.5 bhp @ 9,300 rpm",
      torque: "22.2 Nm @ 7,300 rpm",
      transmission: "6-Speed",
      mileage: "35-38 kmpl",
      topSpeed: "145 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "Telescopic Front, Monoshock Rear",
      tires: "110/70-17 (Front), 150/60-17 (Rear)",
      weight: "161 kg",
      fuelCapacity: "12 liters"
    }
  },
  {
    id: 28,
    name: "Honda CB300R",
    brand: "Honda",
    price: 250000,
    category: "Naked",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/129789/cb300r-right-front-three-quarter-2.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/honda/cb-300r-bs6/640X309/cb-300r-bs661bcd6718f10e.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/129789/cb300r-right-side-view-2.jpeg?isig=0&q=80"
    ],
    description: "The Honda CB300R is a naked sports motorcycle from Honda. It is powered by a 286cc, liquid-cooled, single-cylinder engine that produces 30.7 bhp and 27.5 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The CB300R features a Neo Sports Café styling similar to its bigger sibling, the CB1000R.",
    inStock: true,
    rating: 4.3,
    specs: {
      engine: "286cc, Liquid-Cooled, Single Cylinder, FI",
      power: "30.7 bhp @ 9,000 rpm",
      torque: "27.5 Nm @ 7,500 rpm",
      transmission: "6-Speed",
      mileage: "30-32 kmpl",
      topSpeed: "150 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "USD Front, Monoshock Rear",
      tires: "110/70-17 (Front), 150/60-17 (Rear)",
      weight: "147 kg",
      fuelCapacity: "9.7 liters"
    }
  },
  {
    id: 29,
    name: "Kawasaki Versys 650",
    brand: "Kawasaki",
    price: 750000,
    category: "Adventure",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/48335/versys-650-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/kawasaki/versys-650/640X309/versys-65060e2d7596d84a.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/48335/versys-650-right-rear-three-quarter.jpeg?isig=0&q=80"
    ],
    description: "The Kawasaki Versys 650 is an adventure touring motorcycle from Kawasaki. It is powered by a 649cc, liquid-cooled, parallel-twin engine that produces 66 bhp and 61 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The Versys 650 is known for its all-round capabilities and comfortable ergonomics.",
    inStock: true,
    rating: 4.6,
    specs: {
      engine: "649cc, Liquid-Cooled, Parallel-Twin, FI",
      power: "66 bhp @ 8,500 rpm",
      torque: "61 Nm @ 7,000 rpm",
      transmission: "6-Speed",
      mileage: "20-22 kmpl",
      topSpeed: "200 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "USD Front, Horizontal Back-Link Rear",
      tires: "120/70-17 (Front), 160/60-17 (Rear)",
      weight: "216 kg",
      fuelCapacity: "21 liters"
    }
  },
  // Add more products to reach 45+
  {
    id: 30,
    name: "Bajaj Pulsar N250",
    brand: "Bajaj",
    price: 150000,
    category: "Naked",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/110235/pulsar-n250-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/bajaj/bajaj-pulsar-250/640X309/bajaj-pulsar-250617ac99caca5c.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/110235/pulsar-n250-right-side-view.jpeg?isig=0&q=80"
    ],
    description: "The Bajaj Pulsar N250 is a naked sports motorcycle from Bajaj Auto. It is powered by a 249.07cc, oil-cooled, single-cylinder engine that produces 24.5 bhp and 21.5 Nm of torque. The bike gets a 5-speed gearbox and single-channel ABS. The Pulsar N250 is the largest capacity Pulsar available in India.",
    inStock: true,
    rating: 4.3,
    specs: {
      engine: "249.07cc, Oil-Cooled, Single Cylinder, FI",
      power: "24.5 bhp @ 8,750 rpm",
      torque: "21.5 Nm @ 6,500 rpm",
      transmission: "5-Speed",
      mileage: "35-40 kmpl",
      topSpeed: "140 km/h",
      brakes: "Disc (Front & Rear), Single Channel ABS",
      suspension: "Telescopic Front, Monoshock Rear",
      tires: "100/80-17 (Front), 130/70-17 (Rear)",
      weight: "162 kg",
      fuelCapacity: "14 liters"
    }
  },
  {
    id: 31,
    name: "TVS Apache RR 310 BTO",
    brand: "TVS",
    price: 330000,
    originalPrice: 350000,
    category: "Sport",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/51233/apache-rr-310-right-front-three-quarter-3.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/tvs/apache-rr-310-bs6/640X309/apache-rr-310-bs660ff1a19e933c.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/51233/apache-rr-310-right-side-view-2.jpeg?isig=0&q=80"
    ],
    description: "The TVS Apache RR 310 BTO (Built To Order) is a sports motorcycle from TVS Motor Company. It is powered by a 312.2cc, liquid-cooled, single-cylinder engine that produces 34 bhp and 27.3 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The Apache RR 310 BTO allows customers to personalize various aspects of the motorcycle.",
    inStock: true,
    rating: 4.5,
    specs: {
      engine: "312.2cc, Liquid-Cooled, Single Cylinder, FI",
      power: "34 bhp @ 9,700 rpm",
      torque: "27.3 Nm @ 7,700 rpm",
      transmission: "6-Speed",
      mileage: "30-35 kmpl",
      topSpeed: "160 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "USD Front, Monoshock Rear",
      tires: "110/70-17 (Front), 150/60-17 (Rear)",
      weight: "174 kg",
      fuelCapacity: "11 liters"
    },
    new: true
  },
  {
    id: 32,
    name: "Ducati Monster",
    brand: "Ducati",
    price: 1250000,
    category: "Naked",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/56803/monster-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/ducati/monster/640X309/monster614d6ea43d06d.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/56803/monster-right-side-view.jpeg?isig=0&q=80"
    ],
    description: "The Ducati Monster is a naked sports motorcycle from Ducati. It is powered by a 937cc, liquid-cooled, L-Twin engine that produces 111 bhp and 93 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The Monster is the most iconic naked sports bike from Ducati.",
    inStock: true,
    rating: 4.8,
    specs: {
      engine: "937cc, Liquid-Cooled, L-Twin, FI",
      power: "111 bhp @ 9,250 rpm",
      torque: "93 Nm @ 6,500 rpm",
      transmission: "6-Speed",
      mileage: "18-20 kmpl",
      topSpeed: "230 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "USD Front, Monoshock Rear",
      tires: "120/70-17 (Front), 180/55-17 (Rear)",
      weight: "188 kg",
      fuelCapacity: "14 liters"
    }
  },
  {
    id: 33,
    name: "BMW G 310 GS",
    brand: "BMW",
    price: 320000,
    category: "Adventure",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/51444/g-310-gs-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/bmw/g-310-gs-bs6/640X309/g-310-gs-bs65f84b6889cf69.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/51444/g-310-gs-right-side-view.jpeg?isig=0&q=80"
    ],
    description: "The BMW G 310 GS is an adventure touring motorcycle from BMW Motorrad. It is powered by a 313cc, liquid-cooled, single-cylinder engine that produces 34 bhp and 28 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The G 310 GS is the most affordable adventure motorcycle from BMW.",
    inStock: true,
    rating: 4.4,
    specs: {
      engine: "313cc, Liquid-Cooled, Single Cylinder, FI",
      power: "34 bhp @ 9,500 rpm",
      torque: "28 Nm @ 7,500 rpm",
      transmission: "6-Speed",
      mileage: "30-35 kmpl",
      topSpeed: "143 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "USD Front, Monoshock Rear",
      tires: "110/80-19 (Front), 150/70-17 (Rear)",
      weight: "175 kg",
      fuelCapacity: "11 liters"
    }
  },
  {
    id: 34,
    name: "Honda Rebel 500",
    brand: "Honda",
    price: 495000,
    category: "Cruiser",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/143219/rebel-500-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/honda/honda-rebel-500/640X309/honda-rebel-50062d520a57dfea.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/143219/rebel-500-right-side-view.jpeg?isig=0&q=80"
    ],
    description: "The Honda Rebel 500 is a cruiser motorcycle from Honda. It is powered by a 471cc, liquid-cooled, parallel-twin engine that produces 46 bhp and 43.3 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The Rebel 500 features a modern bobber design and is aimed at young riders.",
    inStock: true,
    rating: 4.6,
    specs: {
      engine: "471cc, Liquid-Cooled, Parallel-Twin, FI",
      power: "46 bhp @ 8,500 rpm",
      torque: "43.3 Nm @ 6,000 rpm",
      transmission: "6-Speed",
      mileage: "22-26 kmpl",
      topSpeed: "170 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "Telescopic Front, Twin Shocks Rear",
      tires: "130/90-16 (Front), 150/80-16 (Rear)",
      weight: "191 kg",
      fuelCapacity: "11.2 liters"
    }
  },
  {
    id: 35,
    name: "Triumph Trident 660",
    brand: "Triumph",
    price: 750000,
    category: "Naked",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/107625/right-front-three-quarter-2.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/triumph/trident-660/640X309/trident-660607562ca18e05.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/107625/right-side-view-2.jpeg?isig=0&q=80"
    ],
    description: "The Triumph Trident 660 is a naked sports motorcycle from Triumph Motorcycles. It is powered by a 660cc, liquid-cooled, inline-three engine that produces 80 bhp and 64 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The Trident 660 is the most affordable triple-cylinder motorcycle from Triumph.",
    inStock: true,
    rating: 4.7,
    specs: {
      engine: "660cc, Liquid-Cooled, Inline-Three, FI",
      power: "80 bhp @ 10,250 rpm",
      torque: "64 Nm @ 6,250 rpm",
      transmission: "6-Speed",
      mileage: "20-25 kmpl",
      topSpeed: "210 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "Showa USD Front, Showa Monoshock Rear",
      tires: "120/70-17 (Front), 180/55-17 (Rear)",
      weight: "189 kg",
      fuelCapacity: "14 liters"
    }
  },
  {
    id: 36,
    name: "Royal Enfield Interceptor 650",
    brand: "Royal Enfield",
    price: 300000,
    category: "Classic",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/130709/interceptor-650-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/royal-enfield/interceptor-650/640X309/interceptor-65064249f09bb555.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/130709/interceptor-650-right-side-view.jpeg?isig=0&q=80"
    ],
    description: "The Royal Enfield Interceptor 650 is a retro roadster motorcycle from Royal Enfield. It is powered by a 648cc, air-cooled, parallel-twin engine that produces 47 bhp and 52 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The Interceptor 650 is known for its classic styling and accessible performance.",
    inStock: true,
    rating: 4.8,
    specs: {
      engine: "648cc, Air-Cooled, Parallel-Twin, FI",
      power: "47 bhp @ 7,150 rpm",
      torque: "52 Nm @ 5,250 rpm",
      transmission: "6-Speed",
      mileage: "22-25 kmpl",
      topSpeed: "160 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "Telescopic Front, Twin Shocks Rear",
      tires: "100/90-18 (Front), 130/70-18 (Rear)",
      weight: "202 kg",
      fuelCapacity: "13.7 liters"
    },
    featured: true
  },
  // Add more products to reach 45 total
  {
    id: 37,
    name: "Kawasaki Ninja 400",
    brand: "Kawasaki",
    price: 525000,
    category: "Sport",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/102669/right-front-three-quarter-3.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/kawasaki/ninja-400/640X309/ninja-40062c2a0f151ef1.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/102669/right-side-view-3.jpeg?isig=0&q=80"
    ],
    description: "The Kawasaki Ninja 400 is a sports motorcycle from Kawasaki. It is powered by a 399cc, liquid-cooled, parallel-twin engine that produces 49 bhp and 38 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The Ninja 400 is an entry-level sports bike in Kawasaki's Ninja series.",
    inStock: true,
    rating: 4.6,
    specs: {
      engine: "399cc, Liquid-Cooled, Parallel-Twin, FI",
      power: "49 bhp @ 10,000 rpm",
      torque: "38 Nm @ 8,000 rpm",
      transmission: "6-Speed",
      mileage: "25-28 kmpl",
      topSpeed: "190 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "Telescopic Front, Monoshock Rear",
      tires: "110/70-17 (Front), 150/60-17 (Rear)",
      weight: "168 kg",
      fuelCapacity: "14 liters"
    }
  },
  {
    id: 38,
    name: "Bajaj Pulsar RS200",
    brand: "Bajaj",
    price: 175000,
    category: "Sport",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/102893/pulsar-rs200-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/bajaj/pulsar-rs-200-2017/640X309/pulsar-rs-200-20175f4e1d0f05211.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/102893/pulsar-rs200-right-side-view.jpeg?isig=0&q=80"
    ],
    description: "The Bajaj Pulsar RS200 is a sports motorcycle from Bajaj Auto. It is powered by a 199.5cc, liquid-cooled, single-cylinder engine that produces 24.5 bhp and 18.7 Nm of torque. The bike gets a 6-speed gearbox and single-channel ABS. The Pulsar RS200 is the fully-faired version of the Pulsar NS200.",
    inStock: true,
    rating: 4.3,
    specs: {
      engine: "199.5cc, Liquid-Cooled, Single Cylinder, FI",
      power: "24.5 bhp @ 9,750 rpm",
      torque: "18.7 Nm @ 8,000 rpm",
      transmission: "6-Speed",
      mileage: "35-40 kmpl",
      topSpeed: "140 km/h",
      brakes: "Disc (Front & Rear), Single Channel ABS",
      suspension: "Telescopic Front, Monoshock Rear",
      tires: "100/80-17 (Front), 130/70-17 (Rear)",
      weight: "166 kg",
      fuelCapacity: "13 liters"
    }
  },
  {
    id: 39,
    name: "KTM 790 Duke",
    brand: "KTM",
    price: 850000,
    category: "Naked",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/154211/790-duke-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/ktm/790-duke/640X309/790-duke643f73ee9d930.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/154211/790-duke-right-side-view.jpeg?isig=0&q=80"
    ],
    description: "The KTM 790 Duke is a naked sports motorcycle from KTM. It is powered by a 799cc, liquid-cooled, parallel-twin engine that produces 105 bhp and 87 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The 790 Duke is also known as 'The Scalpel' due to its precise handling.",
    inStock: true,
    rating: 4.7,
    specs: {
      engine: "799cc, Liquid-Cooled, Parallel-Twin, FI",
      power: "105 bhp @ 9,000 rpm",
      torque: "87 Nm @ 8,000 rpm",
      transmission: "6-Speed",
      mileage: "20-22 kmpl",
      topSpeed: "240 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "WP APEX USD Front, WP APEX Monoshock Rear",
      tires: "120/70-17 (Front), 180/55-17 (Rear)",
      weight: "189 kg",
      fuelCapacity: "14 liters"
    }
  },
  {
    id: 40,
    name: "TVS Ronin",
    brand: "TVS",
    price: 155000,
    category: "Cruiser",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/127539/ronin-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/tvs/ronin/640X309/ronin62cdcf222ed56.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/127539/ronin-right-side-view.jpeg?isig=0&q=80"
    ],
    description: "The TVS Ronin is a modern retro motorcycle from TVS Motor Company. It is powered by a 225.9cc, oil-cooled, single-cylinder engine that produces 20.4 bhp and 19.93 Nm of torque. The bike gets a 5-speed gearbox and dual-channel ABS. The Ronin features a neo-retro design with modern features.",
    inStock: true,
    rating: 4.2,
    specs: {
      engine: "225.9cc, Oil-Cooled, Single Cylinder, FI",
      power: "20.4 bhp @ 7,750 rpm",
      torque: "19.93 Nm @ 3,750 rpm",
      transmission: "5-Speed",
      mileage: "35-40 kmpl",
      topSpeed: "120 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "USD Front, Monoshock Rear",
      tires: "110/70-17 (Front), 130/70-17 (Rear)",
      weight: "160 kg",
      fuelCapacity: "14 liters"
    }
  },
  {
    id: 41,
    name: "Yamaha R3",
    brand: "Yamaha",
    price: 430000,
    category: "Sport",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/154669/r3-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/yamaha/yzf-r3/640X309/yzf-r3645601f5d5491.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/154669/r3-right-side-view.jpeg?isig=0&q=80"
    ],
    description: "The Yamaha R3 is a sports motorcycle from Yamaha. It is powered by a 321cc, liquid-cooled, parallel-twin engine that produces 42 bhp and 29.6 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The R3 is the mid-capacity sports bike in Yamaha's R-series lineup.",
    inStock: true,
    rating: 4.7,
    specs: {
      engine: "321cc, Liquid-Cooled, Parallel-Twin, FI",
      power: "42 bhp @ 10,750 rpm",
      torque: "29.6 Nm @ 9,000 rpm",
      transmission: "6-Speed",
      mileage: "28-32 kmpl",
      topSpeed: "180 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "KYB USD Front, KYB Monoshock Rear",
      tires: "110/70-17 (Front), 140/70-17 (Rear)",
      weight: "170 kg",
      fuelCapacity: "14 liters"
    }
  },
  {
    id: 42,
    name: "Suzuki Katana",
    brand: "Suzuki",
    price: 1350000,
    category: "Sport",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/128245/katana-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/suzuki-motorcycles/katana/640X309/katana6377d079e2d8d.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/128245/katana-right-side-view.jpeg?isig=0&q=80"
    ],
    description: "The Suzuki Katana is a sports motorcycle from Suzuki. It is powered by a 999cc, liquid-cooled, inline-four engine that produces 150 bhp and 108 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The Katana features a distinctive design inspired by the iconic 1980s GSX1100S Katana.",
    inStock: true,
    rating: 4.8,
    specs: {
      engine: "999cc, Liquid-Cooled, Inline-Four, FI",
      power: "150 bhp @ 10,000 rpm",
      torque: "108 Nm @ 9,500 rpm",
      transmission: "6-Speed",
      mileage: "15-18 kmpl",
      topSpeed: "250 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "USD Front, Link-Type Monoshock Rear",
      tires: "120/70-ZR17 (Front), 190/50-ZR17 (Rear)",
      weight: "215 kg",
      fuelCapacity: "12 liters"
    }
  },
  {
    id: 43,
    name: "Harley-Davidson Iron 883",
    brand: "Harley-Davidson",
    price: 950000,
    category: "Cruiser",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/46638/iron-883-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/harley-davidson/iron-883/640X309/iron-8835f5a306a3df36.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/46638/iron-883-right-side-view.jpeg?isig=0&q=80"
    ],
    description: "The Harley-Davidson Iron 883 is a cruiser motorcycle from Harley-Davidson. It is powered by an 883cc, air-cooled, Evolution V-twin engine that produces 50 bhp and 68 Nm of torque. The bike gets a 5-speed gearbox and dual-channel ABS. The Iron 883 is part of Harley-Davidson's Sportster lineup and features a blacked-out design.",
    inStock: true,
    rating: 4.7,
    specs: {
      engine: "883cc, Air-Cooled, Evolution V-Twin",
      power: "50 bhp @ 6,000 rpm",
      torque: "68 Nm @ 4,750 rpm",
      transmission: "5-Speed",
      mileage: "20-25 kmpl",
      topSpeed: "165 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "Telescopic Front, Twin Shocks Rear",
      tires: "100/90-19 (Front), 150/80-16 (Rear)",
      weight: "256 kg",
      fuelCapacity: "12.5 liters"
    }
  },
  {
    id: 44,
    name: "Ducati Scrambler Icon",
    brand: "Ducati",
    price: 950000,
    category: "Naked",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/102905/scrambler-icon-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/ducati/ducati-scrambler/640X309/ducati-scrambler5eabe29e9a46c.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/102905/scrambler-icon-right-side-view.jpeg?isig=0&q=80"
    ],
    description: "The Ducati Scrambler Icon is a modern classic motorcycle from Ducati. It is powered by an 803cc, air-cooled, L-Twin engine that produces 73 bhp and 66.2 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The Scrambler Icon combines retro styling with modern technology and is designed for both city riding and light off-roading.",
    inStock: true,
    rating: 4.6,
    specs: {
      engine: "803cc, Air-Cooled, L-Twin, FI",
      power: "73 bhp @ 8,250 rpm",
      torque: "66.2 Nm @ 5,750 rpm",
      transmission: "6-Speed",
      mileage: "18-22 kmpl",
      topSpeed: "200 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "USD Front, Monoshock Rear",
      tires: "110/80-18 (Front), 180/55-17 (Rear)",
      weight: "189 kg",
      fuelCapacity: "13.5 liters"
    }
  },
  {
    id: 45,
    name: "BMW R 1250 GS",
    brand: "BMW",
    price: 2100000,
    category: "Adventure",
    images: [
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/47016/r-1250-gs-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://bd.gaadicdn.com/processedimages/bmw/r-1250-gs/640X309/r-1250-gs5f9bd31b5a018.jpg?tr=w-290",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/47016/r-1250-gs-right-side-view.jpeg?isig=0&q=80"
    ],
    description: "The BMW R 1250 GS is an adventure touring motorcycle from BMW Motorrad. It is powered by a 1254cc, air/liquid-cooled, Boxer-Twin engine that produces 136 bhp and 143 Nm of torque. The bike gets a 6-speed gearbox and dual-channel ABS. The R 1250 GS is the flagship adventure motorcycle from BMW and is known for its off-road capabilities and long-distance touring comfort.",
    inStock: true,
    rating: 4.9,
    specs: {
      engine: "1254cc, Air/Liquid-Cooled, Boxer-Twin, FI",
      power: "136 bhp @ 7,750 rpm",
      torque: "143 Nm @ 6,250 rpm",
      transmission: "6-Speed",
      mileage: "16-18 kmpl",
      topSpeed: "200 km/h",
      brakes: "Disc (Front & Rear), Dual Channel ABS",
      suspension: "Telelever Front, Paralever Rear",
      tires: "120/70-19 (Front), 170/60-17 (Rear)",
      weight: "249 kg",
      fuelCapacity: "20 liters"
    },
    featured: true
  }
];
