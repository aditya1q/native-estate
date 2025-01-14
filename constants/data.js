import icons from "./icons";
import images from "./images";

export const cards = [
  // All (Includes all categories)
  { id: 1, title: "Luxury Villa", location: "Malibu, CA", price: "$5000", rating: 4.9, category: "Villa", image: images.japan },
  { id: 2, title: "Modern Apartment", location: "Downtown LA, CA", price: "$2500", rating: 4.6, category: "Apartments", image: images.newYork },
  { id: 3, title: "Beachside Condo", location: "Santa Monica, CA", price: "$3500", rating: 4.8, category: "Condos", image: images.newYork },
  { id: 4, title: "Cozy Townhome", location: "Pasadena, CA", price: "$1500", rating: 4.4, category: "Townhomes", image: images.newYork },

  // Houses
  { id: 5, title: "Suburban House", location: "Irvine, CA", price: "$1800", rating: 4.3, category: "House", image: images.japan },
  { id: 6, title: "Family Home", location: "San Diego, CA", price: "$2000", rating: 4.5, category: "House", image: images.japan },
  { id: 7, title: "Modern House", location: "Beverly Hills, CA", price: "$7000", rating: 5.0, category: "House", image: images.japan },
  { id: 8, title: "Countryside House", location: "Napa Valley, CA", price: "$3200", rating: 4.7, category: "House", image: images.japan },

  // Condos
  { id: 9, title: "Luxury Condo", location: "Miami Beach, FL", price: "$4200", rating: 4.9, category: "Condos", image: images.newYork },
  { id: 10, title: "City View Condo", location: "Seattle, WA", price: "$3100", rating: 4.6, category: "Condos", image: images.newYork },
  { id: 11, title: "Penthouse Condo", location: "Chicago, IL", price: "$6000", rating: 4.8, category: "Condos", image: images.newYork },
  { id: 12, title: "Cozy Condo", location: "Boston, MA", price: "$2500", rating: 4.4, category: "Condos", image: images.newYork },

  // Duplexes
  { id: 13, title: "Modern Duplex", location: "Austin, TX", price: "$2900", rating: 4.7, category: "Duplexes", image: images.japan},
  { id: 14, title: "Spacious Duplex", location: "Dallas, TX", price: "$3100", rating: 4.5, category: "Duplexes", image: images.japan},
  { id: 15, title: "Family Duplex", location: "Phoenix, AZ", price: "$2800", rating: 4.4, category: "Duplexes", image: images.japan},
  { id: 16, title: "Luxury Duplex", location: "Denver, CO", price: "$3300", rating: 4.9, category: "Duplexes", image: images.japan},

  // Studios
  { id: 17, title: "Artistic Studio", location: "Brooklyn, NY", price: "$1800", rating: 4.6, category: "Studios", image: images.newYork },
  { id: 18, title: "Downtown Studio", location: "San Francisco, CA", price: "$2200", rating: 4.7, category: "Studios", image: images.newYork },
  { id: 19, title: "Compact Studio", location: "Los Angeles, CA", price: "$1500", rating: 4.4, category: "Studios", image: images.newYork },
  { id: 20, title: "Cozy Studio", location: "Atlanta, GA", price: "$1700", rating: 4.5, category: "Studios", image: images.newYork },

  // Villas
  { id: 21, title: "Beachside Villa", location: "Maui, HI", price: "$8500", rating: 5.0, category: "Villa", image: images.japan },
  { id: 22, title: "Luxury Villa", location: "Malibu, CA", price: "$9000", rating: 5.0, category: "Villa", image: images.japan },
  { id: 23, title: "Private Villa", location: "Ibiza, Spain", price: "$12000", rating: 4.8, category: "Villa", image: images.japan },
  { id: 24, title: "Hilltop Villa", location: "Tuscany, Italy", price: "$10000", rating: 4.9, category: "Villa", image: images.japan },

  // Apartments
  { id: 25, title: "Luxury Apartment", location: "Dubai Marina, UAE", price: "$6500", rating: 4.8, category: "Apartments", image: images.newYork },
  { id: 26, title: "City Center Apartment", location: "New York, NY", price: "$4500", rating: 4.6, category: "Apartments", image: images.newYork },
  { id: 27, title: "Spacious Apartment", location: "Sydney, Australia", price: "$5000", rating: 4.7, category: "Apartments", image: images.newYork },
  { id: 28, title: "Modern Apartment", location: "Tokyo, Japan", price: "$3500", rating: 4.5, category: "Apartments", image: images.newYork },

  // Townhomes
  { id: 29, title: "Suburban Townhome", location: "Raleigh, NC", price: "$1800", rating: 4.5, category: "Townhomes", image: images.newYork },
  { id: 30, title: "Luxury Townhome", location: "San Jose, CA", price: "$2500", rating: 4.7, category: "Townhomes", image: images.newYork },
  { id: 31, title: "Modern Townhome", location: "Salt Lake City, UT", price: "$2200", rating: 4.6, category: "Townhomes", image: images.newYork },
  { id: 32, title: "Urban Townhome", location: "Washington, DC", price: "$2400", rating: 4.8, category: "Townhomes", image: images.newYork },

  // Others
  { id: 33, title: "Rural Farmhouse", location: "Amish Country, PA", price: "$1200", rating: 4.4, category: "Others", image: images.japan },
  { id: 34, title: "Eco-Friendly Home", location: "Boulder, CO", price: "$3500", rating: 4.9, category: "Others", image: images.japan },
  { id: 35, title: "Treehouse Retreat", location: "Asheville, NC", price: "$2200", rating: 4.8, category: "Others", image: images.japan },
  { id: 36, title: "Converted Barn", location: "Vermont, USA", price: "$1800", rating: 4.7, category: "Others", image: images.japan },
];

