export const COMPONENTS = (component: string) => TREE.C[component];
export const RECIPES = (recipe: string) => TREE.R[recipe];
export const MACHINES = (machine: string) => TREE.M[machine];
export const TREE: any = {
  M: {
    hands: { name: 'hands', power: 1 },

    stone_furnace: { name: 'stone_furnace', power: 1 },
    chem_stone_furnace: { name: 'chem_stone_furnace', power: 1 },
    mix_stone_furnace: { name: 'mix_stone_furnace', power: 1 },
    steel_furnace: { name: 'steel_furnace', power: 2 },
    chem_steel_furnace: { name: 'chem_steel_furnace', power: 2 },
    mix_steel_furnace: { name: 'mix_steel_furnace', power: 2 },
    electric_furnace_1: { name: 'electric_furnace_1', power: 2 },
    electric_furnace_2: { name: 'electric_furnace_2', power: 3 },
    electric_furnace_3: { name: 'electric_furnace_3', power: 4 },
    chem_electric_furnace: { name: 'chem_electric_furnace', power: 2 },
    mix_electric_furnace: { name: 'mix_electric_furnace', power: 2 },
    multi_electric_furnace_1: { name: 'multi_electric_furnace_1', power: 3 },
    multi_electric_furnace_2: { name: 'multi_electric_furnace_2', power: 4 },

    asm_1: { name: 'asm_1', power: 0.5 },
    asm_2: { name: 'asm_2', power: 0.75 },
    asm_3: { name: 'asm_3', power: 1.25 },
    asm_4: { name: 'asm_4', power: 2 },
    asm_5: { name: 'asm_5', power: 2.75 },
    asm_6: { name: 'asm_6', power: 3.5 },

    el_asm_1: { name: 'el_asm_1', power: 1 },
    el_asm_2: { name: 'el_asm_2', power: 2.25 },
    el_asm_3: { name: 'el_asm_3', power: 4 },

    chem_plant_1: { name: 'chem_plant_1', power: 1.25 },
    chem_plant_2: { name: 'chem_plant_2', power: 2 },
    chem_plant_3: { name: 'chem_plant_3', power: 2.75 },

    electrolyser_1: { name: 'electrolyser_1', power: 0.8 },
    electrolyser_2: { name: 'electrolyser_2', power: 1.5 },
    electrolyser_3: { name: 'electrolyser_3', power: 2.5 },

    oil_refinery_1: { name: 'oil_refinery_1', power: 1 },
    oil_refinery_2: { name: 'oil_refinery_2', power: 1.75 },
    oil_refinery_3: { name: 'oil_refinery_3', power: 2.5 },

    greenhouse: { name: 'greenhouse', power: 0.75 },
  },
  C: {
    composed_science: { name: 'composed_science', recipes: ['composed_science'] },

    red_science_pack: { name: 'red_science_pack', recipes: ['red_science_pack'] },
    green_science_pack: { name: 'green_science_pack', recipes: ['green_science_pack'] },
    blue_science_pack: { name: 'blue_science_pack', recipes: ['blue_science_pack'] },
    war_science_pack: { name: 'war_science_pack', recipes: ['war_science_pack'] },
    logistic_science_pack: { name: 'logistic_science_pack', recipes: ['logistic_science_pack'] },
    production_science_pack: { name: 'production_science_pack', recipes: ['production_science_pack'] },
    hightech_science_pack: { name: 'hightech_science_pack', recipes: ['hightech_science_pack'] },

    // mechanisms
    yellow_inserter: { name: 'yellow_inserter', recipes: ['yellow_inserter'] },
    red_inserter: { name: 'red_inserter', recipes: ['red_inserter'] },
    blue_inserter: { name: 'blue_inserter', recipes: ['blue_inserter'] },
    filter_inserter: { name: 'filter_inserter', recipes: ['filter_inserter'] },

    yellow_belt: { name: 'yellow_belt', recipes: ['yellow_belt'] },
    red_belt: { name: 'red_belt', recipes: ['red_belt'] },
    blue_belt: { name: 'blue_belt', recipes: ['blue_belt'] },
    turbo_belt: { name: 'turbo_belt', recipes: ['turbo_belt'] },
    ultimate_belt: { name: 'ultimate_belt', recipes: ['ultimate_belt'] },

    // gases
    compressed_air: { name: 'compressed_air', elementary: true },
    hydrogen: { name: 'hydrogen', recipes: ['salt_water_electrolysis', 'water_electrolysis'] },
    chlorine: { name: 'chlorine', recipes: ['salt_water_electrolysis'] },
    oxygen: { name: 'oxygen', recipes: ['water_electrolysis'] },
    // solids
    wood: { name: 'wood', elementary: true },
    coal: { name: 'coal', elementary: true },
    stone: { name: 'stone', elementary: true },
    iron_ore: { name: 'iron_ore', elementary: true },
    copper_ore: { name: 'copper_ore', elementary: true },
    uranium_ore: { name: 'uranium_ore', elementary: true },
    aluminium_ore: { name: 'aluminium_ore', elementary: true },
    tin_ore: { name: 'tin_ore', elementary: true },
    cobaltite_ore: { name: 'cobaltite_ore', elementary: true },
    gold_ore: { name: 'gold_ore', elementary: true },
    silver_ore: { name: 'silver_ore', elementary: true },
    lead_ore: { name: 'lead_ore', elementary: true },
    nickel_ore: { name: 'nickel_ore', elementary: true },
    titanium_ore: { name: 'titanium_ore', elementary: true },
    zinc_ore: { name: 'zinc_ore', elementary: true },
    tungsten_ore: { name: 'tungsten_ore', elementary: true },
    quartz: { name: 'quartz', elementary: true },
    ruby_ore: { name: 'ruby_ore', elementary: true },
    sapphire_ore: { name: 'sapphire_ore', elementary: true },
    emerald_ore: { name: 'emerald_ore', elementary: true },
    amethyst_ore: { name: 'amethyst_ore', elementary: true },
    topaz: { name: 'topaz', elementary: true },
    diamond_ore: { name: 'diamond_ore', elementary: true },
    salt: { name: 'salt', recipes: ['salt'] },
    iron_plate: { name: 'iron_plate', recipes: ['iron_plate'] },
    copper_plate: { name: 'copper_plate', recipes: ['copper_plate'] },
    wooden_board: { name: 'wooden_board', recipes: ['wooden_board'] },
    wooden_plate: { name: 'wooden_plate', recipes: ['wooden_plate'] },
    copper_wire: { name: 'copper_wire', recipes: ['copper_wire'] },
    basic_circuit_board: { name: 'basic_circuit_board', recipes: ['basic_circuit_board'] },
    circuit_board: { name: 'circuit_board', recipes: ['circuit_board'] },
    superior_circuit_board: { name: 'superior_circuit_board', recipes: ['superior_circuit_board'] },
    resin: { name: 'resin', recipes: ['resin_wood', 'resin_masut'] },
    silicon_nitride: { name: 'silicon_nitride', recipes: ['silicon_nitride'] },
    tin_plate: { name: 'tin_plate', recipes: ['tin_plate'] },
    bronze_plate: { name: 'bronze_plate', recipes: ['bronze_plate'] },
    phenolic_board: { name: 'phenolic_board', recipes: ['phenolic_board'] },
    iron_gear: { name: 'iron_gear', recipes: ['iron_gear'] },
    solid_fuel_engine: { name: 'solid_fuel_engine', recipes: ['solid_fuel_engine'] },
    accumulator: { name: 'accumulator', recipes: ['accumulator'] },
    lithium_accumulator: { name: 'lithium_accumulator', recipes: ['lithium_accumulator'] },
    turret_1: { name: 'turret_1', recipes: ['turret_1'] },
    grenade: { name: 'grenade', recipes: ['grenade'] },
    piercing_ammo: { name: 'piercing_ammo', recipes: ['piercing_ammo'] },
    steel_chest: { name: 'steel_chest', recipes: ['steel_chest'] },
    drone_frame_1: { name: 'drone_frame_1', recipes: ['drone_frame_1'] },
    electric_mining_drill_1: { name: 'electric_mining_drill_1', recipes: ['electric_mining_drill_1'] },
    electric_furnace_1: { name: 'electric_furnace_1', recipes: ['electric_furnace_1'] },
    electric_furnace_2: { name: 'electric_furnace_2', recipes: ['electric_furnace_2'] },
    electric_furnace_3: { name: 'electric_furnace_3', recipes: ['electric_furnace_3'] },
    electric_engine: { name: 'electric_engine', recipes: ['electric_engine'] },
    speed_module_1: { name: 'speed_module_1', recipes: ['speed_module_1'] },

    // liquids
    water: { name: 'water', elementary: true },
    lithium_water: { name: 'lithium_water', elementary: true },
    oil: { name: 'oil', elementary: true },
    masut: { name: 'masut', recipes: [] },
    sulfur_dioxide: { name: 'sulfur_dioxide', recipes: [] },
    ferric_oxide: { name: 'ferric_oxide', recipes: [] },
    ammonia: { name: 'ammonia', recipes: [] },
    glycerol: { name: 'glycerol', recipes: [] },
    hydrazine: { name: 'hydrazine', recipes: [] },
    hydrogen_chloride: { name: 'hydrogen_chloride', recipes: ['hydrogen_chloride'] },
    hydrogen_peroxide: { name: 'hydrogen_peroxide', recipes: [] },
    pure_water: { name: 'pure_water', recipes: ['pure_water_water', 'pure_water_lithium'] },
    ferric_chloride: { name: 'ferric_chloride', recipes: ['ferric_chloride'] },
  },
  R: {
    composed_science: {
      in: [
        { c: 'red_science_pack', q: 1 },
        { c: 'green_science_pack', q: 1 },
        { c: 'blue_science_pack', q: 1 },
        { c: 'war_science_pack', q: 1 },
        { c: 'logistic_science_pack', q: 1 },
        { c: 'production_science_pack', q: 1 },
        { c: 'hightech_science_pack', q: 1 },
      ],
      time: 1,
      out: [
        { c: 'composed_science', q: 1 }
      ],
      m: ['hands']
    },
    red_science_pack: {
      in: [
        { c: 'copper_plate', q: 1 },
        { c: 'iron_gear', q: 1 },
      ],
      time: 5,
      out: [
        { c: 'red_science_pack', q: 1 }
      ],
      m: [
        'asm_1',
        'asm_2',
        'asm_3',
        'asm_4',
        'asm_5',
        'asm_6',
      ]
    },
    green_science_pack: {
      in: [
        { c: 'yellow_inserter', q: 1 },
        { c: 'yellow_belt', q: 1 },
      ],
      time: 6,
      out: [
        { c: 'red_science_pack', q: 1 }
      ],
      m: [
        'asm_1',
        'asm_2',
        'asm_3',
        'asm_4',
        'asm_5',
        'asm_6',
      ]
    },
    blue_science_pack: {
      in: [
        { c: 'accumulator', q: 1 },
        { c: 'solid_fuel_engine', q: 1 },
        { c: 'bronze_plate', q: 1 },
        { c: 'circuit', q: 1 },
      ],
      time: 12,
      out: [
        { c: 'blue_science_pack', q: 2 }
      ],
      m: [
        'asm_2',
        'asm_3',
        'asm_4',
        'asm_5',
        'asm_6',
      ]
    },
    war_science_pack: {
      in: [
        { c: 'piercing_ammo', q: 1 },
        { c: 'grenade', q: 1 },
        { c: 'turret_1', q: 1 },
      ],
      time: 10,
      out: [
        { c: 'war_science_pack', q: 2 }
      ],
      m: [
        'asm_2',
        'asm_3',
        'asm_4',
        'asm_5',
        'asm_6',
      ]
    },
    logistic_science_pack: {
      in: [
        { c: 'steel_chest', q: 1 },
        { c: 'filter_inserter', q: 1 },
        { c: 'blue_belt', q: 1 },
        { c: 'drone_frame_1', q: 1 },
      ],
      time: 14,
      out: [
        { c: 'logistic_science_pack', q: 2 }
      ],
      m: [
        'asm_2',
        'asm_3',
        'asm_4',
        'asm_5',
        'asm_6',
      ]
    },
    production_science_pack: {
      in: [
        { c: 'electric_mining_drill_1', q: 1 },
        { c: 'electric_furnace_1', q: 1 },
      ],
      time: 14,
      out: [
        { c: 'production_science_pack', q: 2 }
      ],
      m: [
        'asm_2',
        'asm_3',
        'asm_4',
        'asm_5',
        'asm_6',
      ]
    },
    hightech_science_pack: {
      in: [
        { c: 'electric_engine', q: 1 },
        { c: 'speed_module_1', q: 1 },
        { c: 'silicon_nitride', q: 2 },
        { c: 'lithium_accumulator', q: 1 },
        { c: 'superior_circuit', q: 3 },
      ],
      time: 14,
      out: [
        { c: 'hightech_science_pack', q: 2 }
      ],
      m: [
        'asm_3',
        'asm_4',
        'asm_5',
        'asm_6',
      ]
    },
    pure_water_water: {
      in: [
        { c: 'water', q: 100 },
      ],
      time: 2,
      out: [
        { c: 'pure_water', q: 100 }
      ],
      m: [
        'asm_1',
        'asm_2',
        'asm_3',
        'asm_4',
        'asm_5',
        'asm_6',
        'chem_plant_1',
        'chem_plant_2',
        'chem_plant_3',
      ]
    },
    pure_water_lithium: {
      in: [
        { c: 'water', q: 100 },
      ],
      time: 2,
      out: [
        { c: 'pure_water', q: 100 }
      ],
      m: [
        'asm_1',
        'asm_2',
        'asm_3',
        'asm_4',
        'asm_5',
        'asm_6',
        'chem_plant_1',
        'chem_plant_2',
        'chem_plant_3',
      ]
    },
    salt: {
      in: [
        { c: 'water', q: 25 },
      ],
      time: 0.5,
      out: [
        { c: 'salt', q: 1 }
      ],
      m: [
        'chem_stone_furnace',
        'chem_steel_furnace',
        'chem_electric_furnace',
        'multi_electric_furnace_1',
        'multi_electric_furnace_2',
      ]
    },
    water_electrolysis: {},
    hydrogen_petroleum_gas: {},
    coal_masut: {},
    base_processing: {},
    pro_processing: {},
    alt_base_processing: {},
    sulfur_base_processing: {},
    sulfur_dioxide_out_diesel_base_processing: {},
    sulfur_dioxide_out_masut_base_processing: {},
    sulfur_dioxide_out_petroleum_base_processing: {},
    masut_to_diesel: {},
    diesel_to_petroleum: {},
    petroleum_to_dry_fuel: {},
    diesel_to_dry_fuel: {},
    masut_to_dry_fuel: {},
    masut_to_lubricant: {},
    salt_water_electrolysis: {
      in: [
        { c: 'salt', q: 1 },
        { c: 'pure_water', q: 10 },
      ],
      time: 2,
      out: [
        { c: 'sodium_hydroxide', q: 1 },
        { c: 'chlorine', q: 25 },
        { c: 'hydrogen', q: 20 },
      ],
      m: [
        'chem_stone_furnace',
        'chem_steel_furnace',
        'chem_electric_furnace',
        'multi_electric_furnace_1',
        'multi_electric_furnace_2',
      ]
    },
    ferric_chloride: {
      in: [
        { c: 'iron_ore', q: 1 },
        { c: 'hydrogen_chloride', q: 30 },
      ],
      time: 2.5,
      out: [
        { c: 'ferric_chloride', q: 50 },
      ],
      m: [
        'chem_stone_furnace',
        'chem_steel_furnace',
        'chem_electric_furnace',
        'multi_electric_furnace_1',
        'multi_electric_furnace_2',
      ]
    },
    hydrogen_chloride: {
      in: [
        { c: 'chlorine', q: 12.5 },
        { c: 'hydrogen', q: 10 },
      ],
      time: 1,
      out: [
        { c: 'hydrogen_chloride', q: 25 },
      ],
      m: [
        'chem_stone_furnace',
        'chem_steel_furnace',
        'chem_electric_furnace',
        'multi_electric_furnace_1',
        'multi_electric_furnace_2',
      ]
    },
    liquid_fuel: {},
    copper_plate: {
      in: [
        { c: 'copper_ore', q: 1 }
      ],
      time: 3.5,
      out: [
        { c: 'copper_plate', q: 1 },
      ],
      m: [
        'stone_furnace',
        'chem_stone_furnace',
        'mix_stone_furnace',
        'steel_furnace',
        'chem_steel_furnace',
        'mix_steel_furnace',
        'electric_furnace_1',
        'electric_furnace_2',
        'electric_furnace_3',
        'chem_electric_furnace',
        'mix_electric_furnace',
        'multi_electric_furnace_1',
        'multi_electric_furnace_2',
      ]
    },
    iron_plate: {
      in: [
        { c: 'iron_ore', q: 1 }
      ],
      time: 3.5,
      out: [
        { c: 'iron_plate', q: 1 },
      ],
      m: [
        'stone_furnace',
        'chem_stone_furnace',
        'mix_stone_furnace',
        'steel_furnace',
        'chem_steel_furnace',
        'mix_steel_furnace',
        'electric_furnace_1',
        'electric_furnace_2',
        'electric_furnace_3',
        'chem_electric_furnace',
        'mix_electric_furnace',
        'multi_electric_furnace_1',
        'multi_electric_furnace_2',
      ]
    },
    tin_plate: {
      in: [
        { c: 'tin_ore', q: 1 }
      ],
      time: 3.5,
      out: [
        { c: 'tin_plate', q: 1 },
      ],
      m: [
        'stone_furnace',
        'chem_stone_furnace',
        'mix_stone_furnace',
        'steel_furnace',
        'chem_steel_furnace',
        'mix_steel_furnace',
        'electric_furnace_1',
        'electric_furnace_2',
        'electric_furnace_3',
        'chem_electric_furnace',
        'mix_electric_furnace',
        'multi_electric_furnace_1',
        'multi_electric_furnace_2',
      ]
    },
    lead_plate: {
      in: [
        { c: 'lead_ore', q: 1 }
      ],
      time: 3.5,
      out: [
        { c: 'lead_plate', q: 1 },
      ],
      m: [
        'stone_furnace',
        'chem_stone_furnace',
        'mix_stone_furnace',
        'steel_furnace',
        'chem_steel_furnace',
        'mix_steel_furnace',
        'electric_furnace_1',
        'electric_furnace_2',
        'electric_furnace_3',
        'chem_electric_furnace',
        'mix_electric_furnace',
        'multi_electric_furnace_1',
        'multi_electric_furnace_2',
      ]
    },
    steel_plate: {},
    copper_wire: {
      in: [
        { c: 'copper_plate', q: 1 },
      ],
      time: 0.5,
      out: [
        { c: 'copper_wire', q: 2 },
      ],
      m: [
        'asm_1',
        'asm_2',
        'asm_3',
        'asm_4',
        'asm_5',
        'asm_6',
        'el_asm_1',
        'el_asm_2',
        'el_asm_3',
      ]
    },
    tinned_wire: {},
    solder_plate: {},
    solder_wire: {},
    resistor: {},
    transistor: {},
    integrated_electronics: {},
    wooden_plate: {
      in: [
        { c: 'wood', q: 1 },
      ],
      time: 0.5,
      out: [
        { c: 'wooden_plate', q: 2 },
      ],
      m: [
        'asm_1',
        'asm_2',
        'asm_3',
        'asm_4',
        'asm_5',
        'asm_6',
      ]
    },
    wooden_board: {
      in: [
        { c: 'wooden_plate', q: 1 },
      ],
      time: 0.5,
      out: [
        { c: 'wooden_board', q: 2 },
      ],
      m: [
        'asm_1',
        'asm_2',
        'asm_3',
        'asm_4',
        'asm_5',
        'asm_6',
        'el_asm_1',
        'el_asm_2',
        'el_asm_3',
      ]
    },
    phenolic_board: {
      in: [
        { c: 'resin', q: 1 },
        { c: 'wooden_board', q: 1 },
      ],
      time: 0.5,
      out: [
        { c: 'phenolic_board', q: 2 },
      ],
      m: [
        'asm_1',
        'asm_2',
        'asm_3',
        'asm_4',
        'asm_5',
        'asm_6',
        'el_asm_1',
        'el_asm_2',
        'el_asm_3',
      ]
    },
    resin_wood: {
      in: [
        { c: 'wood', q: 1 },
      ],
      time: 1,
      out: [
        { c: 'resin', q: 1 },
      ],
      m: [
        'asm_1',
        'asm_2',
        'asm_3',
        'asm_4',
        'asm_5',
        'asm_6',
      ]
    },
    resin_masut: {
      in: [
        { c: 'masut', q: 10 },
      ],
      time: 1,
      out: [
        { c: 'resin', q: 1 },
      ],
      m: [
        'chem_stone_furnace',
        'chem_steel_furnace',
        'chem_electric_furnace',
        'multi_electric_furnace_1',
        'multi_electric_furnace_2',
      ]
    },
    fibreglass_board: {},
    basic_circuit_board: {
      in: [
        { c: 'copper_wire', q: 3 },
        { c: 'wooden_board', q: 1 },
      ],
      time: 1,
      out: [
        { c: 'basic_circuit_board', q: 1 },
      ],
      m: [
        'asm_1',
        'asm_2',
        'asm_3',
        'asm_4',
        'asm_5',
        'asm_6',
        'el_asm_1',
        'el_asm_2',
        'el_asm_3',
      ]
    },
    circuit_board: {
      in: [
        { c: 'copper_plate', q: 1 },
        { c: 'tin_plate', q: 1 },
        { c: 'phenolic_board', q: 1 },
        { c: 'ferric_chloride', q: 5 },
      ],
      time: 5,
      out: [
        { c: 'circuit_board', q: 1 },
      ],
      m: [
        'asm_1',
        'asm_2',
        'asm_3',
        'asm_4',
        'asm_5',
        'asm_6',
        'el_asm_1',
        'el_asm_2',
        'el_asm_3',
      ]
    },
    iron_gear: {
      in: [
        { c: 'iron_plate', q: 2 },
      ],
      time: 0.5,
      out: [
        { c: 'iron_gear', q: 1 },
      ],
      m: [
        'asm_1',
        'asm_2',
        'asm_3',
        'asm_4',
        'asm_5',
        'asm_6',
      ]
    },
    yellow_inserter: {
      in: [
        { c: 'iron_plate', q: 1 },
        { c: 'iron_gear', q: 1 },
        { c: 'basic_circuit_board', q: 1 },
      ],
      time: 0.5,
      out: [
        { c: 'yellow_inserter', q: 1 },
      ],
      m: [
        'asm_2',
        'asm_3',
        'asm_4',
        'asm_5',
        'asm_6',
      ]
    },
    red_inserter: {
      in: [
        { c: 'iron_plate', q: 1 },
        { c: 'iron_gear', q: 1 },
        { c: 'yellow_inserter', q: 1 },
      ],
      time: 0.5,
      out: [
        { c: 'red_inserter', q: 1 },
      ],
      m: [
        'asm_2',
        'asm_3',
        'asm_4',
        'asm_5',
        'asm_6',
      ]
    },
    blue_inserter: {
      in: [
        { c: 'iron_plate', q: 2 },
        { c: 'yellow_inserter', q: 1 },
        { c: 'basic_circuit', q: 2 },
      ],
      time: 0.5,
      out: [
        { c: 'red_inserter', q: 1 },
      ],
      m: [
        'asm_2',
        'asm_3',
        'asm_4',
        'asm_5',
        'asm_6',
      ]
    },
    yellow_belt: {
      in: [
        { c: 'iron_plate', q: 1 },
        { c: 'iron_gear', q: 1 },
        { c: 'basic_circuit_board', q: 1 },
      ],
      time: 0.5,
      out: [
        { c: 'yellow_inserter', q: 1 },
      ],
      m: [
        'asm_2',
        'asm_3',
        'asm_4',
        'asm_5',
        'asm_6',
      ]
    },
    superior_circuit_board: {},
    basic_circuit: {},
    circuit: {},
    superior_circuit: {},
  }
};

