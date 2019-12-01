import { INodeProperties } from "n8n-workflow";

export const issueOpeations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'issue',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new issue',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an issue',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get an issue',
			},
			{
				name: 'Changelog',
				value: 'changelog',
				description: 'Get issue changelog',
			},
			{
				name: 'Notify',
				value: 'notify',
				description: 'Creates an email notification for an issue and adds it to the mail queue.',
			},
			{
				name: 'Transitions',
				value: 'transitions',
				description: `Returns either all transitions or a transition that can be performed by the user on an issue, based on the issue's status.`,
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an issue',
			},
		],
		default: 'create',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const issueFields = [

/* -------------------------------------------------------------------------- */
/*                                issue:create                                */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Project',
		name: 'project',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'issue',
				],
				operation: [
					'create'
				]
			},
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects',
		},
		description: 'Project',
	},
	{
		displayName: 'Issue Type',
		name: 'issueType',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'issue',
				],
				operation: [
					'create'
				]
			},
		},
		typeOptions: {
			loadOptionsMethod: 'getIssueTypes',
		},
		description: 'Issue Types',
	},
	{
		displayName: 'Summary',
		name: 'summary',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'issue',
				],
				operation: [
					'create',
				],
			},
		},
		default: '',
		description: 'Summary',
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
					'issue',
				],
				operation: [
					'create',
				],
			},
		},
		options: [
			{
				displayName: 'Parent Issue Key',
				name: 'parentIssueKey',
				type: 'string',
				required: false,
				default: '',
				description: 'Parent Issue Key',
			},
			{
				displayName: 'Labels',
				name: 'labels',
				type: 'multiOptions',
				typeOptions: {
					loadOptionsMethod: 'getLabels',
				},
				default: [],
				required : false,
				description: 'Labels',
			},
			{
				displayName: 'Priority',
				name: 'priority',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getPriorities',
				},
				default: [],
				required : false,
				description: 'Priority',
			},
			{
				displayName: 'Assignee',
				name: 'assignee',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getUsers',
				},
				default: [],
				required : false,
				description: 'Assignee',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				required : false,
				description: 'Description',
			},
			{
				displayName: 'Update History',
				name: 'updateHistory',
				type: 'boolean',
				default: false,
				required : false,
				description: `Whether the project in which the issue is created is added to the user's Recently viewed project list, as shown under Projects in Jira.`,
			},
		],
	},

/* -------------------------------------------------------------------------- */
/*                                issue:update                                */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Issue Key',
		name: 'issueKey',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'issue',
				],
				operation: [
					'update',
				],
			},
		},
		default: '',
		description: 'Issue Key',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'issue',
				],
				operation: [
					'update',
				],
			},
		},
		options: [
			{
				displayName: 'Issue Type',
				name: 'issueType',
				type: 'options',
				required: false,
				typeOptions: {
					loadOptionsMethod: 'getIssueTypes',
				},
				default: '',
				description: 'Issue Types',
			},
			{
				displayName: 'Summary',
				name: 'summary',
				type: 'string',
				required: false,
				default: '',
				description: 'Summary',
			},
			{
				displayName: 'Parent Issue Key',
				name: 'parentIssueKey',
				type: 'string',
				required: false,
				default: '',
				description: 'Parent Issue Key',
			},
			{
				displayName: 'Labels',
				name: 'labels',
				type: 'multiOptions',
				typeOptions: {
					loadOptionsMethod: 'getLabels',
				},
				default: [],
				required : false,
				description: 'Labels',
			},
			{
				displayName: 'Priority',
				name: 'priority',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getPriorities',
				},
				default: [],
				required : false,
				description: 'Priority',
			},
			{
				displayName: 'Assignee',
				name: 'assignee',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getUsers',
				},
				default: [],
				required : false,
				description: 'Assignee',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				required : false,
				description: 'Description',
			},
		],
	},

/* -------------------------------------------------------------------------- */
/*                                issue:delete                                */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Issue Key',
		name: 'issueKey',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'issue',
				],
				operation: [
					'delete',
				],
			},
		},
		default: '',
		description: 'Issue Key',
	},
	{
		displayName: 'Delete Subtasks',
		name: 'deleteSubtasks',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'issue',
				],
				operation: [
					'delete',
				],
			},
		},
		default: false,
		description: 'Delete Subtasks',
	},

