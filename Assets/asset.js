const assetConfiguration = {
  "models": {
    "part_model": {
      "name": "gympanion",
      "file": "gympanion.bin",
      "format": "bin",
      "dataOffset": 66,
      "meshes": {
        "gympanion": {
          "slots": [
            "case",
            "button",
            "screen"
          ],
          "engraving": false,
          "file": "gympanion.bin"
        }
      },
      "files": [
        {
          "file": "gympanion.bin",
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
          "label": "Aluminium",
          "meshes": {
            "gympanion": {
              "materials": {
                "case": "aluminium"
              }
            }
          }
        },
        {
          "id": "option12",
          "label": "Aluminium Red",
          "meshes": {
            "gympanion": {
              "materials": {
                "case": "aluminium_red"
              }
            }
          }
        },
        {
          "id": "option122",
          "label": "Aluminium Black",
          "meshes": {
            "gympanion": {
              "materials": {
                "case": "aluminium_black"
              }
            }
          }
        },
        {
          "id": "option1222",
          "label": "Plastic Black",
          "meshes": {
            "gympanion": {
              "materials": {
                "case": "plastic_black"
              }
            }
          }
        },
        {
          "id": "option12222",
          "label": "Plastic Red",
          "meshes": {
            "gympanion": {
              "materials": {
                "case": "plastic_red"
              }
            }
          }
        },
        {
          "id": "option122222",
          "label": "Plastic Light Blue",
          "meshes": {
            "gympanion": {
              "materials": {
                "case": "plastic_lightblue"
              }
            }
          }
        },
        {
          "id": "option1222222",
          "label": "Plastic Lavender",
          "meshes": {
            "gympanion": {
              "materials": {
                "case": "plastic_lavender"
              }
            }
          }
        },
        {
          "id": "option12222222",
          "label": "Plastic Metallic Grey",
          "meshes": {
            "gympanion": {
              "materials": {
                "case": "plastic_metallicgrey"
              }
            }
          }
        },
        {
          "id": "option122222222",
          "label": "Plastic White",
          "meshes": {
            "gympanion": {
              "materials": {
                "case": "plastic_white"
              }
            }
          }
        }
      ]
    },
    {
      "id": "regle2",
      "label": "Base",
      "options": [
        {
          "id": "option1",
          "label": "Base",
          "meshes": {
            "gympanion": {
              "materials": {
                "screen": "Base"
              }
            }
          }
        }
      ]
    },
    {
      "id": "regle3",
      "label": "Button",
      "options": [
        {
          "id": "option1",
          "label": "Aluminium",
          "meshes": {
            "gympanion": {
              "materials": {
                "button": "aluminium"
              }
            }
          }
        },
        {
          "id": "option12",
          "label": "Aluminium Red",
          "meshes": {
            "gympanion": {
              "materials": {
                "button": "aluminium_red"
              }
            }
          }
        },
        {
          "id": "option122",
          "label": "Aluminium Black",
          "meshes": {
            "gympanion": {
              "materials": {
                "button": "aluminium_black"
              }
            }
          }
        },
        {
          "id": "option",
          "label": "Plastic Black",
          "meshes": {
            "gympanion": {
              "materials": {
                "button": "plastic_black"
              }
            }
          }
        },
        {
          "id": "option2",
          "label": "Plastic Red",
          "meshes": {
            "gympanion": {
              "materials": {
                "button": "plastic_red"
              }
            }
          }
        },
        {
          "id": "option22",
          "label": "Plastic Light Blue",
          "meshes": {
            "gympanion": {
              "materials": {
                "button": "plastic_lightblue"
              }
            }
          }
        },
        {
          "id": "option222",
          "label": "Plastic Lavender",
          "meshes": {
            "gympanion": {
              "materials": {
                "button": "plastic_lavender"
              }
            }
          }
        },
        {
          "id": "option2222",
          "label": "Plastic Metallic Grey",
          "meshes": {
            "gympanion": {
              "materials": {
                "button": "plastic_metallicgrey"
              }
            }
          }
        },
        {
          "id": "option22222",
          "label": "Plastic White",
          "meshes": {
            "gympanion": {
              "materials": {
                "button": "plastic_white"
              }
            }
          }
        }
      ]
    }
  ],
  "engravings": [],
  "fonts": [],
  "defaults": {
    "rules": {},
    "engravingText": "",
    "engravingFont": ""
  }
};
if (typeof module !== 'undefined' && module.exports) {
  module.exports = assetConfiguration;
} else {
  window.assetConfig = assetConfiguration;
}
