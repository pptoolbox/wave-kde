var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1366x768": "",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "710",
                    "DialogWidth": "1366"
                },
                "/General": {
                    "arrangement": "1",
                    "changedPositions": "{}",
                    "lastResolution": "1366x768",
                    "positions": "{\"1366x768\":[\"1\",\"6\"]}",
                    "sortMode": "-1"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///usr/share/wallpapers/summer_1am/",
                    "SlidePaths": "/usr/share/wallpapers/"
                },
                "/Wallpaper/org.kde.potd/General": {
                    "Provider": "bing"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "181",
                            "popupWidth": "216"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "showFace": "true",
                            "showName": "false",
                            "showTechnicalInfo": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.userswitcher"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "451",
                            "popupWidth": "810"
                        },
                        "/Appearance": {
                            "autoFontAndSize": "false",
                            "customDateFormat": "ddd, dd MMM, yyyy |",
                            "dateDisplayFormat": "BesideTime",
                            "dateFormat": "custom",
                            "enabledCalendarPlugins": "astronomicalevents,holidaysevents",
                            "fontFamily": "DM Mono Medium",
                            "fontSize": "11",
                            "fontWeight": "400"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 1.1,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 68.3,
            "minimumLength": 68.3,
            "offset": 0
        },
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "customButtonImage": "app-launcher",
                            "favoritesPortedToKAstats": "true",
                            "icon": "start-here",
                            "showRecentApps": "false",
                            "showRecentDocs": "false",
                            "useCustomButtonImage": "true",
                            "useExtraRunners": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.kickerdash"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "fill": "false",
                            "groupingStrategy": "0",
                            "indicateAudioStreams": "false",
                            "launchers": "preferred://filemanager,applications:google-chrome.desktop,applications:chrome-hnpfjngllnobngcgfapefoaidbinmjnm-Default.desktop,applications:chrome-agimnkijcaahngcdmfeangaknmldooml-Default.desktop,applications:chrome-bifjjdjbhonhgoimgegojjpdodfkkbgk-Default.desktop,applications:chrome-cinhimbnkkaeohfgghhklpknlkffjgod-Default.desktop",
                            "tooltipControls": "false",
                            "wheelEnabled": "AllTask"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 3.5,
            "hiding": "dodgewindows",
            "location": "bottom",
            "maximumLength": 68.3,
            "minimumLength": 68.3,
            "offset": 0
        },
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "formfactor": "0",
                            "immutability": "1",
                            "lastScreen": "-1",
                            "popupHeight": "375",
                            "popupWidth": "259",
                            "wallpaperplugin": ""
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "previews": "false",
                            "url": "file:///home/paul"
                        }
                    },
                    "plugin": "org.kde.plasma.folder"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "400",
                            "popupWidth": "560"
                        }
                    },
                    "plugin": "org.kde.plasma.timer"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "400",
                            "popupWidth": "560"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "compactPreviewCount": "0",
                            "history": "#202326"
                        }
                    },
                    "plugin": "org.kde.plasma.colorpicker"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        }
                    },
                    "plugin": "org.kde.plasma.minimizeall"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "504",
                            "popupWidth": "316"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "color": "translucent",
                            "cursorPosition": "0",
                            "fontSize": "19",
                            "noteId": "f9a96974-83bd-45ba-b3ea-0ad6ef0699"
                        }
                    },
                    "plugin": "org.kde.plasma.notes"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "3",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 2.6,
            "hiding": "dodgewindows",
            "location": "right",
            "maximumLength": 38.4,
            "minimumLength": 38.4,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
