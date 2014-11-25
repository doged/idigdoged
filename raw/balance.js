var balanceBlock = document.getElementById('balance-block');

function updateBalance() {
	ajax({
		url: '/api/balance'
		, success: function(amount) {
			balanceBlock.innerHTML = '<strong>' + significant4(amount, true) + '</strong>DogecoinDarks';
		}
	});
};

updateBalance(); setInterval(updateBalance, 60000);
