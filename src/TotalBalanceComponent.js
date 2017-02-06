var TotalBalanceComponent = (function() {
  var totalBalance = 0;
  var $balanceTemplate = $('#sub-header');

  pub_sub.subscribe('recordsUpdated', updateBalance);

  function _render() {
    var output = Mustache.to_html("<h2>Total Money in the bank is: <span id='bank-money'>{{totalBalance}}</span></h2>", { totalBalance });
    $balanceTemplate.html(output);
	console.log("Balance Component Rendered.");
  }

  function updateBalance(newRecords) {
	  totalBalance = 0;
	  for(var i=0; i<newRecords.length; i++) {
		  totalBalance += newRecords[i].balance;
	  }
	  console.log("Balance Updated.");
    _render();
  }
})();
