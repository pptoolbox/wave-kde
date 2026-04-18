#!/bin/bash

echo "Installing Wave.."

# Global Theme(Requires Papirus Icon theme and Bibata Cursor theme)
mkdir -p ~/.local/share/plasma/look-and-feel/
cp -r ./plasma/look-and-feel/* ~/.local/share/plasma/look-and-feel/

# Color Schemes
mkdir -p ~/.local/share/color-schemes
cp -r ./color-schemes/* ~/.local/share/color-schemes/

# Konsole Profiles(With Color Schemes)
mkdir -p ~/.local/share/konsole
cp -r ./konsole/* ~/.local/share/konsole/

echo "Installation Complete."