/* -------------------------------------------------------------------------- */
/*                                  issue:get                                 */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Issue Key',
		name: 'issueKey',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'issue',
				],
				operation: [
					'get',
				],
			},
		},
		default: '',
		description: 'Issue Key',
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
					'issue',
				],
				operation: [
					'get',
				],
			},
		},
		options: [
			{
				displayName: 'Fields',
				name: 'fields',
				type: 'string',
				required: false,
				default: '',
				description: `A list of fields to return for the issue. This parameter accepts a comma-separated list.
				Use it to retrieve a subset of fields. Allowed values:
				*all Returns all fields.
				*navigable Returns navigable fields.
				Any issue field, prefixed with a minus to exclude.`
			},
			{
				displayName: 'Fields By Key',
				name: 'fieldsByKey',
				type: 'boolean',
				required: false,
				default: false,
				description: `Indicates whether fields in fields are referenced by keys rather than IDs.
				This parameter is useful where fields have been added by a connect app and a field's key
				may differ from its ID.`,
			},
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				required: false,
				default: '',
				description: `Use expand to include additional information about the issues in the response.
				This parameter accepts a comma-separated list. Expand options include:
				renderedFields Returns field values rendered in HTML format.
				names Returns the display name of each field.
				schema Returns the schema describing a field type.
				transitions Returns all possible transitions for the issue.
				editmeta Returns information about how each field can be edited.
				changelog Returns a list of recent updates to an issue, sorted by date, starting from the most recent.
				versionedRepresentations Returns a JSON array for each version of a field's value, with the highest number representing the most recent version. Note: When included in the request, the fields parameter is ignored.`
			},
			{
				displayName: 'Properties',
				name: 'properties',
				type: 'string',
				required: false,
				default: '',
				description: `A list of issue properties to return for the issue.
				This parameter accepts a comma-separated list. Allowed values:
				*all Returns all issue properties.
				Any issue property key, prefixed with a minus to exclude.
				Examples:
				*all Returns all properties.
				*all,-prop1 Returns all properties except prop1.
				prop1,prop2 Returns prop1 and prop2 properties.
				This parameter may be specified multiple times. For example, properties=prop1,prop2& properties=prop3.`
			},
			{
				displayName: 'Update History',
				name: 'updateHistory',
				type: 'boolean',
				required: false,
				default: false,
				description: `Whether the project in which the issue is created is added to the user's
				Recently viewed project list, as shown under Projects in Jira. This also populates the
				JQL issues search lastViewed field.`,
			},
		]
	},

/* -------------------------------------------------------------------------- */
/*                               issue:changelog                              */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Issue Key',
		name: 'issueKey',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'issue',
				],
				operation: [
					'changelog',
				],
			},
		},
		default: '',
		description: 'Issue Key',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [
					'issue',
				],
				operation: [
					'changelog',
				],
			},
		},
		default: false,
		description: 'If all results should be returned or only up to a given limit.',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'issue',
				],
				operation: [
					'changelog',
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
		default: 50,
		description: 'How many results to return.',
	},
