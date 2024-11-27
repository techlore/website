const linkIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="icon"><path fill="currentColor" d="M5.553 6.37c-.134.161-.262.322-.385.493 1.725 1.945 4.076 4.099 6.653 6.091 2.025 1.565 4.088 2.958 5.968 4.024.316.176.627.348.927.503.134-.16.262-.321.385-.493.627-.862.97-1.778 1.249-2.871.042-.171.08-.343.112-.509.847-4.446-1.907-8.834-6.348-9.959a8.536 8.536 0 0 0-5.695.52A7.996 7.996 0 0 0 5.553 6.37Z"/><path fill="currentColor" d="M20.687 15.788c-.22.59-.396.938-.396.938.975 1.13 1.318 1.816 1.709 2.486.128.22.396.701.048.664a2.55 2.55 0 0 1-.295-.07c-1.14-.29-2.743-1.002-4.516-2.003-1.918-1.088-4.012-2.502-6.07-4.088C8.43 11.6 5.945 9.306 4.172 7.26c-.82-.943-1.478-1.832-1.912-2.566-.129-.22-.21-.338-.3-.557-.134-.332.268-.274.375-.247.798.204 1.875.53 3.118 1.275 0 0 .23-.257.744-.61-1.221-.825-2.39-1.484-3.493-1.902C1.466 2.18.502 2.288.16 2.85c-.654 1.066.75 3.873 3.498 7.071-1.152 4.607 1.64 9.284 6.24 10.447a8.576 8.576 0 0 0 6.258-.804 30.54 30.54 0 0 0 5.191 1.87c1.28.327 2.164.294 2.507-.263.595-.975-.648-2.775-3.166-5.384Z"/></svg>';
const linkIconAf = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke-width="1.5" color="currentColor" viewBox="0 0 24 24" class="icon"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14 12c0-2.5-2.32-5-5.14-5H7.14A5.07 5.07 0 0 0 2 12a5.03 5.03 0 0 0 5.14 5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10 12c0 2.49 2.32 5 5.14 5h1.72A5.07 5.07 0 0 0 22 12a5.03 5.03 0 0 0-5.14-5"/></svg>';


function getCheckValue(cellValue) {
	if (cellValue === "No")
		return '<svg class="has-text-danger" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke-width="1" color="currentColor"><path fill="currentColor" fill-rule="evenodd" d="M12 1.25a10.75 10.75 0 1 0 0 21.5 10.75 10.75 0 0 0 0-21.5Zm-2.3 7.4A.75.75 0 0 0 8.64 9.7l2.3 2.3-2.3 2.3a.75.75 0 0 0 1.06 1.06l2.3-2.3 2.3 2.3a.75.75 0 0 0 1.06-1.06l-2.3-2.3 2.3-2.3a.75.75 0 1 0-1.06-1.06l-2.3 2.3-2.3-2.3Z" clip-rule="evenodd"/></svg>';
	else if (cellValue === "Yes")
		return '<svg class="has-text-success-45" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke-width="1" color="currentColor"><path fill="currentColor" fill-rule="evenodd" d="M12 1.25a10.75 10.75 0 1 0 0 21.5 10.75 10.75 0 0 0 0-21.5ZM7.53 11.97a.75.75 0 0 0-1.06 1.06l3 3c.3.3.77.3 1.06 0l7-7a.75.75 0 0 0-1.06-1.06L10 14.44l-2.47-2.47Z" clip-rule="evenodd"/></svg>';
	else if (cellValue === "??")
		return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke-width="1.5" color="currentColor"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.9 8.08c0-4.77 7.5-4.77 7.5 0 0 3.4-3.4 2.73-3.4 6.82m0 4.11.01-.01"/></svg>';
	else
		return cellValue;
}


Tabulator.extendModule("format", "formatters", {
	name: function (cell, formatterParams) {
		if (cell.getValue() == "None")
			return "None";
		var r = cell.getRow().getData();
		var s = "";
		if (r["VPN Affiliate Link"] != "None") s = "  <a href='" + r["VPN Affiliate Link"] + "' target='_blank' class='button is-small is-warning is-outlined' title='Affiliate Link'>" + linkIconAf + "</a>";
		return "<span>" + cell.getValue() + "</span>" + "  <a href='" + r["VPN Standard Link"] + "' target='_blank' class='button is-small is-primary is-outlined'>" + linkIcon + "</a>" + s;
	},
	link2: function (cell, formatterParams) {
		if (cell.getValue() == "None")
			return "None";
		return "<a href='" + cell.getValue() + "' target='_blank'>" + cell.getValue() + "</a>";
	},
	check: function (cell, formatterParams) {
		return getCheckValue(cell.getValue())
	},
	history: function (cell, formatterParams) {
		if (cell.getValue() == "None")
			return "None";
		var h = cell.getRow().getData();
		var i = "";
		return "  <a href='" + h["History"] + "' target='_blank' class='button is-small is-primary is-outlined'>" + linkIcon + "</a>" + i;
	}
});
$("#info-afl").html(linkIconAf);
$("#info-nafl").html(linkIcon);

