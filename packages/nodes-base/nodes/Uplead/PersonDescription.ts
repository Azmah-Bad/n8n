import { INodeProperties } from 'n8n-workflow';

export const personOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'person',
				],
			},
		},
		options: [
			{
				name: 'Enrich',
				value: 'enrich',
			},
		],
		default: 'enrich',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const personFields = [

/* -------------------------------------------------------------------------- */
/*                                 person:enrich                              */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'person',
				],
				operation: [
					'enrich',
				],
			},
		},
		description: 'email address (e.g – mbenioff@salesforce.com)',
	},
	{
		displayName: 'Fist Name',
		name: 'firstname',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'person',
				],
				operation: [
					'enrich',
				],
			},
		},
		description: 'first name of the person (e.g – Marc)',
	},
	{
		displayName: 'Last Name',
		name: 'lastname',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'person',
				],
				operation: [
					'enrich',
				],
			},
		},
		description: 'Last name of the person (e.g – Benioff)',
	},
	{
		displayName: 'Domain',
		name: 'domain',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'person',
				],
				operation: [
					'enrich',
				],
			},
		},
		description: 'The domain name (e.g – salesforce.com)',
	},
] as INodeProperties[];
