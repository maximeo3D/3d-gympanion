const assetConfiguration = {
  "models": {
    "part_model": {
      "name": "Modèle Part",
      "file": "model.bin",
      "format": "bin",
      "dataOffset": 66,
      "meshes": {
        "screen": {
          "slots": [
            "screen_casing",
            "screen_outline",
            "screen"
          ],
          "engraving": false,
          "file": "model.bin"
        },
        "case": {
          "slots": [
            "case",
            "button"
          ],
          "engraving": false,
          "file": "model.bin"
        },
        "bolt": {
          "slots": [
            "screws",
            "metal",
            "plastic_black"
          ],
          "engraving": false,
          "file": "model.bin"
        }
      },
      "files": [
        {
          "file": "model.bin",
          "format": "bin"
        }
      ]
    }
  },
  "rules": [
    {
      "id": "regle",
      "label": "Case",
      "options": [
        {
          "id": "option1",
          "label": "Black",
          "meshes": {
            "case": {
              "materials": {
                "case": "plastic_black"
              }
            }
          }
        },
        {
          "id": "option13",
          "label": "Lavender",
          "meshes": {
            "case": {
              "materials": {
                "case": "plastic_lavender"
              }
            }
          }
        },
        {
          "id": "option132",
          "label": "Bordeaux",
          "meshes": {
            "case": {
              "materials": {
                "case": "plastic_bordeaux"
              }
            }
          }
        },
        {
          "id": "option12",
          "label": "White",
          "meshes": {
            "case": {
              "materials": {
                "case": "plastic_white"
              }
            }
          }
        },
        {
          "id": "option122",
          "label": "Metal",
          "meshes": {
            "case": {
              "materials": {
                "case": "case_metal"
              }
            }
          }
        }
      ]
    },
    {
      "id": "regle2",
      "label": "Button",
      "options": [
        {
          "id": "option1",
          "label": "Black",
          "meshes": {
            "case": {
              "materials": {
                "button": "plastic_black"
              }
            }
          }
        },
        {
          "id": "option13",
          "label": "Red",
          "meshes": {
            "case": {
              "materials": {
                "button": "plastic_red"
              }
            }
          }
        },
        {
          "id": "option132",
          "label": "Gold",
          "meshes": {
            "case": {
              "materials": {
                "button": "plastic_gold"
              }
            }
          }
        },
        {
          "id": "option1322",
          "label": "Silver",
          "meshes": {
            "case": {
              "materials": {
                "button": "plastic_silver"
              }
            }
          }
        },
        {
          "id": "option12",
          "label": "White",
          "meshes": {
            "case": {
              "materials": {
                "button": "plastic_white"
              }
            }
          }
        }
      ]
    },
    {
      "id": "regle3",
      "label": "base",
      "options": [
        {
          "id": "option1",
          "label": "base",
          "meshes": {
            "screen": {
              "materials": {
                "screen_casing": "screen_casing",
                "screen_outline": "screen_outline",
                "screen": "screen"
              }
            },
            "bolt": {
              "materials": {
                "screws": "screws",
                "metal": "metal",
                "plastic_black": "metal"
              }
            }
          }
        }
      ]
    }
  ],
  "defaults": {
    "rules": {},
    "engravingText": "Test",
    "engravingFont": "Stencil"
  },
  "fonts": [],
  "engravings": []
};
if (typeof module !== 'undefined' && module.exports) {
  module.exports = assetConfiguration;
} else {
  window.assetConfig = assetConfiguration;
}
