/*
 * Venus
 * Copyright 2013 LinkedIn
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *     Unless required by applicable law or agreed to in writing,
 *     software distributed under the License is distributed on an "AS
 *     IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *     express or implied.   See the License for the specific language
 *     governing permissions and limitations under the License.
 **/

/**
 * Create the Venus JavaScript object. This object will be accessible to all adaptors via window.venus
 *
 * The `host` and `port` options are used to create the socket.io connection with the Venus server
 */
(function (window) {
  // instantiate the Venus Client with a specific host and port
  window.venus = new VenusClientLibrary({
    host: 'http://' + window.location.hostname,
    port: window.location.port
  });

  // connect to the Venus server
  window.venus.connect();

  // on page ready, instantiate the UI Helper
  $(function () {
    window.venusui = new VenusUi({
      nav: $('nav')
    });
  });
}(window));
