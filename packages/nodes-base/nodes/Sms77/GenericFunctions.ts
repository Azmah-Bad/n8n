import {IExecuteFunctions, IHookFunctions,} from 'n8n-core';
import {IDataObject,} from 'n8n-workflow';

/**
 * Make an API request to MSG91
 *
 * @param {IHookFunctions | IExecuteFunctions} this
 * @param {string} method
 * @param {string} endpoint
 * @param {object} form
 * @param {object | undefined} qs
 * @returns {Promise<any>}
 */
export async function sms77ApiRequest(this: IHookFunctions | IExecuteFunctions, method: string, endpoint: string, form: IDataObject, qs?: IDataObject): Promise<any> { // tslint:disable-line:no-any
	const setPayload = (o?: IDataObject) => {
		if (!o) {
			o = {};
		}

		o.p = credentials!.apiKey as string;
		o.json = 1;
		o.sendwith = 'n8n';

		return o;
	};

	const credentials = this.getCredentials('Sms77');
	if (credentials === undefined) {
		throw new Error('No credentials got returned!');
	}

	'GET' === method ? qs = setPayload(qs) : form = setPayload(form);

	const res = await this.helpers.request({
		form,
		json: true,
		method,
		qs,
		uri: `https://gateway.sms77.io/api/${endpoint}`,
	});

	if ('100' !== res.success) {
		throw new Error('Invalid sms77 credentials or API error!');
	}

	return res;
}
