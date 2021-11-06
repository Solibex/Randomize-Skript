let retrymax = 3
function retry(data) {
	while (retrytimes != 5) {
		retrytimes += 1
		console.log(retrytimes)
	}
	console.log("Retry",data)
}
retry("air")