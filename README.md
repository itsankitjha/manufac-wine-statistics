# Wine Statistics App

This React app calculates and displays class-wise statistical measures for the Wine dataset.

## Table of Contents

- [Introduction](#introduction)
- [Setup](#setup)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Screenshots](#screenshots)
- [Notes](#notes)

## Introduction

This React app performs statistical analysis on the Wine dataset. It calculates class-wise mean, median, and mode for "Flavanoids" and "Gamma". The calculated values are displayed in tabular format.

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd wine-stats
   yarn install
   yarn start
   ```

The app will open in your default web browser. You should see tables displaying the statistical measures for Flavanoids and Gamma.

## File Structure

- src/
  - App.js: Main component integrating FlavanoidsStatsTable and GammaStatsTable.
  - data/wineData.js: File containing the Wine dataset.
  - components/
    - lavanoidsStatsTable.js: React component for displaying Flavanoids statistics.
    - GammaStatsTable.js: React component for displaying Gamma statistics.
  - services/utils.js: Utility functions for calculating statistics.

## Screenshots

Flavanoids Stats Table

Gamma Stats Table

## Notes

The statistical measures (mean, median, mode) are rounded off to 3 decimal places.
Ensure that you have Node.js and Yarn installed on your machine.
