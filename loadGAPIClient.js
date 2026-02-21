import cred from './credentials.js';

const SCOPE = ['https://www.googleapis.com/auth/calendar'];
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';

function start() {
    gapi.client.init({
        'apiKey': cred.apiKey,
        'discoveryDocs': DISCOVERY_DOC,
        'clientId': cred.clientId,
        'scope': SCOPE
    }).then(authenticate())
}

function authenticate() {
    gapi.auth.authorize({client_id: cred.clientId, scope: SCOPE, immediate: true}, handleAuthResult);
}

gapi.load('client', start);