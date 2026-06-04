# 📊 Interactive Data Science & Analytics API Reference Guide

A high-density, single-page, dark-themed interactive cheat sheet for data analysts and data scientists. This application categorizes and surfaces critical attributes, methods, namespaces (`.str`, `.dt`), configurations, and visualization parameters for **NumPy**, **Pandas**, and **Matplotlib/Seaborn**.

# Data Science & Analysis Interactive API Reference

A single-page interface mapping the complete public APIs of **NumPy**, **Pandas** (including advanced reshaping, groups, and accessors), and standard **Python Visualization** utilities into a single, cohesive developer dashboard.

This application was generated using AI to serve as an optimized cognitive map for data professionals.

---

## Why This Reference App Exists

Traditional documentation structures force developers to repeatedly cycle between browser tabs, contextual tutorials, and scattered API indices while writing code. This workspace fixes that friction by consolidating the essential tools of data science into one predictable, interactive lookup canvas.

### 1. Eliminating Context Switching

When working on downstream transformations (e.g., pivoting a wide DataFrame or manipulating high-dimensional NumPy tensors), you need to know structural parameter names, defaults, and common "gotchas" instantly. This reference operates entirely inside a single-file, providing an on-demand look at syntax, method signatures, and structural attributes without page loads or external network calls.

### 2. Differentiating "Core" vs. "Edge-case" Operations

Modern data libraries are vast. This tool introduces a strict programmatic sorting mechanism:

* **The Core Framework (★):** Filters and exposes only the essential methods a standard data engineer or data scientist reaches for weekly (e.g., `.loc`, `np.where`, `.groupby`, `.fillna`).
* **The Global Layer:** Visual indicators highlight attributes and methods shared across multiple classes (like `.shape`, `.ndim`, `.isna()`), establishing a clearer mental model of Python's data object hierarchy.

### 3. Structural Hierarchy Mimicking Real-World Workflows

Instead of sorting functions alphabetically, everything is organized to mimic data analysis pipelines:

```
[NumPy Ndarray / Creation] ➔ [Vectorization / Math] ➔ [Pandas Series] 
     ➔ [Pandas DataFrames] ➔ [Grouping / Reshaping] ➔ [String & DT Accessors] 
     ➔ [Visualization Specs]

```

This structural breakdown allows developers to navigate between specific data frames, structural aggregations, long-to-wide pivot formats, vectorized string lookups, and multi-axes plotting engines within a single click.

---

> **Design Objective:** This is built exclusively for fast parameter lookups and syntactic verification during active development—not as a narrative tutorial. It acts as an external hard drive for your working memory while cleaning, processing, and plotting data datasets.
