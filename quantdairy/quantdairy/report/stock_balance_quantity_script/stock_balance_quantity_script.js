// Copyright (c) 2024, quantdairy and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Stock Balance Quantity Script"] = {
	"filters": [
		{
			fieldname: "from_date",
			fieldtype: "Date",
			label: "From Date",
			default:'Today',
			reqd: 1,
		},
		{
			fieldname: "to_date",
			fieldtype: "Date",
			label: "To Date",
			default:'Today',
			reqd: 1,
		},
		// {
		// 	fieldname: "Item",
		// 	fieldtype: "Link",
		// 	label: "Item",
		// 	options: "Stock Ledger Entry"
			
		// },
		// {
        //     fieldname: "customer",
        //     fieldtype: "Link",
        //     label: "Party",
        //     options: "Sales Invoice",
			
		// },
		// {
		// 	fieldname: "route",
		// 	fieldtype: "Link",
		// 	label: "Route",
		// 	options: "Stock Ledger Entry",
		// },
		// {
		// 	fieldname: "item_group",
		// 	fieldtype: "Link",
		// 	label: "Item Group",
		// 	options: "Item Group",
			
		// },

	]
};