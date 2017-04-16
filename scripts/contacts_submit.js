

(function () {

    var contact_onload = function () {


        var el_form = document.getElementById("mf-ct-form-button-submit");

        // if the el_form element has not been found, return.
        if (!el_form) {
            return;
        }


        // Create the XHR object.
        function createCORSRequest(method, url) {
            var xhr = new XMLHttpRequest();
            if ("withCredentials" in xhr) {
                // XHR for Chrome/Firefox/Opera/Safari.
                xhr.open(method, url, true);
            } else if (typeof XDomainRequest != "undefined") {
                // XDomainRequest for IE.
                xhr = new XDomainRequest();
                xhr.open(method, url);
            } else {
                // CORS not supported.
                xhr = null;
            }
            return xhr;
        }

        // Make the actual CORS request.
        function makeCorsRequest(jsonObject) {
            // This is a sample server that supports CORS.
            var url = 'http://milllymailer.azurewebsites.net/api/Submit/2';

            var xhr = createCORSRequest('POST', url);
            if (!xhr) {
                alert('CORS not supported');
                return;
            }

            xhr.onerror = function (e) {
                console.dir(e);
                alert('Woops, there was an error making the request.');
            };

            // JSON message goes here
            // var requestBody = {"firstName":"firas","surname":"sfaxi","email":"f.sfaxi@almutmaina.com","tel":"+218944013886"};
            var bodyJSON = JSON.stringify(jsonObject);
            xhr.setRequestHeader(
                'Content-Type', 'application/json');
            xhr.send(bodyJSON);
        }

        function printFormData(jsonData) {

            for (var pair of jsonData.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
            }

        }

        function formDataToJSON(formData) {

            var jsonData = {};

            for (var value of formData.entries()) {

                jsonData[value[0]] = value[1];

            }

            console.log(jsonData);
            return jsonData;

        }

        var form = document.getElementById("mfz-ct-form-container");

        form.addEventListener('submit', function (event) {

            event.preventDefault();
            var formData = new FormData(form);

            var jsonData = formDataToJSON(formData);
            // makeCorsRequest(jsonData);
            document.getElementById("mfz-ct-form-container").style.visibility = "hidden";
            document.getElementById("mfz-ct-title").innerHTML = "We received your email. Thank you";

        });
    }

    window.addEventListener("load", contact_onload);
})();