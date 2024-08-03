(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["N3_DUqod"],{N3_DUqod:function(e,a,d){"use strict";d.d(a,"__esModule",{value:!0}),d.d(a,"texts",{enumerable:!0,get:function(){return o;}}),d("EGChqmiK");let o=[{value:"To display a collection of structured data.",paraId:0,tocIndex:0},{value:"To sort, search, paginate, filter data.",paraId:0,tocIndex:0},{value:"Specify ",paraId:1,tocIndex:1},{value:"dataSource",paraId:1,tocIndex:1},{value:" of Table as an array of data.",paraId:1,tocIndex:1},{value:"const dataSource = [\n  {\n    key: '1',\n    name: 'Mike',\n    age: 32,\n    address: '10 Downing Street',\n  },\n  {\n    key: '2',\n    name: 'John',\n    age: 42,\n    address: '10 Downing Street',\n  },\n];\n\nconst columns = [\n  {\n    title: 'Name',\n    dataIndex: 'name',\n    key: 'name',\n  },\n  {\n    title: 'Age',\n    dataIndex: 'age',\n    key: 'age',\n  },\n  {\n    title: 'Address',\n    dataIndex: 'address',\n    key: 'address',\n  },\n];\n\n<Table dataSource={dataSource} columns={columns} />;\n",paraId:2,tocIndex:1},{value:"Kitchen Sketch Plugin \u{1F48E}",paraId:3,tocIndex:2},{value:"ProTable - Advanced Tables",paraId:3,tocIndex:2},{value:"S2 - Analytical Tables",paraId:3,tocIndex:2},{value:"Common props ref\uFF1A",paraId:4,tocIndex:51},{value:"Common props",paraId:5,tocIndex:51},{value:"Property",paraId:6,tocIndex:52},{value:"Description",paraId:6,tocIndex:52},{value:"Type",paraId:6,tocIndex:52},{value:"Default",paraId:6,tocIndex:52},{value:"Version",paraId:6,tocIndex:52},{value:"bordered",paraId:6,tocIndex:52},{value:"Whether to show all table borders",paraId:6,tocIndex:52},{value:"boolean",paraId:6,tocIndex:52},{value:"false",paraId:6,tocIndex:52},{value:"columns",paraId:6,tocIndex:52},{value:"Columns of table",paraId:6,tocIndex:52},{value:"ColumnsType",paraId:7,tocIndex:52},{value:"[]",paraId:6,tocIndex:52},{value:"-",paraId:6,tocIndex:52},{value:"components",paraId:6,tocIndex:52},{value:"Override default table elements",paraId:6,tocIndex:52},{value:"TableComponents",paraId:6,tocIndex:52},{value:"-",paraId:6,tocIndex:52},{value:"dataSource",paraId:6,tocIndex:52},{value:"Data record array to be displayed",paraId:6,tocIndex:52},{value:"object[]",paraId:6,tocIndex:52},{value:"-",paraId:6,tocIndex:52},{value:"expandable",paraId:6,tocIndex:52},{value:"Config expandable content",paraId:6,tocIndex:52},{value:"expandable",paraId:8,tocIndex:52},{value:"-",paraId:6,tocIndex:52},{value:"footer",paraId:6,tocIndex:52},{value:"Table footer renderer",paraId:6,tocIndex:52},{value:"function(currentPageData)",paraId:6,tocIndex:52},{value:"-",paraId:6,tocIndex:52},{value:"getPopupContainer",paraId:6,tocIndex:52},{value:"The render container of dropdowns in table",paraId:6,tocIndex:52},{value:"(triggerNode) => HTMLElement",paraId:6,tocIndex:52},{value:"() => TableHtmlElement",paraId:6,tocIndex:52},{value:"loading",paraId:6,tocIndex:52},{value:"Loading status of table",paraId:6,tocIndex:52},{value:"boolean | ",paraId:6,tocIndex:52},{value:"Spin Props",paraId:9,tocIndex:52},{value:"false",paraId:6,tocIndex:52},{value:"locale",paraId:6,tocIndex:52},{value:"The i18n text including filter, sort, empty text, etc",paraId:6,tocIndex:52},{value:"object",paraId:6,tocIndex:52},{value:"Default Value",paraId:6,tocIndex:52},{value:"pagination",paraId:6,tocIndex:52},{value:"Config of pagination. You can ref table pagination ",paraId:6,tocIndex:52},{value:"config",paraId:10,tocIndex:52},{value:" or full ",paraId:6,tocIndex:52},{value:"pagination",paraId:11,tocIndex:52},{value:" document, hide it by setting it to ",paraId:6,tocIndex:52},{value:"false",paraId:6,tocIndex:52},{value:"object | ",paraId:6,tocIndex:52},{value:"false",paraId:6,tocIndex:52},{value:"-",paraId:6,tocIndex:52},{value:"rowClassName",paraId:6,tocIndex:52},{value:"Row's className",paraId:6,tocIndex:52},{value:"function(record, index): string",paraId:6,tocIndex:52},{value:"-",paraId:6,tocIndex:52},{value:"rowKey",paraId:6,tocIndex:52},{value:"Row's unique key, could be a string or function that returns a string",paraId:6,tocIndex:52},{value:"string | function(record): string",paraId:6,tocIndex:52},{value:"key",paraId:6,tocIndex:52},{value:"rowSelection",paraId:6,tocIndex:52},{value:"Row selection ",paraId:6,tocIndex:52},{value:"config",paraId:12,tocIndex:52},{value:"object",paraId:6,tocIndex:52},{value:"-",paraId:6,tocIndex:52},{value:"rowHoverable",paraId:6,tocIndex:52},{value:"Row hover",paraId:6,tocIndex:52},{value:"boolean",paraId:6,tocIndex:52},{value:"true",paraId:6,tocIndex:52},{value:"5.16.0",paraId:6,tocIndex:52},{value:"scroll",paraId:6,tocIndex:52},{value:"Whether the table can be scrollable, ",paraId:6,tocIndex:52},{value:"config",paraId:13,tocIndex:52},{value:"object",paraId:6,tocIndex:52},{value:"-",paraId:6,tocIndex:52},{value:"showHeader",paraId:6,tocIndex:52},{value:"Whether to show table header",paraId:6,tocIndex:52},{value:"boolean",paraId:6,tocIndex:52},{value:"true",paraId:6,tocIndex:52},{value:"showSorterTooltip",paraId:6,tocIndex:52},{value:"The header show next sorter direction tooltip. It will be set as the property of Tooltip if its type is object",paraId:6,tocIndex:52},{value:"boolean | ",paraId:6,tocIndex:52},{value:"Tooltip props",paraId:14,tocIndex:52},{value:" & ",paraId:6,tocIndex:52},{value:"{target?: 'full-header' | 'sorter-icon' }",paraId:6,tocIndex:52},{value:"{ target: 'full-header' }",paraId:6,tocIndex:52},{value:"5.16.0",paraId:6,tocIndex:52},{value:"size",paraId:6,tocIndex:52},{value:"Size of table",paraId:6,tocIndex:52},{value:"large",paraId:6,tocIndex:52},{value:" | ",paraId:6,tocIndex:52},{value:"middle",paraId:6,tocIndex:52},{value:" | ",paraId:6,tocIndex:52},{value:"small",paraId:6,tocIndex:52},{value:"large",paraId:6,tocIndex:52},{value:"sortDirections",paraId:6,tocIndex:52},{value:"Supported sort way, could be ",paraId:6,tocIndex:52},{value:"ascend",paraId:6,tocIndex:52},{value:", ",paraId:6,tocIndex:52},{value:"descend",paraId:6,tocIndex:52},{value:"Array",paraId:6,tocIndex:52},{value:"[",paraId:6,tocIndex:52},{value:"ascend",paraId:6,tocIndex:52},{value:", ",paraId:6,tocIndex:52},{value:"descend",paraId:6,tocIndex:52},{value:"]",paraId:6,tocIndex:52},{value:"sticky",paraId:6,tocIndex:52},{value:"Set sticky header and scroll bar",paraId:6,tocIndex:52},{value:"boolean | ",paraId:6,tocIndex:52},{value:"{offsetHeader?: number, offsetScroll?: number, getContainer?: () => HTMLElement}",paraId:6,tocIndex:52},{value:"-",paraId:6,tocIndex:52},{value:"4.6.0 (getContainer: 4.7.0)",paraId:6,tocIndex:52},{value:"summary",paraId:6,tocIndex:52},{value:"Summary content",paraId:6,tocIndex:52},{value:"(currentData) => ReactNode",paraId:6,tocIndex:52},{value:"-",paraId:6,tocIndex:52},{value:"tableLayout",paraId:6,tocIndex:52},{value:"The ",paraId:6,tocIndex:52},{value:"table-layout",paraId:6,tocIndex:52},{value:" attribute of table element",paraId:6,tocIndex:52},{value:"- | ",paraId:6,tocIndex:52},{value:"auto",paraId:6,tocIndex:52},{value:" | ",paraId:6,tocIndex:52},{value:"fixed",paraId:6,tocIndex:52},{value:"-",paraId:6,tocIndex:52},{value:"fixed",paraId:6,tocIndex:52},{value:" when header/columns are fixed, or using ",paraId:6,tocIndex:52},{value:"column.ellipsis",paraId:6,tocIndex:52},{value:"title",paraId:6,tocIndex:52},{value:"Table title renderer",paraId:6,tocIndex:52},{value:"function(currentPageData)",paraId:6,tocIndex:52},{value:"-",paraId:6,tocIndex:52},{value:"virtual",paraId:6,tocIndex:52},{value:"Support virtual list",paraId:6,tocIndex:52},{value:"boolean",paraId:6,tocIndex:52},{value:"-",paraId:6,tocIndex:52},{value:"5.9.0",paraId:6,tocIndex:52},{value:"onChange",paraId:6,tocIndex:52},{value:"Callback executed when pagination, filters or sorter is changed",paraId:6,tocIndex:52},{value:"function(pagination, filters, sorter, extra: { currentDataSource: [], action: ",paraId:6,tocIndex:52},{value:"paginate",paraId:6,tocIndex:52},{value:" | ",paraId:6,tocIndex:52},{value:"sort",paraId:6,tocIndex:52},{value:" | ",paraId:6,tocIndex:52},{value:"filter",paraId:6,tocIndex:52},{value:" })",paraId:6,tocIndex:52},{value:"-",paraId:6,tocIndex:52},{value:"onHeaderRow",paraId:6,tocIndex:52},{value:"Set props on per header row",paraId:6,tocIndex:52},{value:"function(columns, index)",paraId:6,tocIndex:52},{value:"-",paraId:6,tocIndex:52},{value:"onRow",paraId:6,tocIndex:52},{value:"Set props on per row",paraId:6,tocIndex:52},{value:"function(record, index)",paraId:6,tocIndex:52},{value:"-",paraId:6,tocIndex:52},{value:"onScroll",paraId:6,tocIndex:52},{value:"Triggered when the table body is scrolled. Note that only vertical scrolling will trigger the event when ",paraId:6,tocIndex:52},{value:"virtual",paraId:6,tocIndex:52},{value:"function(event)",paraId:6,tocIndex:52},{value:"-",paraId:6,tocIndex:52},{value:"5.16.0",paraId:6,tocIndex:52},{value:"Property",paraId:15,tocIndex:53},{value:"Description",paraId:15,tocIndex:53},{value:"Type",paraId:15,tocIndex:53},{value:"Version",paraId:15,tocIndex:53},{value:"nativeElement",paraId:15,tocIndex:53},{value:"The wrap element",paraId:15,tocIndex:53},{value:"HTMLDivElement",paraId:15,tocIndex:53},{value:"5.11.0",paraId:15,tocIndex:53},{value:"scrollTo",paraId:15,tocIndex:53},{value:"Trigger to scroll to target position. ",paraId:15,tocIndex:53},{value:"key",paraId:15,tocIndex:53},{value:" match with record ",paraId:15,tocIndex:53},{value:"rowKey",paraId:15,tocIndex:53},{value:"(config: { index?: number, key?: React.Key, top?: number }) => void",paraId:15,tocIndex:53},{value:"5.11.0",paraId:15,tocIndex:53},{value:"Same as ",paraId:16,tocIndex:54},{value:"onRow",paraId:16,tocIndex:54},{value:" ",paraId:16,tocIndex:54},{value:"onHeaderRow",paraId:16,tocIndex:54},{value:" ",paraId:16,tocIndex:54},{value:"onCell",paraId:16,tocIndex:54},{value:" ",paraId:16,tocIndex:54},{value:"onHeaderCell",paraId:16,tocIndex:54},{value:"<Table\n  onRow={(record, rowIndex) => {\n    return {\n      onClick: (event) => {}, // click row\n      onDoubleClick: (event) => {}, // double click row\n      onContextMenu: (event) => {}, // right button click row\n      onMouseEnter: (event) => {}, // mouse enter row\n      onMouseLeave: (event) => {}, // mouse leave row\n    };\n  }}\n  onHeaderRow={(columns, index) => {\n    return {\n      onClick: () => {}, // click header row\n    };\n  }}\n/>\n",paraId:17,tocIndex:54},{value:"One of the Table ",paraId:18,tocIndex:55},{value:"columns",paraId:18,tocIndex:55},{value:" prop for describing the table's columns, Column has the same API.",paraId:18,tocIndex:55},{value:"Property",paraId:19,tocIndex:55},{value:"Description",paraId:19,tocIndex:55},{value:"Type",paraId:19,tocIndex:55},{value:"Default",paraId:19,tocIndex:55},{value:"Version",paraId:19,tocIndex:55},{value:"align",paraId:19,tocIndex:55},{value:"The specify which way that column is aligned",paraId:19,tocIndex:55},{value:"left",paraId:19,tocIndex:55},{value:" | ",paraId:19,tocIndex:55},{value:"right",paraId:19,tocIndex:55},{value:" | ",paraId:19,tocIndex:55},{value:"center",paraId:19,tocIndex:55},{value:"left",paraId:19,tocIndex:55},{value:"className",paraId:19,tocIndex:55},{value:"The className of this column",paraId:19,tocIndex:55},{value:"string",paraId:19,tocIndex:55},{value:"-",paraId:19,tocIndex:55},{value:"colSpan",paraId:19,tocIndex:55},{value:"Span of this column's title",paraId:19,tocIndex:55},{value:"number",paraId:19,tocIndex:55},{value:"-",paraId:19,tocIndex:55},{value:"dataIndex",paraId:19,tocIndex:55},{value:"Display field of the data record, support nest path by string array",paraId:19,tocIndex:55},{value:"string | string[]",paraId:19,tocIndex:55},{value:"-",paraId:19,tocIndex:55},{value:"defaultFilteredValue",paraId:19,tocIndex:55},{value:"Default filtered values",paraId:19,tocIndex:55},{value:"string[]",paraId:19,tocIndex:55},{value:"-",paraId:19,tocIndex:55},{value:"filterResetToDefaultFilteredValue",paraId:19,tocIndex:55},{value:"click the reset button, whether to restore the default filter",paraId:19,tocIndex:55},{value:"boolean",paraId:19,tocIndex:55},{value:"false",paraId:19,tocIndex:55},{value:"defaultSortOrder",paraId:19,tocIndex:55},{value:"Default order of sorted values",paraId:19,tocIndex:55},{value:"ascend",paraId:19,tocIndex:55},{value:" | ",paraId:19,tocIndex:55},{value:"descend",paraId:19,tocIndex:55},{value:"-",paraId:19,tocIndex:55},{value:"ellipsis",paraId:19,tocIndex:55},{value:"The ellipsis cell content, not working with sorter and filters for now.",paraId:19,tocIndex:55},{value:"tableLayout would be ",paraId:19,tocIndex:55},{value:"fixed",paraId:19,tocIndex:55},{value:" when ",paraId:19,tocIndex:55},{value:"ellipsis",paraId:19,tocIndex:55},{value:" is ",paraId:19,tocIndex:55},{value:"true",paraId:19,tocIndex:55},{value:" or ",paraId:19,tocIndex:55},{value:"{ showTitle?: boolean }",paraId:19,tocIndex:55},{value:"boolean | {showTitle?: boolean }",paraId:19,tocIndex:55},{value:"false",paraId:19,tocIndex:55},{value:"showTitle: 4.3.0",paraId:19,tocIndex:55},{value:"filterDropdown",paraId:19,tocIndex:55},{value:"Customized filter overlay",paraId:19,tocIndex:55},{value:"ReactNode | (props: ",paraId:19,tocIndex:55},{value:"FilterDropdownProps",paraId:19,tocIndex:55},{value:") => ReactNode",paraId:19,tocIndex:55},{value:"-",paraId:19,tocIndex:55},{value:"filterDropdownOpen",paraId:19,tocIndex:55},{value:"Whether ",paraId:19,tocIndex:55},{value:"filterDropdown",paraId:19,tocIndex:55},{value:" is visible",paraId:19,tocIndex:55},{value:"boolean",paraId:19,tocIndex:55},{value:"-",paraId:19,tocIndex:55},{value:"filtered",paraId:19,tocIndex:55},{value:"Whether the ",paraId:19,tocIndex:55},{value:"dataSource",paraId:19,tocIndex:55},{value:" is filtered",paraId:19,tocIndex:55},{value:"boolean",paraId:19,tocIndex:55},{value:"false",paraId:19,tocIndex:55},{value:"filteredValue",paraId:19,tocIndex:55},{value:"Controlled filtered value, filter icon will highlight",paraId:19,tocIndex:55},{value:"string[]",paraId:19,tocIndex:55},{value:"-",paraId:19,tocIndex:55},{value:"filterIcon",paraId:19,tocIndex:55},{value:"Customized filter icon",paraId:19,tocIndex:55},{value:"ReactNode | (filtered: boolean) => ReactNode",paraId:19,tocIndex:55},{value:"-",paraId:19,tocIndex:55},{value:"filterOnClose",paraId:19,tocIndex:55},{value:"Whether to trigger filter when the filter menu closes",paraId:19,tocIndex:55},{value:"boolean",paraId:19,tocIndex:55},{value:"true",paraId:19,tocIndex:55},{value:"5.15.0",paraId:19,tocIndex:55},{value:"filterMultiple",paraId:19,tocIndex:55},{value:"Whether multiple filters can be selected",paraId:19,tocIndex:55},{value:"boolean",paraId:19,tocIndex:55},{value:"true",paraId:19,tocIndex:55},{value:"filterMode",paraId:19,tocIndex:55},{value:"To specify the filter interface",paraId:19,tocIndex:55},{value:"'menu' | 'tree'",paraId:19,tocIndex:55},{value:"'menu'",paraId:19,tocIndex:55},{value:"4.17.0",paraId:19,tocIndex:55},{value:"filterSearch",paraId:19,tocIndex:55},{value:"Whether to be searchable for filter menu",paraId:19,tocIndex:55},{value:"boolean | function(input, record):boolean",paraId:19,tocIndex:55},{value:"false",paraId:19,tocIndex:55},{value:"boolean:4.17.0 function:4.19.0",paraId:19,tocIndex:55},{value:"filters",paraId:19,tocIndex:55},{value:"Filter menu config",paraId:19,tocIndex:55},{value:"object[]",paraId:19,tocIndex:55},{value:"-",paraId:19,tocIndex:55},{value:"fixed",paraId:19,tocIndex:55},{value:"(IE not support) Set column to be fixed: ",paraId:19,tocIndex:55},{value:"true",paraId:19,tocIndex:55},{value:"(same as left) ",paraId:19,tocIndex:55},{value:"'left'",paraId:19,tocIndex:55},{value:" ",paraId:19,tocIndex:55},{value:"'right'",paraId:19,tocIndex:55},{value:"boolean | string",paraId:19,tocIndex:55},{value:"false",paraId:19,tocIndex:55},{value:"key",paraId:19,tocIndex:55},{value:"Unique key of this column, you can ignore this prop if you've set a unique ",paraId:19,tocIndex:55},{value:"dataIndex",paraId:19,tocIndex:55},{value:"string",paraId:19,tocIndex:55},{value:"-",paraId:19,tocIndex:55},{value:"render",paraId:19,tocIndex:55},{value:"Renderer of the table cell. The return value should be a ReactNode",paraId:19,tocIndex:55},{value:"function(text, record, index) {}",paraId:19,tocIndex:55},{value:"-",paraId:19,tocIndex:55},{value:"responsive",paraId:19,tocIndex:55},{value:"The list of breakpoints at which to display this column. Always visible if not set",paraId:19,tocIndex:55},{value:"Breakpoint",paraId:19,tocIndex:55},{value:"[]",paraId:19,tocIndex:55},{value:"-",paraId:19,tocIndex:55},{value:"4.2.0",paraId:19,tocIndex:55},{value:"rowScope",paraId:19,tocIndex:55},{value:"Set scope attribute for all cells in this column",paraId:19,tocIndex:55},{value:"row",paraId:19,tocIndex:55},{value:" | ",paraId:19,tocIndex:55},{value:"rowgroup",paraId:19,tocIndex:55},{value:"-",paraId:19,tocIndex:55},{value:"5.1.0",paraId:19,tocIndex:55},{value:"shouldCellUpdate",paraId:19,tocIndex:55},{value:"Control cell render logic",paraId:19,tocIndex:55},{value:"(record, prevRecord) => boolean",paraId:19,tocIndex:55},{value:"-",paraId:19,tocIndex:55},{value:"4.3.0",paraId:19,tocIndex:55},{value:"showSorterTooltip",paraId:19,tocIndex:55},{value:"If header show next sorter direction tooltip, override ",paraId:19,tocIndex:55},{value:"showSorterTooltip",paraId:19,tocIndex:55},{value:" in table",paraId:19,tocIndex:55},{value:"boolean | ",paraId:19,tocIndex:55},{value:"Tooltip props",paraId:20,tocIndex:55},{value:" & ",paraId:19,tocIndex:55},{value:"{target?: 'full-header' | 'sorter-icon' }",paraId:19,tocIndex:55},{value:"{ target: 'full-header' }",paraId:19,tocIndex:55},{value:"5.16.0",paraId:19,tocIndex:55},{value:"sortDirections",paraId:19,tocIndex:55},{value:"Supported sort way, override ",paraId:19,tocIndex:55},{value:"sortDirections",paraId:19,tocIndex:55},{value:" in ",paraId:19,tocIndex:55},{value:"Table",paraId:19,tocIndex:55},{value:", could be ",paraId:19,tocIndex:55},{value:"ascend",paraId:19,tocIndex:55},{value:", ",paraId:19,tocIndex:55},{value:"descend",paraId:19,tocIndex:55},{value:"Array",paraId:19,tocIndex:55},{value:"[",paraId:19,tocIndex:55},{value:"ascend",paraId:19,tocIndex:55},{value:", ",paraId:19,tocIndex:55},{value:"descend",paraId:19,tocIndex:55},{value:"]",paraId:19,tocIndex:55},{value:"sorter",paraId:19,tocIndex:55},{value:"Sort function for local sort, see ",paraId:19,tocIndex:55},{value:"Array.sort",paraId:19,tocIndex:55},{value:"'s compareFunction. If it is server-side sorting, set to ",paraId:19,tocIndex:55},{value:"true",paraId:19,tocIndex:55},{value:", but if you want to support multi-column sorting, you can set it to ",paraId:19,tocIndex:55},{value:"{ multiple: number }",paraId:19,tocIndex:55},{value:"function | boolean | { compare: function, multiple: number }",paraId:19,tocIndex:55},{value:"-",paraId:19,tocIndex:55},{value:"sortOrder",paraId:19,tocIndex:55},{value:"Order of sorted values: ",paraId:19,tocIndex:55},{value:"ascend",paraId:19,tocIndex:55},{value:" ",paraId:19,tocIndex:55},{value:"descend",paraId:19,tocIndex:55},{value:" ",paraId:19,tocIndex:55},{value:"null",paraId:19,tocIndex:55},{value:"ascend",paraId:19,tocIndex:55},{value:" | ",paraId:19,tocIndex:55},{value:"descend",paraId:19,tocIndex:55},{value:" | null",paraId:19,tocIndex:55},{value:"-",paraId:19,tocIndex:55},{value:"sortIcon",paraId:19,tocIndex:55},{value:"Customized sort icon",paraId:19,tocIndex:55},{value:"(props: { sortOrder }) => ReactNode",paraId:19,tocIndex:55},{value:"-",paraId:19,tocIndex:55},{value:"5.6.0",paraId:19,tocIndex:55},{value:"title",paraId:19,tocIndex:55},{value:"Title of this column",paraId:19,tocIndex:55},{value:"ReactNode | ({ sortOrder, sortColumn, filters }) => ReactNode",paraId:19,tocIndex:55},{value:"-",paraId:19,tocIndex:55},{value:"width",paraId:19,tocIndex:55},{value:"Width of this column (",paraId:19,tocIndex:55},{value:"width not working?",paraId:19,tocIndex:55},{value:")",paraId:19,tocIndex:55},{value:"string | number",paraId:19,tocIndex:55},{value:"-",paraId:19,tocIndex:55},{value:"hidden",paraId:19,tocIndex:55},{value:"Hidden this column",paraId:19,tocIndex:55},{value:"boolean",paraId:19,tocIndex:55},{value:"false",paraId:19,tocIndex:55},{value:"5.13.0",paraId:19,tocIndex:55},{value:"onCell",paraId:19,tocIndex:55},{value:"Set props on per cell",paraId:19,tocIndex:55},{value:"function(record, rowIndex)",paraId:19,tocIndex:55},{value:"-",paraId:19,tocIndex:55},{value:"onFilter",paraId:19,tocIndex:55},{value:"Function that determines if the row is displayed when filtered",paraId:19,tocIndex:55},{value:"function(value, record) => boolean",paraId:19,tocIndex:55},{value:"-",paraId:19,tocIndex:55},{value:"onFilterDropdownOpenChange",paraId:19,tocIndex:55},{value:"Callback executed when ",paraId:19,tocIndex:55},{value:"filterDropdownOpen",paraId:19,tocIndex:55},{value:" is changed",paraId:19,tocIndex:55},{value:"function(visible) {}",paraId:19,tocIndex:55},{value:"-",paraId:19,tocIndex:55},{value:"onHeaderCell",paraId:19,tocIndex:55},{value:"Set props on per header cell",paraId:19,tocIndex:55},{value:"function(column)",paraId:19,tocIndex:55},{value:"-",paraId:19,tocIndex:55},{value:"Property",paraId:21,tocIndex:56},{value:"Description",paraId:21,tocIndex:56},{value:"Type",paraId:21,tocIndex:56},{value:"Default",paraId:21,tocIndex:56},{value:"title",paraId:21,tocIndex:56},{value:"Title of the column group",paraId:21,tocIndex:56},{value:"ReactNode",paraId:21,tocIndex:56},{value:"-",paraId:21,tocIndex:56},{value:"Properties for pagination.",paraId:22,tocIndex:57},{value:"Property",paraId:23,tocIndex:57},{value:"Description",paraId:23,tocIndex:57},{value:"Type",paraId:23,tocIndex:57},{value:"Default",paraId:23,tocIndex:57},{value:"position",paraId:23,tocIndex:57},{value:"Specify the position of ",paraId:23,tocIndex:57},{value:"Pagination",paraId:23,tocIndex:57},{value:", could be",paraId:23,tocIndex:57},{value:"topLeft",paraId:23,tocIndex:57},{value:" | ",paraId:23,tocIndex:57},{value:"topCenter",paraId:23,tocIndex:57},{value:" | ",paraId:23,tocIndex:57},{value:"topRight",paraId:23,tocIndex:57},{value:" |",paraId:23,tocIndex:57},{value:"bottomLeft",paraId:23,tocIndex:57},{value:" | ",paraId:23,tocIndex:57},{value:"bottomCenter",paraId:23,tocIndex:57},{value:" | ",paraId:23,tocIndex:57},{value:"bottomRight",paraId:23,tocIndex:57},{value:"Array",paraId:23,tocIndex:57},{value:"[",paraId:23,tocIndex:57},{value:"bottomRight",paraId:23,tocIndex:57},{value:"]",paraId:23,tocIndex:57},{value:"More about pagination, please check ",paraId:24,tocIndex:57},{value:"Pagination",paraId:25,tocIndex:57},{value:".",paraId:24,tocIndex:57},{value:"Properties for expandable.",paraId:26,tocIndex:58},{value:"Property",paraId:27,tocIndex:58},{value:"Description",paraId:27,tocIndex:58},{value:"Type",paraId:27,tocIndex:58},{value:"Default",paraId:27,tocIndex:58},{value:"Version",paraId:27,tocIndex:58},{value:"childrenColumnName",paraId:27,tocIndex:58},{value:"The column contains children to display",paraId:27,tocIndex:58},{value:"string",paraId:27,tocIndex:58},{value:"children",paraId:27,tocIndex:58},{value:"columnTitle",paraId:27,tocIndex:58},{value:"Set the title of the expand column",paraId:27,tocIndex:58},{value:"ReactNode",paraId:27,tocIndex:58},{value:"-",paraId:27,tocIndex:58},{value:"4.23.0",paraId:27,tocIndex:58},{value:"columnWidth",paraId:27,tocIndex:58},{value:"Set the width of the expand column",paraId:27,tocIndex:58},{value:"string | number",paraId:27,tocIndex:58},{value:"-",paraId:27,tocIndex:58},{value:"defaultExpandAllRows",paraId:27,tocIndex:58},{value:"Expand all rows initially",paraId:27,tocIndex:58},{value:"boolean",paraId:27,tocIndex:58},{value:"false",paraId:27,tocIndex:58},{value:"defaultExpandedRowKeys",paraId:27,tocIndex:58},{value:"Initial expanded row keys",paraId:27,tocIndex:58},{value:"string[]",paraId:27,tocIndex:58},{value:"-",paraId:27,tocIndex:58},{value:"expandedRowClassName",paraId:27,tocIndex:58},{value:"Expanded row's className",paraId:27,tocIndex:58},{value:"function(record, index, indent): string",paraId:27,tocIndex:58},{value:"-",paraId:27,tocIndex:58},{value:"expandedRowKeys",paraId:27,tocIndex:58},{value:"Current expanded row keys",paraId:27,tocIndex:58},{value:"string[]",paraId:27,tocIndex:58},{value:"-",paraId:27,tocIndex:58},{value:"expandedRowRender",paraId:27,tocIndex:58},{value:"Expanded container render for each row",paraId:27,tocIndex:58},{value:"function(record, index, indent, expanded): ReactNode",paraId:27,tocIndex:58},{value:"-",paraId:27,tocIndex:58},{value:"expandIcon",paraId:27,tocIndex:58},{value:"Customize row expand Icon. Ref ",paraId:27,tocIndex:58},{value:"example",paraId:27,tocIndex:58},{value:"function(props): ReactNode",paraId:27,tocIndex:58},{value:"-",paraId:27,tocIndex:58},{value:"expandRowByClick",paraId:27,tocIndex:58},{value:"Whether to expand row by clicking anywhere in the whole row",paraId:27,tocIndex:58},{value:"boolean",paraId:27,tocIndex:58},{value:"false",paraId:27,tocIndex:58},{value:"fixed",paraId:27,tocIndex:58},{value:"Whether the expansion icon is fixed. Optional true ",paraId:27,tocIndex:58},{value:"left",paraId:27,tocIndex:58},{value:" ",paraId:27,tocIndex:58},{value:"right",paraId:27,tocIndex:58},{value:"boolean | string",paraId:27,tocIndex:58},{value:"false",paraId:27,tocIndex:58},{value:"4.16.0",paraId:27,tocIndex:58},{value:"indentSize",paraId:27,tocIndex:58},{value:"Indent size in pixels of tree data",paraId:27,tocIndex:58},{value:"number",paraId:27,tocIndex:58},{value:"15",paraId:27,tocIndex:58},{value:"rowExpandable",paraId:27,tocIndex:58},{value:"Enable row can be expandable",paraId:27,tocIndex:58},{value:"(record) => boolean",paraId:27,tocIndex:58},{value:"-",paraId:27,tocIndex:58},{value:"showExpandColumn",paraId:27,tocIndex:58},{value:"Show expand column",paraId:27,tocIndex:58},{value:"boolean",paraId:27,tocIndex:58},{value:"true",paraId:27,tocIndex:58},{value:"4.18.0",paraId:27,tocIndex:58},{value:"onExpand",paraId:27,tocIndex:58},{value:"Callback executed when the row expand icon is clicked",paraId:27,tocIndex:58},{value:"function(expanded, record)",paraId:27,tocIndex:58},{value:"-",paraId:27,tocIndex:58},{value:"onExpandedRowsChange",paraId:27,tocIndex:58},{value:"Callback executed when the expanded rows change",paraId:27,tocIndex:58},{value:"function(expandedRows)",paraId:27,tocIndex:58},{value:"-",paraId:27,tocIndex:58},{value:"Properties for row selection.",paraId:28,tocIndex:59},{value:"Property",paraId:29,tocIndex:59},{value:"Description",paraId:29,tocIndex:59},{value:"Type",paraId:29,tocIndex:59},{value:"Default",paraId:29,tocIndex:59},{value:"Version",paraId:29,tocIndex:59},{value:"checkStrictly",paraId:29,tocIndex:59},{value:"Check table row precisely; parent row and children rows are not associated",paraId:29,tocIndex:59},{value:"boolean",paraId:29,tocIndex:59},{value:"true",paraId:29,tocIndex:59},{value:"4.4.0",paraId:29,tocIndex:59},{value:"columnTitle",paraId:29,tocIndex:59},{value:"Set the title of the selection column",paraId:29,tocIndex:59},{value:"ReactNode | (originalNode: ReactNode) => ReactNode",paraId:29,tocIndex:59},{value:"-",paraId:29,tocIndex:59},{value:"columnWidth",paraId:29,tocIndex:59},{value:"Set the width of the selection column",paraId:29,tocIndex:59},{value:"string | number",paraId:29,tocIndex:59},{value:"32px",paraId:29,tocIndex:59},{value:"fixed",paraId:29,tocIndex:59},{value:"Fixed selection column on the left",paraId:29,tocIndex:59},{value:"boolean",paraId:29,tocIndex:59},{value:"-",paraId:29,tocIndex:59},{value:"getCheckboxProps",paraId:29,tocIndex:59},{value:"Get Checkbox or Radio props",paraId:29,tocIndex:59},{value:"function(record)",paraId:29,tocIndex:59},{value:"-",paraId:29,tocIndex:59},{value:"hideSelectAll",paraId:29,tocIndex:59},{value:"Hide the selectAll checkbox and custom selection",paraId:29,tocIndex:59},{value:"boolean",paraId:29,tocIndex:59},{value:"false",paraId:29,tocIndex:59},{value:"4.3.0",paraId:29,tocIndex:59},{value:"preserveSelectedRowKeys",paraId:29,tocIndex:59},{value:"Keep selection ",paraId:29,tocIndex:59},{value:"key",paraId:29,tocIndex:59},{value:" even when it removed from ",paraId:29,tocIndex:59},{value:"dataSource",paraId:29,tocIndex:59},{value:"boolean",paraId:29,tocIndex:59},{value:"-",paraId:29,tocIndex:59},{value:"4.4.0",paraId:29,tocIndex:59},{value:"renderCell",paraId:29,tocIndex:59},{value:"Renderer of the table cell. Same as ",paraId:29,tocIndex:59},{value:"render",paraId:29,tocIndex:59},{value:" in column",paraId:29,tocIndex:59},{value:"function(checked, record, index, originNode) {}",paraId:29,tocIndex:59},{value:"-",paraId:29,tocIndex:59},{value:"4.1.0",paraId:29,tocIndex:59},{value:"selectedRowKeys",paraId:29,tocIndex:59},{value:"Controlled selected row keys",paraId:29,tocIndex:59},{value:"string[] | number[]",paraId:29,tocIndex:59},{value:"[]",paraId:29,tocIndex:59},{value:"selections",paraId:29,tocIndex:59},{value:"Custom selection ",paraId:29,tocIndex:59},{value:"config",paraId:30,tocIndex:59},{value:", only displays default selections when set to ",paraId:29,tocIndex:59},{value:"true",paraId:29,tocIndex:59},{value:"object[] | boolean",paraId:29,tocIndex:59},{value:"-",paraId:29,tocIndex:59},{value:"type",paraId:29,tocIndex:59},{value:"checkbox",paraId:29,tocIndex:59},{value:" or ",paraId:29,tocIndex:59},{value:"radio",paraId:29,tocIndex:59},{value:"checkbox",paraId:29,tocIndex:59},{value:" | ",paraId:29,tocIndex:59},{value:"radio",paraId:29,tocIndex:59},{value:"checkbox",paraId:29,tocIndex:59},{value:"onCell",paraId:29,tocIndex:59},{value:"Set props on per cell. Same as ",paraId:29,tocIndex:59},{value:"onCell",paraId:29,tocIndex:59},{value:" in column",paraId:29,tocIndex:59},{value:"function(record, rowIndex)",paraId:29,tocIndex:59},{value:"-",paraId:29,tocIndex:59},{value:"5.5.0",paraId:29,tocIndex:59},{value:"onChange",paraId:29,tocIndex:59},{value:"Callback executed when selected rows change",paraId:29,tocIndex:59},{value:"function(selectedRowKeys, selectedRows, info: { type })",paraId:29,tocIndex:59},{value:"-",paraId:29,tocIndex:59},{value:"info.type",paraId:29,tocIndex:59},{value:": 4.21.0",paraId:29,tocIndex:59},{value:"onSelect",paraId:29,tocIndex:59},{value:"Callback executed when select/deselect one row",paraId:29,tocIndex:59},{value:"function(record, selected, selectedRows, nativeEvent)",paraId:29,tocIndex:59},{value:"-",paraId:29,tocIndex:59},{value:"onSelectAll",paraId:29,tocIndex:59},{value:"Callback executed when select/deselect all rows",paraId:29,tocIndex:59},{value:"function(selected, selectedRows, changeRows)",paraId:29,tocIndex:59},{value:"-",paraId:29,tocIndex:59},{value:"onSelectInvert",paraId:29,tocIndex:59},{value:"Callback executed when row selection is inverted",paraId:29,tocIndex:59},{value:"function(selectedRowKeys)",paraId:29,tocIndex:59},{value:"-",paraId:29,tocIndex:59},{value:"onSelectNone",paraId:29,tocIndex:59},{value:"Callback executed when row selection is cleared",paraId:29,tocIndex:59},{value:"function()",paraId:29,tocIndex:59},{value:"-",paraId:29,tocIndex:59},{value:"onSelectMultiple",paraId:29,tocIndex:59},{value:"Callback executed when row selection is changed by pressing shift",paraId:29,tocIndex:59},{value:"function(selected, selectedRows, changeRows)",paraId:29,tocIndex:59},{value:"-",paraId:29,tocIndex:59},{value:"Property",paraId:31,tocIndex:60},{value:"Description",paraId:31,tocIndex:60},{value:"Type",paraId:31,tocIndex:60},{value:"Default",paraId:31,tocIndex:60},{value:"scrollToFirstRowOnChange",paraId:31,tocIndex:60},{value:"Whether to scroll to the top of the table when paging, sorting, filtering changes",paraId:31,tocIndex:60},{value:"boolean",paraId:31,tocIndex:60},{value:"-",paraId:31,tocIndex:60},{value:"x",paraId:31,tocIndex:60},{value:"Set horizontal scrolling, can also be used to specify the width of the scroll area, could be number, percent value, true and ",paraId:31,tocIndex:60},{value:"'max-content'",paraId:31,tocIndex:60},{value:"string | number | true",paraId:31,tocIndex:60},{value:"-",paraId:31,tocIndex:60},{value:"y",paraId:31,tocIndex:60},{value:"Set vertical scrolling, can also be used to specify the height of the scroll area, could be string or number",paraId:31,tocIndex:60},{value:"string | number",paraId:31,tocIndex:60},{value:"-",paraId:31,tocIndex:60},{value:"Property",paraId:32,tocIndex:61},{value:"Description",paraId:32,tocIndex:61},{value:"Type",paraId:32,tocIndex:61},{value:"Default",paraId:32,tocIndex:61},{value:"key",paraId:32,tocIndex:61},{value:"Unique key of this selection",paraId:32,tocIndex:61},{value:"string",paraId:32,tocIndex:61},{value:"-",paraId:32,tocIndex:61},{value:"text",paraId:32,tocIndex:61},{value:"Display text of this selection",paraId:32,tocIndex:61},{value:"ReactNode",paraId:32,tocIndex:61},{value:"-",paraId:32,tocIndex:61},{value:"onSelect",paraId:32,tocIndex:61},{value:"Callback executed when this selection is clicked",paraId:32,tocIndex:61},{value:"function(changeableRowKeys)",paraId:32,tocIndex:61},{value:"-",paraId:32,tocIndex:61},{value:"import React from 'react';\nimport { Table } from 'antd';\nimport type { TableColumnsType } from 'antd';\n\ninterface User {\n  key: number;\n  name: string;\n}\n\nconst columns: TableColumnsType<User> = [\n  {\n    key: 'name',\n    title: 'Name',\n    dataIndex: 'name',\n  },\n];\n\nconst data: User[] = [\n  {\n    key: 0,\n    name: 'Jack',\n  },\n];\n\nconst Demo: React.FC = () => (\n  <>\n    <Table<User> columns={columns} dataSource={data} />\n    {/* JSX style usage */}\n    <Table<User> dataSource={data}>\n      <Table.Column<User> key=\"name\" title=\"Name\" dataIndex=\"name\" />\n    </Table>\n  </>\n);\n\nexport default Demo;\n",paraId:33,tocIndex:62},{value:"Here is the ",paraId:34,tocIndex:62},{value:"CodeSandbox for TypeScript",paraId:34,tocIndex:62},{value:".",paraId:34,tocIndex:62},{value:"According to the ",paraId:35,tocIndex:64},{value:"React documentation",paraId:35,tocIndex:64},{value:", every child in an array should be assigned a unique key. The values inside the Table's ",paraId:35,tocIndex:64},{value:"dataSource",paraId:35,tocIndex:64},{value:" and ",paraId:35,tocIndex:64},{value:"columns",paraId:35,tocIndex:64},{value:" should follow this rule. By default, ",paraId:35,tocIndex:64},{value:"dataSource[i].key",paraId:35,tocIndex:64},{value:" will be treated as the key value for ",paraId:35,tocIndex:64},{value:"dataSource",paraId:35,tocIndex:64},{value:".",paraId:35,tocIndex:64},{value:"If ",paraId:36,tocIndex:64},{value:"dataSource[i].key",paraId:36,tocIndex:64},{value:" is not provided, then you should specify the primary key of dataSource value via ",paraId:36,tocIndex:64},{value:"rowKey",paraId:36,tocIndex:64},{value:", as shown below. If not, warnings like the one above will show in browser console.",paraId:36,tocIndex:64},{value:'// primary key is uid\nreturn <Table rowKey="uid" />;\n// or\nreturn <Table rowKey={(record) => record.uid} />;\n',paraId:37,tocIndex:64},{value:"You can set ",paraId:38,tocIndex:66},{value:"hideOnSinglePage",paraId:38,tocIndex:66},{value:" with ",paraId:38,tocIndex:66},{value:"pagination",paraId:38,tocIndex:66},{value:" prop.",paraId:38,tocIndex:66},{value:"Table total page count usually reduce after filter data, we by default return to first page in case of current page is out of filtered results.",paraId:39,tocIndex:67},{value:"You may need to keep current page after filtering when fetch data from remote service, please check ",paraId:40,tocIndex:67},{value:"this demo",paraId:40,tocIndex:67},{value:" as workaround.",paraId:40,tocIndex:67},{value:"Also you can use the action from extra param to determine when return to first page.",paraId:41,tocIndex:67},{value:"In order to improve user experience, Pagination show size changer by default when ",paraId:42,tocIndex:68},{value:"total > 50",paraId:42,tocIndex:68},{value:" since ",paraId:42,tocIndex:68},{value:"4.1.0",paraId:42,tocIndex:68},{value:". You can set ",paraId:42,tocIndex:68},{value:"showSizeChanger=false",paraId:42,tocIndex:68},{value:" to disable this feature.",paraId:42,tocIndex:68},{value:"Table can not tell what state used in ",paraId:43,tocIndex:69},{value:"columns.render",paraId:43,tocIndex:69},{value:", so it always need fully render to avoid sync issue. You can use ",paraId:43,tocIndex:69},{value:"column.shouldCellUpdate",paraId:43,tocIndex:69},{value:" to control render.",paraId:43,tocIndex:69},{value:"Fixed column use ",paraId:44,tocIndex:70},{value:"z-index",paraId:44,tocIndex:70},{value:" to make it over other columns. You will find sometime fixed columns also over your mask layout. You can set ",paraId:44,tocIndex:70},{value:"z-index",paraId:44,tocIndex:70},{value:" on your mask layout to resolve.",paraId:44,tocIndex:70},{value:"Since ",paraId:45,tocIndex:71},{value:"4.1.0",paraId:45,tocIndex:71},{value:", You can use ",paraId:45,tocIndex:71},{value:"rowSelection.renderCell",paraId:45,tocIndex:71},{value:" to custom render Table Checkbox. If you want to add Tooltip, please refer to this ",paraId:45,tocIndex:71},{value:"demo",paraId:45,tocIndex:71},{value:".",paraId:45,tocIndex:71},{value:"Because virtual table needs to get its ref to do some calculations, so you need to use ",paraId:46,tocIndex:72},{value:"React.forwardRef",paraId:46,tocIndex:72},{value:" wrapper and pass the ref to the dom",paraId:46,tocIndex:72}];}}]);
//# sourceMappingURL=N3_DUqod-async.138d6b85.js.map