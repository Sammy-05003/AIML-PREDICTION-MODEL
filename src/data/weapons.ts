export const WEAPONS = [
  {
    id: 'rifle1',
    name: 'AK-203',
    type: 'Assault Rifle',
    image: 'https://images.unsplash.com/photo-1632435499152-18838be77960?auto=format&fit=crop&w=800&q=80',
    description: '7.62×39mm assault rifle',
    stock: 2500,
    criticalLevel: 1000,
    monthlyProduction: 500
  },
  {
    id: 'rifle2',
    name: 'INSAS',
    type: 'Assault Rifle',
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=800&q=80',
    description: '5.56×45mm NATO assault rifle',
    stock: 3500,
    criticalLevel: 1200,
    monthlyProduction: 600
  },
  {
    id: 'rifle3',
    name: 'SIG 716i',
    type: 'Battle Rifle',
    image: 'https://images.unsplash.com/photo-1632435499152-18838be77960?auto=format&fit=crop&w=800&q=80',
    description: '7.62×51mm NATO battle rifle',
    stock: 1800,
    criticalLevel: 800,
    monthlyProduction: 400
  },
  {
    id: 'pistol1',
    name: 'Glock 17',
    type: 'Pistol',
    image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44?auto=format&fit=crop&w=800&q=80',
    description: '9×19mm Parabellum pistol',
    stock: 5000,
    criticalLevel: 1500,
    monthlyProduction: 800
  },
  {
    id: 'pistol2',
    name: 'Sig Sauer M17',
    type: 'Pistol',
    image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44?auto=format&fit=crop&w=800&q=80',
    description: '9×19mm Parabellum pistol',
    stock: 4200,
    criticalLevel: 1500,
    monthlyProduction: 700
  },
  {
    id: 'mg1',
    name: 'PKM',
    type: 'Machine Gun',
    image: 'https://images.unsplash.com/photo-1632435499152-18838be77960?auto=format&fit=crop&w=800&q=80',
    description: '7.62×54mmR machine gun',
    stock: 1200,
    criticalLevel: 500,
    monthlyProduction: 200
  }
];

export const AMMUNITION = {
  'rifle1': [
    { 
      id: 'ammo1', 
      name: '7.62×39mm', 
      type: 'Standard', 
      image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=400&q=80',
      stock: 150000,
      criticalLevel: 50000,
      monthlyProduction: 30000
    },
    { 
      id: 'ammo2', 
      name: '7.62×39mm', 
      type: 'Tracer', 
      image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44?auto=format&fit=crop&w=400&q=80',
      stock: 50000,
      criticalLevel: 20000,
      monthlyProduction: 10000
    }
  ],
  'rifle2': [
    { 
      id: 'ammo3', 
      name: '5.56×45mm', 
      type: 'Standard', 
      image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=400&q=80',
      stock: 200000,
      criticalLevel: 60000,
      monthlyProduction: 40000
    },
    { 
      id: 'ammo4', 
      name: '5.56×45mm', 
      type: 'Tracer', 
      image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44?auto=format&fit=crop&w=400&q=80',
      stock: 60000,
      criticalLevel: 25000,
      monthlyProduction: 15000
    }
  ]
  // ... other ammunition types with similar structure
};