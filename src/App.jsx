import React, { useState } from 'react';

// ============================================================================
// DATA STRUCTURE: NUMPY & PANDAS COMPREHENSIVE INTERACTIVE REFERENCE
// Fully populated following official documentation categories for Data Analysis.
// ============================================================================
const REFERENCE_DATA = {
  tabs: [
    {
      id: "np_array",
      name: "NumPy Ndarray & Creation",
      accent: "#f59e0b", // Amber
      desc: "Core N-dimensional array object, creation routines, shape manipulation, and basic attributes.",
      subcategories: [
        {
          name: "Array Attributes",
          desc: "Memory, shape, and structural properties of the ndarray object.",
          items: [
            { name: "ndarray.shape", note: "Tuple representing array dimensions; frequently used to verify dataset shapes before matrix operations.", common: true, commonAttr: true },
            { name: "ndarray.dtype", note: "Data type object explaining the layout of fixed-size memory blocks in the array.", common: true, commonAttr: true },
            { name: "ndarray.ndim", note: "Number of array dimensions (axes); equivalent to len(shape).", common: true, commonAttr: true },
            { name: "ndarray.size", note: "Total number of elements in the array, equal to the product of shape elements.", common: true, commonAttr: true },
            { name: "ndarray.itemsize", note: "Length of one array element in bytes.", common: false, commonAttr: false },
            { name: "ndarray.nbytes", note: "Total bytes consumed by the elements of the array; does not include memory overhead.", common: false, commonAttr: false },
            { name: "ndarray.T", note: "The transposed array; equivalent to self.transpose() for ndim >= 2.", common: true, commonAttr: false },
            { name: "ndarray.real", note: "The real part of the array elements if complex.", common: false, commonAttr: false },
            { name: "ndarray.imag", note: "The imaginary part of the array elements if complex.", common: false, commonAttr: false },
            { name: "ndarray.flat", note: "A 1-D iterator over the array; allows flat indexing and assignments.", common: false, commonAttr: false }
          ]
        },
        {
          name: "Array Creation Routines",
          desc: "Functions for generating new arrays from scratch, numerical ranges, or existing buffers.",
          items: [
            { name: "np.array(object, dtype=None, ...)", note: "Creates an array from any array-like object (lists, tuples); always explicitly define dtype if memory optimization matters.", common: true, commonAttr: false },
            { name: "np.zeros(shape, dtype=float, ...)", note: "Returns a new array of given shape and type, filled with zeros; vital for initializing weights/placeholders.", common: true, commonAttr: false },
            { name: "np.ones(shape, dtype=None, ...)", note: "Returns a new array of given shape and type, filled with ones.", common: true, commonAttr: false },
            { name: "np.empty(shape, dtype=float, ...)", note: "Returns a new array without initializing entries; faster than zeros but contains random garbage memory.", common: false, commonAttr: false },
            { name: "np.arange([start,] stop[, step], dtype=None)", note: "Returns evenly spaced values within a given interval; beware of floating-point precision issues with step.", common: true, commonAttr: false },
            { name: "np.linspace(start, stop, num=50, ...)", note: "Returns evenly spaced numbers over a specified closed interval; safer than arange for floating-point calculations.", common: true, commonAttr: false },
            { name: "np.logspace(start, stop, num=50, base=10.0)", note: "Returns numbers spaced evenly on a log scale.", common: false, commonAttr: false },
            { name: "np.eye(N, M=None, k=0, dtype=float)", note: "Returns a 2-D array with ones on the diagonal and zeros elsewhere (identity matrix).", common: true, commonAttr: false },
            { name: "np.identity(n, dtype=None)", note: "Returns the square identity array of size n.", common: false, commonAttr: false },
            { name: "np.zeros_like(a, dtype=None, ...)", note: "Returns an array of zeros with the same shape and type as a given prototype array.", common: true, commonAttr: false },
            { name: "np.ones_like(a, dtype=None, ...)", note: "Returns an array of ones with the same shape and type as a given prototype array.", common: true, commonAttr: false },
            { name: "np.frombuffer(buffer, dtype=float, ...)", note: "Interprets a buffer as a 1-dimensional array without copying data.", common: false, commonAttr: false }
          ]
        },
        {
          name: "Shape & Structure Manipulation",
          desc: "Methods to alter dimensions, flatten, or transform structural layout.",
          items: [
            { name: "np.reshape(a, newshape, order='C')", note: "Gives a new shape to an array without changing its data; use -1 in one dimension to auto-calculate size.", common: true, commonAttr: false },
            { name: "ndarray.resize(new_shape, ...)", note: "Change the shape and size of an array in-place; will alter underlying buffer memory.", common: false, commonAttr: false },
            { name: "ndarray.flatten(order='C')", note: "Returns a copy of the array collapsed into one dimension.", common: true, commonAttr: false },
            { name: "np.ravel(a, order='C')", note: "Returns a flattened 1-D array; returns a view whenever possible, making it faster than flatten.", common: true, commonAttr: false },
            { name: "np.transpose(a, axes=None)", note: "Reverse or permute the axes of an array; returns a view.", common: true, commonAttr: false },
            { name: "np.squeeze(a, axis=None)", note: "Removes axes of length one from an array; useful when matrix math leaves redundant dimensions.", common: true, commonAttr: false },
            { name: "np.expand_dims(a, axis)", note: "Expand the shape of an array by inserting a new axis at the specified position.", common: true, commonAttr: false }
          ]
        }
      ]
    },
    {
      id: "np_math",
      name: "NumPy Math & Vectorization",
      accent: "#3b82f6", // Blue
      desc: "Element-wise universal functions (ufuncs), statistical aggregations, and matrix computations.",
      subcategories: [
        {
          name: "Universal Math Functions (ufuncs)",
          desc: "Fast, element-wise vector operations executing in compiled C code.",
          items: [
            { name: "np.add(x1, x2) / np.subtract()", note: "Element-wise addition/subtraction; invoked implicitly via '+' and '-' operators.", common: true, commonAttr: false },
            { name: "np.multiply(x1, x2) / np.divide()", note: "Element-wise multiplication/division; '*' does not mean matrix multiplication in numpy arrays.", common: true, commonAttr: false },
            { name: "np.exp(x)", note: "Calculates the exponential of all elements in the input array.", common: true, commonAttr: false },
            { name: "np.log(x) / np.log10() / np.log2()", note: "Natural logarithm, base 10, and base 2 element-wise; generates runtime warning on zero/negative values.", common: true, commonAttr: false },
            { name: "np.sqrt(x)", note: "Calculates the non-negative square-root of an array element-wise.", common: true, commonAttr: false },
            { name: "np.sin(x) / np.cos() / np.tan()", note: "Standard trigonometric functions; inputs are expected in radians.", common: false, commonAttr: false },
            { name: "np.abs(x) / np.absolute(x)", note: "Calculate the absolute value element-wise.", common: true, commonAttr: false },
            { name: "np.clip(a, a_min, a_max)", note: "Clip (limit) the values in an array; sets a hard upper and lower bound boundary.", common: true, commonAttr: false },
            { name: "np.round(a, decimals=0)", note: "Round an array to the given number of decimals; uses banker's rounding (rounds to nearest even).", common: true, commonAttr: false }
          ]
        },
        {
          name: "Statistical Aggregations",
          desc: "Reductions across axes yielding descriptive statistics summaries.",
          items: [
            { name: "np.sum(a, axis=None, dtype=None)", note: "Sum of array elements over a specified axis; axis=0 sums columns, axis=1 sums rows.", common: true, commonAttr: true },
            { name: "np.mean(a, axis=None, ...)", note: "Compute the arithmetic mean along the specified axis.", common: true, commonAttr: true },
            { name: "np.median(a, axis=None)", note: "Compute the median along the specified axis; requires internal sorting, so slower than mean.", common: true, commonAttr: true },
            { name: "np.std(a, axis=None, ddof=0)", note: "Compute the standard deviation along the specified axis; ddof=0 by default (population std).", common: true, commonAttr: true },
            { name: "np.var(a, axis=None, ddof=0)", note: "Compute the variance along the specified axis.", common: false, commonAttr: true },
            { name: "np.min(a) / np.max(a)", note: "Return the minimum or maximum element along an axis.", common: true, commonAttr: true },
            { name: "np.argmin(a, axis=None) / np.argmax()", note: "Returns the indices of the minimum or maximum values along an axis.", common: true, commonAttr: true },
            { name: "np.cumsum(a, axis=None)", note: "Return the cumulative sum of the elements along a given axis.", common: true, commonAttr: true },
            { name: "np.cumproduct(a, axis=None)", note: "Return the cumulative product of elements along a given axis.", common: false, commonAttr: true }
          ]
        },
        {
          name: "Linear Algebra & Search",
          desc: "Vector dot products, sorting, and conditional searching logic.",
          items: [
            { name: "np.dot(a, b)", note: "Dot product of two arrays; for 2D vectors, it represents matrix multiplication.", common: true, commonAttr: false },
            { name: "a @ b", note: "Infix matrix multiplication operator; calls np.matmul behind the scenes.", common: true, commonAttr: false },
            { name: "np.where(condition, [x, y])", note: "Vectorized ternary expression; returns elements chosen from x or y depending on condition.", common: true, commonAttr: false },
            { name: "np.any(a, axis=None) / np.all(a)", note: "Test whether any or all array elements evaluate to True along an axis.", common: true, commonAttr: true },
            { name: "np.sort(a, axis=-1)", note: "Return a sorted copy of an array; to sort in-place, use the ndarray.sort() method instead.", common: true, commonAttr: true },
            { name: "np.argsort(a, axis=-1)", note: "Returns the indices that would sort an array; vital for indirect sorting of matching data.", common: true, commonAttr: false }
          ]
        }
      ]
    },
    {
      id: "pd_series",
      name: "Pandas Series",
      accent: "#a855f7", // Purple
      desc: "One-dimensional array with axis labels (including time-series and categorical helpers).",
      subcategories: [
        {
          name: "Series Creation & Core Attributes",
          desc: "Instantiating 1D labeled arrays and evaluating structural attributes.",
          items: [
            { name: "pd.Series(data=None, index=None, dtype=None, name=None)", note: "Creates a Series from list, dict, or numpy array; index labels do not have to be unique.", common: true, commonAttr: false },
            { name: "Series.index", note: "The index (axis labels) of the Series object.", common: true, commonAttr: true },
            { name: "Series.values", note: "Return Series data as a NumPy ndarray or ndarray-like structure; deprecated in favor of .array or .to_numpy().", common: true, commonAttr: true },
            { name: "Series.dtype", note: "Returns the data type object of the underlying data.", common: true, commonAttr: true },
            { name: "Series.name", note: "The name of the Series, which becomes the column header when converted into a DataFrame.", common: true, commonAttr: false }
          ]
        },
        {
          name: "Indexing & Selection",
          desc: "Methods to access individual elements or slices of a Series.",
          items: [
            { name: "Series.loc[...] ", note: "Access a group of rows by label(s) or a boolean array.", common: true, commonAttr: true },
            { name: "Series.iloc[...] ", note: "Purely integer-location based indexing for selection by position.", common: true, commonAttr: true },
            { name: "Series.head(n=5) / Series.tail()", note: "Return the first or last n rows; highly effective for rapid structural checks.", common: true, commonAttr: true },
            { name: "Series.get(key, default=None)", note: "Get item from object for given key; returns default value if key is not found (avoids KeyError).", common: true, commonAttr: true }
          ]
        },
        {
          name: "Transformation & Value Analysis",
          desc: "Value tracking, value counts, mapping patterns, and conversions.",
          items: [
            { name: "Series.value_counts(normalize=False, sort=True, dropna=True)", note: "Returns object containing counts of unique values; set normalize=True to get percentages.", common: true, commonAttr: false },
            { name: "Series.unique()", note: "Return unique values of Series object as a numpy array; fast execution.", common: true, commonAttr: false },
            { name: "Series.nunique(dropna=True)", note: "Return number of unique elements in the object.", common: true, commonAttr: true },
            { name: "Series.map(arg, na_action=None)", note: "Map values of Series according to input correspondence (dict, Series, or function); elements not in dict become NaN.", common: true, commonAttr: false },
            { name: "Series.apply(func, convert_dtype=True, args=(), **kwargs)", note: "Invoke function on values of Series; more powerful than map but slower for basic transformations.", common: true, commonAttr: true },
            { name: "Series.astype(dtype, copy=True, errors='raise')", note: "Cast a pandas object to a specified dtype; use errors='ignore' to bypass invalid formatting values.", common: true, commonAttr: true },
            { name: "Series.to_numpy()", note: "A modern alternative to .values that outputs the pure underlying NumPy array data.", common: true, commonAttr: true }
          ]
        }
      ]
    },
    {
      id: "pd_dataframe",
      name: "Pandas DataFrame",
      accent: "#ec4899", // Pink
      desc: "Two-dimensional, size-mutable, potentially heterogeneous tabular data structure.",
      subcategories: [
        {
          name: "DataFrame Attributes & Viewers",
          desc: "Structural specifications and foundational evaluation accessors.",
          items: [
            { name: "pd.DataFrame(data=None, index=None, columns=None, dtype=None)", note: "Two-dimensional, size-mutable, potentially heterogeneous tabular data structure.", common: true, commonAttr: false },
            { name: "DataFrame.index", note: "The index (row labels) of the DataFrame.", common: true, commonAttr: true },
            { name: "DataFrame.columns", note: "The column labels of the DataFrame; can be reassigned as a list directly.", common: true, commonAttr: false },
            { name: "DataFrame.shape", note: "Return a tuple representing the dimensionality of the DataFrame (rows, columns).", common: true, commonAttr: true },
            { name: "DataFrame.dtypes", note: "Return the dtypes in the DataFrame as a Series object; helps track implicit data type transformations.", common: true, commonAttr: false },
            { name: "DataFrame.info(verbose=None, buf=None, max_cols=None, memory_usage=None, show_counts=None)", note: "Prints a concise summary of a DataFrame including column dtypes, non-null counts, and memory usage.", common: true, commonAttr: false },
            { name: "DataFrame.describe(percentiles=None, include=None, exclude=None)", note: "Generates descriptive statistics summarizing central tendency, dispersion, and shape of dataset distribution.", common: true, commonAttr: false }
          ]
        },
        {
          name: "DataFrame Manipulation & Filtering",
          desc: "Altering axis layouts, adding/dropping records, and boolean mask query evaluations.",
          items: [
            { name: "DataFrame.drop(labels=None, axis=0, index=None, columns=None, level=None, inplace=False, errors='raise')", note: "Drop specified labels from rows or columns; pass axis=1 or columns parameter to delete features.", common: true, commonAttr: false },
            { name: "DataFrame.rename(mapper=None, index=None, columns=None, axis=None, inplace=False, errors='ignore')", note: "Alter axes labels; accepts a dict specifying {'old_name': 'new_name'} for granular renames.", common: true, commonAttr: false },
            { name: "DataFrame.set_index(keys, drop=True, append=False, inplace=False, verify_integrity=False)", note: "Set the DataFrame index (row labels) using existing columns.", common: true, commonAttr: false },
            { name: "DataFrame.reset_index(level=None, drop=False, inplace=False, col_level=0, col_fill='')", note: "Reset the index of the DataFrame, and use the default instead; pass drop=True to delete the index column.", common: true, commonAttr: false },
            { name: "DataFrame.query(expr, inplace=False, **kwargs)", note: "Query the columns of a DataFrame with a boolean expression string; can reference local variables using '@'.", common: true, commonAttr: false },
            { name: "DataFrame.select_dtypes(include=None, exclude=None)", note: "Return a subset of the DataFrame's columns based on the column dtypes (e.g., include='number').", common: true, commonAttr: false },
            { name: "DataFrame.sort_values(by, axis=0, ascending=True, inplace=False, kind='quicksort', na_position='last', ignore_index=False, key=None)", note: "Sort by the values along either axis; 'by' can accept a list of multiple columns.", common: true, commonAttr: false }
          ]
        },
        {
          name: "Missing Data Resolution",
          desc: "Identifying, dropping, or imputing empty cell structures.",
          items: [
            { name: "DataFrame.isna() / DataFrame.isnull()", note: "Detect missing values; returns a boolean mask DataFrame of identical structural layout.", common: true, commonAttr: true },
            { name: "DataFrame.notna() / DataFrame.notnull()", note: "Detect existing (non-missing) values; inverse of isna().", common: true, commonAttr: true },
            { name: "DataFrame.dropna(axis=0, how='any', thresh=None, subset=None, inplace=False)", note: "Remove missing values; how='all' drops rows only if every single column value is missing.", common: true, commonAttr: false },
            { name: "DataFrame.fillna(value=None, method=None, axis=None, inplace=False, limit=None, downcast=None)", note: "Fill NA/NaN values using the specified method or specific static replacement criteria value.", common: true, commonAttr: false }
          ]
        }
      ]
    },
    {
      id: "pd_ops",
      name: "Grouping, Merging & Advanced Shapes",
      accent: "#10b981", // Emerald
      desc: "Split-Apply-Combine paradigms, concatenation, analytical joins, and reshaping (pivots/melt).",
      subcategories: [
        {
          name: "Groupby Object Mechanics",
          desc: "Grouping records by categories to perform statistical summaries.",
          items: [
            { name: "DataFrame.groupby(by=None, axis=0, level=None, as_index=True, sort=True, group_keys=True, observed=False, dropna=True)", note: "Group DataFrame using a mapper or by a Series of columns; returns a GroupBy object ready for lazy aggregation.", common: true, commonAttr: false },
            { name: "GroupBy.agg(func=None, *args, **kwargs) / GroupBy.aggregate()", note: "Aggregate using one or more operations over the specified axis; accepts dict mappings like {'col1': 'mean', 'col2': 'sum'}.", common: true, commonAttr: false },
            { name: "GroupBy.transform(func, *args, **kwargs)", note: "Call function producing a like-indexed DataFrame on each group; retains original shape of input data.", common: true, commonAttr: false },
            { name: "GroupBy.filter(func, dropna=True, *args, **kwargs)", note: "Return a copy of a DataFrame excluding elements belonging to groups that do not satisfy boolean condition.", common: true, commonAttr: false }
          ]
        },
        {
          name: "Concatenation & Structural Merging",
          desc: "Combining multiple tracking frames along index or column structures.",
          items: [
            { name: "pd.concat(objs, axis=0, join='outer', ignore_index=False, keys=None, ...)", note: "Concatenate pandas objects along a particular axis; axis=1 joins columns horizontally matching on index entries.", common: true, commonAttr: false },
            { name: "pd.merge(left, right, how='inner', on=None, left_on=None, right_on=None, left_index=False, right_index=False, suffixes=('_x', '_y'), ...)", note: "Merge DataFrame or named Series objects with a database-style join; how can be 'inner', 'outer', 'left', 'right'.", common: true, commonAttr: false },
            { name: "DataFrame.join(other, on=None, how='left', lsuffix='', rsuffix='', sort=False, validate=None)", note: "Join columns of another DataFrame; matches on indices by default for rapid multi-table combinations.", common: true, commonAttr: false }
          ]
        },
        {
          name: "Reshaping (Pivots, Melts, MultiIndex)",
          desc: "Converting structural layouts between wide and long formats.",
          items: [
            { name: "DataFrame.pivot(index=None, columns=None, values=None)", note: "Reshape data based on column values; cannot handle duplicate index/column configurations (raises ValueError).", common: true, commonAttr: false },
            { name: "DataFrame.pivot_table(values=None, index=None, columns=None, aggfunc='mean', fill_value=None, margins=False, ...)", note: "Create a spreadsheet-style pivot table as a DataFrame; aggregates duplicates gracefully using aggfunc.", common: true, commonAttr: false },
            { name: "pd.melt(frame, id_vars=None, value_vars=None, var_name=None, value_name='value', col_level=None, ignore_index=True)", note: "Unpivot a DataFrame from wide to long format, optionally leaving identifiers set.", common: true, commonAttr: false },
            { name: "DataFrame.stack(level=-1, dropna=True)", note: "Pivot a level of the (possibly hierarchical) column labels to the innermost row index layout.", common: false, commonAttr: false },
            { name: "DataFrame.unstack(level=-1, fill_value=None)", note: "Pivot a level of the (possibly hierarchical) row index to the innermost column axis layout.", common: false, commonAttr: false },
            { name: "pd.MultiIndex.from_tuples(tuples, sortorder=None, names=None) / .from_frame()", note: "Creates hierarchical multi-level indices for indexing multi-dimensional structural frames.", common: false, commonAttr: false }
          ]
        }
      ]
    },
    {
      id: "pd_accessors",
      name: "Pandas Accessors (.str, .dt)",
      accent: "#f59e0b", // Amber
      desc: "Specialized namespaces for vectorized operations on String and Datetime objects.",
      subcategories: [
        {
          name: "Vectorized String Accessor (.str)",
          desc: "Element-wise string parsing methods exposed via the Series.str namespace attribute.",
          items: [
            { name: "Series.str.lower() / Series.str.upper()", note: "Converts strings in the Series to lower or uppercase.", common: true, commonAttr: false },
            { name: "Series.str.contains(pat, case=True, flags=0, na=None, regex=True)", note: "Test if pattern or regex is contained within a string of a Series; returns boolean mask.", common: true, commonAttr: false },
            { name: "Series.str.replace(pat, repl, n=-1, case=None, flags=0, regex=False)", note: "Replace occurrences of pattern/regex in Series; pass regex=True explicitly if using regular expressions.", common: true, commonAttr: false },
            { name: "Series.str.split(pat=None, n=-1, expand=False)", note: "Split strings around a given separator; pass expand=True to return a DataFrame of individual split columns.", common: true, commonAttr: false },
            { name: "Series.str.strip() / .str.lstrip() / .str.rstrip()", note: "Remove leading and trailing whitespaces from strings.", common: true, commonAttr: false },
            { name: "Series.str.extract(pat, flags=0, expand=True)", note: "Extract capture groups from regular expression pattern matching as a DataFrame.", common: false, commonAttr: false }
          ]
        },
        {
          name: "Datetime Accessor (.dt)",
          desc: "Element-wise time properties exposed via the Series.dt namespace attribute.",
          items: [
            { name: "pd.to_datetime(arg, errors='raise', format=None, unit=None, origin='unix')", note: "Convert argument to datetime object; use errors='coerce' to turn unparseable strings into NaT.", common: true, commonAttr: false },
            { name: "Series.dt.year / Series.dt.month / Series.dt.day", note: "Extract year, month, or day integer components from timestamp objects.", common: true, commonAttr: false },
            { name: "Series.dt.hour / Series.dt.minute / Series.dt.second", note: "Extract transactional hour, minute, or second components.", common: true, commonAttr: false },
            { name: "Series.dt.day_name() / Series.dt.month_name()", note: "Return the string names (e.g., 'Monday') in the specified locale.", common: true, commonAttr: false },
            { name: "Series.dt.is_leap_year / Series.dt.is_month_end", note: "Logical attributes tracking specific temporal milestones.", common: false, commonAttr: false },
            { name: "Series.dt.strftime(date_format)", note: "Convert datetime formats to string representations based on standard format str directives.", common: true, commonAttr: false }
          ]
        }
      ]
    },
    {
      id: "viz",
      name: "Data Visualization Specs",
      accent: "#06b6d4", // Cyan
      desc: "Pandas built-in plotting wrappers and underlying Matplotlib/Seaborn architectural reference configurations.",
      subcategories: [
        {
          name: "Pandas Built-in .plot() Engine",
          desc: "Direct plotting methods accessible on Series and DataFrame wrappers.",
          items: [
            { name: "DataFrame.plot(kind='line', x=None, y=None, figsize=None, title=None, grid=None, ax=None, ...)", note: "Generic plot wrapper; specify 'kind' ('bar', 'hist', 'box', 'scatter', 'kde') to shift visualization formats.", common: true, commonAttr: false },
            { name: "DataFrame.plot.bar(x=None, y=None, rot=0, stacked=False)", note: "Create vertical bar plots; rot controls tick labels degree rotation.", common: true, commonAttr: false },
            { name: "DataFrame.plot.hist(by=None, bins=10, **kwargs)", note: "Draws histograms of column elements across bin groups.", common: true, commonAttr: false },
            { name: "DataFrame.plot.box(by=None, **kwargs)", note: "Draw vertical box-and-whisker plots to spot outliers and verify data dispersion distributions.", common: true, commonAttr: false },
            { name: "DataFrame.plot.scatter(x, y, s=None, c=None, **kwargs)", note: "Create scatter plots mapping two variables; parameter c can accept a column name to drive color maps.", common: true, commonAttr: false }
          ]
        },
        {
          name: "Matplotlib & Seaborn Structural Reference",
          desc: "Architectural components required to customize, structure, and output visualizations cleanly.",
          items: [
            { name: "plt.subplots(nrows=1, ncols=1, figsize=None, sharex=False, sharey=False)", note: "Create a figure and a set of subplots; pass ax parameter to pandas plots to target specific cells.", common: true, commonAttr: false },
            { name: "ax.set_title() / ax.set_xlabel() / ax.set_ylabel()", note: "Modify labels and title parameters of a generated axes object canvas.", common: true, commonAttr: false },
            { name: "plt.tight_layout()", note: "Adjust the padding between and around subplots to prevent overlapping text and axis ticks.", common: true, commonAttr: false },
            { name: "plt.savefig(fname, dpi=300, bbox_inches='tight')", note: "Save current plot figure canvas to disk; bbox_inches='tight' ensures labels aren't clipped.", common: true, commonAttr: false },
            { name: "sns.scatterplot(data=None, x=None, y=None, hue=None, style=None, size=None, ax=None)", note: "Seaborn scatter plot; hue enables instant categorical multi-color grouping maps.", common: true, commonAttr: false },
            { name: "sns.heatmap(data, vmin=None, vmax=None, cmap=None, annot=None, fmt='.2g', ax=None)", note: "Plot rectangular data as a color-encoded matrix; frequently combined with df.corr() for multi-collinearity checks.", common: true, commonAttr: false },
            { name: "sns.pairplot(data, hue=None, kind='scatter', diag_kind='auto', markers=None, corner=False)", note: "Plot pairwise relationships in a dataset; setting corner=True removes duplicate upper triangular plots.", common: true, commonAttr: false }
          ]
        }
      ]
    }
  ]
};

