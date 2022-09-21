const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "TogetherNFT";
const description = "TogetherNFT is a collection of 5,000 generative art pieces promoting empowerment, advocacy, and openness for all humans. Freedom, Love, Equality, Courage: TogetherNFT.";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically

const layerConfigurations = [ 
  {
    // Pair 1 - Background - legendary
    growEditionSizeTo: 1,
    layersOrder: [
      { name: "Pair-1-legendary-Background1",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-1-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-1-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-1-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-1-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-1-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-1-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 1 - Background - legendary
    growEditionSizeTo: 2,
    layersOrder: [
      { name: "Pair-1-legendary-Background2",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-1-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-1-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-1-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-1-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-1-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-1-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 1 - Clothes - legendary
    growEditionSizeTo: 3,
    layersOrder: [      
      { name: "Pair-1-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-1-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-1-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-1-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-1-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-1-legendary-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-1-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 1 - Eyes - legendary
    growEditionSizeTo: 4,
    layersOrder: [
      { name: "Pair-1-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-1-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-1-legendary-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-1-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-1-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-1-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-1-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 1 - Hair - legendary
    growEditionSizeTo: 5,
    layersOrder: [
      { name: "Pair-1-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-1-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-1-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-1-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-1-legendary-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-1-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-1-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 1 - Lips - legendary
    growEditionSizeTo: 6,
    layersOrder: [
      { name: "Pair-1-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-1-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-1-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-1-legendary-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-1-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-1-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-1-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 1 - Skin - legendary
    growEditionSizeTo: 7,
    layersOrder: [
      { name: "Pair-1-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-1-legendary-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-1-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-1-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-1-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-1-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-1-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 1 - legendary - Accessories
    growEditionSizeTo: 8,
    layersOrder: [
      { name: "Pair-1-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-1-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-1-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-1-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-1-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-1-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-1-legendary-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 1 - rares - Background 1
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Pair-1-rare-Background1",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-1-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-1-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-1-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-1-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-1-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-1-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 1 - rares - Background 2
    growEditionSizeTo: 12,
    layersOrder: [
      { name: "Pair-1-rare-Background2",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-1-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-1-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-1-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-1-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-1-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-1-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 1 - rares - Accessories 1
    growEditionSizeTo: 14,
    layersOrder: [
      { name: "Pair-1-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-1-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-1-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-1-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-1-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-1-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-1-rare-Accessories1",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 1 - rares - Accessories 2
    growEditionSizeTo: 16,
    layersOrder: [
      { name: "Pair-1-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-1-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-1-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-1-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-1-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-1-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-1-rare-Accessories2",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 1 - rares - Clothes 1
    growEditionSizeTo: 18,
    layersOrder: [
      { name: "Pair-1-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-1-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-1-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-1-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-1-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-1-rare-Clothes1",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-1-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 1 - rares - Clothes 2
    growEditionSizeTo: 20,
    layersOrder: [
      { name: "Pair-1-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-1-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-1-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-1-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-1-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-1-rare-Clothes2",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-1-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 1 - rares - Eyes 1
    growEditionSizeTo: 22,
    layersOrder: [
      { name: "Pair-1-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-1-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-1-rare-Eyes1",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-1-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-1-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-1-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-1-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 1 - rares - Eyes 2
    growEditionSizeTo: 24,
    layersOrder: [
      { name: "Pair-1-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-1-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-1-rare-Eyes2",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-1-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-1-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-1-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-1-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 1 - rares - Hair 1
    growEditionSizeTo: 26,
    layersOrder: [
      { name: "Pair-1-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-1-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-1-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-1-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-1-rare-Hair1",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-1-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-1-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 1 - rares - Hair 2
    growEditionSizeTo: 28,
    layersOrder: [
      { name: "Pair-1-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-1-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-1-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-1-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-1-rare-Hair2",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-1-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-1-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 1 - rares - Lips 1
    growEditionSizeTo: 30,
    layersOrder: [
      { name: "Pair-1-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-1-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-1-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-1-rare-Lips1",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-1-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-1-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-1-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 1 - rares - Lips 2
    growEditionSizeTo: 32,
    layersOrder: [
      { name: "Pair-1-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-1-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-1-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-1-rare-Lips2",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-1-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-1-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-1-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 1 - rares - Skin 1
    growEditionSizeTo: 34,
    layersOrder: [
      { name: "Pair-1-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-1-rare-Skin1",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-1-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-1-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-1-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-1-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-1-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 1 - rares - Skin 2
    growEditionSizeTo: 36,
    layersOrder: [
      { name: "Pair-1-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-1-rare-Skin2",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-1-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-1-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-1-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-1-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-1-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 1 - Remaining
    growEditionSizeTo: 823,
    layersOrder: [
      { name: "Pair-1-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-1-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-1-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-1-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-1-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-1-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-1-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },











  ////// Pair 2  //////
  {
    // Pair 2 - legendary - Accessories
    growEditionSizeTo: 824,
    layersOrder: [
      { name: "Pair-2-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-2-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-2-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-2-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-2-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-2-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-2-legendary-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 2 - Background - legendary #18
    growEditionSizeTo: 825,
    layersOrder: [
      { name: "Pair-2-legendary-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-2-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-2-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-2-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-2-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-2-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-2-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 2 - Clothes - legendary
    growEditionSizeTo: 826,
    layersOrder: [
      { name: "Pair-2-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-2-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-2-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-2-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-2-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-2-legendary-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-2-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 2 - Eyes - legendary
    growEditionSizeTo: 827,
    layersOrder: [
      { name: "Pair-2-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-2-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-2-legendary-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-2-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-2-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-2-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-2-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 2 - Hair - legendary
    growEditionSizeTo: 828,
    layersOrder: [
      { name: "Pair-2-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-2-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-2-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-2-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-2-legendary-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-2-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-2-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 2 - Lips - legendary
    growEditionSizeTo: 829,
    layersOrder: [
      { name: "Pair-2-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-2-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-2-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-2-legendary-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-2-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-2-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-2-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 2 - Skin - legendary
    growEditionSizeTo: 830,
    layersOrder: [
      { name: "Pair-2-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-2-legendary-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-2-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-2-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-2-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-2-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-2-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 2 - rares - Background
    growEditionSizeTo: 832,
    layersOrder: [
      { name: "Pair-2-rare-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-2-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-2-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-2-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-2-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-2-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-2-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 2 - rares - Accessories 1
    growEditionSizeTo: 834,
    layersOrder: [
      { name: "Pair-2-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-2-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-2-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-2-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-2-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-2-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-2-rare-accessories1",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 2 - rares - Accessories 2
    growEditionSizeTo: 836,
    layersOrder: [
      { name: "Pair-2-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-2-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-2-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-2-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-2-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-2-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-2-rare-accessories2",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 2 - rares - Clothes 1
    growEditionSizeTo: 838,
    layersOrder: [
      { name: "Pair-2-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-2-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-2-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-2-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-2-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-2-rare-clothes1",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-2-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 2 - rares - Clothes 2
    growEditionSizeTo: 840,
    layersOrder: [
      { name: "Pair-2-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-2-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-2-normal-eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-2-normal-lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-2-normal-hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-2-rare-clothes2",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-2-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 2 - rares - Eyes 1
    growEditionSizeTo: 842,
    layersOrder: [
      { name: "Pair-2-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-2-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-2-rare-Eyes1",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-2-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-2-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-2-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-2-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 2 - rares - Eyes 2
    growEditionSizeTo: 844,
    layersOrder: [
      { name: "Pair-2-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-2-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-2-rare-Eyes2",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-2-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-2-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-2-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-2-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 2 - rares - Hair 1
    growEditionSizeTo: 846,
    layersOrder: [
      { name: "Pair-2-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-2-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-2-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-2-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-2-rare-Hair1",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-2-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-2-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 2 - rares - Hair 2
    growEditionSizeTo: 848,
    layersOrder: [
      { name: "Pair-2-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-2-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-2-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-2-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-2-rare-Hair2",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-2-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-2-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 2 - rares - Lips 1
    growEditionSizeTo: 850,
    layersOrder: [
      { name: "Pair-2-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-2-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-2-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-2-rare-Lips1",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-2-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-2-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-2-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 2 - rares - Lips 2
    growEditionSizeTo: 852,
    layersOrder: [
      { name: "Pair-2-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-2-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-2-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-2-rare-Lips2",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-2-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-2-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-2-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 2 - rares - Skin 1
    growEditionSizeTo: 854,
    layersOrder: [
      { name: "Pair-2-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-2-rare-Skin1",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-2-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-2-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-2-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-2-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-2-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 2 - rares - Skin 2
    growEditionSizeTo: 856,
    layersOrder: [
      { name: "Pair-2-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-2-rare-Skin2",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-2-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-2-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-2-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-2-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-2-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 2 - Remaining
    growEditionSizeTo: 1671,
    layersOrder: [
      { name: "Pair-2-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-2-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-2-normal-eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-2-normal-lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-2-normal-hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-2-normal-clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-2-normal-accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },











    ////// Pair 3  //////
  {
    // Pair 3 - Accessories - legendary
    growEditionSizeTo: 1672,
    layersOrder: [
      { name: "Pair-3-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-3-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-3-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-3-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-3-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-3-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-3-legendary-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 3 - Background - legendary
    growEditionSizeTo: 1673,
    layersOrder: [
      { name: "Pair-3-legendary-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-3-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-3-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-3-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-3-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-3-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-3-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 3 - Clothes - legendary
    growEditionSizeTo: 1674,
    layersOrder: [
      { name: "Pair-3-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-3-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-3-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-3-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-3-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-3-legendary-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-3-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 3 - Eyes - legendary
    growEditionSizeTo: 1675,
    layersOrder: [
      { name: "Pair-3-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-3-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-3-legendary-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-3-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-3-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-3-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-3-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 3 - Hair - legendary
    growEditionSizeTo: 1676,
    layersOrder: [
      { name: "Pair-3-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-3-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-3-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-3-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-3-legendary-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-3-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-3-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 3 - Lips - legendary
    growEditionSizeTo: 1677,
    layersOrder: [
      { name: "Pair-3-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-3-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-3-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-3-legendary-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-3-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-3-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-3-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 3 - Skin - legendary
    growEditionSizeTo: 1678,
    layersOrder: [
      { name: "Pair-3-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-3-legendary-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-3-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-3-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-3-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-3-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-3-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 3 - rares - Background 1
    growEditionSizeTo: 1680,
    layersOrder: [
      { name: "Pair-3-rare-Background1",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-3-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-3-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-3-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-3-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-3-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-3-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 3 - rares - Background 2
    growEditionSizeTo: 1682,
    layersOrder: [
      { name: "Pair-3-rare-Background2",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-3-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-3-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-3-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-3-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-3-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-3-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 3 - rares - Accessories 1
    growEditionSizeTo: 1684,
    layersOrder: [
      { name: "Pair-3-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-3-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-3-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-3-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-3-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-3-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-3-rare-accessories1",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 3 - rares - Accessories 2
    growEditionSizeTo: 1686,
    layersOrder: [
      { name: "Pair-3-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-3-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-3-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-3-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-3-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-3-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-3-rare-accessories2",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 3 - rares - Clothes 1
    growEditionSizeTo: 1688,
    layersOrder: [
      { name: "Pair-3-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-3-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-3-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-3-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-3-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-3-rare-clothes1",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-3-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 3 - rares - Clothes 2
    growEditionSizeTo: 1690,
    layersOrder: [
      { name: "Pair-3-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-3-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-3-normal-eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-3-normal-lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-3-normal-hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-3-rare-clothes2",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-3-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 3 - rares - Eyes 1
    growEditionSizeTo: 1692,
    layersOrder: [
      { name: "Pair-3-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-3-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-3-rare-Eyes1",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-3-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-3-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-3-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-3-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 3 - rares - Eyes 2
    growEditionSizeTo: 1694,
    layersOrder: [
      { name: "Pair-3-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-3-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-3-rare-Eyes2",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-3-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-3-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-3-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-3-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 3 - rares - Hair 1
    growEditionSizeTo: 1696,
    layersOrder: [
      { name: "Pair-3-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-3-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-3-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-3-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-3-rare-Hair1",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-3-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-3-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 3 - rares - Hair 2
    growEditionSizeTo: 1698,
    layersOrder: [
      { name: "Pair-3-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-3-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-3-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-3-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-3-rare-Hair2",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-3-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-3-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 3 - rares - Lips 1
    growEditionSizeTo: 1700,
    layersOrder: [
      { name: "Pair-3-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-3-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-3-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-3-rare-Lips1",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-3-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-3-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-3-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 3 - rares - Lips 2
    growEditionSizeTo: 1702,
    layersOrder: [
      { name: "Pair-3-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-3-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-3-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-3-rare-Lips2",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-3-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-3-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-3-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 3 - rares - Skin 1
    growEditionSizeTo: 1704,
    layersOrder: [
      { name: "Pair-3-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-3-rare-Skin1",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-3-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-3-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-3-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-3-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-3-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 3 - rares - Skin 2
    growEditionSizeTo: 1706,
    layersOrder: [
      { name: "Pair-3-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-3-rare-Skin2",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-3-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-3-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-3-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-3-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-3-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 3 - Remaining
    growEditionSizeTo: 2519,
    layersOrder: [
      { name: "Pair-3-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-3-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-3-normal-eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-3-normal-lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-3-normal-hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-3-normal-clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-3-normal-accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },


 







  ////// Pair 4  //////

  {
    // Pair 4 - Accessories - legendary
    growEditionSizeTo: 2520,
    layersOrder: [
      { name: "Pair-4-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-4-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-4-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-4-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-4-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-4-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-4-legendary-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 4 - Background - legendary
    growEditionSizeTo: 2521,
    layersOrder: [
      { name: "Pair-4-legendary-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-4-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-4-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-4-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-4-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-4-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-4-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 4 - Clothes - legendary
    growEditionSizeTo: 2522,
    layersOrder: [
      { name: "Pair-4-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-4-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-4-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-4-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-4-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-4-legendary-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-4-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 4 - Eyes - legendary
    growEditionSizeTo: 2523,
    layersOrder: [
      { name: "Pair-4-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-4-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-4-legendary-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-4-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-4-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-4-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-4-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 4 - Hair - legendary
    growEditionSizeTo: 2524,
    layersOrder: [
      { name: "Pair-4-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-4-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-4-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-4-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-4-legendary-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-4-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-4-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 4 - Lips - legendary
    growEditionSizeTo: 2525,
    layersOrder: [
      { name: "Pair-4-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-4-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-4-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-4-legendary-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-4-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-4-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-4-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 4 - Skin - legendary
    growEditionSizeTo: 2526,
    layersOrder: [
      { name: "Pair-4-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-4-legendary-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-4-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-4-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-4-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-4-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-4-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 4 - rares - Background 1
    growEditionSizeTo: 2528,
    layersOrder: [
      { name: "Pair-4-rare-Background1",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-4-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-4-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-4-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-4-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-4-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-4-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 4 - rares - Background 2
    growEditionSizeTo: 2530,
    layersOrder: [
      { name: "Pair-4-rare-Background2",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-4-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-4-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-4-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-4-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-4-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-4-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 4 - rares - Accessories 1
    growEditionSizeTo: 2532,
    layersOrder: [
      { name: "Pair-4-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-4-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-4-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-4-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-4-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-4-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-4-rare-accessories1",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 4 - rares - Accessories 2
    growEditionSizeTo: 2534,
    layersOrder: [
      { name: "Pair-4-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-4-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-4-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-4-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-4-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-4-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-4-rare-accessories2",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 4 - rares - Clothes 1
    growEditionSizeTo: 2536,
    layersOrder: [
      { name: "Pair-4-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-4-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-4-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-4-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-4-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-4-rare-clothes1",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-4-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 4 - rares - Eyes 1
    growEditionSizeTo: 2538,
    layersOrder: [
      { name: "Pair-4-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-4-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-4-rare-Eyes1",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-4-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-4-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-4-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-4-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 4 - rares - Eyes 2
    growEditionSizeTo: 2540,
    layersOrder: [
      { name: "Pair-4-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-4-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-4-rare-Eyes2",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-4-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-4-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-4-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-4-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 4 - rares - Hair 1
    growEditionSizeTo: 2542,
    layersOrder: [
      { name: "Pair-4-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-4-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-4-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-4-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-4-rare-Hair1",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-4-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-4-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 4 - rares - Hair 2
    growEditionSizeTo: 2544,
    layersOrder: [
      { name: "Pair-4-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-4-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-4-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-4-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-4-rare-Hair2",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-4-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-4-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 4 - rares - Lips 1
    growEditionSizeTo: 2546,
    layersOrder: [
      { name: "Pair-4-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-4-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-4-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-4-rare-Lips1",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-4-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-4-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-4-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 4 - rares - Lips 2
    growEditionSizeTo: 2548,
    layersOrder: [
      { name: "Pair-4-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-4-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-4-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-4-rare-Lips2",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-4-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-4-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-4-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 4 - rares - Skin 1
    growEditionSizeTo: 2550,
    layersOrder: [
      { name: "Pair-4-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-4-rare-Skin1",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-4-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-4-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-4-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-4-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-4-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 4 - rares - Skin 2
    growEditionSizeTo: 2552,
    layersOrder: [
      { name: "Pair-4-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-4-rare-Skin2",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-4-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-4-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-4-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-4-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-4-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 4 - Remaining
    growEditionSizeTo: 3342,
    layersOrder: [
      { name: "Pair-4-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-4-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-4-normal-eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-4-normal-lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-4-normal-hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-4-normal-clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-4-normal-accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },











///// Pair 5 ///////
{
    // Pair 5 - Accessories - legendary
    growEditionSizeTo: 3343,
    layersOrder: [
      { name: "Pair-5-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-5-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-5-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-5-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-5-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-5-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-5-legendary-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 5 - Background - legendary - 1
    growEditionSizeTo: 3344,
    layersOrder: [
      { name: "Pair-5-legendary-Background1",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-5-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-5-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-5-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-5-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-5-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-5-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 5 - Background - legendary - 2
    growEditionSizeTo: 3345,
    layersOrder: [
      { name: "Pair-5-legendary-Background2",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-5-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-5-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-5-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-5-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-5-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-5-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 5 - Clothes - legendary
    growEditionSizeTo: 3346,
    layersOrder: [
      { name: "Pair-5-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-5-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-5-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-5-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-5-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-5-legendary-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-5-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 5 - Eyes - legendary
    growEditionSizeTo: 3347,
    layersOrder: [
      { name: "Pair-5-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-5-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-5-legendary-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-5-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-5-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-5-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-5-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 5 - Hair - legendary
    growEditionSizeTo: 3348,
    layersOrder: [
      { name: "Pair-5-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-5-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-5-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-5-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-5-legendary-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-5-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-5-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 5 - Lips - legendary
    growEditionSizeTo: 3349,
    layersOrder: [
      { name: "Pair-5-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-5-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-5-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-5-legendary-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-5-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-5-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-5-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 5 - Skin - legendary
    growEditionSizeTo: 3350,
    layersOrder: [
      { name: "Pair-5-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-5-legendary-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-5-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-5-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-5-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-5-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-5-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 5 - rares - Accessories 1
    growEditionSizeTo: 3352,
    layersOrder: [
      { name: "Pair-5-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-5-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-5-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-5-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-5-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-5-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-5-rare-accessories1",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 5 - rares - Accessories 2
    growEditionSizeTo: 3354,
    layersOrder: [
      { name: "Pair-5-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-5-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-5-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-5-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-5-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-5-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-5-rare-accessories2",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 5 - rares - Background 1
    growEditionSizeTo: 3356,
    layersOrder: [
      { name: "Pair-5-rare-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-5-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-5-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-5-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-5-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-5-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-5-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 5 - rares - Clothes 1
    growEditionSizeTo: 3358,
    layersOrder: [
      { name: "Pair-5-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-5-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-5-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-5-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-5-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-5-rare-clothes1",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-5-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 5 - rares - Clothes 2
    growEditionSizeTo: 3360,
    layersOrder: [
      { name: "Pair-5-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-5-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-5-normal-eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-5-normal-lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-5-normal-hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-5-rare-clothes2",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-5-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 5 - rares - Eyes 1
    growEditionSizeTo: 3362,
    layersOrder: [
      { name: "Pair-5-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-5-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-5-rare-Eyes1",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-5-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-5-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-5-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-5-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 5 - rares - Eyes 2
    growEditionSizeTo: 3364,
    layersOrder: [
      { name: "Pair-5-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-5-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-5-rare-Eyes2",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-5-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-5-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-5-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-5-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 5 - rares - Hair 1
    growEditionSizeTo: 3366,
    layersOrder: [
      { name: "Pair-5-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-5-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-5-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-5-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-5-rare-Hair1",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-5-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-5-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 5 - rares - Hair 2
    growEditionSizeTo: 3368,
    layersOrder: [
      { name: "Pair-5-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-5-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-5-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-5-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-5-rare-Hair2",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-5-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-5-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 5 - rares - Lips 1
    growEditionSizeTo: 3370,
    layersOrder: [
      { name: "Pair-5-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-5-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-5-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-5-rare-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-5-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-5-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-5-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 5 - rares - Skin 1
    growEditionSizeTo: 3372,
    layersOrder: [
      { name: "Pair-5-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-5-rare-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-5-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-5-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-5-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-5-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-5-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 5 - Remaining
    growEditionSizeTo: 4165,
    layersOrder: [
      { name: "Pair-5-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-5-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-5-normal-eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-5-normal-lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-5-normal-hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-5-normal-clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-5-normal-accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },











///// Pair 6 ///////

  {
    // Pair 6 - Accessories - legendary
    growEditionSizeTo: 4166,
    layersOrder: [
      { name: "Pair-6-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-6-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-6-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-6-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-6-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-6-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-6-legendary-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 6 - Background - legendary
    growEditionSizeTo: 4167,
    layersOrder: [
      { name: "Pair-6-legendary-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-6-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-6-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-6-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-6-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-6-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-6-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 6 - Clothes - legendary
    growEditionSizeTo: 4168,
    layersOrder: [
      { name: "Pair-6-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-6-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-6-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-6-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-6-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-6-legendary-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-6-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 6 - Eyes - legendary
    growEditionSizeTo: 4169,
    layersOrder: [
      { name: "Pair-6-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-6-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-6-legendary-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-6-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-6-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-6-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-6-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 6 - Hair - legendary
    growEditionSizeTo: 4170,
    layersOrder: [
      { name: "Pair-6-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-6-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-6-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-6-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-6-legendary-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-6-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-6-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 6 - Lips - legendary
    growEditionSizeTo: 4171,
    layersOrder: [
      { name: "Pair-6-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-6-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-6-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-6-legendary-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-6-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-6-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-6-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 6 - Skin - legendary
    growEditionSizeTo: 4172,
    layersOrder: [
      { name: "Pair-6-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-6-legendary-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-6-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-6-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-6-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-6-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-6-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 6 - rares - Background 1
    growEditionSizeTo: 4174,
    layersOrder: [
      { name: "Pair-6-rare-Background1",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-6-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-6-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-6-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-6-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-6-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-6-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 6 - rares - Background 2
    growEditionSizeTo: 4176,
    layersOrder: [
      { name: "Pair-6-rare-Background2",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-6-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-6-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-6-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-6-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-6-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-6-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 6 - rares - Accessories 1
    growEditionSizeTo: 4178,
    layersOrder: [
      { name: "Pair-6-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-6-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-6-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-6-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-6-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-6-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-6-rare-accessories1",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 6 - rares - Accessories 2
    growEditionSizeTo: 4180,
    layersOrder: [
      { name: "Pair-6-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-6-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-6-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-6-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-6-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-6-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-6-rare-accessories2",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 6 - rares - Clothes 1
    growEditionSizeTo: 4182,
    layersOrder: [
      { name: "Pair-6-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-6-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-6-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-6-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-6-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-6-rare-clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-6-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 6 - rares - Eyes 1
    growEditionSizeTo: 4184,
    layersOrder: [
      { name: "Pair-6-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-6-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-6-rare-Eyes1",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-6-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-6-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-6-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-6-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 6 - rares - Eyes 2
    growEditionSizeTo: 4186,
    layersOrder: [
      { name: "Pair-6-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-6-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-6-rare-Eyes2",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-6-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-6-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-6-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-6-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 6 - rares - Hair 1
    growEditionSizeTo: 4188,
    layersOrder: [
      { name: "Pair-6-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-6-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-6-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-6-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-6-rare-Hair1",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-6-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-6-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 6 - rares - Hair 2
    growEditionSizeTo: 4190,
    layersOrder: [
      { name: "Pair-6-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-6-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-6-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-6-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-6-rare-Hair2",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-6-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-6-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 6 - rares - Lips 1
    growEditionSizeTo: 4192,
    layersOrder: [
      { name: "Pair-6-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-6-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-6-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-6-rare-Lips1",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-6-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-6-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-6-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 6 - rares - Lips 2
    growEditionSizeTo: 4194,
    layersOrder: [
      { name: "Pair-6-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-6-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-6-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-6-rare-Lips2",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-6-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-6-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-6-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 6 - rares - Skin 1
    growEditionSizeTo: 4196,
    layersOrder: [
      { name: "Pair-6-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-6-rare-Skin1",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-6-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-6-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-6-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-6-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-6-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 6 - rares - Skin 2
    growEditionSizeTo: 4198,
    layersOrder: [
      { name: "Pair-6-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-6-rare-Skin2",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-6-normal-Eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-6-normal-Lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-6-normal-Hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-6-normal-Clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-6-normal-Accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  },
  {
    // Pair 6 - Remaining
    growEditionSizeTo: 4988,
    layersOrder: [
      { name: "Pair-6-normal-Background",
        options: {
          displayName: "Background",
        }
      },
      { name: "Pair-6-normal-Skin",
        options: {
          displayName: "Skin"
        }
      },
      { name: "Pair-6-normal-eyes",
        options: {
          displayName: "Eyes"
        }
      },
      { name: "Pair-6-normal-lips",
        options: {
          displayName: "Lips"
        }
      },
      { name: "Pair-6-normal-hair",
        options: {
          displayName: "Hair"
        }
      },
      { name: "Pair-6-normal-clothes",
        options: {
          displayName: "Clothes"
        }
      },
      { name: "Pair-6-normal-accessories",
        options: {
          displayName: "Accessories"
        } 
      }
    ]
  }
];

const shuffleLayerConfigurations = true;

const debugLogs = true;

const format = {
  width: 3000,
  height: 3000,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
