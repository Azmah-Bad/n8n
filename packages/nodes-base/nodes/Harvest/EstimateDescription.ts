import { INodeProperties } from "n8n-workflow";

const resource = [ 'estimates' ];

export const estimateOperations = [
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
				description: 'Get data of an estimate',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get data of all estimates',
			},
			{
				name: 'Create',
				value: 'create',
				description: `Create a estimate`,
			},
			{
				name: 'Update',
				value: 'update',
				description: `Update a estimate`,
			},
			{
				name: 'Delete',
				value: 'delete',
				description: `Delete an estimate`,
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},

] as INodeProperties[];

export const estimateFields = [

/* -------------------------------------------------------------------------- */
/*                                estimate:getAll                            */
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
	description: 'Returns a list of your estimates.',
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
			type: 'string',
			default: '',
			description: 'Only return estimates with a state matching the value provided. Options: draft, sent, accepted, or declined.',
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
/*                                estimate:get                            */
/* -------------------------------------------------------------------------- */
{
	displayName: 'Estimate Id',
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
	description: 'The ID of the estimate you are retrieving.',
},

/* -------------------------------------------------------------------------- */
/*                                estimate:delete                            */
/* -------------------------------------------------------------------------- */
{
	displayName: 'Estimate Id',
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
	description: 'The ID of the estimate want to delete.',
},

	/* -------------------------------------------------------------------------- */
	/*                                estimate:create                           */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Client Id',
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
		description: 'The ID of the client this estimate belongs to.',
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
				description: 'The estimate subject.'
			},
			{
				displayName: 'Currency',
				name: 'currency',
				type: 'string',
				default: '',
				description: 'The currency used by the estimate. If not provided, the client’s currency will be used. See a list of supported currencies'
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				default: '',
				description: 'Any additional notes to include on the estimate.'
			},
			{
				displayName: 'Issue Date',
				name: 'issue_date',
				type: 'dateTime',
				default: '',
				description: 'Date the invoice was issued. Defaults to today’s date.'
			},

		],
	},

		/* -------------------------------------------------------------------------- */
	/*                                estimate:update                           */
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
				displayName: 'Client Id',
				name: 'client_id',
				type: 'string',
				default: '',
				description: 'The ID of the retainer associated with this invoice..',
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
				description: 'The estimate subject.'
			},
			{
				displayName: 'Currency',
				name: 'currency',
				type: 'string',
				default: '',
				description: 'The currency used by the estimate. If not provided, the client’s currency will be used. See a list of supported currencies'
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				default: '',
				description: 'Any additional notes to include on the estimate.'
			},
			{
				displayName: 'Issue Date',
				name: 'issue_date',
				type: 'dateTime',
				default: '',
				description: 'Date the invoice was issued. Defaults to today’s date.'
			},

		],
	},

] as INodeProperties[];
