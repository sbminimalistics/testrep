var Debugger = (function() {
    function Debugger(id) {
        console.log(`•>Debugger constructor`);

        let div;
        let divId = id != null ? id : "debug";
        let logs = [];

        this.createDiv = function() {
            div = document.createElement("div");
            div.id = divId;
            document.body.appendChild(div);
            this.log("init OK!");
        }

        this.log = function(message) {
            logs.push(message);
            this.renderOutput();
        }

        this.renderOutput = function() {
            if (div != null) {
                div.innerHTML = logs.join("<br>");
                div.scrollTo(0, div.scrollHeight - div.offsetHeight);
            }
        }

        if (document.body != null) {
            this.createDiv();
        } else {
            document.addEventListener("DOMContentLoaded", this.createDiv.bind(this));
        }
    }

    return Debugger;
})();

window.debugger = new Debugger();