function CSVToJSON(csvData) {
	var data = CSVToArray(csvData);
	var objData = [];
	for (var i = 1; i < data.length; i++) { // empty line appeard
		objData[i - 1] = {};
		for (var k = 0; k < data[0].length && k < data[i].length; k++) {
			var key = data[0][k];
			objData[i - 1][key] = data[i][k]
		}
	}
	var jsonData = JSON.stringify(objData);
	jsonData = jsonData.replace(/},/g, "},\r\n");
	return jsonData;
}

function CSVToArray(csvData, delimiter) {
	delimiter = (delimiter || ",");
	var pattern = new RegExp((
		"(\\" + delimiter + "|\\r?\\n|\\r|^)" +
		"(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
		"([^\"\\" + delimiter + "\\r\\n]*))"), "gi");
	var data = [
		[]
	];
	var matches = null;
	while (matches = pattern.exec(csvData)) {
		var matchedDelimiter = matches[1];
		if (matchedDelimiter.length && (matchedDelimiter != delimiter)) {
			data.push([]);
		}
		if (matches[2]) {
			var matchedDelimiter = matches[2].replace(
				new RegExp("\"\"", "g"), "\"");
		} else {
			var matchedDelimiter = matches[3];
		}
		data[data.length - 1].push(matchedDelimiter);
	}
	return (data);
}