export const featuredCards = [
  {
    id: 1,
    title: "Stylish Urban Flat",
    location: "Midtown, Atlanta",
    price: "$1200",
    rating: 4.6,
    image: images.newYork,
    category: "flat",
  },
  {
    id: 2,
    title: "Spacious Seafront Villa",
    location: "Malibu Beach, California",
    price: "$5000",
    rating: 4.9,
    image: images.japan,
    category: "villa",
  },
  {
    id: 3,
    title: "Luxury High-Rise Apartment",
    location: "Dubai Marina, UAE",
    price: "$8000",
    rating: 4.7,
    image: images.newYork,
    category: "apartment",
  },
  {
    id: 4,
    title: "Classic Heritage Home",
    location: "Edinburgh, Scotland",
    price: "$2500",
    rating: 4.8,
    image: images.japan,
    category: "house",
  },
  {
    id: 5,
    title: "Modern Suburban House",
    location: "Palo Alto, California",
    price: "$3500",
    rating: 4.5,
    image: images.newYork,
    category: "house",
  },
  {
    id: 6,
    title: "Exclusive Ski Chalet",
    location: "Whistler, Canada",
    price: "$6000",
    rating: 4.9,
    image: images.japan,
    category: "chalet",
  },
];

export const categories = [
  { title: "All", category: "All" },
  { title: "Houses", category: "House" },
  { title: "Condos", category: "Condos" },
  { title: "Duplexes", category: "Duplexes" },
  { title: "Studios", category: "Studios" },
  { title: "Villas", category: "Villa" },
  { title: "Apartments", category: "Apartments" },
  { title: "Townhomes", category: "Townhomes" },
  { title: "Others", category: "Others" },
];

export const settings = [
  {
    title: "My Bookings",
    icon: icons.calendar,
  },
  {
    title: "Payments",
    icon: icons.wallet,
  },
  {
    title: "Profile",
    icon: icons.person,
  },
  {
    title: "Notifications",
    icon: icons.bell,
  },
  {
    title: "Security",
    icon: icons.shield,
  },
  {
    title: "Language",
    icon: icons.language,
  },
  {
    title: "Help Center",
    icon: icons.info,
  },
  {
    title: "Invite Friends",
    icon: icons.people,
  },
];

export const facilities = [
  {
    title: "Laundry",
    icon: icons.laundry,
  },
  {
    title: "Car Parking",
    icon: icons.carPark,
  },
  {
    title: "Sports Center",
    icon: icons.run,
  },
  {
    title: "Cutlery",
    icon: icons.cutlery,
  },
  {
    title: "Gym",
    icon: icons.dumbell,
  },
  {
    title: "Swimming pool",
    icon: icons.swim,
  },
  {
    title: "Wifi",
    icon: icons.wifi,
  },
  {
    title: "Pet Center",
    icon: icons.dog,
  },
];

export const gallery = [
  {
    id: 1,
    image: images.newYork,
  },
  {
    id: 2,
    image: images.japan,
  },
  {
    id: 3,
    image: images.newYork,
  },
  {
    id: 4,
    image: images.japan,
  },
  {
    id: 5,
    image: images.newYork,
  },
  {
    id: 6,
    image: images.japan,
  },
];
