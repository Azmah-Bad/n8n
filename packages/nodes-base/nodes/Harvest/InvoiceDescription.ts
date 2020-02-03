import { INodeProperties } from "n8n-workflow";

const resource = [ 'invoices' ];

export const invoiceOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource,
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get data of a invoice',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get data of all invoices',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: `Delete a invoice`,
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},

] as INodeProperties[];

export const invoiceFields = [

/* -------------------------------------------------------------------------- */
/*                                invoice:getAll                            */
/* -------------------------------------------------------------------------- */

{
	displayName: 'Return All',
	name: 'returnAll',
	type: 'boolean',
	displayOptions: {
		show: {
			resource,
			operation: [
				'getAll',
			],
		},
	},
	default: false,
	description: 'Returns a list of your invoices.',
},
{
	displayName: 'Limit',
	name: 'limit',
	type: 'number',
	displayOptions: {
		show: {
			resource,
			operation: [
				'getAll',
			],
			returnAll: [
				false,
			],
		},
	},
	typeOptions: {
		minValue: 1,
		maxValue: 100,
	},
	default: 100,
	description: 'How many results to return.',
},
{
	displayName: 'Filters',
	name: 'filters',
	type: 'collection',
	placeholder: 'Add Filter',
	default: {},
	displayOptions: {
		show: {
			resource,
			operation: [
				'getAll',
			],
		},
	},
	options: [
		{
			displayName: 'Client ID',
			name: 'client_id',
			type: 'string',
			default: '',
			description: 'Only return time entries belonging to the client with the given ID.',
		},
		{
			displayName: 'Project ID',
			name: 'project_id',
			type: 'string',
			default: '',
			description: 'Only return time entries belonging to the client with the given ID.',
		},
		{
			displayName: 'Updated Since',
			name: 'updated_since',
			type: 'dateTime',
			default: '',
			description: 'Only return time entries that have been updated since the given date and time.',
		},
		{
			displayName: 'From',
			name: 'from',
			type: 'dateTime',
			default: '',
			description: 'Only return time entries with a spent_date on or after the given date.',
		},
		{
			displayName: 'To',
			name: 'to',
			type: 'dateTime',
			default: '',
			description: 'Only return time entries with a spent_date on or before the given date.',
		},
		{
			displayName: 'State',
			name: 'state',
			type: 'multiOptions',
			options: [
				{
					name: 'draft',
					value: 'draft',
				},
				{
					name: 'open',
					value: 'open',
				},
				{
					name: 'paid',
					value: 'paid',
				},
				{
					name: 'closed',
					value: 'closed',
				},
			],
			default: [],
			description: 'Only return invoices with a state matching the value provided. Options: draft, open, paid, or closed.',
		},
		{
			displayName: 'Page',
			name: 'page',
			type: 'number',
			typeOptions: {
				minValue: 1,
			},
			default: 1,
			description: 'The page number to use in pagination. For instance, if you make a list request and receive 100 records, your subsequent call can include page=2 to retrieve the next page of the list. (Default: 1)',
		}
	]
},

/* -------------------------------------------------------------------------- */
/*                                invoice:get                            */
/* -------------------------------------------------------------------------- */
{
	displayName: 'Invoice Id',
	name: 'id',
	type: 'string',
	default: '',
	required: true,
	displayOptions: {
		show: {
			operation: [
				'get',
			],
			resource,
		},
	},
	description: 'The ID of the invoice you are retrieving.',
},

/* -------------------------------------------------------------------------- */
/*                                invoice:delete                            */
/* -------------------------------------------------------------------------- */
{
	displayName: 'Invoice Id',
	name: 'id',
	type: 'string',
	default: '',
	required: true,
	displayOptions: {
		show: {
			operation: [
				'delete',
			],
			resource,
		},
	},
	description: 'The ID of the invoice want to delete.',
},

	/* -------------------------------------------------------------------------- */
	/*                                invoice:create                           */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'client_id',
		name: 'client_id',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'create',
				],
				resource,
			},
		},
		default: '',
		required: true,
		description: 'The ID of the retainer associated with this invoice..',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				operation: [
					'create',
				],
				resource,
			},
		},
		default: {},
		options: [
			{
				displayName: 'Retainer Id',
				name: 'retainer_id',
				type: 'boolean',
				default: true,
				description: 'The ID of the retainer associated with this invoice.'
			},
			{
				displayName: 'Estimate Id',
				name: 'estimate_id',
				type: 'string',
				default: '',
				description: 'The ID of the estimate associated with this invoice.'
			},
			{
				displayName: 'Number',
				name: 'number',
				type: 'string',
				default: '',
				description: 'If no value is set, the number will be automatically generated.'
			},
			{
				displayName: 'Purchase Order',
				name: 'purchase_order',
				type: 'string',
				default: '',
				description: 'The purchase order number.'
			},
			{
				displayName: 'Tax',
				name: 'tax',
				type: 'string',
				default: '',
				description: 'This percentage is applied to the subtotal, including line items and discounts. Example: use 10.0 for 10.0%.'
			},
			{
				displayName: 'Tax2',
				name: 'tax2',
				type: 'string',
				default: '',
				description: 'This percentage is applied to the subtotal, including line items and discounts. Example: use 10.0 for 10.0%.'
			},
			{
				displayName: 'Discount',
				name: 'over_budget_notification_percentage',
				type: 'string',
				default: '',
				description: 'This percentage is subtracted from the subtotal. Example: use 10.0 for 10.0%.'
			},
			{
				displayName: 'Subject',
				name: 'subject',
				type: 'string',
				default: '',
				description: 'The invoice subject.'
			},
			{
				displayName: 'Currency',
				name: 'currency',
				type: 'string',
				default: '',
				description: 'The currency used by the invoice. If not provided, the client’s currency will be used. See a list of supported currencies'
			},
			{
				displayName: 'Payment Term',
				name: 'payment_term',
				type: 'string',
				default: '',
				description: 'The timeframe in which the invoice should be paid. Defaults to custom. Options: upon receipt, net 15, net 30, net 45, or net 60.'
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				default: '',
				description: 'Notes about the project.'
			},
			{
				displayName: 'Issue Date',
				name: 'issue_date',
				type: 'dateTime',
				default: '',
				description: 'Date the invoice was issued. Defaults to today’s date.'
			},
			{
				displayName: 'Due Date',
				name: 'ends_on',
				type: 'dateTime',
				default: '',
				description: 'Date the invoice is due. Defaults to the issue_date if no payment_term is specified.'
			},

		],
	},

		/* -------------------------------------------------------------------------- */
	/*                                invoice:update                           */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Invoice Id',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: [
					'update',
				],
				resource,
			},
		},
		description: 'The ID of the invoice want to update.',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				operation: [
					'update',
				],
				resource,
			},
		},
		default: {},
		options: [
			{
				displayName: 'client_id',
				name: 'client_id',
				type: 'string',
				default: '',
				description: 'The ID of the retainer associated with this invoice..',
			},
			{
				displayName: 'Retainer Id',
				name: 'retainer_id',
				type: 'boolean',
				default: true,
				description: 'The ID of the retainer associated with this invoice.'
			},
			{
				displayName: 'Estimate Id',
				name: 'estimate_id',
				type: 'string',
				default: '',
				description: 'The ID of the estimate associated with this invoice.'
			},
			{
				displayName: 'Number',
				name: 'number',
				type: 'string',
				default: '',
				description: 'If no value is set, the number will be automatically generated.'
			},
			{
				displayName: 'Purchase Order',
				name: 'purchase_order',
				type: 'string',
				default: '',
				description: 'The purchase order number.'
			},
			{
				displayName: 'Tax',
				name: 'tax',
				type: 'string',
				default: '',
				description: 'This percentage is applied to the subtotal, including line items and discounts. Example: use 10.0 for 10.0%.'
			},
			{
				displayName: 'Tax2',
				name: 'tax2',
				type: 'string',
				default: '',
				description: 'This percentage is applied to the subtotal, including line items and discounts. Example: use 10.0 for 10.0%.'
			},
			{
				displayName: 'Discount',
				name: 'over_budget_notification_percentage',
				type: 'string',
				default: '',
				description: 'This percentage is subtracted from the subtotal. Example: use 10.0 for 10.0%.'
			},
			{
				displayName: 'Subject',
				name: 'subject',
				type: 'string',
				default: '',
				description: 'The invoice subject.'
			},
			{
				displayName: 'Currency',
				name: 'currency',
				type: 'string',
				default: '',
				description: 'The currency used by the invoice. If not provided, the client’s currency will be used. See a list of supported currencies'
			},
			{
				displayName: 'Payment Term',
				name: 'payment_term',
				type: 'string',
				default: '',
				description: 'The timeframe in which the invoice should be paid. Defaults to custom. Options: upon receipt, net 15, net 30, net 45, or net 60.'
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				default: '',
				description: 'Notes about the project.'
			},
			{
				displayName: 'Issue Date',
				name: 'issue_date',
				type: 'dateTime',
				default: '',
				description: 'Date the invoice was issued. Defaults to today’s date.'
			},
			{
				displayName: 'Due Date',
				name: 'ends_on',
				type: 'dateTime',
				default: '',
				description: 'Date the invoice is due. Defaults to the issue_date if no payment_term is specified.'
			},

		],
	},
] as INodeProperties[];
