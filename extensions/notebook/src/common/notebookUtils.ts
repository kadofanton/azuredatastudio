/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as crypto from 'crypto';

/**
 * Creates a random token per https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback.
 * Defaults to 24 bytes, which creates a 48-char hex string
 */
export function getRandomToken(size: number = 24): Promise<string> {
	return new Promise((resolve, reject) => {
		crypto.randomBytes(size, (err, buffer) => {
			if (err) {
				reject(err);
			}
			let token = buffer.toString('hex');
			resolve(token);
		});
	});
}

/**
 * Determines if the specified string content is a notebook.
 * @param documentContent String content of a document to determine if it is a notebook.
 * @returns True if the content provided is a notebook, false otherwise.
 */
export function isNotebookContent(documentContent: string): boolean {
	let doc: any;

	try {
		doc = JSON.parse(documentContent);
		// preliminary schema validation for notebook format
		if (typeof (doc.metadata) === 'object'
			&& typeof (doc.nbformat) === 'number'
			&& typeof (doc.nbformat_minor) === 'number'
			&& typeof (doc.cells) === 'object') {
			return true;
		}
	}
	catch { }

	return false;
}