/* -------------------------------------------------------------------------- */
/*                                issue:notify                                */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Issue Key',
		name: 'issueKey',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'issue',
				],
				operation: [
					'notify',
				],
			},
		},
		default: '',
		description: 'Issue Key',
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
					'issue',
				],
				operation: [
					'notify',
				],
			},
		},
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
					'issue',
				],
				operation: [
					'notify',
				],
			},
		},
		options: [
			{
				displayName: 'Subject',
				name: 'subject',
				type: 'string',
				required: false,
				default: '',
				description: `The subject of the email notification for the issue. If this is not specified,
				then the subject is set to the issue key and summary.`
			},
			{
				displayName: 'Text Body',
				name: 'textBody',
				type: 'string',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
				required: false,
				default: '',
				description: `The subject of the email notification for the issue.
				If this is not specified, then the subject is set to the issue key and summary.`
			},
			{
				displayName: 'HTML Body',
				name: 'htmlBody',
				type: 'string',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
				required: false,
				default: '',
				description: 'The HTML body of the email notification for the issue.',
			},
		],
	},
	{
		displayName: 'Notification Recipients',
		name: 'notificationRecipientsUi',
		type: 'fixedCollection',
		placeholder: 'Add Recipients',
		typeOptions: {
			multipleValues: false,
		},
		description: 'The recipients of the email notification for the issue.',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'issue',
				],
				operation: [
					'notify',
				],
				jsonParameters: [
					false,
				],
			},
		},
		options: [
			{
				name: 'notificationRecipientsValues',
				displayName: 'Recipients',
				values: [
					{
						displayName: 'Reporter',
						name: 'reporter',
						type: 'boolean',
						description: `Indicates whether the notification should be sent to the issue's reporter.`,
						default: false,
					},
					{
						displayName: 'Assignee',
						name: 'assignee',
						type: 'boolean',
						default: false,
						description: `Indicates whether the notification should be sent to the issue's assignees.`,
					},
					{
						displayName: 'Watchers',
						name: 'watchers',
						type: 'boolean',
						default: false,
						description: `Indicates whether the notification should be sent to the issue's assignees.`,
					},
					{
						displayName: 'Voters',
						name: 'voters',
						type: 'boolean',
						default: false,
						description: `Indicates whether the notification should be sent to the issue's voters.`,
					},
					{
						displayName: 'Users',
						name: 'users',
						type: 'multiOptions',
						typeOptions: {
							loadOptionsMethod: 'getUsers',
						},
						default: [],
						description: `List of users to receive the notification.`,
					},
					{
						displayName: 'Groups',
						name: 'groups',
						type: 'multiOptions',
						typeOptions: {
							loadOptionsMethod: 'getGroups',
						},
						default: [],
						description: `List of groups to receive the notification.`,
					},
				]

			}
		]
	},
	{
		displayName: 'Notification Recipients',
		name: 'notificationRecipientsJson',
		type: 'json',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		required: false,
		displayOptions: {
			show: {
				resource: [
					'issue',
				],
				operation: [
					'notify',
				],
				jsonParameters: [
					true,
				]
			},
		},
		default: '',
		description: 'The recipients of the email notification for the issue.',
	},
	{
		displayName: 'Notification Recipients Restrictions',
		name: 'notificationRecipientsRestrictionsUi',
		type: 'fixedCollection',
		placeholder: 'Add Recipients Restriction',
		typeOptions: {
			multipleValues: false,
		},
		description: 'Restricts the notifications to users with the specified permissions.',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'issue',
				],
				operation: [
					'notify',
				],
				jsonParameters: [
					false,
				],
			},
		},
		options: [
			{
				name: 'notificationRecipientsRestrictionsValues',
				displayName: 'Recipients Restrictions',
				values: [
					{
						displayName: 'Users',
						name: 'users',
						type: 'multiOptions',
						typeOptions: {
							loadOptionsMethod: 'getUsers',
						},
						default: [],
						description: `List of users to receive the notification.`,
					},
					{
						displayName: 'Groups',
						name: 'groups',
						type: 'multiOptions',
						typeOptions: {
							loadOptionsMethod: 'getGroups',
						},
						default: [],
						description: `List of groups to receive the notification.`,
					},
				]

			}
		]
	},
	{
		displayName: 'Notification Recipients Restrictions',
		name: 'notificationRecipientsRestrictionsJson',
		type: 'json',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		required: false,
		displayOptions: {
			show: {
				resource: [
					'issue',
				],
				operation: [
					'notify',
				],
				jsonParameters: [
					true,
				]
			},
		},
		default: '',
		description: 'Restricts the notifications to users with the specified permissions.',
	},

/* -------------------------------------------------------------------------- */
/*                              issue:transitions                             */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Issue Key',
		name: 'issueKey',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'issue',
				],
				operation: [
					'transitions',
				],
			},
		},
		default: '',
		description: 'Issue Key',
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
					'issue',
				],
				operation: [
					'transitions',
				],
			},
		},
		options: [
			{
				displayName: 'Expand',
				name: 'expand',
				type: 'string',
				required: false,
				default: '',
				description: `Use expand to include additional information about transitions in the response.
				 This parameter accepts transitions.fields, which returns information about the fields in the
				 transition screen for each transition. Fields hidden from the screen are not returned. Use this
				 information to populate the fields and update fields in Transition issue.`
			},
			{
				displayName: 'Transition ID',
				name: 'transitionId',
				type: 'string',
				required: false,
				default: '',
				description: 'The ID of the transition.',
			},
			{
				displayName: 'Skip Remote Only Condition',
				name: 'skipRemoteOnlyCondition',
				type: 'boolean',
				required: false,
				default: false,
				description: 'Indicates whether transitions with the condition Hide From User Condition are included in the response.',
			},
		],
	},
] as INodeProperties[];
