/*
 * Copyright 2011 Google Inc. All Rights Reserved.

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var google = new OAuth2('google', {
  client_id: '477192000959.apps.googleusercontent.com',
  client_secret: 'mPWOSgomA1Y6cfuJ-bufRQSD',
  api_scope: 'https://www.googleapis.com/auth/drive'
});

var auth_obj = {
  client_id: '477192000959.apps.googleusercontent.com',
  immediate: 'false',
  response_type: 'token',
  scope: 'https://www.googleapis.com/auth/drive'
};

callback = function(f) {
    console.log(f.user.displayName);
}

var handleClientLoad = function() {
    google.authorize(function() {
        console.log(google.getAccessToken());
        gapi.auth.setToken({
            access_token: google.getAccessToken()
        });

        params = {
          path: "/drive/v2/about",
          method: "GET",
          callback: callback
        }
        gapi.client.request(params)
    
    });
}
