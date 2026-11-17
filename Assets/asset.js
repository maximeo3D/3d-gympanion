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
        },
        "engraving": {
          "slots": [
            "case"
          ],
          "engraving": true,
          "file": "engraving.bin"
        }
      },
      "files": [
        {
          "file": "gympanion.bin",
          "format": "bin"
        },
        {
          "file": "engraving.bin",
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
            },
            "engraving": {
              "materials": {
                "case": "engraving_aluminium"
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
            },
            "engraving": {
              "materials": {
                "case": "engraving_aluminium_black"
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
            },
            "engraving": {
              "materials": {
                "case": "plastic_engraving_black"
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
            },
            "engraving": {
              "materials": {
                "case": "plastic_engraving_red"
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
            },
            "engraving": {
              "materials": {
                "case": "plastic_engraving_lightblue"
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
            },
            "engraving": {
              "materials": {
                "case": "plastic_engraving_lavender"
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
            },
            "engraving": {
              "materials": {
                "case": "plastic_engraving_metallicgrey"
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
            },
            "engraving": {
              "materials": {
                "case": "plastic_engraving_base"
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
  "engravings": [
    {
      "id": "gravure",
      "label": "Gravure",
      "mesh": "engraving",
      "text": "M",
      "font": "Odin Rounded - Bold",
      "fonts": [
        "Odin Rounded - Bold"
      ],
      "depth": 0.15,
      "angle": 56
    }
  ],
  "fonts": [
    {
      "name": "Odin Rounded - Bold",
      "file": "Odin Rounded - Bold.otf"
    }
  ],
  "defaults": {
    "rules": {
      "regle": "option122222222",
      "regle3": "option2"
    },
    "engravingText": "",
    "engravingFont": ""
  }
};
if (typeof module !== 'undefined' && module.exports) {
  module.exports = assetConfiguration;
} else {
  window.assetConfig = assetConfiguration;
}
