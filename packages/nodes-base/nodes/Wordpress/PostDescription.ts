import { INodeProperties } from 'n8n-workflow';

export const postOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'post',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: ``,
			},
		],
		default: 'create',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const postFields = [

/* -------------------------------------------------------------------------- */
/*                                post:create                                 */
/* -------------------------------------------------------------------------- */

	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'create',
				]
			},
		},
		description: 'The unique identifier of the customer',
	},
	{
		displayName: 'JSON Parameters',
		name: 'jsonParameters',
		type: 'boolean',
		default: false,
		description: '',
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'create',
				]
			},
		}
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'create',
				],
			},
		},
		options: [
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				default: '',
				description: 'The table to create the row in.',
			},
		]
	},
	{
		displayName: 'Data',
		name: 'dataAttributesUi',
		placeholder: 'Add Data',
		description: 'key value pairs that represent the custom user properties you want to update',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'create',
				],
				jsonParameters: [
					false,
				],
			},
		},
		options: [
			{
				name: 'dataAttributesValues',
				displayName: 'Data',
				values: [
					{
						displayName: 'Key',
						name: 'key',
						type: 'string',
						default: '',
						description: 'Name of the property to set.',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Value of the property to set.',
					},
				]
			},
		],
	},
	{
		displayName: 'Data',
		name: 'dataAttributesJson',
		type: 'json',
		default: '',
		required: false,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		description: 'key value pairs that represent the custom user properties you want to update',
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'create',
				],
				jsonParameters: [
					true,
				],
			},
		},
	},

/* -------------------------------------------------------------------------- */
/*                                   user:alias                                */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'alias',
				]
			},
		},
		description: 'The old unique identifier of the user',
	},
	{
		displayName: 'New ID',
		name: 'newId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'alias',
				]
			},
		},
		description: 'The new unique identifier of the user',
	},
/* -------------------------------------------------------------------------- */
/*                                   user:unsubscribe                         */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'unsubscribe',
				]
			},
		},
		description: 'The unique identifier of the user',
	},
/* -------------------------------------------------------------------------- */
/*                                 user:resubscribe                           */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'resubscribe',
				]
			},
		},
		description: 'The unique identifier of the user',
	},
/* -------------------------------------------------------------------------- */
/*                                 user:delete                                */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'delete',
				]
			},
		},
		description: 'The unique identifier of the user',
	},
/* -------------------------------------------------------------------------- */
/*                                 user:addTags                               */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'addTags',
				]
			},
		},
		description: 'The unique identifier of the user',
	},
	{
		displayName: 'Tags',
		name: 'tags',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'addTags',
				]
			},
		},
		description: 'Tags to add separated by ","',
	},
/* -------------------------------------------------------------------------- */
/*                                 user:removeTags                            */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'removeTags',
				]
			},
		},
		description: 'The unique identifier of the user',
	},
	{
		displayName: 'Tags',
		name: 'tags',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'removeTags',
				]
			},
		},
		description: 'Tags to remove separated by ","',
	},
] as INodeProperties[];
