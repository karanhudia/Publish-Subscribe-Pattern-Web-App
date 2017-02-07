import pub_sub from './pub_sub_minireact';

(() => {
	const $holderName = $('#holder-name');
	const $holderBalance = $('#holder-balance');
	const $addRecord = $('#add-record');
	const $records = $('#records');
	const recordsTemplate = $('#records-template').html();
	const $deleteRecord = $('.delete-button');
	
	$addRecord.on('click', addRecord);
	$records.delegate('.delete-button','click', deleteRecord);
	
	const recordsView = {
		"header": ["Name", "Balance", ""],
		"records": [
			
		]
	};
  
	_render();

	function _render() {
		let output = Mustache.to_html(recordsTemplate, recordsView);
		$records.html(output);
		pub_sub.fire("recordsUpdated", recordsView.records);
		console.log("Bank Records Render.");
	}

	function addRecord() {
		if($holderName.val() && $holderBalance.val()) {
			let newRecord = {
				"name": $holderName.val(),
				"balance": parseInt($holderBalance.val())
			}
			recordsView.records.push(newRecord);
			$holderName.val('');
			$holderBalance.val('');
			console.log("Record Added.");
			_render();
		}
	}
  
	function deleteRecord(event) {
		let deleteNode = $(event.target).closest('tr');
		recordsView.records.splice($records.index(deleteNode), 1);
		console.log("Record Deleted.");
		_render();
	}
})();