// ============================================================================
// MAIN COMPONENT APPLICATION
// Built as a single-file interactive reference dashboard with a clean dark theme.
// ============================================================================
export default function App() {
  const [activeTabId, setActiveTabId] = useState(REFERENCE_DATA.tabs[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [commonOnly, setCommonOnly] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [collapsedCategories, setCollapsedCategories] = useState({});

  // Locate the currently selected tab object metadata
  const activeTab = REFERENCE_DATA.tabs.find((t) => t.id === activeTabId) || REFERENCE_DATA.tabs[0];

  // Structural Toggle Handlers
  const toggleItemExpand = (itemName) => {
    setExpandedItems((prev) => ({ ...prev, [itemName]: !prev[itemName] }));
  };

  const toggleCategoryCollapse = (catName) => {
    setCollapsedCategories((prev) => ({ ...prev, [catName]: !prev[catName] }));
  };

  // Metric calculation functions
  const countTabCommonItems = (tab) => {
    return tab.subcategories.reduce(
      (acc, cat) => acc + cat.items.filter((item) => item.common).length,
      0
    );
  };

  const countTabTotalItems = (tab) => {
    return tab.subcategories.reduce((acc, cat) => acc + cat.items.length, 0);
  };

  // Component inline layouts & conditional styling maps
  const baseStyles = {
    appContainer: {
      backgroundColor: '#09090b',
      color: '#e4e4e7',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      minHeight: '100vh',
      padding: '24px',
      boxSizing: 'border-box'
    },
    headerBar: {
      marginBottom: '20px'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#ffffff',
      margin: '0 0 4px 0'
    },
    subtitle: {
      fontSize: '14px',
      color: '#a1a1aa',
      margin: '0'
    },
    tabBar: {
      position: 'sticky',
      top: '0',
      zIndex: 100,
      backgroundColor: '#09090b',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      padding: '12px 0',
      borderBottom: '1px solid #27272a',
      marginBottom: '20px'
    },
    tabButton: (isActive, accentColor) => ({
      backgroundColor: isActive ? accentColor : '#18181b',
      color: isActive ? '#09090b' : '#a1a1aa',
      border: 'none',
      borderRadius: '6px',
      padding: '8px 14px',
      fontSize: '13px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      outline: 'none'
    }),
    summaryCard: (accentColor) => ({
      backgroundColor: '#18181b',
      borderLeft: `4px solid ${accentColor}`,
      borderRadius: '6px',
      padding: '16px',
      marginBottom: '20px'
    }),
    controlsRow: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      alignItems: 'center',
      marginBottom: '12px'
    },
    searchInput: {
      flex: '1',
      minWidth: '240px',
      backgroundColor: '#18181b',
      border: '1px solid #27272a',
      borderRadius: '6px',
      padding: '10px 14px',
      color: '#ffffff',
      fontSize: '14px',
      outline: 'none'
    },
    toggleButton: (isActive) => ({
      backgroundColor: isActive ? '#27272a' : '#18181b',
      color: isActive ? '#f59e0b' : '#a1a1aa',
      border: `1px solid ${isActive ? '#f59e0b' : '#27272a'}`,
      borderRadius: '6px',
      padding: '10px 16px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      outline: 'none'
    }),
    legendBar: {
      fontSize: '12px',
      color: '#71717a',
      marginBottom: '24px',
      paddingLeft: '4px'
    },
    accordionSection: {
      backgroundColor: '#18181b',
      border: '1px solid #27272a',
      borderRadius: '8px',
      marginBottom: '14px',
      overflow: 'hidden'
    },
    accordionHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '14px 16px',
      backgroundColor: '#1c1c21',
      cursor: 'pointer',
      userSelect: 'none'
    },
    itemRow: (isCommon, isExpanded, accentColor) => ({
      padding: '12px 16px',
      borderBottom: '1px solid #27272a',
      cursor: 'pointer',
      backgroundColor: isExpanded ? '#202024' : 'transparent',
      borderLeft: isCommon ? `3px solid ${accentColor}` : '3px solid transparent',
      transition: 'background-color 0.15s ease'
    }),
    itemName: (isCommon) => ({
      fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',
      fontSize: '14px',
      fontWeight: isCommon ? '700' : '400',
      color: isCommon ? '#ffffff' : '#a1a1aa',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }),
    badge: {
      fontSize: '11px',
      padding: '2px 6px',
      borderRadius: '4px',
      backgroundColor: '#27272a',
      color: '#a1a1aa',
      fontWeight: '600'
    },
    commonBadge: {
      fontSize: '11px',
      padding: '2px 6px',
      borderRadius: '4px',
      backgroundColor: '#3e2b08',
      color: '#f59e0b',
      border: '1px solid #78350f',
      fontWeight: 'bold'
    },
    globalBadge: {
      fontSize: '11px',
      padding: '2px 6px',
      borderRadius: '4px',
      backgroundColor: '#064e3b',
      color: '#10b981',
      border: '1px solid #065f46',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={baseStyles.appContainer}>
      {/* HEADER META */}
      <header style={baseStyles.headerBar}>
        <h1 style={baseStyles.title}>Data Analysis API Reference Guide</h1>
        <p style={baseStyles.subtitle}>
          Interactive lookup mapping NumPy, Pandas, and Python Visualization architectures based on usage.
        </p>
      </header>

      {/* STICKY TAB ENGINE */}
      <nav style={baseStyles.tabBar}>
        {REFERENCE_DATA.tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTabId(tab.id);
                setSearchQuery(""); // Auto clear queries across context boundaries
              }}
              style={baseStyles.tabButton(isActive, tab.accent)}
            >
              {tab.name}
            </button>
          );
        })}
      </nav>

      {/* CATEGORY SUMMARY CARD */}
      <div style={baseStyles.summaryCard(activeTab.accent)}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#ffffff', margin: '0 0 6px 0' }}>{activeTab.name}</h2>
            <p style={{ fontSize: '13px', color: '#d4d4d8', margin: '0' }}>{activeTab.desc}</p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <span style={baseStyles.badge}>Total: {countTabTotalItems(activeTab)} items</span>
            <span style={baseStyles.commonBadge}>★ Core: {countTabCommonItems(activeTab)} tracks</span>
          </div>
        </div>
      </div>

      {/* FILTERS & SEARCH MODULE */}
      <div style={baseStyles.controlsRow}>
        <input
          type="text"
          placeholder={`Search inside ${activeTab.name}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={baseStyles.searchInput}
        />
        <button
          onClick={() => setCommonOnly(!commonOnly)}
          style={baseStyles.toggleButton(commonOnly)}
        >
          {commonOnly ? "★ Showing Common Only" : "☆ Filter Common Only"}
        </button>
      </div>

      {/* SYSTEM LEGEND */}
      <div style={baseStyles.legendBar}>
        <span><strong>Legend:</strong> <span style={{ color: '#ffffff' }}>★ Bold White</span> = Frequently used weekly in data projects. <span style={{ color: '#a1a1aa' }}>Dim Text</span> = Contextual or advanced signatures. Click row to toggle explanation note.</span>
      </div>

      {/* ACCORDION CONTENT RENDER ENGINE */}
      <main>
        {activeTab.subcategories.map((subcat) => {
          // Filtering logic application
          const filteredItems = subcat.items.filter((item) => {
            const matchesSearch =
              item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.note.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCommon = commonOnly ? item.common : true;
            return matchesSearch && matchesCommon;
          });

          // Hide individual subcategory if completely empty under filter specifications
          if (filteredItems.length === 0) return null;

          const isCollapsed = collapsedCategories[subcat.name];
          const commonInFilteredCount = filteredItems.filter(i => i.common).length;

          return (
            <div key={subcat.name} style={baseStyles.accordionSection}>
              {/* ACCORDION HEADER BAR */}
              <div
                onClick={() => toggleCategoryCollapse(subcat.name)}
                style={baseStyles.accordionHeader}
              >
                <div style={{ paddingRight: '12px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#ffffff', margin: '0 0 4px 0' }}>
                    {isCollapsed ? "▶ " : "▼ "} {subcat.name}
                  </h3>
                  <p style={{ fontSize: '12px', color: '#71717a', margin: 0 }}>{subcat.desc}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                  {!commonOnly && commonInFilteredCount > 0 && (
                    <span style={{ fontSize: '12px', color: '#f59e0b' }}>★ {commonInFilteredCount} core</span>
                  )}
                  <span style={baseStyles.badge}>{filteredItems.length} items</span>
                </div>
              </div>

              {/* ACCORDION BODY ROWS */}
              {!isCollapsed && (
                <div style={{ borderTop: '1px solid #27272a' }}>
                  {filteredItems.map((item) => {
                    const isExpanded = !!expandedItems[item.name];
                    return (
                      <div
                        key={item.name}
                        onClick={() => toggleItemExpand(item.name)}
                        style={baseStyles.itemRow(item.common, isExpanded, activeTab.accent)}
                      >
                        <div style={baseStyles.itemName(item.common)}>
                          {item.common && <span style={{ color: '#f59e0b' }}>★</span>}
                          <span>{item.name}</span>
                          {item.commonAttr && <span style={baseStyles.globalBadge} title="Shared across Series/DataFrames/Arrays">Shared Attr</span>}
                        </div>

                        {/* EXPANDABLE LOGICAL NOTE */}
                        {isExpanded && (
                          <div style={{ marginTop: '8px', fontSize: '13px', color: '#d4d4d8', lineHeight: '1.4', paddingLeft: item.common ? '0' : '12px' }}>
                            {item.note}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </main>
    </div>
  );
}