// const calculate = (materialName, quantityPerSecond, margin = ' ') => {
//   const material = TREE.C[materialName];
//   if (!material.elementary) {
//     const recipe = RECIPES(material.recipes[0]);
//     const out = recipe.out.filter(item => item.c === materialName)[0];
//     const sideOut = recipe.out.length > 1 && recipe.out.filter(item => item.c !== materialName);
//     const machine = MACHINES(recipe.m[0]);
//     const prodPowerNeeded = quantityPerSecond / out.q * recipe.time;
//     const machinesQuantity = prodPowerNeeded / machine.power;
//     console.log(
//       `${margin} ${materialName}: Need to produce: ${quantityPerSecond}, machine: ${machine.name}/${Math.ceil(machinesQuantity)}(${machinesQuantity.toFixed(2)})`
//     );
//     if (sideOut) {
//       sideOut.forEach(item => {
//         console.log(`${margin} SIDE: ${item.c}: Quantity per second: ${quantityPerSecond * item.q / out.q}`);
//       });
//     }
//     recipe.in.forEach(item => calculate(COMPONENTS(item.c).name, quantityPerSecond * item.q / out.q, margin + '- '));
//   } else {
//     console.log(`${margin} ${materialName}: ${quantityPerSecond}`);
//   }
// };
