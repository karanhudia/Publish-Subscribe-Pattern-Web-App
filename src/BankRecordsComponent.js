var BankRecordsComponent = (function(){
	var $holderName = $('#holder-name');
	var $holderBalance = $('#holder-balance');
	var $addRecord = $('#add-record');
	var $records = $('#records');
	var recordsTemplate = $('#records-template').html();
	var $deleteRecord = $('.delete-button');
	
	$addRecord.on('click', addRecord);
	$records.delegate('.delete-button','click', deleteRecord);
	
	var recordsView = {
		"header": ["Name", "Balance", ""],
		"records": [
			
		]
	};
  
	_render();

	function _render() {
		var output = Mustache.to_html(recordsTemplate, recordsView);
		$records.html(output);
		pub_sub.fire("recordsUpdated", recordsView.records);
		console.log("Bank Records Render.");
	}

	function addRecord() {
		if($holderName.val()&&$holderBalance.val()) {
			var newRecord = {
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
		var deleteNode = $(event.target).closest('tr');
		recordsView.records.splice($records.index(deleteNode), 1);
		console.log("Record Deleted.");
		_render();
	}
})();