document.addEventListener("DOMContentLoaded", () => {
	var opened = false;
	$('.cmp-btn').on("click", () => {
		opened = !opened;
		if (opened) $(".cmp-btn").html("Close comparison");
		else $(".cmp-btn").html("Compare selected");
		$('.cmp-btn').parent().toggleClass('expand');
		$('body').toggleClass("noscroll");
		// gt_btn.className = "gt-link hide";
	});
	var table;
	var fieldEl = document.getElementById("flt-field");
	var valueEl = document.getElementById("flt-value");

	function customFilter(data) {
		return data.car && data.rating < 3;
	}

	//Trigger setFilter function with correct parameters
	function updateFilter() {
		var filterVal = fieldEl.options[fieldEl.selectedIndex].value;
		var filter = filterVal == "function" ? customFilter : filterVal;

		if (filterVal == "function")
			valueEl.disabled = true;
		else
			valueEl.disabled = false;

		if (filterVal) {
			var filterType = "like";

			table.setFilter(filter, filterType, valueEl.value);
		}
	}

	//Update filters on value change
	document.getElementById("flt-field").addEventListener("change", updateFilter);
	document.getElementById("flt-value").addEventListener("keyup", updateFilter);

	//Clear filters on "Clear Filters" button click
	document.getElementById("flt-clear").addEventListener("click", function () {
		fieldEl.value = "";
		valueEl.value = "";
		table.clearFilter();
	});
	//Get CSV data
	var jsonData;
	let source = document.querySelector('#vpn-table').dataset.source

	fetch(source)
	.then(response => response.text())
	.then(text => {
		//Use CSV text and convert to json
		jsonData = JSON.parse(CSVToJSON(text));
		var f = jsonData.length - 1;

		table = new Tabulator("#vpn-table", {
			data: jsonData, //load row data from array
			autoResize: false,

			placeholder: "No Data Available", //display message to user on empty table
			layout: "fitData",
			selectable: 3, //make rows selectable
			selectableRollingSelection: false,
			autoColumns: true,
			autoColumnsDefinitions: [{
				field: "VPN",
				hozAlign: "left",
				formatter: "name",
				resizable: false,
				frozen: true
			},
				{
					field: "VPN Affiliate Link",
					visible: false,
					resizable: false
				},
				{
					field: "VPN Standard Link",
					visible: false,
					resizable: false
				},
				{
					field: "History",
					formatter: "history",
					resizable: false
				},
				{
					field: "OpenVPN",
					formatter: "check",
					resizable: false
				},
				{
					field: "Wireguard",
					formatter: "check",
					resizable: false
				},
				{
					field: "Killswitch",
					formatter: "check",
					resizable: false
				},
				{
					field: "Diskless",
					formatter: "check",
					resizable: false
				},
				{
					field: "Max Data Encryption",
					formatter: "check",
					resizable: false
				},
				{
					field: "Max Handshake Encryption",
					formatter: "check",
					resizable: false
				},
				{
					field: "IPV6 Protection",
					formatter: "check",
					resizable: false
				},
				{
					field: "1st-Party DNS",
					formatter: "check",
					resizable: false
				},
				{
					field: "1st-Party Servers",
					formatter: "check",
					resizable: false
				},
				{
					field: "Custom DNS",
					formatter: "check",
					resizable: false
				},
				{
					field: "2FA",
					formatter: "check",
					resizable: false
				},
				{
					field: "Honest Marketing",
					formatter: "check",
					resizable: false
				},
				{
					field: "Outside 14 Eyes",
					formatter: "check",
					resizable: false
				},
				{
					field: "Transparency Report",
					formatter: "check",
					resizable: false
				},
				{
					field: "Warrant Canary",
					formatter: "check",
					resizable: false
				},
				{
					field: "No Analytics",
					formatter: "check",
					resizable: false
				},
				{
					field: "Anon Payment",
					formatter: "check",
					resizable: false
				},

				{
					field: "Anon Registration",
					formatter: "check",
					resizable: false
				},
				{
					field: "Misleading Marketing",
					formatter: "check",
					resizable: false
				},
				{
					field: "Total Servers",
					formatter: "check",
					resizable: false
				},
				{
					field: "Windows Client",
					formatter: "check",
					resizable: false
				},
				{
					field: "MacOS Client",
					formatter: "check",
					resizable: false
				},
				{
					field: "Android Client",
					formatter: "check",
					resizable: false
				},
				{
					field: "iOS Client",
					formatter: "check",
					resizable: false
				},
				{
					field: "Linux Client",
					formatter: "check",
					resizable: false
				},
				{
					field: "Connect on Boot",
					formatter: "check",
					resizable: false
				},
				{
					field: "P2P Friendly",
					formatter: "check",
					resizable: false
				},
				{
					field: "Open Source Clients",
					formatter: "check",
					resizable: false
				},
				{
					field: "Multihop",
					formatter: "check",
					resizable: false
				},
				{
					field: "Audits",
					formatter: "check",
					resizable: false
				},
				{
					field: "Port Forwarding",
					formatter: "check",
					resizable: false
				},
				{
					field: "Affiliate Program",
					formatter: "check",
					resizable: false
				},
				{
					field: "Helps Privacy Causes",
					formatter: "check",
					resizable: false
				},
				{
					field: "Native F-Droid Client",
					formatter: "check",
					resizable: false
				},
			],
		});
		table.on("rowSelectionChanged", function (data, rows, selected, deselected) {
			if (data.length > 1) {
				$('.vpn-modal').show();
				var tb = "<table class='rt" + data.length + "'>";
				var strh = "<div class='is-flex keep-width has-text-centered'>";
				for (var j = 0; j < data.length; j++) {
					strh += "<div class='title my-4' data-divider='" + data.length + "'>" + data[j]["VPN"] + " </div>";
				}
				$(".head").html(strh + "</div>");
				var keys = Object.keys(data[0]);
				keys.splice(0, 4);
				for (const key in keys) {
					tb += "<tr><td colspan='" + data.length + "' class='tb-b'><h5>" + keys[key] +
						"</h5></td></tr><tr>";
					for (var i = 0; i < data.length; i++) {
						var v = data[i];
						v = v[keys[key]];
						tb += "<td>" + getCheckValue(v) + "</td>";
					}
					tb += "</tr>";
				}
				tb += "</table>";
				$("#tb").html(tb);
			} else {
				$('.vpn-modal').hide();
			}
		});
		table.on("tableBuilt", function () {
			const tbl = document.getElementById('vpn-table');

			tbl.classList.add("resizerT");
			var resizer = document.createElement('div');
			resizer.className = 'resizer-h';
			tbl.appendChild(resizer);
			resizer.addEventListener('mousedown', initDrag, false);

			var startX, startY, startWidth, startHeight;

			function initDrag(e) {
				tbl.style.userSelect = "none";
				startX = e.clientX;
				console.log("startx--> " + startX);
				startWidth = parseInt(document.defaultView.getComputedStyle(tbl).width, 10);
				console.log("startw--> " + startWidth);
				document.documentElement.addEventListener('mousemove', doDrag, false);
				document.documentElement.addEventListener('mouseup', stopDrag, false);
			}

			function doDrag(e) {
				tbl.style.width = (startWidth + 2 * (e.clientX - startX)) + 'px';
			}

			function stopDrag(e) {
				tbl.style.userSelect = "auto";
				document.documentElement.removeEventListener('mousemove', doDrag, false);
				document.documentElement.removeEventListener('mouseup', stopDrag, false);
			}
		});
	});
});
