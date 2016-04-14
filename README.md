# CircularKPI
Create simple Qlik Sense KPIs with this extension. It supports percentage (%) KPIs up to 300%. Great for showing target achievements with optional animation of values.

The extension is using the open source code from BrightPoint Consulting (slightly modified) from here:
http://www.brightpointinc.com/download/radial-progress-source-code/

I've added a number of themes to change the colors used and a property for setting the animation

EDIT 20160402: CircularKPI now supports dropping a dimension on the object to create an array of KPI items. Thanks to Alexander Karlsson for the pull request.

EDIT #2 20160402: Added opacity settings while making selections in dimension driven KPI array to highlight selected vs non-selected values. Plus optional labels for single KPIs without dimension.

EDIT #3 20160409: Added an option to show decimals (up to 2 decimals in order to avoid clutter). Off by default but can be enabled from the object properties.

EDIT #4 20160413: Added an option to hide the "%" sign in the KPI in order to show actual values. Do note that the rings only support values up to 300(%).

EDIT #5 20160414: Added support for a second dimension to color code groups of KPI items. See below animation for example.

# Example
![alt tag](https://raw.githubusercontent.com/johsund/CircularKPI/master/CircularKPI_animation2.gif)
